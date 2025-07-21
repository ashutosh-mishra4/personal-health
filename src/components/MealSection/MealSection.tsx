import { Stack, Group, Text, Button } from '@mantine/core';
import { Plus } from 'lucide-react';
import MealCard from '../MealCard/MealCard';
import { formatMealType } from '../../stringFormatters';
import { MealType } from '../../enums';
import classes from './MealSection.module.css';

interface MealSectionProps {
  mealType: string;
  meals: Array<{
    id: number;
    name: string;
    image: string;
    calories: number;
    time: string;
    tags: string[];
  }>;
  onAddFood: (mealType: string) => void;
  onViewDetails: (mealId: number) => void;
  onReplaceItem: (mealId: number) => void;
}

const MealSection = ({ 
  mealType, 
  meals, 
  onAddFood, 
  onViewDetails, 
  onReplaceItem 
}: MealSectionProps) => {
  return (
    <Stack gap={16} className={classes.section}>
      <Group justify="space-between" align="center">
        <Text fz={18} fw={700} c="#1e293b">
          {formatMealType(mealType as MealType)}
        </Text>
        <Button
          variant="light"
          color="orange"
          size="sm"
          leftSection={<Plus size={16} />}
          onClick={() => onAddFood(mealType)}
        >
          Add Food
        </Button>
      </Group>
      
      <Stack gap={12}>
        {meals.map((meal) => (
          <MealCard
            key={meal.id}
            meal={meal}
            onViewDetails={onViewDetails}
            onReplaceItem={onReplaceItem}
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default MealSection;