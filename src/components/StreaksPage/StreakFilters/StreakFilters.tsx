import { SegmentedControl } from '@mantine/core';
import { StreakFilterType } from '../../../enums';
import classes from './StreakFilters.module.css';

interface StreakFiltersProps {
  selectedFilter: string;
  onFilterChange: (filter: string) => void;
}

const StreakFilters = ({ selectedFilter, onFilterChange }: StreakFiltersProps) => {
  const filterOptions = [
    { label: 'All', value: StreakFilterType.ALL },
    { label: 'Workouts', value: StreakFilterType.WORKOUTS },
    { label: 'Goals', value: StreakFilterType.GOALS },
    { label: 'Diet', value: StreakFilterType.DIET }
  ];

  return (
    <SegmentedControl
      value={selectedFilter}
      onChange={onFilterChange}
      data={filterOptions}
      className={classes.filters}
      radius="md"
      size="md"
    />
  );
};

export default StreakFilters;