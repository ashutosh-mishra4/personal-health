import { Modal, Stack, TextInput, NumberInput, MultiSelect, Button, Group, Textarea } from '@mantine/core';
import { useState } from 'react';
import { DietaryTag } from '../../enums';
import { formatDietaryTag } from '../../stringFormatters';

interface AddFoodModalProps {
  opened: boolean;
  onClose: () => void;
  onSubmit: (foodData: {
    name: string;
    description: string;
    calories: number;
    time: string;
    tags: string[];
    image: string;
  }) => void;
}

const AddFoodModal = ({ opened, onClose, onSubmit }: AddFoodModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    calories: 0,
    time: '',
    tags: [] as string[],
    image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=300&h=200&fit=crop'
  });

  const dietaryTagOptions = Object.values(DietaryTag).map(tag => ({
    value: tag,
    label: formatDietaryTag(tag)
  }));

  const handleSubmit = () => {
    if (formData.name && formData.calories > 0 && formData.time) {
      onSubmit({
        ...formData,
        calories: Number(formData.calories)
      });
      setFormData({
        name: '',
        description: '',
        calories: 0,
        time: '',
        tags: [],
        image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=300&h=200&fit=crop'
      });
      onClose();
    }
  };

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title="Add New Food"
      size="md"
      centered
    >
      <Stack gap={16}>
        <TextInput
          label="Food Name"
          placeholder="Enter food name"
          value={formData.name}
          onChange={(event) => setFormData({ ...formData, name: event.currentTarget.value })}
          required
        />
        
        <Textarea
          label="Description"
          placeholder="Enter food description"
          value={formData.description}
          onChange={(event) => setFormData({ ...formData, description: event.currentTarget.value })}
          minRows={2}
          maxRows={4}
        />
        
        <NumberInput
          label="Calories"
          placeholder="Enter calories"
          value={formData.calories}
          onChange={(value) => setFormData({ ...formData, calories: Number(value) || 0 })}
          min={0}
          required
        />
        
        <TextInput
          label="Time"
          placeholder="e.g., 08:00 AM"
          value={formData.time}
          onChange={(event) => setFormData({ ...formData, time: event.currentTarget.value })}
          required
        />
        
        <MultiSelect
          label="Dietary Tags"
          data={dietaryTagOptions}
          value={formData.tags}
          onChange={(value) => setFormData({ ...formData, tags: value })}
          placeholder="Select dietary preferences"
        />
        
        <Group justify="flex-end" mt="md">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="orange">
            Add Food
          </Button>
        </Group>
      </Stack>
    </Modal>
  );
};

export default AddFoodModal;