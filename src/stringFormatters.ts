import { WorkoutType, DifficultyLevel, EquipmentType } from './enums';

export const formatDuration = (minutes: number): string => {
  if (minutes < 60) {
    return `${minutes} min`;
  }
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return remainingMinutes > 0 ? `${hours}h ${remainingMinutes}m` : `${hours}h`;
};

export const formatDifficultyLevel = (level: DifficultyLevel): string => {
  switch (level) {
    case DifficultyLevel.BEGINNER:
      return 'Beginner';
    case DifficultyLevel.INTERMEDIATE:
      return 'Intermediate';
    case DifficultyLevel.ADVANCED:
      return 'Advanced';
    default:
      return 'Unknown';
  }
};

export const formatWorkoutType = (type: WorkoutType): string => {
  switch (type) {
    case WorkoutType.STRENGTH:
      return 'Strength';
    case WorkoutType.CARDIO:
      return 'Cardio';
    case WorkoutType.YOGA:
      return 'Yoga';
    case WorkoutType.STRETCH:
      return 'Stretch';
    default:
      return 'Unknown';
  }
};

export const formatEquipment = (equipment: EquipmentType[]): string => {
  if (equipment.length === 0 || equipment.includes(EquipmentType.NONE)) {
    return 'No Equipment';
  }
  
  const equipmentNames = equipment.map(eq => {
    switch (eq) {
      case EquipmentType.DUMBBELLS:
        return 'Dumbbells';
      case EquipmentType.RESISTANCE_BANDS:
        return 'Resistance Bands';
      case EquipmentType.YOGA_MAT:
        return 'Yoga Mat';
      case EquipmentType.KETTLEBELL:
        return 'Kettlebell';
      case EquipmentType.BARBELL:
        return 'Barbell';
      default:
        return 'Unknown';
    }
  });
  
  return equipmentNames.join(', ');
};

export const formatTimer = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
};