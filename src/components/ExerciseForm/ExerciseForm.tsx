import { useState } from 'react';
import { Stack, Group, Button, TextInput, NumberInput, Text, ActionIcon, Paper } from '@mantine/core';
import { Plus, Trash2 } from 'lucide-react';
import { Exercise } from '../../types';

interface ExerciseFormProps {
  exercises: Exercise[];
  onAddExercise: (exercise: Exercise) => void;
  onRemoveExercise: (index: number) => void;
}

const ExerciseForm = ({ exercises, onAddExercise, onRemoveExercise }: ExerciseFormProps) => {
  const [exerciseForm, setExerciseForm] = useState<Exercise>({
    name: '',
    sets: 1,
    reps: 1,
    restTime: 60
  });

  const handleInputChange = (field: keyof Exercise, value: any) => {
    setExerciseForm(prev => ({ ...prev, [field]: value }));
  };

  const handleAddExercise = () => {
    if (exerciseForm.name.trim() !== '') {
      onAddExercise(exerciseForm);
      setExerciseForm({
        name: '',
        sets: 1,
        reps: 1,
        restTime: 60
      });
    }
  };

  const isExerciseValid = () => {
    return exerciseForm.name.trim() !== '' &&
           exerciseForm.sets > 0 &&
           exerciseForm.reps > 0 &&
           exerciseForm.restTime >= 0;
  };

  return (
    <Stack gap={16}>
      <Text fw={500} fz="sm">Exercises</Text>
      
      {exercises.length > 0 && (
        <Stack gap={8}>
          {exercises.map((exercise, index) => (
            <Paper key={index} p="sm" withBorder>
              <Group justify="space-between" align="center">
                <div>
                  <Text fw={500} fz="sm">{exercise.name}</Text>
                  <Text fz="xs" c="dimmed">
                    {exercise.sets} sets × {exercise.reps} reps • {exercise.restTime}s rest
                  </Text>
                </div>
                <ActionIcon
                  variant="subtle"
                  color="red"
                  onClick={() => onRemoveExercise(index)}
                >
                  <Trash2 size={16} />
                </ActionIcon>
              </Group>
            </Paper>
          ))}
        </Stack>
      )}

      <Paper p="md" withBorder>
        <Stack gap={12}>
          <Text fw={500} fz="sm">Add Exercise</Text>
          
          <TextInput
            label="Exercise Name"
            placeholder="Enter exercise name"
            value={exerciseForm.name}
            onChange={(event) => handleInputChange('name', event.target.value)}
            required
          />

          <Group grow>
            <NumberInput
              label="Sets"
              placeholder="3"
              value={exerciseForm.sets}
              onChange={(value) => handleInputChange('sets', value)}
              min={1}
              max={10}
              required
            />

            <NumberInput
              label="Reps"
              placeholder="12"
              value={exerciseForm.reps}
              onChange={(value) => handleInputChange('reps', value)}
              min={1}
              max={100}
              required
            />

            <NumberInput
              label="Rest Time (seconds)"
              placeholder="60"
              value={exerciseForm.restTime}
              onChange={(value) => handleInputChange('restTime', value)}
              min={0}
              max={300}
              required
            />
          </Group>

          <Button
            leftSection={<Plus size={16} />}
            onClick={handleAddExercise}
            disabled={!isExerciseValid()}
            variant="light"
            color="orange"
            fullWidth
          >
            Add Exercise
          </Button>
        </Stack>
      </Paper>
    </Stack>
  );
};

export default ExerciseForm;