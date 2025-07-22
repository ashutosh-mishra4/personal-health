import { Stack, Text, Paper, Group, Image } from '@mantine/core';
import classes from './FoodTable.module.css';

interface FoodEntry {
  id: number;
  food: string;
  description?: string;
  meal: string;
  calories: string;
  time: string;
  carbs: string;
  image: string;
}

interface FoodTableProps {
  entries: FoodEntry[];
}

const FoodTable = ({ entries }: FoodTableProps) => {
  return (
    <Stack gap={16}>
      <Group className={classes.header}>
        <Text fz={14} fw={700} c="#475569" className={classes.headerCell}>Food</Text>
        <Text fz={14} fw={700} c="#475569" className={classes.headerCell}>Meal</Text>
        <Text fz={14} fw={700} c="#475569" className={classes.headerCell}>Calories</Text>
        <Text fz={14} fw={700} c="#475569" className={classes.headerCell}>Priorities</Text>
        <Text fz={14} fw={700} c="#475569" className={classes.headerCell}>Carbs</Text>
      </Group>

      <Stack gap={16}>
        {entries.map((entry) => (
          <Paper key={entry.id} className={classes.row} radius={4} shadow="sm" p={16}>
            <Group className={classes.rowContent}>
              <Group gap={16} className={classes.foodCell}>
                <Image src={entry.image} w={32} h={32} radius="xl" />
                <Stack gap={4}>
                  <Text fz={14} fw={700} c="#475569">{entry.food}</Text>
                  {entry.description && (
                    <Text fz={12} fw={400} c="#64748B" lineClamp={1}>
                      {entry.description}
                    </Text>
                  )}
                </Stack>
              </Group>
              <Text fz={14} fw={500} c="#475569" className={classes.cell}>{entry.meal}</Text>
              <Text fz={14} fw={500} c="#475569" className={classes.cell}>{entry.calories}</Text>
              <Text fz={14} fw={500} c="#475569" className={classes.cell}>{entry.time}</Text>
              <Text fz={14} fw={500} c="#475569" className={classes.cell}>{entry.carbs}</Text>
            </Group>
          </Paper>
        ))}
      </Stack>
    </Stack>
  );
};

export default FoodTable;