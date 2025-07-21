import { WorkoutType, DifficultyLevel, EquipmentType, WorkoutStatus } from './enums';

// Data passed as props to the root component
export const mockRootProps = {
  workouts: [
    {
      id: 1,
      name: "Full Body Strength",
      description: "Complete strength training targeting all major muscle groups",
      type: WorkoutType.STRENGTH,
      duration: 45,
      difficulty: DifficultyLevel.INTERMEDIATE,
      equipment: [EquipmentType.DUMBBELLS],
      thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      exercises: [
        { name: "Push-ups", sets: 3, reps: 15, restTime: 60 },
        { name: "Squats", sets: 3, reps: 20, restTime: 60 },
        { name: "Dumbbell Rows", sets: 3, reps: 12, restTime: 90 }
      ],
      status: WorkoutStatus.NOT_STARTED
    },
    {
      id: 2,
      name: "HIIT Cardio Blast",
      description: "High-intensity interval training for maximum calorie burn",
      type: WorkoutType.CARDIO,
      duration: 30,
      difficulty: DifficultyLevel.ADVANCED,
      equipment: [EquipmentType.NONE],
      thumbnail: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop",
      exercises: [
        { name: "Burpees", sets: 4, reps: 10, restTime: 30 },
        { name: "Mountain Climbers", sets: 4, reps: 20, restTime: 30 },
        { name: "Jump Squats", sets: 4, reps: 15, restTime: 30 }
      ],
      status: WorkoutStatus.NOT_STARTED
    },
    {
      id: 3,
      name: "Morning Yoga Flow",
      description: "Gentle yoga sequence to start your day with mindfulness",
      type: WorkoutType.YOGA,
      duration: 25,
      difficulty: DifficultyLevel.BEGINNER,
      equipment: [EquipmentType.YOGA_MAT],
      thumbnail: "https://images.unsplash.com/photo-1506629905607-ce51f1c3e8a5?w=400&h=300&fit=crop",
      exercises: [
        { name: "Sun Salutation", sets: 3, reps: 1, restTime: 15 },
        { name: "Warrior Pose", sets: 2, reps: 1, restTime: 30 },
        { name: "Child's Pose", sets: 1, reps: 1, restTime: 60 }
      ],
      status: WorkoutStatus.SCHEDULED
    },
    {
      id: 4,
      name: "Deep Stretch Recovery",
      description: "Relaxing stretches for muscle recovery and flexibility",
      type: WorkoutType.STRETCH,
      duration: 20,
      difficulty: DifficultyLevel.BEGINNER,
      equipment: [EquipmentType.YOGA_MAT],
      thumbnail: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=300&fit=crop",
      exercises: [
        { name: "Hamstring Stretch", sets: 2, reps: 1, restTime: 30 },
        { name: "Hip Flexor Stretch", sets: 2, reps: 1, restTime: 30 },
        { name: "Shoulder Stretch", sets: 2, reps: 1, restTime: 30 }
      ],
      status: WorkoutStatus.COMPLETED
    },
    {
      id: 5,
      name: "Upper Body Power",
      description: "Intense upper body workout focusing on strength and power",
      type: WorkoutType.STRENGTH,
      duration: 40,
      difficulty: DifficultyLevel.ADVANCED,
      equipment: [EquipmentType.DUMBBELLS, EquipmentType.RESISTANCE_BANDS],
      thumbnail: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400&h=300&fit=crop",
      exercises: [
        { name: "Bench Press", sets: 4, reps: 8, restTime: 120 },
        { name: "Pull-ups", sets: 3, reps: 10, restTime: 90 },
        { name: "Shoulder Press", sets: 3, reps: 12, restTime: 90 }
      ],
      status: WorkoutStatus.NOT_STARTED
    },
    {
      id: 6,
      name: "Beginner Cardio",
      description: "Easy-paced cardio workout perfect for beginners",
      type: WorkoutType.CARDIO,
      duration: 20,
      difficulty: DifficultyLevel.BEGINNER,
      equipment: [EquipmentType.NONE],
      thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      exercises: [
        { name: "Walking in Place", sets: 3, reps: 1, restTime: 60 },
        { name: "Arm Circles", sets: 2, reps: 15, restTime: 30 },
        { name: "Gentle Squats", sets: 2, reps: 10, restTime: 60 }
      ],
      status: WorkoutStatus.NOT_STARTED
    }
  ],
  currentWorkoutSession: null,
  filters: {
    selectedType: null,
    selectedDifficulty: null,
    selectedEquipment: null,
    searchQuery: ""
  },
  sortOption: "name_asc" as const
};