import { Stack, Text, Group, Image, Paper } from '@mantine/core';
import { ChevronRight } from 'lucide-react';
import classes from './SchedulePanel.module.css';

interface ScheduleItem {
  day: string;
  exercise: string;
  time: string;
  target: string;
  image: string;
}

interface SchedulePanelProps {
  schedule: ScheduleItem[];
}

const SchedulePanel = ({ schedule }: SchedulePanelProps) => {
  return (
    <Stack gap={24}>
      <Group justify="space-between">
        <Text fz={20} fw={700} c="#475569">My Schedule</Text>
        <Group gap={8} className={classes.viewAll}>
          <Text fz={14} fw={500} c="#f97316">View All</Text>
          <ChevronRight size={8} color="#f97316" />
        </Group>
      </Group>

      <Stack gap={24}>
        {schedule.map((item, index) => (
          <Paper key={index} bg="white" p={16} radius="md" shadow="sm">
            <Stack gap={16}>
              <Text fz={18} fw={500} c="#475569" lh="18px" style={{ letterSpacing: '-0.11px' }}>
                {item.day}
              </Text>
              <Group justify="space-between">
                <Group gap={16}>
                  <Image src={item.image} w={43} h={32} />
                  <Stack gap={8}>
                    <Text fz={14} fw={500} c="#1e293b" lh="14px" style={{ letterSpacing: '-0.08px' }}>
                      {item.exercise}
                    </Text>
                    <Text fz={12} fw={400} c="#475569" lh="12px" style={{ letterSpacing: '-0.07px' }}>
                      {item.time}
                    </Text>
                  </Stack>
                </Group>
                <div className={classes.targetBadge}>
                  <Text 
                    fz={12} 
                    fw={500} 
                    c="#f97316"
                  >
                    {item.target}
                  </Text>
                </div>
              </Group>
            </Stack>
          </Paper>
        ))}
      </Stack>
    </Stack>
  );
};

export default SchedulePanel;