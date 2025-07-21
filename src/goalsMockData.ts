import { GoalCategory, GoalPriority, GoalStatus, GoalFrequency, StreakType } from './enums';

// Data passed as props to the root component
export const mockRootProps = {
  goals: [
    {
      id: 1,
      name: 'Run 10km this week',
      targetMetric: '10km weekly',
      category: GoalCategory.CARDIO as const,
      priority: GoalPriority.HIGH as const,
      status: GoalStatus.IN_PROGRESS as const,
      frequency: GoalFrequency.WEEKLY as const,
      customFrequency: null,
      deadline: '2024-01-07',
      currentProgress: 6,
      targetProgress: 10,
      createdAt: '2024-01-01'
    },
    {
      id: 2,
      name: 'Do 50 push-ups daily',
      targetMetric: '50 push-ups',
      category: GoalCategory.STRENGTH as const,
      priority: GoalPriority.HIGH as const,
      status: GoalStatus.ON_TRACK as const,
      frequency: GoalFrequency.DAILY as const,
      customFrequency: null,
      deadline: null,
      currentProgress: 45,
      targetProgress: 50,
      createdAt: '2024-01-01'
    },
    {
      id: 3,
      name: 'Complete 3 strength sessions',
      targetMetric: '3 sessions per week',
      category: GoalCategory.STRENGTH as const,
      priority: GoalPriority.MEDIUM as const,
      status: GoalStatus.IN_PROGRESS as const,
      frequency: GoalFrequency.CUSTOM as const,
      customFrequency: '3x per week',
      deadline: null,
      currentProgress: 2,
      targetProgress: 3,
      createdAt: '2024-01-01'
    },
    {
      id: 4,
      name: 'Stretch for 15 minutes',
      targetMetric: '15 minutes daily',
      category: GoalCategory.FLEXIBILITY as const,
      priority: GoalPriority.MEDIUM as const,
      status: GoalStatus.BEHIND as const,
      frequency: GoalFrequency.DAILY as const,
      customFrequency: null,
      deadline: null,
      currentProgress: 8,
      targetProgress: 15,
      createdAt: '2024-01-01'
    },
    {
      id: 5,
      name: 'Drink 8 glasses of water',
      targetMetric: '8 glasses daily',
      category: GoalCategory.NUTRITION as const,
      priority: GoalPriority.HIGH as const,
      status: GoalStatus.ON_TRACK as const,
      frequency: GoalFrequency.DAILY as const,
      customFrequency: null,
      deadline: null,
      currentProgress: 6,
      targetProgress: 8,
      createdAt: '2024-01-01'
    },
    {
      id: 6,
      name: 'Meditate for 10 minutes',
      targetMetric: '10 minutes daily',
      category: GoalCategory.FLEXIBILITY as const,
      priority: GoalPriority.LOW as const,
      status: GoalStatus.NOT_STARTED as const,
      frequency: GoalFrequency.DAILY as const,
      customFrequency: null,
      deadline: null,
      currentProgress: 0,
      targetProgress: 10,
      createdAt: '2024-01-01'
    }
  ],
  topPriorities: [
    {
      id: 1,
      name: 'Run 10km this week',
      currentProgress: 6,
      targetProgress: 10,
      status: GoalStatus.IN_PROGRESS as const
    },
    {
      id: 2,
      name: 'Do 50 push-ups daily',
      currentProgress: 45,
      targetProgress: 50,
      status: GoalStatus.ON_TRACK as const
    },
    {
      id: 5,
      name: 'Drink 8 glasses of water',
      currentProgress: 6,
      targetProgress: 8,
      status: GoalStatus.ON_TRACK as const
    }
  ],
  streaks: [
    {
      id: 1,
      goalName: 'Do 50 push-ups daily',
      currentStreak: 7,
      bestStreak: 12,
      type: StreakType.DAILY as const
    },
    {
      id: 2,
      goalName: 'Drink 8 glasses of water',
      currentStreak: 5,
      bestStreak: 8,
      type: StreakType.DAILY as const
    },
    {
      id: 3,
      goalName: 'Complete 3 strength sessions',
      currentStreak: 3,
      bestStreak: 5,
      type: StreakType.WEEKLY as const
    }
  ]
};