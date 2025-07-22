import { useState } from 'react';
import { Stack, Group, Text, Button, SimpleGrid } from '@mantine/core';
import { Plus, Edit } from 'lucide-react';
import { MyWorkoutsProps, WorkoutFormData } from '../../types';
import { DayOfWeek } from '../../enums';
import DayWorkoutCard from '../DayWorkoutCard/DayWorkoutCard';
import AddWorkoutModal from '../AddWorkoutModal/AddWorkoutModal';
import UpdateWorkoutModal from '../UpdateWorkoutModal/UpdateWorkoutModal';
import classes from './MyWorkoutsSection.module.css';

const MyWorkoutsSection = ({ weeklyWorkouts, onAddWorkout, onUpdateWorkout, onRemoveWorkout }: MyWorkoutsProps) => {
  const [addModalOpened, setAddModalOpened] = useState(false);
  const [updateModalOpened, setUpdateModalOpened] = useState(false);

  const handleAddWorkout = (workout: WorkoutFormData) => {
    onAddWorkout(workout);
    setAddModalOpened(false);
  };

  const handleRemoveWorkout = (day: DayOfWeek, workoutId: number) => {
    onRemoveWorkout(day, workoutId);
  };

  const handleReplaceWorkout = (day: DayOfWeek, workoutId: number, workout: WorkoutFormData) => {
    onUpdateWorkout(day, workoutId, workout);
  };

  const daysOfWeek = [
    DayOfWeek.MONDAY,
    DayOfWeek.TUESDAY,
    DayOfWeek.WEDNESDAY,
    DayOfWeek.THURSDAY,
    DayOfWeek.FRIDAY,
    DayOfWeek.SATURDAY,
    DayOfWeek.SUNDAY
  ];

  return (
    <Stack gap={24} className={classes.section}>
      <Group justify="space-between" align="center">
        <Text fz={24} fw={700} c="#1e293b">My Workouts</Text>
        <Group gap={12}>
          <Button
            leftSection={<Plus size={16} />}
            onClick={() => setAddModalOpened(true)}
            variant="filled"
            color="orange"
          >
            Add workout
          </Button>
          <Button
            leftSection={<Edit size={16} />}
            onClick={() => setUpdateModalOpened(true)}
            variant="outline"
            color="orange"
          >
            Update workout
          </Button>
        </Group>
      </Group>

      <SimpleGrid cols={7} spacing="md" className={classes.weekGrid}>
        {daysOfWeek.map((day) => (
          <DayWorkoutCard
            key={day}
            day={day}
            workouts={weeklyWorkouts[day] || []}
          />
        ))}
      </SimpleGrid>

      <AddWorkoutModal
        opened={addModalOpened}
        onClose={() => setAddModalOpened(false)}
        onSave={handleAddWorkout}
      />

      <UpdateWorkoutModal
        opened={updateModalOpened}
        onClose={() => setUpdateModalOpened(false)}
        weeklyWorkouts={weeklyWorkouts}
        onRemove={handleRemoveWorkout}
        onReplace={handleReplaceWorkout}
      />
    </Stack>
  );
};

export default MyWorkoutsSection;