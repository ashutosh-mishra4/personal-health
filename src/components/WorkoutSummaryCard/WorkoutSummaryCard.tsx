import { Card, Stack, Group, Text, Badge } from '@mantine/core';
import { Clock, CheckCircle, Target } from 'lucide-react';
import classes from './WorkoutSummaryCard.module.css';

interface WorkoutSummaryData {
  completedWorkouts: number;
  totalWorkouts: number;
  totalMinutes: number;
  targetedMuscleGroups: string[];
}

interface WorkoutSummaryCardProps {
  summaryData: WorkoutSummaryData;
}

const WorkoutSummaryCard = ({ summaryData }: WorkoutSummaryCardProps) => {
  const { completedWorkouts, totalWorkouts, totalMinutes, targetedMuscleGroups } = summaryData;
  
  return (
    <Card className={classes.card} radius="md" shadow="sm" withBorder>
      <Stack gap={16}>
        <Text fz={16} fw={600} c="#1e293b">
          Workout Summary (This Week)
        </Text>

        <Stack gap={12}>
          <Group justify="space-between" align="center">
            <Group gap={8}>
              <CheckCircle size={16} color="#22c55e" />
              <Text fz={14} c="#475569">Workouts Completed</Text>
            </Group>
            <Badge variant="filled" color="green" size="sm">
              {completedWorkouts}/{totalWorkouts}
            </Badge>
          </Group>

          <Group justify="space-between" align="center">
            <Group gap={8}>
              <Clock size={16} color="#f97316" />
              <Text fz={14} c="#475569">Total Minutes</Text>
            </Group>
            <Badge variant="filled" color="orange" size="sm">
              {totalMinutes} min
            </Badge>
          </Group>

          <Group justify="space-between" align="flex-start">
            <Group gap={8}>
              <Target size={16} color="#8b5cf6" />
              <Text fz={14} c="#475569">Muscle Groups</Text>
            </Group>
            <Stack gap={4} align="flex-end">
              {targetedMuscleGroups.map((group, index) => (
                <Badge key={index} variant="light" color="purple" size="xs">
                  {group}
                </Badge>
              ))}
            </Stack>
          </Group>
        </Stack>
      </Stack>
    </Card>
  );
};

export default WorkoutSummaryCard;