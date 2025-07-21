import { Stack } from '@mantine/core';
import SuggestedWorkoutCard from '../SuggestedWorkoutCard/SuggestedWorkoutCard';
import WorkoutSummaryCard from '../WorkoutSummaryCard/WorkoutSummaryCard';
import AchievementsCard from '../AchievementsCard/AchievementsCard';
import { Workout } from '../../types';
import classes from './WorkoutRightPanel.module.css';

interface WorkoutRightPanelProps {
  suggestedWorkout: Workout;
  summaryData: {
    completedWorkouts: number;
    totalWorkouts: number;
    totalMinutes: number;
    targetedMuscleGroups: string[];
  };
  achievements?: Array<{
    id: string;
    title: string;
    status: 'unlocked' | 'in_progress' | 'locked';
    icon: React.ReactNode;
  }>;
  onStartWorkout: (workoutId: number) => void;
}

const WorkoutRightPanel = ({ suggestedWorkout, summaryData, achievements = [], onStartWorkout }: WorkoutRightPanelProps) => {
  return (
    <div className={classes.panel}>
      <Stack gap={20}>
        <SuggestedWorkoutCard 
          workout={suggestedWorkout}
          onStartWorkout={onStartWorkout}
        />
        <WorkoutSummaryCard summaryData={summaryData} />
        <AchievementsCard achievements={achievements} />
      </Stack>
    </div>
  );
};

export default WorkoutRightPanel;