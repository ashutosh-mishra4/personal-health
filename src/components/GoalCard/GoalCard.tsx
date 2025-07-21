import { Card, Stack, Group, Text, Badge, Progress, Button } from '@mantine/core';
import { Edit, Check, Trash2, Plus } from 'lucide-react';
import { Goal } from '../../types';
import { formatGoalStatus, formatGoalFrequency, formatProgressFraction } from '../../stringFormatters';
import { GoalStatus, GoalFrequency } from '../../enums';
import classes from './GoalCard.module.css';

interface GoalCardProps {
  goal: Goal;
  onEdit?: (goal: Goal) => void;
  onMarkComplete?: (goalId: number) => void;
  onRemove?: (goalId: number) => void;
  onUpdateProgress?: (goal: Goal) => void;
}

const GoalCard = ({ goal, onEdit, onMarkComplete, onRemove, onUpdateProgress }: GoalCardProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case GoalStatus.ON_TRACK:
        return 'green';
      case GoalStatus.IN_PROGRESS:
        return 'orange';
      case GoalStatus.BEHIND:
        return 'red';
      case GoalStatus.COMPLETED:
        return 'green';
      case GoalStatus.NOT_STARTED:
        return 'gray';
      default:
        return 'gray';
    }
  };

  const getProgressColor = (status: string) => {
    switch (status) {
      case GoalStatus.ON_TRACK:
        return '#22c55e';
      case GoalStatus.IN_PROGRESS:
        return '#f97316';
      case GoalStatus.BEHIND:
        return '#ef4444';
      case GoalStatus.COMPLETED:
        return '#22c55e';
      default:
        return '#64748b';
    }
  };

  const progressPercentage = (goal.currentProgress / goal.targetProgress) * 100;

  return (
    <Card className={classes.card} radius="md" p="lg" withBorder>
      <Stack gap={16}>
        <Group justify="space-between" align="flex-start">
          <Stack gap={4} flex={1}>
            <Text fz={16} fw={600} c="#1e293b">
              {goal.name}
            </Text>
            <Text fz={13} c="#64748b">
              {goal.targetMetric}
            </Text>
          </Stack>
          <Badge 
            variant="light" 
            color={getStatusColor(goal.status)}
            size="sm"
          >
            {formatGoalStatus(goal.status as GoalStatus)}
          </Badge>
        </Group>

        <Stack gap={8}>
          <Group justify="space-between" align="center">
            <Text fz={12} c="#64748b">
              Progress
            </Text>
            <Text fz={12} fw={500} c="#475569">
              {formatProgressFraction(goal.currentProgress, goal.targetProgress)}
            </Text>
          </Group>
          <Progress 
            value={progressPercentage} 
            color={getProgressColor(goal.status)}
            size="sm"
            radius="xs"
          />
        </Stack>

        <Group justify="space-between" align="center">
          <Text fz={12} c="#64748b">
            {formatGoalFrequency(goal.frequency as GoalFrequency, goal.customFrequency || undefined)}
          </Text>
          {goal.deadline && (
            <Text fz={12} c="#64748b">
              Due: {new Date(goal.deadline).toLocaleDateString()}
            </Text>
          )}
        </Group>

        <Group gap={8} justify="space-between">
          <Button
            size="xs"
            variant="light"
            color="blue"
            leftSection={<Plus size={14} />}
            onClick={() => onUpdateProgress?.(goal)}
            className={classes.actionButton}
          >
            Update Progress
          </Button>
          <Group gap={8}>
            <Button
              size="xs"
              variant="light"
              color="orange"
              leftSection={<Edit size={14} />}
              onClick={() => onEdit?.(goal)}
              className={classes.actionButton}
            >
              Edit
            </Button>
            <Button
              size="xs"
              variant="light"
              color="green"
              leftSection={<Check size={14} />}
              onClick={() => onMarkComplete?.(goal.id)}
              className={classes.actionButton}
            >
              Complete
            </Button>
            <Button
              size="xs"
              variant="light"
              color="red"
              leftSection={<Trash2 size={14} />}
              onClick={() => onRemove?.(goal.id)}
              className={classes.actionButton}
            >
              Remove
            </Button>
          </Group>
        </Group>
      </Stack>
    </Card>
  );
};

export default GoalCard;