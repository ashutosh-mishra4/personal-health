import { WorkoutType, DifficultyLevel, EquipmentType, MealType, DietaryTag, NutrientType } from './enums';

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

export const formatMealType = (mealType: MealType): string => {
  switch (mealType) {
    case MealType.BREAKFAST:
      return 'Breakfast';
    case MealType.LUNCH:
      return 'Lunch';
    case MealType.DINNER:
      return 'Dinner';
    case MealType.SNACKS:
      return 'Snacks';
    default:
      return 'Unknown';
  }
};

export const formatDietaryTag = (tag: DietaryTag): string => {
  switch (tag) {
    case DietaryTag.HIGH_PROTEIN:
      return 'High Protein';
    case DietaryTag.LOW_CARB:
      return 'Low Carb';
    case DietaryTag.VEGAN:
      return 'Vegan';
    case DietaryTag.KETO:
      return 'Keto';
    case DietaryTag.GLUTEN_FREE:
      return 'Gluten Free';
    case DietaryTag.DAIRY_FREE:
      return 'Dairy Free';
    case DietaryTag.VEGETARIAN:
      return 'Vegetarian';
    case DietaryTag.PALEO:
      return 'Paleo';
    default:
      return 'Unknown';
  }
};

export const formatCalories = (calories: number): string => {
  return `${calories} kcal`;
};

export const formatNutrient = (amount: number, type: NutrientType): string => {
  if (type === NutrientType.CALORIES) {
    return `${amount} kcal`;
  }
  return `${amount}g`;
};

export const formatMealTime = (time: string): string => {
  return time;
};