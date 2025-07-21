// Workout related enums for the fitness application

export enum WorkoutType {
  STRENGTH = 'strength',
  CARDIO = 'cardio', 
  YOGA = 'yoga',
  STRETCH = 'stretch'
}

export enum DifficultyLevel {
  BEGINNER = 'beginner',
  INTERMEDIATE = 'intermediate',
  ADVANCED = 'advanced'
}

export enum EquipmentType {
  NONE = 'none',
  DUMBBELLS = 'dumbbells',
  RESISTANCE_BANDS = 'resistance_bands',
  YOGA_MAT = 'yoga_mat',
  KETTLEBELL = 'kettlebell',
  BARBELL = 'barbell'
}

export enum WorkoutStatus {
  NOT_STARTED = 'not_started',
  IN_PROGRESS = 'in_progress', 
  COMPLETED = 'completed',
  SCHEDULED = 'scheduled'
}

export enum SortOption {
  DURATION_ASC = 'duration_asc',
  DURATION_DESC = 'duration_desc',
  DIFFICULTY_ASC = 'difficulty_asc',
  DIFFICULTY_DESC = 'difficulty_desc',
  NAME_ASC = 'name_asc',
  NAME_DESC = 'name_desc'
}

// Diet related enums for the fitness application

export enum MealType {
  BREAKFAST = 'breakfast',
  LUNCH = 'lunch',
  DINNER = 'dinner',
  SNACKS = 'snacks'
}

export enum DietaryTag {
  HIGH_PROTEIN = 'high_protein',
  LOW_CARB = 'low_carb',
  VEGAN = 'vegan',
  KETO = 'keto',
  GLUTEN_FREE = 'gluten_free',
  DAIRY_FREE = 'dairy_free',
  VEGETARIAN = 'vegetarian',
  PALEO = 'paleo'
}

export enum NutrientType {
  CALORIES = 'calories',
  PROTEIN = 'protein',
  CARBS = 'carbs',
  FATS = 'fats'
}

// Goal related enums for the fitness application

export enum GoalCategory {
  CARDIO = 'cardio',
  STRENGTH = 'strength', 
  FLEXIBILITY = 'flexibility',
  NUTRITION = 'nutrition'
}

export enum GoalPriority {
  HIGH = 'high',
  MEDIUM = 'medium',
  LOW = 'low'
}

export enum GoalStatus {
  NOT_STARTED = 'not_started',
  IN_PROGRESS = 'in_progress',
  COMPLETED = 'completed',
  BEHIND = 'behind',
  ON_TRACK = 'on_track'
}

export enum GoalFrequency {
  DAILY = 'daily',
  WEEKLY = 'weekly',
  MONTHLY = 'monthly',
  CUSTOM = 'custom'
}

export enum StreakType {
  DAILY = 'daily',
  WEEKLY = 'weekly'
}

// Activity level enums for streak visualization
export enum ActivityLevel {
  NONE = 'none',
  LOW = 'low', 
  MEDIUM = 'medium',
  HIGH = 'high'
}

export enum StreakFilterType {
  ALL = 'all',
  WORKOUTS = 'workouts',
  GOALS = 'goals', 
  DIET = 'diet'
}