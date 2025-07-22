import { Card, Group, Stack, Text, Badge, Button, Image } from '@mantine/core';
import { formatCalories, formatDietaryTag } from '../../stringFormatters';
import { DietaryTag } from '../../enums';
import classes from './MealCard.module.css';

interface MealCardProps {
  meal: {
    id: number;
    name: string;
    description: string;
    image: string;
    calories: number;
    time: string;
    tags: string[];
  };
  onViewDetails: (mealId: number) => void;
  onReplaceItem: (mealId: number) => void;
}

const MealCard = ({ meal, onViewDetails, onReplaceItem }: MealCardProps) => {
  return (
    <Card className={classes.card} radius="md" shadow="sm" withBorder>
      <Group gap={16} align="flex-start">
        <Image
          src={meal.image}
          alt={meal.name}
          w={80}
          h={80}
          radius="md"
          className={classes.mealImage}
        />
        
        <Stack gap={8} flex={1}>
          <Group justify="space-between" align="flex-start">
            <Stack gap={4}>
              <Text fz={16} fw={600} c="#1e293b">
                {meal.name}
              </Text>
              <Text fz={12} fw={400} c="#64748b" lineClamp={2}>
                {meal.description}
              </Text>
              <Text fz={12} fw={400} c="#64748b">
                {meal.time}
              </Text>
            </Stack>
            
            <Text fz={14} fw={600} c="#f97316">
              {formatCalories(meal.calories)}
            </Text>
          </Group>
          
          <Group gap={8}>
            {meal.tags.map((tag) => (
              <Badge
                key={tag}
                variant="light"
                color="orange"
                size="xs"
                className={classes.tag}
              >
                {formatDietaryTag(tag as DietaryTag)}
              </Badge>
            ))}
          </Group>
          
          <Group gap={8} mt={8}>
            <Button
              variant="light"
              color="orange"
              size="xs"
              onClick={() => onViewDetails(meal.id)}
            >
              View Details
            </Button>
            <Button
              variant="outline"
              color="orange"
              size="xs"
              onClick={() => onReplaceItem(meal.id)}
            >
              Replace Item
            </Button>
          </Group>
        </Stack>
      </Group>
    </Card>
  );
};

export default MealCard;