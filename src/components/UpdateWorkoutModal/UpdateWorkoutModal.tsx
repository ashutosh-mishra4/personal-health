import { useState } from 'react';
import { Modal, Stack, Group, Button, Text, ActionIcon, Paper, Select, Tabs } from '@mantine/core';
import { X, Trash2, Edit } from 'lucide-react';
import { UpdateWorkoutModalProps, WorkoutFormData } from '../../types';
import { DayOfWeek } from '../../enums';
import { formatDayOfWeek, formatDuration, formatWorkoutType, formatDifficultyLevel } from '../../stringFormatters';

const UpdateWorkoutModal = ({ opened, onClose, weeklyWorkouts, onRemove, onReplace }: UpdateWorkoutModalProps) => {
  const [selectedDay, setSelectedDay] = useState<string>(DayOfWeek.MONDAY);
  const [editingWorkout, setEditingWorkout] = useState<{ day: DayOfWeek; workoutId: number } | null>(null);

  const handleRemoveWorkout = (day: DayOfWeek, workoutId: number) => {
    onRemove(day, workoutId);
  };

  const handleReplaceWorkout = (day: DayOfWeek, workoutId: number) => {
    setEditingWorkout({ day, workoutId });
    // In a real implementation, this would open another modal or form
    // For now, we'll just show a placeholder action
    console.log('Replace workout:', { day, workoutId });
  };

  const dayOptions = Object.values(DayOfWeek).map(day => ({
    value: day,
    label: formatDayOfWeek(day)
  }));

  const daysOfWeek = Object.values(DayOfWeek);

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title="Update Workouts"
      size="lg"
      closeButtonProps={{ icon: <X size={16} /> }}
    >
      <Stack gap={16}>
        <Tabs value={selectedDay} onChange={(value) => setSelectedDay(value || DayOfWeek.MONDAY)}>
          <Tabs.List>
            {daysOfWeek.map((day) => (
              <Tabs.Tab key={day} value={day}>
                {formatDayOfWeek(day).slice(0, 3)}
              </Tabs.Tab>
            ))}
          </Tabs.List>

          {daysOfWeek.map((day) => (
            <Tabs.Panel key={day} value={day} pt="md">
              <Stack gap={12}>
                <Text fw={500} fz="sm">
                  {formatDayOfWeek(day)} Workouts
                </Text>
                
                {(!weeklyWorkouts[day] || weeklyWorkouts[day].length === 0) ? (
                  <Paper p="md" withBorder>
                    <Text fz="sm" c="dimmed" ta="center">
                      No workouts scheduled for {formatDayOfWeek(day)}
                    </Text>
                  </Paper>
                ) : (
                  <Stack gap={8}>
                    {weeklyWorkouts[day].map((workout) => (
                      <Paper key={workout.id} p="md" withBorder>
                        <Group justify="space-between" align="flex-start">
                          <div style={{ flex: 1 }}>
                            <Text fw={500} fz="sm" mb={4}>
                              {workout.name}
                            </Text>
                            <Text fz="xs" c="dimmed" mb={8}>
                              {workout.description}
                            </Text>
                            <Group gap={8}>
                              <Text fz="xs" c="orange">
                                {formatWorkoutType(workout.type as any)}
                              </Text>
                              <Text fz="xs" c="dimmed">
                                {formatDuration(workout.duration)}
                              </Text>
                              <Text fz="xs" c="dimmed">
                                {formatDifficultyLevel(workout.difficulty as any)}
                              </Text>
                            </Group>
                          </div>
                          
                          <Group gap={8}>
                            <Button
                              size="compact-xs"
                              variant="light"
                              color="orange"
                              leftSection={<Edit size={14} />}
                              onClick={() => handleReplaceWorkout(day as DayOfWeek, workout.id)}
                            >
                              Replace
                            </Button>
                            <ActionIcon
                              variant="subtle"
                              color="red"
                              size="sm"
                              onClick={() => handleRemoveWorkout(day as DayOfWeek, workout.id)}
                            >
                              <Trash2 size={16} />
                            </ActionIcon>
                          </Group>
                        </Group>
                      </Paper>
                    ))}
                  </Stack>
                )}
              </Stack>
            </Tabs.Panel>
          ))}
        </Tabs>

        <Group justify="flex-end">
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
        </Group>
      </Stack>
    </Modal>
  );
};

export default UpdateWorkoutModal;