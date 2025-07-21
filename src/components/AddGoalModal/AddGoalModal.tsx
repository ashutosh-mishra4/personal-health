import { useState, useEffect } from 'react';
import { Modal, Stack, TextInput, Select, NumberInput, Button, Group } from '@mantine/core';
import { Goal } from '../../types';
import { GoalCategory, GoalFrequency, GoalPriority } from '../../enums';
import { formatGoalCategory, formatGoalFrequency, formatGoalPriority } from '../../stringFormatters';

interface AddGoalModalProps {
  opened: boolean;
  onClose: () => void;
  onSave: (goal: Omit<Goal, 'id'>) => void;
  category?: string;
  editGoal?: Goal | null;
}

const AddGoalModal = ({ opened, onClose, onSave, category, editGoal }: AddGoalModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    targetMetric: '',
    category: category || GoalCategory.CARDIO,
    priority: GoalPriority.MEDIUM,
    frequency: GoalFrequency.DAILY,
    customFrequency: '',
    targetProgress: 1,
    deadline: ''
  });

  // Update form data when editGoal changes
  useEffect(() => {
    if (editGoal) {
      setFormData({
        name: editGoal.name,
        targetMetric: editGoal.targetMetric,
        category: editGoal.category as GoalCategory,
        priority: editGoal.priority as GoalPriority,
        frequency: editGoal.frequency as GoalFrequency,
        customFrequency: editGoal.customFrequency || '',
        targetProgress: editGoal.targetProgress,
        deadline: editGoal.deadline || ''
      });
    } else {
      // Reset form for new goal
      setFormData({
        name: '',
        targetMetric: '',
        category: category || GoalCategory.CARDIO,
        priority: GoalPriority.MEDIUM,
        frequency: GoalFrequency.DAILY,
        customFrequency: '',
        targetProgress: 1,
        deadline: ''
      });
    }
  }, [editGoal, category, opened]);

  const handleSubmit = () => {
    const goalData: Omit<Goal, 'id'> = {
      ...formData,
      status: editGoal?.status || 'not_started',
      currentProgress: editGoal?.currentProgress || 0,
      createdAt: editGoal?.createdAt || new Date().toISOString()
    };
    onSave(goalData);
    handleClose();
  };

  const handleClose = () => {
    onClose();
    // Reset form after a short delay to avoid visual glitch
    setTimeout(() => {
      if (!editGoal) {
        setFormData({
          name: '',
          targetMetric: '',
          category: category || GoalCategory.CARDIO,
          priority: GoalPriority.MEDIUM,
          frequency: GoalFrequency.DAILY,
          customFrequency: '',
          targetProgress: 1,
          deadline: ''
        });
      }
    }, 200);
  };

  const categoryOptions = Object.values(GoalCategory).map(cat => ({
    value: cat,
    label: formatGoalCategory(cat)
  }));

  const frequencyOptions = Object.values(GoalFrequency).map(freq => ({
    value: freq,
    label: formatGoalFrequency(freq)
  }));

  const priorityOptions = Object.values(GoalPriority).map(priority => ({
    value: priority,
    label: formatGoalPriority(priority)
  }));

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title={editGoal ? 'Edit Goal' : 'Add New Goal'}
      size="md"
    >
      <Stack gap={16}>
        <TextInput
          label="Goal Name"
          placeholder="Enter goal name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />

        <TextInput
          label="Target Metric"
          placeholder="e.g., 10km weekly, 50 push-ups daily"
          value={formData.targetMetric}
          onChange={(e) => setFormData({ ...formData, targetMetric: e.target.value })}
          required
        />

        <Select
          label="Category"
          data={categoryOptions}
          value={formData.category}
          onChange={(value) => setFormData({ ...formData, category: (value as GoalCategory) || GoalCategory.CARDIO })}
          required
        />

        <Select
          label="Priority"
          data={priorityOptions}
          value={formData.priority}
          onChange={(value) => setFormData({ ...formData, priority: (value as GoalPriority) || GoalPriority.MEDIUM })}
          required
        />

        <Select
          label="Frequency"
          data={frequencyOptions}
          value={formData.frequency}
          onChange={(value) => setFormData({ ...formData, frequency: (value as GoalFrequency) || GoalFrequency.DAILY })}
          required
        />

        {formData.frequency === GoalFrequency.CUSTOM && (
          <TextInput
            label="Custom Frequency"
            placeholder="e.g., 3x per week"
            value={formData.customFrequency}
            onChange={(e) => setFormData({ ...formData, customFrequency: e.target.value })}
          />
        )}

        <NumberInput
          label="Target Progress"
          placeholder="Enter target number"
          value={formData.targetProgress}
          onChange={(value) => setFormData({ ...formData, targetProgress: Number(value) || 1 })}
          min={1}
          required
        />

        <TextInput
          label="Deadline (Optional)"
          type="date"
          value={formData.deadline}
          onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
        />

        <Group justify="flex-end" gap={12}>
          <Button variant="light" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleSubmit} disabled={!formData.name || !formData.targetMetric}>
            {editGoal ? 'Update Goal' : 'Add Goal'}
          </Button>
        </Group>
      </Stack>
    </Modal>
  );
};

export default AddGoalModal;