import { ActivityLevel, StreakFilterType } from './enums';

// Generate 365 days of mock activity data
const generateActivityData = () => {
  const data = [];
  const startDate = new Date('2024-01-01');
  
  for (let i = 0; i < 365; i++) {
    const currentDate = new Date(startDate);
    currentDate.setDate(startDate.getDate() + i);
    
    // Generate random activity levels with some patterns
    const workouts = Math.random() > 0.7 ? Math.floor(Math.random() * 3) : 0;
    const goals = Math.random() > 0.5 ? Math.floor(Math.random() * 4) : 0;
    const diet = Math.random() > 0.6 ? Math.floor(Math.random() * 2) : 0;
    
    // Determine activity level based on total activities
    const totalActivities = workouts + goals + diet;
    let level = ActivityLevel.NONE;
    if (totalActivities >= 4) level = ActivityLevel.HIGH;
    else if (totalActivities >= 2) level = ActivityLevel.MEDIUM;
    else if (totalActivities >= 1) level = ActivityLevel.LOW;
    
    data.push({
      date: currentDate.toISOString().split('T')[0],
      workouts,
      goals,
      diet,
      level: level
    });
  }
  
  return data;
};

// Data passed as props to the root component
export const mockRootProps = {
  currentStreak: 12,
  longestStreak: 28,
  missedDaysThisMonth: 3,
  selectedFilter: StreakFilterType.ALL as const,
  activityData: generateActivityData()
};