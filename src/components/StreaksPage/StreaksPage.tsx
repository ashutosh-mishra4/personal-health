import { useState, useMemo } from 'react';
import { Stack, Title } from '@mantine/core';
import { StreakFilterType } from '../../enums';
import { StreaksPageProps, DayActivity } from '../../types';
import { calculateStreaks } from '../../stringFormatters';
import StreakFilters from './StreakFilters/StreakFilters';
import StreakSummary from './StreakSummary/StreakSummary';
import ActivityGrid from './ActivityGrid/ActivityGrid';
import classes from './StreaksPage.module.css';

const StreaksPage = ({ 
  currentStreak, 
  longestStreak, 
  missedDaysThisMonth, 
  selectedFilter, 
  activityData,
  onFilterChange 
}: StreaksPageProps) => {
  const [activeFilter, setActiveFilter] = useState(selectedFilter);
  const [editableActivityData, setEditableActivityData] = useState<DayActivity[]>(activityData);

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    onFilterChange?.(filter);
  };

  // Calculate dynamic streaks based on selected filter
  const dynamicStreaks = useMemo(() => {
    return calculateStreaks(editableActivityData, activeFilter);
  }, [editableActivityData, activeFilter]);

  // Handle activity data updates from manual editing
  const handleActivityUpdate = (updatedData: DayActivity[]) => {
    setEditableActivityData(updatedData);
  };

  return (
    <Stack gap={32} className={classes.container}>
      <Stack gap={24}>
        <Title order={1} fw={700} fz={28} c="#1e293b">
          Streaks
        </Title>
        
        <StreakFilters 
          selectedFilter={activeFilter}
          onFilterChange={handleFilterChange}
        />
      </Stack>

      <StreakSummary 
        currentStreak={dynamicStreaks.currentStreak}
        longestStreak={dynamicStreaks.longestStreak}
        missedDaysThisMonth={dynamicStreaks.missedDaysThisMonth}
      />

      <ActivityGrid 
        activityData={editableActivityData}
        selectedFilter={activeFilter}
        onActivityUpdate={handleActivityUpdate}
      />
    </Stack>
  );
};

export default StreaksPage;