import { useState, useMemo } from 'react';
import { Stack, Group, Text, Flex } from '@mantine/core';
import WorkoutFilters from '../WorkoutFilters/WorkoutFilters';
import WorkoutGrid from '../WorkoutGrid/WorkoutGrid';
import WorkoutSessionModal from '../WorkoutSessionModal/WorkoutSessionModal';
import WorkoutRightPanel from '../WorkoutRightPanel/WorkoutRightPanel';
import { Workout, WorkoutFilters as IWorkoutFilters, WorkoutSession } from '../../types';
import { WorkoutType, DifficultyLevel, EquipmentType, WorkoutStatus } from '../../enums';
import classes from './WorkoutPage.module.css';

interface WorkoutPageProps {
  workouts: Workout[];
  currentWorkoutSession: WorkoutSession | null;
  filters: IWorkoutFilters;
  sortOption: string;
  currentPage?: string;
}

const WorkoutPage = ({ workouts, currentWorkoutSession, filters: initialFilters, sortOption: initialSortOption, currentPage }: WorkoutPageProps) => {
  const [filters, setFilters] = useState<IWorkoutFilters>(initialFilters);
  const [sortOption, setSortOption] = useState(initialSortOption);
  const [workoutSession, setWorkoutSession] = useState<WorkoutSession | null>(currentWorkoutSession);

  const filteredAndSortedWorkouts = useMemo(() => {
    let filtered = workouts.filter(workout => {
      if (filters.selectedType && workout.type !== filters.selectedType) return false;
      if (filters.selectedDifficulty && workout.difficulty !== filters.selectedDifficulty) return false;
      if (filters.selectedEquipment && !workout.equipment.includes(filters.selectedEquipment)) return false;
      if (filters.searchQuery && !workout.name.toLowerCase().includes(filters.searchQuery.toLowerCase()) && 
          !workout.description.toLowerCase().includes(filters.searchQuery.toLowerCase())) return false;
      return true;
    });

    return filtered.sort((a, b) => {
      switch (sortOption) {
        case 'duration_asc':
          return a.duration - b.duration;
        case 'duration_desc':
          return b.duration - a.duration;
        case 'difficulty_asc':
          const difficultyOrder = [DifficultyLevel.BEGINNER, DifficultyLevel.INTERMEDIATE, DifficultyLevel.ADVANCED];
          return difficultyOrder.indexOf(a.difficulty as DifficultyLevel) - difficultyOrder.indexOf(b.difficulty as DifficultyLevel);
        case 'difficulty_desc':
          const difficultyOrderDesc = [DifficultyLevel.ADVANCED, DifficultyLevel.INTERMEDIATE, DifficultyLevel.BEGINNER];
          return difficultyOrderDesc.indexOf(a.difficulty as DifficultyLevel) - difficultyOrderDesc.indexOf(b.difficulty as DifficultyLevel);
        case 'name_asc':
          return a.name.localeCompare(b.name);
        case 'name_desc':
          return b.name.localeCompare(a.name);
        default:
          return 0;
      }
    });
  }, [workouts, filters, sortOption]);

  const handleStartWorkout = (workoutId: number) => {
    const workout = workouts.find(w => w.id === workoutId);
    if (workout) {
      setWorkoutSession({
        workoutId,
        currentExerciseIndex: 0,
        isActive: true,
        timeRemaining: workout.exercises[0]?.restTime || 60,
        completedExercises: new Array(workout.exercises.length).fill(false)
      });
    }
  };

  const handleStopWorkout = () => {
    setWorkoutSession(null);
  };

  const handleCompleteExercise = (exerciseIndex: number) => {
    if (workoutSession) {
      const newCompletedExercises = [...workoutSession.completedExercises];
      newCompletedExercises[exerciseIndex] = true;
      setWorkoutSession({
        ...workoutSession,
        completedExercises: newCompletedExercises
      });
    }
  };

  const handleFilterChange = (newFilters: Partial<IWorkoutFilters>) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  const handleAddToSchedule = (workoutId: number) => {
    console.log('Add to schedule:', workoutId);
  };

  const handleMarkAsDone = (workoutId: number) => {
    console.log('Mark as done:', workoutId);
  };

  const handleReplaceWorkout = (workoutId: number) => {
    console.log('Replace workout:', workoutId);
  };

  return (
    <Stack gap={24} className={classes.content}>
          <Group justify="space-between" align="center">
            <Text fz={24} fw={700} c="#1e293b">Workouts</Text>
          </Group>
          
          <Flex gap={24} align="flex-start">
            <Stack gap={24} flex={1}>
              <WorkoutFilters
                filters={filters}
                sortOption={sortOption}
                onFilterChange={handleFilterChange}
                onSortChange={setSortOption}
              />
              
              <WorkoutGrid
                workouts={filteredAndSortedWorkouts}
                onStartWorkout={handleStartWorkout}
                onAddToSchedule={handleAddToSchedule}
                onMarkAsDone={handleMarkAsDone}
                onReplaceWorkout={handleReplaceWorkout}
              />
            </Stack>

            <WorkoutRightPanel
              suggestedWorkout={workouts[0]}
              summaryData={{
                completedWorkouts: 4,
                totalWorkouts: 5,
                totalMinutes: 180,
                targetedMuscleGroups: ['Arms', 'Core', 'Legs']
              }}
              onStartWorkout={handleStartWorkout}
            />
          </Flex>
      {workoutSession && (
        <WorkoutSessionModal
          session={workoutSession}
          workout={workouts.find(w => w.id === workoutSession.workoutId)!}
          onClose={handleStopWorkout}
          onCompleteExercise={handleCompleteExercise}
        />
      )}
    </Stack>
  );
};

export default WorkoutPage;