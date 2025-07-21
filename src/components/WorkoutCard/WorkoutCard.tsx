import { Card, Stack, Group, Text, Badge, Button, Image, ActionIcon, Menu } from '@mantine/core';
import { Play, Clock, MoreVertical, Calendar, Check, RefreshCw, Dumbbell, Heart, PersonStanding, BicepsFlexed } from 'lucide-react';
import { Workout } from '../../types';
import { formatDuration, formatDifficultyLevel, formatWorkoutType, formatEquipment } from '../../stringFormatters';
import { WorkoutType, DifficultyLevel, WorkoutStatus } from '../../enums';
import classes from './WorkoutCard.module.css';

interface WorkoutCardProps {
  workout: Workout;
  onStartWorkout: (workoutId: number) => void;
  onAddToSchedule: (workoutId: number) => void;
  onMarkAsDone: (workoutId: number) => void;
  onReplaceWorkout: (workoutId: number) => void;
}

const WorkoutCard = ({ 
  workout, 
  onStartWorkout, 
  onAddToSchedule, 
  onMarkAsDone, 
  onReplaceWorkout 
}: WorkoutCardProps) => {
  const getWorkoutIcon = (type: string) => {
    switch (type) {
      case WorkoutType.STRENGTH:
        return <Dumbbell size={16} />;
      case WorkoutType.CARDIO:
        return <Heart size={16} />;
      case WorkoutType.YOGA:
        return <PersonStanding size={16} />;
      case WorkoutType.STRETCH:
        return <BicepsFlexed size={16} />;
      default:
        return <Dumbbell size={16} />;
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case DifficultyLevel.BEGINNER:
        return 'green';
      case DifficultyLevel.INTERMEDIATE:
        return 'orange';
      case DifficultyLevel.ADVANCED:
        return 'red';
      default:
        return 'gray';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case WorkoutStatus.COMPLETED:
        return 'green';
      case WorkoutStatus.IN_PROGRESS:
        return 'orange';
      case WorkoutStatus.SCHEDULED:
        return 'blue';
      default:
        return 'gray';
    }
  };

  return (
    <Card className={classes.card} radius="md" shadow="sm" withBorder>
      <Card.Section>
        <Image
          src={workout.thumbnail}
          h={160}
          alt={workout.name}
          fallbackSrc="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
        />
      </Card.Section>

      <Stack gap={12} mt={12}>
        <Group justify="space-between" align="flex-start">
          <Stack gap={4} flex={1}>
            <Text fz={16} fw={600} c="#1e293b" lineClamp={1}>
              {workout.name}
            </Text>
            <Text fz={12} c="#64748b" lineClamp={2}>
              {workout.description}
            </Text>
          </Stack>
          
          <Menu position="bottom-end">
            <Menu.Target>
              <ActionIcon variant="subtle" color="gray" size="sm">
                <MoreVertical size={16} />
              </ActionIcon>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item 
                leftSection={<Calendar size={14} />}
                onClick={() => onAddToSchedule(workout.id)}
              >
                Add to Schedule
              </Menu.Item>
              <Menu.Item 
                leftSection={<Check size={14} />}
                onClick={() => onMarkAsDone(workout.id)}
              >
                Mark as Done
              </Menu.Item>
              <Menu.Item 
                leftSection={<RefreshCw size={14} />}
                onClick={() => onReplaceWorkout(workout.id)}
              >
                Replace Workout
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>

        <Group gap={8}>
          <Badge 
            variant="light" 
            color={getDifficultyColor(workout.difficulty)}
            size="sm"
          >
            {formatDifficultyLevel(workout.difficulty as DifficultyLevel)}
          </Badge>
          
          <Badge 
            variant="light" 
            color="blue"
            size="sm"
            leftSection={getWorkoutIcon(workout.type)}
          >
            {formatWorkoutType(workout.type as WorkoutType)}
          </Badge>

          {workout.status !== WorkoutStatus.NOT_STARTED && (
            <Badge 
              variant="filled" 
              color={getStatusColor(workout.status)}
              size="sm"
            >
              {workout.status === WorkoutStatus.COMPLETED ? 'Completed' : 
               workout.status === WorkoutStatus.SCHEDULED ? 'Scheduled' :
               workout.status === WorkoutStatus.IN_PROGRESS ? 'In Progress' : ''}
            </Badge>
          )}
        </Group>

        <Group gap={16}>
          <Group gap={4}>
            <Clock size={14} color="#64748b" />
            <Text fz={12} c="#64748b">
              {formatDuration(workout.duration)}
            </Text>
          </Group>
          
          <Text fz={12} c="#64748b">
            {formatEquipment(workout.equipment as any[])}
          </Text>
        </Group>


        <Button
          leftSection={<Play size={16} />}
          onClick={() => onStartWorkout(workout.id)}
          fullWidth
          variant="filled"
          color="orange"
        >
          Start Workout
        </Button>
      </Stack>
    </Card>
  );
};

export default WorkoutCard;