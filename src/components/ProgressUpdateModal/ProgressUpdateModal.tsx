import { useState } from 'react';
import { Modal, Stack, NumberInput, Button, Group, Text, Progress } from '@mantine/core';
import { Goal } from '../../types';
import { formatProgressFraction } from '../../stringFormatters';

interface ProgressUpdateModalProps {
  opened: boolean;
  onClose: () => void;
  goal: Goal | null;
  onUpdateProgress: (goalId: number, newProgress: number) => void;
}

const ProgressUpdateModal = ({ opened, onClose, goal, onUpdateProgress }: ProgressUpdateModalProps) => {
  const [newProgress, setNewProgress] = useState(goal?.currentProgress || 0);

  const handleSubmit = () => {
    if (goal) {
      onUpdateProgress(goal.id, newProgress);
      onClose();
    }
  };

  const handleClose = () => {
    setNewProgress(goal?.currentProgress || 0);
    onClose();
  };

  if (!goal) return null;

  const progressPercentage = (newProgress / goal.targetProgress) * 100;

  return (
    <Modal
      opened={opened}
      onClose={handleClose}
      title="Update Progress"
      size="sm"
    >
      <Stack gap={16}>
        <Text fz={16} fw={600}>
          {goal.name}
        </Text>
        
        <Text fz={14} c="#64748b">
          Target: {goal.targetMetric}
        </Text>

        <Stack gap={8}>
          <Text fz={14} fw={500}>
            Current Progress: {formatProgressFraction(goal.currentProgress, goal.targetProgress)}
          </Text>
          <Progress 
            value={(goal.currentProgress / goal.targetProgress) * 100} 
            color="orange"
            size="sm"
            radius="xs"
          />
        </Stack>

        <NumberInput
          label="Update Progress"
          placeholder="Enter new progress value"
          value={newProgress}
          onChange={(value) => setNewProgress(Number(value) || 0)}
          min={0}
          max={goal.targetProgress}
          required
        />

        <Stack gap={8}>
          <Text fz={14} fw={500}>
            New Progress: {formatProgressFraction(newProgress, goal.targetProgress)}
          </Text>
          <Progress 
            value={progressPercentage} 
            color={progressPercentage >= 100 ? "green" : "orange"}
            size="sm"
            radius="xs"
          />
        </Stack>

        <Group justify="flex-end" gap={12}>
          <Button variant="light" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleSubmit}>
            Update Progress
          </Button>
        </Group>
      </Stack>
    </Modal>
  );
};

export default ProgressUpdateModal;