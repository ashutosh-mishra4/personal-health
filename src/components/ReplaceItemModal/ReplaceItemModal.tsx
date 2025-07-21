import { Modal, Stack, Group, Text, Image, Badge, Button, ScrollArea } from '@mantine/core';
import { formatCalories, formatDietaryTag } from '../../stringFormatters';
import { DietaryTag } from '../../enums';

interface ReplaceItemModalProps {
  opened: boolean;
  onClose: () => void;
  currentMeal: {
    id: number;
    name: string;
    image: string;
    calories: number;
    time: string;
    tags: string[];
    mealType: string;
  } | null;
  availableMeals: Array<{
    id: number;
    name: string;
    image: string;
    calories: number;
    time: string;
    tags: string[];
    mealType: string;
  }>;
  onReplace: (newMealId: number) => void;
}

const ReplaceItemModal = ({ opened, onClose, currentMeal, availableMeals, onReplace }: ReplaceItemModalProps) => {
  if (!currentMeal) return null;

  // Filter available meals to show only those of the same meal type and exclude current meal
  const filteredMeals = availableMeals.filter(
    meal => meal.mealType === currentMeal.mealType && meal.id !== currentMeal.id
  );

  const handleReplace = (newMealId: number) => {
    onReplace(newMealId);
    onClose();
  };

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title="Replace Item"
      size="lg"
      centered
    >
      <Stack gap={20}>
        <Group gap={16} align="flex-start">
          <Text fz={16} fw={600} c="#1e293b">
            Current Item:
          </Text>
          <Group gap={12}>
            <Image
              src={currentMeal.image}
              alt={currentMeal.name}
              w={60}
              h={60}
              radius="md"
            />
            <Stack gap={4}>
              <Text fz={14} fw={600} c="#475569">
                {currentMeal.name}
              </Text>
              <Text fz={12} fw={400} c="#64748b">
                {formatCalories(currentMeal.calories)}
              </Text>
            </Stack>
          </Group>
        </Group>

        <Text fz={16} fw={600} c="#1e293b">
          Choose Replacement:
        </Text>

        <ScrollArea h={400}>
          <Stack gap={12}>
            {filteredMeals.length === 0 ? (
              <Text fz={14} c="#64748b" ta="center" py={40}>
                No alternative items available for this meal type.
              </Text>
            ) : (
              filteredMeals.map((meal) => (
                <Group
                  key={meal.id}
                  gap={16}
                  p={12}
                  style={{
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                    cursor: 'pointer'
                  }}
                  onClick={() => handleReplace(meal.id)}
                >
                  <Image
                    src={meal.image}
                    alt={meal.name}
                    w={80}
                    h={80}
                    radius="md"
                  />
                  
                  <Stack gap={8} flex={1}>
                    <Group justify="space-between" align="flex-start">
                      <Stack gap={4}>
                        <Text fz={16} fw={600} c="#1e293b">
                          {meal.name}
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
                        >
                          {formatDietaryTag(tag as DietaryTag)}
                        </Badge>
                      ))}
                    </Group>
                    
                    <Button
                      variant="light"
                      color="orange"
                      size="xs"
                      style={{ alignSelf: 'flex-start' }}
                    >
                      Select This Item
                    </Button>
                  </Stack>
                </Group>
              ))
            )}
          </Stack>
        </ScrollArea>
      </Stack>
    </Modal>
  );
};

export default ReplaceItemModal;