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