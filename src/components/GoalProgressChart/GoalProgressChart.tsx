import { Paper, Text, Group, Stack, Select } from '@mantine/core';
import { BarChart } from '@mantine/charts';
import { ChevronDown } from 'lucide-react';
import classes from './GoalProgressChart.module.css';

interface GoalProgressData {
  day: string;
  workout: number;
  calories: number;
  steps: number;
}

interface GoalProgressChartProps {
  data: GoalProgressData[];
}

const GoalProgressChart = ({ data }: GoalProgressChartProps) => {
  return (
    <Paper className={classes.container} radius="xl" shadow="sm" p={32}>
      <Group justify="space-between" mb={32}>
        <Text fz={16} fw={700} c="#475569">Goal Progress</Text>
        <Select
          data={['Weekly', 'Monthly', 'Yearly']}
          defaultValue="Weekly"
          rightSection={<ChevronDown size={16} />}
          className={classes.select}
          w={150}
          withCheckIcon={false}
        />
      </Group>

      <Stack gap={32} h="100%">
        <Stack gap={16} flex={1} style={{ overflow: 'hidden', minHeight: 0 }}>
          <div style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
            <BarChart
              h={250}
              data={data}
              dataKey="day"
              series={[
                { name: 'workout', color: '#06b6d4' },
                { name: 'calories', color: '#f97316' },
                { name: 'steps', color: '#8b5cf6' },
              ]}
              tickLine="xy"
              gridAxis="xy"
              withLegend={true}
              legendProps={{
                verticalAlign: 'bottom',
                height: 50,
                align: 'left',
                wrapperStyle: { paddingTop: '20px' }
              }}
              yAxisProps={{
                tickFormatter: (value: number) => `${value}%`,
                domain: [0, 100]
              }}
              barProps={{
                maxBarSize: 7,
                radius: [3, 3, 3, 3],
              }}
            />
          </div>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default GoalProgressChart;