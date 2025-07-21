import { Card, Stack, Group, Text, Progress, Badge } from '@mantine/core';
import { Star } from 'lucide-react';
import { TopPriorityGoal } from '../../types';
import { formatProgressFraction } from '../../stringFormatters';
import { GoalStatus } from '../../enums';
import classes from './TopPrioritiesWidget.module.css';

interface TopPrioritiesWidgetProps {
  priorities: TopPriorityGoal[];
}

const TopPrioritiesWidget = ({ priorities }: TopPrioritiesWidgetProps) => {
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

  return (
    <Card className={classes.widget} radius="md" p="lg" withBorder>
      <Stack gap={16}>
        <Group gap={8} align="center">
          <Star size={16} color="#f97316" />
          <Text fz={16} fw={600} c="#1e293b">
            Top Priorities
          </Text>
        </Group>

        <Stack gap={0}>
          {priorities.slice(0, 3).map((priority) => {
            const progressPercentage = (priority.currentProgress / priority.targetProgress) * 100;
            
            return (
              <div key={priority.id} className={classes.priorityItem}>
                <Stack gap={8}>
                  <Group justify="space-between" align="flex-start">
                    <Text fz={13} fw={500} c="#475569" style={{ flex: 1 }}>
                      {priority.name}
                    </Text>
                    <Badge 
                      size="xs" 
                      variant="light" 
                      color="orange"
                      leftSection={<Star size={10} />}
                    >
                      Focus
                    </Badge>
                  </Group>
                  
                  <Group justify="space-between" align="center">
                    <Text className={classes.progressText}>
                      {formatProgressFraction(priority.currentProgress, priority.targetProgress)}
                    </Text>
                    <Text className={classes.progressText}>
                      {Math.round(progressPercentage)}%
                    </Text>
                  </Group>
                  
                  <Progress 
                    value={progressPercentage} 
                    color={getProgressColor(priority.status)}
                    size="xs"
                    radius="xs"
                  />
                </Stack>
              </div>
            );
          })}
        </Stack>
      </Stack>
    </Card>
  );
};

export default TopPrioritiesWidget;