import { Card, Stack, Text, Progress, Group } from '@mantine/core';
import { Flame, Zap, Wheat, Droplets } from 'lucide-react';
import { formatNutrient } from '../../stringFormatters';
import { NutrientType } from '../../enums';
import classes from './NutritionSummary.module.css';

interface NutritionSummaryProps {
  nutritionSummary: {
    calories: { consumed: number; goal: number };
    protein: { consumed: number; goal: number };
    carbs: { consumed: number; goal: number };
    fats: { consumed: number; goal: number };
  };
}

const NutritionSummary = ({ nutritionSummary }: NutritionSummaryProps) => {
  const getNutrientIcon = (type: string) => {
    switch (type) {
      case 'calories':
        return <Flame size={16} color="#f97316" />;
      case 'protein':
        return <Zap size={16} color="#8b5cf6" />;
      case 'carbs':
        return <Wheat size={16} color="#06b6d4" />;
      case 'fats':
        return <Droplets size={16} color="#22c55e" />;
      default:
        return null;
    }
  };

  const getNutrientColor = (type: string) => {
    switch (type) {
      case 'calories':
        return 'orange';
      case 'protein':
        return 'purple';
      case 'carbs':
        return 'cyan';
      case 'fats':
        return 'green';
      default:
        return 'gray';
    }
  };

  const calculatePercentage = (consumed: number, goal: number) => {
    return Math.min((consumed / goal) * 100, 100);
  };

  const nutrients = [
    { key: 'calories', label: 'Calories', data: nutritionSummary.calories, type: NutrientType.CALORIES },
    { key: 'protein', label: 'Protein', data: nutritionSummary.protein, type: NutrientType.PROTEIN },
    { key: 'carbs', label: 'Carbs', data: nutritionSummary.carbs, type: NutrientType.CARBS },
    { key: 'fats', label: 'Fats', data: nutritionSummary.fats, type: NutrientType.FATS }
  ];

  return (
    <Card className={classes.card} radius="md" shadow="sm" withBorder>
      <Stack gap={20}>
        <Text fz={16} fw={600} c="#1e293b">
          Today's Nutrition Summary
        </Text>
        
        <Stack gap={16}>
          {nutrients.map((nutrient) => (
            <Stack key={nutrient.key} gap={8}>
              <Group justify="space-between" align="center">
                <Group gap={8} align="center">
                  {getNutrientIcon(nutrient.key)}
                  <Text fz={14} fw={500} c="#475569">
                    {nutrient.label}
                  </Text>
                </Group>
                <Text fz={12} fw={500} c="#64748b">
                  {formatNutrient(nutrient.data.consumed, nutrient.type)} / {formatNutrient(nutrient.data.goal, nutrient.type)}
                </Text>
              </Group>
              
              <Progress
                value={calculatePercentage(nutrient.data.consumed, nutrient.data.goal)}
                color={getNutrientColor(nutrient.key)}
                size="sm"
                radius="xl"
                className={classes.progress}
              />
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Card>
  );
};

export default NutritionSummary;