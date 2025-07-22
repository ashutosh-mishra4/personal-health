import { WorkoutType, DifficultyLevel, EquipmentType, WorkoutStatus, DayOfWeek } from './enums';

// Data for weekly workout schedule
export const mockWeeklyWorkouts = {
  [DayOfWeek.MONDAY]: [
    {
      id: 101,
      name: "Morning Strength Training",
      description: "Full body strength workout to start the week",
      type: WorkoutType.STRENGTH,
      duration: 45,
      difficulty: DifficultyLevel.INTERMEDIATE,
      equipment: [EquipmentType.DUMBBELLS],
      exercises: [
        { name: "Push-ups", sets: 3, reps: 15, restTime: 60 },
        { name: "Squats", sets: 3, reps: 20, restTime: 60 }
      ],
      status: WorkoutStatus.SCHEDULED
    }
  ],
  [DayOfWeek.TUESDAY]: [
    {
      id: 102,
      name: "HIIT Cardio",
      description: "High intensity interval training session",
      type: WorkoutType.CARDIO,
      duration: 30,
      difficulty: DifficultyLevel.ADVANCED,
      equipment: [EquipmentType.NONE],
      exercises: [
        { name: "Burpees", sets: 4, reps: 10, restTime: 30 },
        { name: "Mountain Climbers", sets: 4, reps: 20, restTime: 30 }
      ],
      status: WorkoutStatus.SCHEDULED
    }
  ],
  [DayOfWeek.WEDNESDAY]: [
    {
      id: 103,
      name: "Yoga Flow",
      description: "Relaxing yoga session for flexibility",
      type: WorkoutType.YOGA,
      duration: 25,
      difficulty: DifficultyLevel.BEGINNER,
      equipment: [EquipmentType.YOGA_MAT],
      exercises: [
        { name: "Sun Salutation", sets: 3, reps: 1, restTime: 15 },
        { name: "Warrior Pose", sets: 2, reps: 1, restTime: 30 }
      ],
      status: WorkoutStatus.SCHEDULED
    }
  ],
  [DayOfWeek.THURSDAY]: [],
  [DayOfWeek.FRIDAY]: [
    {
      id: 104,
      name: "Upper Body Focus",
      description: "Targeted upper body strength training",
      type: WorkoutType.STRENGTH,
      duration: 40,
      difficulty: DifficultyLevel.INTERMEDIATE,
      equipment: [EquipmentType.DUMBBELLS, EquipmentType.RESISTANCE_BANDS],
      exercises: [
        { name: "Bench Press", sets: 4, reps: 8, restTime: 120 },
        { name: "Pull-ups", sets: 3, reps: 10, restTime: 90 }
      ],
      status: WorkoutStatus.SCHEDULED
    }
  ],
  [DayOfWeek.SATURDAY]: [
    {
      id: 105,
      name: "Weekend Stretch",
      description: "Gentle stretching and recovery session",
      type: WorkoutType.STRETCH,
      duration: 20,
      difficulty: DifficultyLevel.BEGINNER,
      equipment: [EquipmentType.YOGA_MAT],
      exercises: [
        { name: "Hamstring Stretch", sets: 2, reps: 1, restTime: 30 },
        { name: "Hip Flexor Stretch", sets: 2, reps: 1, restTime: 30 }
      ],
      status: WorkoutStatus.SCHEDULED
    }
  ],
  [DayOfWeek.SUNDAY]: [
    {
      id: 106,
      name: "Active Recovery",
      description: "Light movement and mobility work",
      type: WorkoutType.STRETCH,
      duration: 15,
      difficulty: DifficultyLevel.BEGINNER,
      equipment: [EquipmentType.NONE],
      exercises: [
        { name: "Walking", sets: 1, reps: 1, restTime: 0 },
        { name: "Light Stretching", sets: 1, reps: 1, restTime: 0 }
      ],
      status: WorkoutStatus.SCHEDULED
    }
  ]
};