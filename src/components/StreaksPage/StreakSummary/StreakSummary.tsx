import { Group, Paper, Stack, Text } from '@mantine/core';
import { Flame } from 'lucide-react';
import { formatStreakDays } from '../../../stringFormatters';
import classes from './StreakSummary.module.css';

interface StreakSummaryProps {
  currentStreak: number;
  longestStreak: number;
  missedDaysThisMonth: number;
}

const StreakSummary = ({ currentStreak, longestStreak, missedDaysThisMonth }: StreakSummaryProps) => {
  return (
    <Group gap={24} className={classes.summaryContainer}>
      <Paper className={classes.summaryCard} p={24} radius="md" shadow="sm">
        <Stack gap={8}>
          <Group gap={8} align="center">
            <Flame size={20} color="#f97316" />
            <Text fz={14} fw={500} c="#64748b">Current streak</Text>
          </Group>
          <Text fz={24} fw={700} c="#1e293b">
            {formatStreakDays(currentStreak)}
          </Text>
        </Stack>
      </Paper>

      <Paper className={classes.summaryCard} p={24} radius="md" shadow="sm">
        <Stack gap={8}>
          <Text fz={14} fw={500} c="#64748b">Longest streak</Text>
          <Text fz={24} fw={700} c="#1e293b">
            {formatStreakDays(longestStreak)}
          </Text>
        </Stack>
      </Paper>

      <Paper className={classes.summaryCard} p={24} radius="md" shadow="sm">
        <Stack gap={8}>
          <Text fz={14} fw={500} c="#64748b">Missed days this month</Text>
          <Text fz={24} fw={700} c="#1e293b">
            {missedDaysThisMonth}
          </Text>
        </Stack>
      </Paper>
    </Group>
  );
};

export default StreakSummary;