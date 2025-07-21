import { Card, Stack, Group, Text } from '@mantine/core';
import { Flame } from 'lucide-react';
import { GoalStreak } from '../../types';
import { formatStreakCount } from '../../stringFormatters';
import { StreakType } from '../../enums';
import classes from './StreakTrackerWidget.module.css';

interface StreakTrackerWidgetProps {
  streaks: GoalStreak[];
}

const StreakTrackerWidget = ({ streaks }: StreakTrackerWidgetProps) => {
  return (
    <Card className={classes.widget} radius="md" p="lg" withBorder>
      <Stack gap={16}>
        <Group gap={8} align="center">
          <Flame size={16} color="#f97316" />
          <Text fz={16} fw={600} c="#1e293b">
            Streak Tracker
          </Text>
        </Group>

        <Stack gap={0}>
          {streaks.map((streak) => (
            <div key={streak.id} className={classes.streakItem}>
              <Group justify="space-between" align="center">
                <Stack gap={4} flex={1}>
                  <Text className={classes.goalName}>
                    {streak.goalName}
                  </Text>
                  <Text className={classes.bestStreak}>
                    Best: {formatStreakCount(streak.bestStreak, streak.type as StreakType)}
                  </Text>
                </Stack>
                
                <Group gap={4} align="center">
                  <Flame size={14} color="#f97316" />
                  <Stack gap={0} align="center">
                    <Text className={classes.streakNumber}>
                      {streak.currentStreak}
                    </Text>
                    <Text className={classes.streakLabel}>
                      {streak.type === StreakType.DAILY ? 'days' : 'weeks'}
                    </Text>
                  </Stack>
                </Group>
              </Group>
            </div>
          ))}
        </Stack>
      </Stack>
    </Card>
  );
};

export default StreakTrackerWidget;