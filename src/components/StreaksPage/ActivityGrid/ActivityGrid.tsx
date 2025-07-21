import { Stack, Group, Text } from '@mantine/core';
import { DayActivity } from '../../../types';
import { StreakFilterType, ActivityLevel } from '../../../enums';
import ActivitySquare from './ActivitySquare/ActivitySquare';
import MonthLabel from './MonthLabel/MonthLabel';
import { formatMonthYear } from '../../../stringFormatters';
import classes from './ActivityGrid.module.css';

interface ActivityGridProps {
  activityData: DayActivity[];
  selectedFilter: string;
  onActivityUpdate?: (data: DayActivity[]) => void;
}

const ActivityGrid = ({ activityData, selectedFilter, onActivityUpdate }: ActivityGridProps) => {
  // Group data by months
  const groupedByMonth = activityData.reduce((acc, day) => {
    const date = new Date(day.date);
    const monthKey = formatMonthYear(date);
    
    if (!acc[monthKey]) {
      acc[monthKey] = [];
    }
    acc[monthKey].push(day);
    return acc;
  }, {} as Record<string, DayActivity[]>);

  // Split months into two rows (6 months each)
  const monthEntries = Object.entries(groupedByMonth);
  const firstRowMonths = monthEntries.slice(0, 6);
  const secondRowMonths = monthEntries.slice(6, 12);

  // Filter activity level based on selected filter
  const getFilteredActivityLevel = (day: DayActivity): ActivityLevel => {
    let activityCount = 0;
    
    switch (selectedFilter) {
      case StreakFilterType.WORKOUTS:
        activityCount = day.workouts;
        break;
      case StreakFilterType.GOALS:
        activityCount = day.goals;
        break;
      case StreakFilterType.DIET:
        activityCount = day.diet;
        break;
      case StreakFilterType.ALL:
      default:
        activityCount = day.workouts + day.goals + day.diet;
        break;
    }

    if (activityCount >= 4) return ActivityLevel.HIGH;
    if (activityCount >= 2) return ActivityLevel.MEDIUM;
    if (activityCount >= 1) return ActivityLevel.LOW;
    return ActivityLevel.NONE;
  };

  // Handle activity toggle
  const handleActivityToggle = (date: string) => {
    const today = new Date();
    const clickedDate = new Date(date);
    
    // Don't allow editing future dates
    if (clickedDate > today) return;
    
    const updatedData = activityData.map(day => {
      if (day.date === date) {
        let newWorkouts = day.workouts;
        let newGoals = day.goals;
        let newDiet = day.diet;
        
        // Toggle activity based on selected filter
        switch (selectedFilter) {
          case StreakFilterType.WORKOUTS:
            newWorkouts = day.workouts > 0 ? 0 : 1;
            break;
          case StreakFilterType.GOALS:
            newGoals = day.goals > 0 ? 0 : 1;
            break;
          case StreakFilterType.DIET:
            newDiet = day.diet > 0 ? 0 : 1;
            break;
          case StreakFilterType.ALL:
          default:
            // For 'all', toggle the overall activity
            const hasActivity = day.workouts + day.goals + day.diet > 0;
            if (hasActivity) {
              newWorkouts = newGoals = newDiet = 0;
            } else {
              newWorkouts = newGoals = newDiet = 1;
            }
            break;
        }
        
        // Recalculate level
        const totalActivities = newWorkouts + newGoals + newDiet;
        let newLevel = ActivityLevel.NONE;
        if (totalActivities >= 4) newLevel = ActivityLevel.HIGH;
        else if (totalActivities >= 2) newLevel = ActivityLevel.MEDIUM;
        else if (totalActivities >= 1) newLevel = ActivityLevel.LOW;
        
        return {
          ...day,
          workouts: newWorkouts,
          goals: newGoals,
          diet: newDiet,
          level: newLevel
        };
      }
      return day;
    });
    
    onActivityUpdate?.(updatedData);
  };

  // Render month group
  const renderMonthGroup = ([month, days]: [string, DayActivity[]]) => (
    <div key={month} className={classes.monthGroup}>
      <MonthLabel month={month} />
      <div className={classes.monthGrid}>
        {days.map((day) => {
          const date = new Date(day.date);
          const dayOfWeek = (date.getDay() + 6) % 7; // Convert Sunday=0 to Monday=0
          
          return (
            <ActivitySquare
              key={day.date}
              date={day.date}
              level={getFilteredActivityLevel(day)}
              activities={day}
              selectedFilter={selectedFilter}
              onToggle={handleActivityToggle}
              style={{
                gridRow: dayOfWeek + 1
              }}
            />
          );
        })}
      </div>
    </div>
  );

  // Generate weekday labels
  const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  return (
    <Stack gap={32}>
      <Text fz={18} fw={600} c="#475569">Activity Overview</Text>
      
      <Stack gap={16}>
        {/* First row - First 6 months */}
        <div className={classes.gridContainer}>
          <div className={classes.weekdayLabels}>
            {weekdays.map((day) => (
              <Text key={day} fz={13} c="#64748b" ta="center">
                {day}
              </Text>
            ))}
          </div>
          <div className={classes.activityGrid}>
            {firstRowMonths.map(renderMonthGroup)}
          </div>
        </div>

        {/* Second row - Next 6 months */}
        <div className={classes.gridContainer}>
          <div className={classes.weekdayLabels}>
            {weekdays.map((day) => (
              <Text key={day} fz={13} c="#64748b" ta="center">
                {day}
              </Text>
            ))}
          </div>
          <div className={classes.activityGrid}>
            {secondRowMonths.map(renderMonthGroup)}
          </div>
        </div>
      </Stack>

      {/* Legend */}
      <Group gap={16} className={classes.legend}>
        <Text fz={12} c="#64748b">Less</Text>
        <Group gap={4}>
          <div className={`${classes.legendSquare} ${classes.levelNone}`} />
          <div className={`${classes.legendSquare} ${classes.levelLow}`} />
          <div className={`${classes.legendSquare} ${classes.levelMedium}`} />
          <div className={`${classes.legendSquare} ${classes.levelHigh}`} />
        </Group>
        <Text fz={12} c="#64748b">More</Text>
      </Group>
    </Stack>
  );
};

export default ActivityGrid;