import { Modal, Stack, Group, Text, Image, Badge, Divider } from '@mantine/core';
import { formatCalories, formatDietaryTag } from '../../stringFormatters';
import { DietaryTag } from '../../enums';

interface ViewDetailsModalProps {
  opened: boolean;
  onClose: () => void;
  meal: {
    id: number;
    name: string;
    image: string;
    calories: number;
    time: string;
    tags: string[];
  } | null;
}

const ViewDetailsModal = ({ opened, onClose, meal }: ViewDetailsModalProps) => {
  if (!meal) return null;

  // Mock nutritional data - in a real app this would come from the meal data
  const nutritionalInfo = {
    protein: Math.round(meal.calories * 0.15 / 4), // ~15% of calories from protein
    carbs: Math.round(meal.calories * 0.55 / 4), // ~55% of calories from carbs  
    fats: Math.round(meal.calories * 0.30 / 9), // ~30% of calories from fats
    fiber: Math.round(meal.calories * 0.02), // ~2% fiber
    sugar: Math.round(meal.calories * 0.08), // ~8% sugar
    sodium: Math.round(meal.calories * 0.5) // rough estimate
  };

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title="Meal Details"
      size="md"
      centered
    >
      <Stack gap={20}>
        <Group gap={16} align="flex-start">
          <Image
            src={meal.image}
            alt={meal.name}
            w={120}
            h={120}
            radius="md"
          />
          
          <Stack gap={8} flex={1}>
            <Text fz={20} fw={600} c="#1e293b">
              {meal.name}
            </Text>
            <Text fz={14} fw={400} c="#64748b">
              {meal.time}
            </Text>
            <Text fz={16} fw={600} c="#f97316">
              {formatCalories(meal.calories)}
            </Text>
            
            <Group gap={8} mt={8}>
              {meal.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="light"
                  color="orange"
                  size="sm"
                >
                  {formatDietaryTag(tag as DietaryTag)}
                </Badge>
              ))}
            </Group>
          </Stack>
        </Group>
        
        <Divider />
        
        <Stack gap={16}>
          <Text fz={16} fw={600} c="#1e293b">
            Nutritional Information
          </Text>
          
          <Stack gap={12}>
            <Group justify="space-between">
              <Text fz={14} fw={500} c="#475569">Protein</Text>
              <Text fz={14} fw={500} c="#64748b">{nutritionalInfo.protein}g</Text>
            </Group>
            
            <Group justify="space-between">
              <Text fz={14} fw={500} c="#475569">Carbohydrates</Text>
              <Text fz={14} fw={500} c="#64748b">{nutritionalInfo.carbs}g</Text>
            </Group>
            
            <Group justify="space-between">
              <Text fz={14} fw={500} c="#475569">Fats</Text>
              <Text fz={14} fw={500} c="#64748b">{nutritionalInfo.fats}g</Text>
            </Group>
            
            <Group justify="space-between">
              <Text fz={14} fw={500} c="#475569">Fiber</Text>
              <Text fz={14} fw={500} c="#64748b">{nutritionalInfo.fiber}g</Text>
            </Group>
            
            <Group justify="space-between">
              <Text fz={14} fw={500} c="#475569">Sugar</Text>
              <Text fz={14} fw={500} c="#64748b">{nutritionalInfo.sugar}g</Text>
            </Group>
            
            <Group justify="space-between">
              <Text fz={14} fw={500} c="#475569">Sodium</Text>
              <Text fz={14} fw={500} c="#64748b">{nutritionalInfo.sodium}mg</Text>
            </Group>
          </Stack>
        </Stack>
      </Stack>
    </Modal>
  );
};

export default ViewDetailsModal;