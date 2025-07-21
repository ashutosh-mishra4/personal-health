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