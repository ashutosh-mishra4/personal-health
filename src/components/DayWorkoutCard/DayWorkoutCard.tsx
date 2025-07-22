import { Paper, Stack, Text, Badge, Group } from '@mantine/core';
import { DayOfWeek } from '../../enums';
import { ScheduledWorkout } from '../../types';
import { formatDayOfWeek, formatDuration, formatWorkoutType, formatDifficultyLevel, formatEquipment } from '../../stringFormatters';
import classes from './DayWorkoutCard.module.css';

interface DayWorkoutCardProps {
  day: DayOfWeek;
  workouts: ScheduledWorkout[];
}

const getWorkoutTypeColor = (type: string) => {
  switch (type.toLowerCase()) {
    case 'strength':
      return 'orange';
    case 'cardio':
      return 'red';
    case 'yoga':
      return 'purple';
    case 'stretch':
      return 'cyan';
    default:
      return 'gray';
  }
};

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty.toLowerCase()) {
    case 'beginner':
      return 'green';
    case 'intermediate':
      return 'yellow';
    case 'advanced':
      return 'red';
    default:
      return 'gray';
  }
};

const DayWorkoutCard = ({ day, workouts }: DayWorkoutCardProps) => {
  const dayName = formatDayOfWeek(day);

  return (
    <Paper className={classes.dayCard} p="lg" withBorder>
      <Stack gap={16}>
        <Text fw={700} fz="md" c="#1e293b" ta="center" className={classes.dayHeader}>
          {dayName}
        </Text>
        
        {workouts.length === 0 ? (
          <div className={classes.noWorkoutsContainer}>
            <Text fz="sm" c="dimmed" ta="center" className={classes.noWorkouts}>
              No workouts scheduled
            </Text>
          </div>
        ) : (
          <Stack gap={12}>
            {workouts.map((workout) => (
              <div key={workout.id} className={classes.workoutItem}>
                <Stack gap={8}>
                  <Text fz="sm" fw={600} c="#1e293b" className={classes.workoutName}>
                    {workout.name}
                  </Text>
                  
                  <Group gap={6} justify="flex-start" wrap="wrap">
                    <Badge 
                      size="sm" 
                      variant="light" 
                      color={getWorkoutTypeColor(workout.type)}
                      className={classes.typeBadge}
                    >
                      {formatWorkoutType(workout.type as any)}
                    </Badge>
                    <Badge 
                      size="sm" 
                      variant="outline" 
                      color={getDifficultyColor(workout.difficulty)}
                      className={classes.difficultyBadge}
                    >
                      {formatDifficultyLevel(workout.difficulty as any)}
                    </Badge>
                  </Group>

                  <Group gap={8} justify="space-between" align="center">
                    <Text fz="xs" c="dimmed" className={classes.duration}>
                      {formatDuration(workout.duration)}
                    </Text>
                    <Text fz="xs" c="dimmed" className={classes.equipment}>
                      {formatEquipment(workout.equipment as any)}
                    </Text>
                  </Group>

                  {workout.exercises && workout.exercises.length > 0 && (
                    <Text fz="xs" c="dimmed" className={classes.exerciseCount}>
                      {workout.exercises.length} exercise{workout.exercises.length !== 1 ? 's' : ''}
                    </Text>
                  )}
                </Stack>
              </div>
            ))}
          </Stack>
        )}
      </Stack>
    </Paper>
  );
};

export default DayWorkoutCard;