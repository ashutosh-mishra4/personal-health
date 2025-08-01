// Props types (data passed to components)
export interface WorkoutPageProps {
  workouts: Workout[];
  currentWorkoutSession: WorkoutSession | null;
  filters: WorkoutFilters;
  sortOption: string;
}

export interface Workout {
  id: number;
  name: string;
  description: string;
  type: string;
  duration: number;
  difficulty: string;
  equipment: string[];
  thumbnail: string;
  exercises: Exercise[];
  status: string;
}

export interface Exercise {
  name: string;
  sets: number;
  reps: number;
  restTime: number;
}

export interface WorkoutSession {
  workoutId: number;
  currentExerciseIndex: number;
  isActive: boolean;
  timeRemaining: number;
  completedExercises: boolean[];
}

export interface WorkoutFilters {
  selectedType: string | null;
  selectedDifficulty: string | null;
  selectedEquipment: string | null;
  searchQuery: string;
}

// Store types (global state data)
export interface WorkoutStoreTypes {
  workouts: Workout[];
  currentSession: WorkoutSession | null;
  filters: WorkoutFilters;
  sortOption: string;
  isLoading: boolean;
}

// Query types (API response data)
export interface WorkoutQueryTypes {
  workouts: Workout[];
  workout: Workout;
}

// Diet Plan types
export interface DietPlanProps {
  meals: Meal[];
  nutritionSummary: NutritionSummary;
  prepList: PrepItem[];
}

export interface Meal {
  id: number;
  name: string;
  description: string;
  image: string;
  calories: number;
  mealType: string;
  time: string;
  tags: string[];
}

export interface NutritionSummary {
  calories: NutrientProgress;
  protein: NutrientProgress;
  carbs: NutrientProgress;
  fats: NutrientProgress;
}

export interface NutrientProgress {
  consumed: number;
  goal: number;
}

export interface PrepItem {
  id: number;
  item: string;
  completed: boolean;
  icon: string;
}

// Goals page types
export interface GoalsPageProps {
  goals: Goal[];
  topPriorities: TopPriorityGoal[];
  streaks: GoalStreak[];
  onAddGoal?: (category: string) => void;
  onEditGoal?: (goal: Goal) => void;
  onMarkComplete?: (goalId: number) => void;
  onRemoveGoal?: (goalId: number) => void;
}

export interface Goal {
  id: number;
  name: string;
  targetMetric: string;
  category: string;
  priority: string;
  status: string;
  frequency: string;
  customFrequency: string | null;
  deadline: string | null;
  currentProgress: number;
  targetProgress: number;
  createdAt: string;
}

export interface TopPriorityGoal {
  id: number;
  name: string;
  currentProgress: number;
  targetProgress: number;
  status: string;
}

export interface GoalStreak {
  id: number;
  goalName: string;
  currentStreak: number;
  bestStreak: number;
  type: string;
}

// Streaks page types
export interface StreaksPageProps {
  currentStreak: number;
  longestStreak: number;
  missedDaysThisMonth: number;
  selectedFilter: string;
  activityData: DayActivity[];
  onFilterChange?: (filter: string) => void;
  onActivityUpdate?: (data: DayActivity[]) => void;
}

export interface DayActivity {
  date: string;
  workouts: number;
  goals: number;
  diet: number;
  level: string;
}

export interface StreakSummary {
  currentStreak: number;
  longestStreak: number;
  missedDaysThisMonth: number;
}

// Store types (global state data)
export interface StreakStoreTypes {
  activityData: DayActivity[];
  selectedFilter: string;
  streakSummary: StreakSummary;
  isLoading: boolean;
}

// Query types (API response data)  
export interface StreakQueryTypes {
  activityData: DayActivity[];
  streakSummary: StreakSummary;
}

import { DayOfWeek } from './enums';

// Props types for My Workouts components
export interface MyWorkoutsProps {
  weeklyWorkouts: WeeklyWorkouts;
  onAddWorkout: (workout: WorkoutFormData) => void;
  onUpdateWorkout: (day: DayOfWeek, workoutId: number, workout: WorkoutFormData) => void;
  onRemoveWorkout: (day: DayOfWeek, workoutId: number) => void;
}

export interface WeeklyWorkouts {
  [key: string]: ScheduledWorkout[];
}

export interface ScheduledWorkout {
  id: number;
  name: string;
  description: string;
  type: string;
  duration: number;
  difficulty: string;
  equipment: string[];
  exercises: Exercise[];
  status: string;
}

export interface WorkoutFormData {
  name: string;
  description: string;
  type: string;
  duration: number;
  difficulty: string;
  equipment: string[];
  exercises: Exercise[];
  day: string;
}

export interface AddWorkoutModalProps {
  opened: boolean;
  onClose: () => void;
  onSave: (workout: WorkoutFormData) => void;
}

export interface UpdateWorkoutModalProps {
  opened: boolean;
  onClose: () => void;
  weeklyWorkouts: WeeklyWorkouts;
  onRemove: (day: DayOfWeek, workoutId: number) => void;
  onReplace: (day: DayOfWeek, workoutId: number, workout: WorkoutFormData) => void;
}

// Props for the enhanced WorkoutPage component
export interface EnhancedWorkoutPageProps extends WorkoutPageProps {
  weeklyWorkouts: WeeklyWorkouts;
  onAddWorkout: (workout: WorkoutFormData) => void;
  onUpdateWorkout: (day: DayOfWeek, workoutId: number, workout: WorkoutFormData) => void;
  onRemoveWorkout: (day: DayOfWeek, workoutId: number) => void;
  currentPage?: string;
}