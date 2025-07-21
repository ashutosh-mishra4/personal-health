import { SimpleGrid, Text } from '@mantine/core';
import WorkoutCard from '../WorkoutCard/WorkoutCard';
import { Workout } from '../../types';
import classes from './WorkoutGrid.module.css';

interface WorkoutGridProps {
  workouts: Workout[];
  onStartWorkout: (workoutId: number) => void;
  onAddToSchedule: (workoutId: number) => void;
  onMarkAsDone: (workoutId: number) => void;
  onReplaceWorkout: (workoutId: number) => void;
}

const WorkoutGrid = ({ 
  workouts, 
  onStartWorkout, 
  onAddToSchedule, 
  onMarkAsDone, 
  onReplaceWorkout 
}: WorkoutGridProps) => {
  if (workouts.length === 0) {
    return (
      <div className={classes.emptyState}>
        <Text fz={18} fw={500} c="#64748b" ta="center">
          No workouts found matching your criteria
        </Text>
      </div>
    );
  }

  return (
    <SimpleGrid 
      cols={3} 
      spacing={20}
      className={classes.grid}
    >
      {workouts.map((workout) => (
        <WorkoutCard
          key={workout.id}
          workout={workout}
          onStartWorkout={onStartWorkout}
          onAddToSchedule={onAddToSchedule}
          onMarkAsDone={onMarkAsDone}
          onReplaceWorkout={onReplaceWorkout}
        />
      ))}
    </SimpleGrid>
  );
};

export default WorkoutGrid;