import { Card, Stack, Group, Text, Badge, Button, Image } from '@mantine/core';
import { Play, Clock, Dumbbell, Heart, PersonStanding, BicepsFlexed } from 'lucide-react';
import { Workout } from '../../types';
import { formatDuration, formatWorkoutType } from '../../stringFormatters';
import { WorkoutType } from '../../enums';
import classes from './SuggestedWorkoutCard.module.css';

interface SuggestedWorkoutCardProps {
  workout: Workout;
  onStartWorkout: (workoutId: number) => void;
}

const SuggestedWorkoutCard = ({ workout, onStartWorkout }: SuggestedWorkoutCardProps) => {
  const getWorkoutIcon = (type: string) => {
    switch (type) {
      case WorkoutType.STRENGTH:
        return <Dumbbell size={14} />;
      case WorkoutType.CARDIO:
        return <Heart size={14} />;
      case WorkoutType.YOGA:
        return <PersonStanding size={14} />;
      case WorkoutType.STRETCH:
        return <BicepsFlexed size={14} />;
      default:
        return <Dumbbell size={14} />;
    }
  };

  return (
    <Card className={classes.card} radius="md" shadow="sm" withBorder>
      <Stack gap={12}>
        <Group justify="space-between" align="center">
          <Text fz={16} fw={600} c="#1e293b">
            Today's Suggested Workout
          </Text>
          <Badge variant="light" color="blue" size="sm">
            Suggested
          </Badge>
        </Group>

        <Card.Section>
          <Image
            src={workout.thumbnail}
            h={120}
            alt={workout.name}
            fallbackSrc="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
          />
        </Card.Section>

        <Stack gap={8}>
          <Text fz={14} fw={600} c="#1e293b" lineClamp={1}>
            {workout.name}
          </Text>
          
          <Group gap={8}>
            <Badge 
              variant="light" 
              color="blue"
              size="sm"
              leftSection={getWorkoutIcon(workout.type)}
            >
              {formatWorkoutType(workout.type as WorkoutType)}
            </Badge>
          </Group>

          <Group gap={12}>
            <Group gap={4}>
              <Clock size={12} color="#64748b" />
              <Text fz={12} c="#64748b">
                {formatDuration(workout.duration)}
              </Text>
            </Group>
          </Group>

          <Button
            leftSection={<Play size={14} />}
            onClick={() => onStartWorkout(workout.id)}
            fullWidth
            variant="filled"
            color="orange"
            size="sm"
          >
            Start Now
          </Button>
        </Stack>
      </Stack>
    </Card>
  );
};

export default SuggestedWorkoutCard;