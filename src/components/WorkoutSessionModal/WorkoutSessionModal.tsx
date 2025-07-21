import { useState, useEffect } from 'react';
import { Modal, Stack, Group, Text, Button, ActionIcon, Checkbox, Progress, Badge } from '@mantine/core';
import { Play, Pause, Square, SkipForward, SkipBack } from 'lucide-react';
import { Workout, WorkoutSession } from '../../types';
import { formatTimer } from '../../stringFormatters';
import classes from './WorkoutSessionModal.module.css';

interface WorkoutSessionModalProps {
  session: WorkoutSession;
  workout: Workout;
  onClose: () => void;
  onCompleteExercise: (exerciseIndex: number) => void;
}

const WorkoutSessionModal = ({ session, workout, onClose, onCompleteExercise }: WorkoutSessionModalProps) => {
  const [timeRemaining, setTimeRemaining] = useState(session.timeRemaining);
  const [isRunning, setIsRunning] = useState(session.isActive);
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(session.currentExerciseIndex);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isRunning && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining(prev => {
          if (prev <= 1) {
            setIsRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, timeRemaining]);

  const currentExercise = workout.exercises[currentExerciseIndex];
  const totalExercises = workout.exercises.length;
  const completedCount = session.completedExercises.filter(Boolean).length;
  const progressPercentage = (completedCount / totalExercises) * 100;

  const handlePlayPause = () => {
    setIsRunning(!isRunning);
  };

  const handleStop = () => {
    setIsRunning(false);
    onClose();
  };

  const handleNextExercise = () => {
    if (currentExerciseIndex < totalExercises - 1) {
      const nextIndex = currentExerciseIndex + 1;
      setCurrentExerciseIndex(nextIndex);
      setTimeRemaining(workout.exercises[nextIndex].restTime);
      setIsRunning(false);
    }
  };

  const handlePreviousExercise = () => {
    if (currentExerciseIndex > 0) {
      const prevIndex = currentExerciseIndex - 1;
      setCurrentExerciseIndex(prevIndex);
      setTimeRemaining(workout.exercises[prevIndex].restTime);
      setIsRunning(false);
    }
  };

  const handleCompleteExercise = (index: number) => {
    onCompleteExercise(index);
  };

  return (
    <Modal
      opened={true}
      onClose={onClose}
      title="Workout Session"
      size="lg"
      centered
      className={classes.modal}
    >
      <Stack gap={24}>
        <div className={classes.header}>
          <Text fz={20} fw={600} c="#1e293b">
            {workout.name}
          </Text>
          <Badge variant="light" color="orange" size="lg">
            {completedCount} / {totalExercises} Exercises
          </Badge>
        </div>

        <Progress value={progressPercentage} color="orange" size="lg" radius="md" />

        <div className={classes.timerSection}>
          <Text fz={14} fw={500} c="#64748b" ta="center">
            Current Exercise
          </Text>
          <Text fz={24} fw={700} c="#1e293b" ta="center">
            {currentExercise?.name || 'No Exercise'}
          </Text>
          
          <div className={classes.timer}>
            <Text fz={48} fw={700} c="#f97316" ta="center">
              {formatTimer(timeRemaining)}
            </Text>
          </div>

          <Group justify="center" gap={16}>
            <ActionIcon
              variant="filled"
              color="orange"
              size="xl"
              onClick={handlePreviousExercise}
              disabled={currentExerciseIndex === 0}
            >
              <SkipBack size={20} />
            </ActionIcon>

            <ActionIcon
              variant="filled"
              color="orange"
              size="xl"
              onClick={handlePlayPause}
            >
              {isRunning ? <Pause size={20} /> : <Play size={20} />}
            </ActionIcon>

            <ActionIcon
              variant="filled"
              color="red"
              size="xl"
              onClick={handleStop}
            >
              <Square size={20} />
            </ActionIcon>

            <ActionIcon
              variant="filled"
              color="orange"
              size="xl"
              onClick={handleNextExercise}
              disabled={currentExerciseIndex === totalExercises - 1}
            >
              <SkipForward size={20} />
            </ActionIcon>
          </Group>
        </div>

        <div className={classes.exerciseList}>
          <Text fz={16} fw={600} c="#1e293b" mb={12}>
            Exercise Checklist
          </Text>
          
          <Stack gap={8}>
            {workout.exercises.map((exercise, index) => (
              <Group key={index} justify="space-between" className={classes.exerciseItem}>
                <Checkbox
                  checked={session.completedExercises[index]}
                  onChange={() => handleCompleteExercise(index)}
                  label={
                    <div>
                      <Text fz={14} fw={500}>
                        {exercise.name}
                      </Text>
                      <Text fz={12} c="#64748b">
                        {exercise.sets} sets × {exercise.reps} reps
                      </Text>
                    </div>
                  }
                />
                
                {index === currentExerciseIndex && (
                  <Badge variant="filled" color="orange" size="sm">
                    Current
                  </Badge>
                )}
              </Group>
            ))}
          </Stack>
        </div>

        <Group justify="space-between">
          <Button variant="outline" color="gray" onClick={onClose}>
            Close
          </Button>
          
          {completedCount === totalExercises && (
            <Button variant="filled" color="green" onClick={onClose}>
              Complete Workout
            </Button>
          )}
        </Group>
      </Stack>
    </Modal>
  );
};

export default WorkoutSessionModal;