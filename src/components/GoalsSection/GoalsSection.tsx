import { Stack, Text, Group, Paper } from '@mantine/core';
import { ChevronRight } from 'lucide-react';
import classes from './GoalsSection.module.css';

interface Goal {
  title: string;
  date: string;
  target: string;
}

interface GoalsSectionProps {
  goals: Goal[];
}

const GoalsSection = ({ goals }: GoalsSectionProps) => {
  return (
    <Stack gap={24}>
      <Group justify="space-between">
        <Text fz={20} fw={700} c="#475569">Goals</Text>
        <Group gap={8} className={classes.viewAll}>
          <Text fz={14} fw={500} c="#f97316">View All</Text>
          <ChevronRight size={8} color="#f97316" />
        </Group>
      </Group>

      <Stack gap={24}>
        {goals.map((goal, index) => (
          <Paper key={index} bg="white" p={16} radius="md" shadow="sm">
            <Group justify="space-between">
              <Stack gap={8}>
                <Text fz={14} fw={500} c="#1e293b" lh="14px" style={{ letterSpacing: '-0.08px' }}>
                  {goal.title}
                </Text>
                <Text fz={12} fw={400} c="#475569" lh="12px" style={{ letterSpacing: '-0.07px' }}>
                  {goal.date}
                </Text>
              </Stack>
              <div className={classes.targetBadge}>
                <Text 
                  fz={12} 
                  fw={500} 
                  c="#f97316"
                >
                  {goal.target}
                </Text>
              </div>
            </Group>
          </Paper>
        ))}
      </Stack>
    </Stack>
  );
};

export default GoalsSection;