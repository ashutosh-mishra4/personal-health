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