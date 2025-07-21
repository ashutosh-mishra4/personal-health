import { WorkoutType, DifficultyLevel, EquipmentType, MealType, DietaryTag, NutrientType, GoalCategory, GoalPriority, GoalStatus, GoalFrequency, StreakType, ActivityLevel } from './enums';

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

export const formatGoalCategory = (category: GoalCategory): string => {
  switch (category) {
    case GoalCategory.CARDIO:
      return 'Cardio';
    case GoalCategory.STRENGTH:
      return 'Strength';
    case GoalCategory.FLEXIBILITY:
      return 'Flexibility';
    case GoalCategory.NUTRITION:
      return 'Nutrition';
    default:
      return 'Unknown';
  }
};

export const formatGoalPriority = (priority: GoalPriority): string => {
  switch (priority) {
    case GoalPriority.HIGH:
      return 'High Priority';
    case GoalPriority.MEDIUM:
      return 'Medium Priority';
    case GoalPriority.LOW:
      return 'Low Priority';
    default:
      return 'Unknown';
  }
};

export const formatGoalStatus = (status: GoalStatus): string => {
  switch (status) {
    case GoalStatus.NOT_STARTED:
      return 'Not Started';
    case GoalStatus.IN_PROGRESS:
      return 'In Progress';
    case GoalStatus.COMPLETED:
      return 'Completed';
    case GoalStatus.BEHIND:
      return 'Behind';
    case GoalStatus.ON_TRACK:
      return 'On Track';
    default:
      return 'Unknown';
  }
};

export const formatGoalFrequency = (frequency: GoalFrequency, customValue?: string): string => {
  switch (frequency) {
    case GoalFrequency.DAILY:
      return 'Daily';
    case GoalFrequency.WEEKLY:
      return 'Weekly';
    case GoalFrequency.MONTHLY:
      return 'Monthly';
    case GoalFrequency.CUSTOM:
      return customValue || 'Custom';
    default:
      return 'Unknown';
  }
};

export const formatProgressPercentage = (current: number, target: number): string => {
  const percentage = Math.round((current / target) * 100);
  return `${percentage}%`;
};

export const formatProgressFraction = (current: number, target: number): string => {
  return `${current}/${target}`;
};

export const formatStreakCount = (count: number, type: StreakType): string => {
  const unit = type === StreakType.DAILY ? 'day' : 'week';
  return count === 1 ? `${count} ${unit}` : `${count} ${unit}s`;
};

// String formatting functions for streak data
export const formatStreakDays = (days: number): string => {
  return `${days} ${days === 1 ? 'day' : 'days'}`;
};

export const formatDate = (date: Date): string => {
  return date.toLocaleDateString('en-US', { 
    weekday: 'long',
    year: 'numeric', 
    month: 'long',
    day: 'numeric'
  });
};

export const formatMonthYear = (date: Date): string => {
  return date.toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric'
  });
};

export const formatActivityLevel = (level: ActivityLevel): string => {
  switch (level) {
    case ActivityLevel.NONE:
      return 'No activity';
    case ActivityLevel.LOW:
      return 'Low activity';
    case ActivityLevel.MEDIUM:
      return 'Medium activity';
    case ActivityLevel.HIGH:
      return 'High activity';
    default:
      return 'No activity';
  }
};

// Utility functions for streak calculations
export const calculateStreaks = (activityData: any[], filterType: string) => {
  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();
  
  // Sort data by date
  const sortedData = [...activityData].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  
  // Filter activity based on type
  const getActivityCount = (day: any) => {
    switch (filterType) {
      case 'workouts':
        return day.workouts;
      case 'goals':
        return day.goals;
      case 'diet':
        return day.diet;
      case 'all':
      default:
        return day.workouts + day.goals + day.diet;
    }
  };
  
  // Calculate current streak (from today backwards)
  let currentStreak = 0;
  for (let i = sortedData.length - 1; i >= 0; i--) {
    const day = sortedData[i];
    const dayDate = new Date(day.date);
    
    if (dayDate > today) continue; // Skip future dates
    
    if (getActivityCount(day) > 0) {
      currentStreak++;
    } else {
      break;
    }
  }
  
  // Calculate longest streak
  let longestStreak = 0;
  let tempStreak = 0;
  
  for (const day of sortedData) {
    if (getActivityCount(day) > 0) {
      tempStreak++;
      longestStreak = Math.max(longestStreak, tempStreak);
    } else {
      tempStreak = 0;
    }
  }
  
  // Calculate missed days this month
  const missedDaysThisMonth = sortedData.filter(day => {
    const dayDate = new Date(day.date);
    return dayDate.getMonth() === currentMonth && 
           dayDate.getFullYear() === currentYear && 
           dayDate <= today &&
           getActivityCount(day) === 0;
  }).length;
  
  return {
    currentStreak,
    longestStreak,
    missedDaysThisMonth
  };
};