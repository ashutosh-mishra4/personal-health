import { useState } from 'react';
import { Modal, Stack, Group, Button, TextInput, Textarea, NumberInput, Select, MultiSelect } from '@mantine/core';
import { Calendar, X } from 'lucide-react';
import { AddWorkoutModalProps, WorkoutFormData, Exercise } from '../../types';
import { DayOfWeek, WorkoutType, DifficultyLevel, EquipmentType } from '../../enums';
import { formatDayOfWeek, formatWorkoutType, formatDifficultyLevel, formatEquipment } from '../../stringFormatters';
import ExerciseForm from '../ExerciseForm/ExerciseForm';

const AddWorkoutModal = ({ opened, onClose, onSave }: AddWorkoutModalProps) => {
  const [formData, setFormData] = useState<WorkoutFormData>({
    name: '',
    description: '',
    type: '',
    duration: 30,
    difficulty: '',
    equipment: [],
    exercises: [],
    day: ''
  });

  const [exercises, setExercises] = useState<Exercise[]>([]);

  const handleInputChange = (field: keyof WorkoutFormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleAddExercise = (exercise: Exercise) => {
    const newExercises = [...exercises, exercise];
    setExercises(newExercises);
    setFormData(prev => ({ ...prev, exercises: newExercises }));
  };

  const handleRemoveExercise = (index: number) => {
    const newExercises = exercises.filter((_, i) => i !== index);
    setExercises(newExercises);
    setFormData(prev => ({ ...prev, exercises: newExercises }));
  };

  const handleSave = () => {
    if (isFormValid()) {
      onSave(formData);
      handleReset();
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      description: '',
      type: '',
      duration: 30,
      difficulty: '',
      equipment: [],
      exercises: [],
      day: ''
    });
    setExercises([]);
  };

  const handleClose = () => {
    handleReset();
    onClose();
  };

  const isFormValid = () => {
    return formData.name.trim() !== '' &&
           formData.description.trim() !== '' &&
           formData.type !== '' &&
           formData.difficulty !== '' &&
           formData.day !== '' &&
           formData.duration > 0 &&
           exercises.length > 0;
  };

  const dayOptions = Object.values(DayOfWeek).map(day => ({
    value: day,
    label: formatDayOfWeek(day)
  }));

  const typeOptions = Object.values(WorkoutType).map(type => ({
    value: type,
    label: formatWorkoutType(type)
  }));

  const difficultyOptions = Object.values(DifficultyLevel).map(level => ({
    value: level,
    label: formatDifficultyLevel(level)
  }));

  const equipmentOptions = Object.values(EquipmentType).map(equipment => ({
    value: equipment,
    label: formatEquipment([equipment])
  }));

  return (
    <Modal
      opened={opened}
      onClose={handleClose}
      title="Add Workout"
      size="lg"
      closeButtonProps={{ icon: <X size={16} /> }}
    >
      <Stack gap={16}>
        <Select
          label="Select Day"
          placeholder="Choose a day"
          data={dayOptions}
          value={formData.day}
          onChange={(value) => handleInputChange('day', value)}
          leftSection={<Calendar size={16} />}
          required
        />

        <TextInput
          label="Workout Name"
          placeholder="Enter workout name"
          value={formData.name}
          onChange={(event) => handleInputChange('name', event.target.value)}
          required
        />

        <Textarea
          label="Description"
          placeholder="Enter workout description"
          value={formData.description}
          onChange={(event) => handleInputChange('description', event.target.value)}
          minRows={3}
          required
        />

        <Group grow>
          <Select
            label="Workout Type"
            placeholder="Select type"
            data={typeOptions}
            value={formData.type}
            onChange={(value) => handleInputChange('type', value)}
            required
          />

          <NumberInput
            label="Duration (minutes)"
            placeholder="30"
            value={formData.duration}
            onChange={(value) => handleInputChange('duration', value)}
            min={5}
            max={180}
            required
          />
        </Group>

        <Group grow>
          <Select
            label="Difficulty Level"
            placeholder="Select difficulty"
            data={difficultyOptions}
            value={formData.difficulty}
            onChange={(value) => handleInputChange('difficulty', value)}
            required
          />

          <MultiSelect
            label="Equipment"
            placeholder="Select equipment"
            data={equipmentOptions}
            value={formData.equipment}
            onChange={(value) => handleInputChange('equipment', value)}
          />
        </Group>

        <ExerciseForm
          exercises={exercises}
          onAddExercise={handleAddExercise}
          onRemoveExercise={handleRemoveExercise}
        />

        <Group justify="flex-end" gap={12}>
          <Button variant="outline" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            onClick={handleSave}
            disabled={!isFormValid()}
            color="orange"
          >
            Save Workout
          </Button>
        </Group>
      </Stack>
    </Modal>
  );
};

export default AddWorkoutModal;