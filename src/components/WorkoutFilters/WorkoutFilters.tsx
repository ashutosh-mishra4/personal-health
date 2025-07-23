import { Group, TextInput, Select, Tabs, Paper } from '@mantine/core';
import { Search, Dumbbell, Heart, PersonStanding, BicepsFlexed } from 'lucide-react';
import { WorkoutFilters as IWorkoutFilters } from '../../types';
import { WorkoutType, DifficultyLevel, EquipmentType } from '../../enums';
import classes from './WorkoutFilters.module.css';

interface WorkoutFiltersProps {
  filters: IWorkoutFilters;
  sortOption: string;
  onFilterChange: (filters: Partial<IWorkoutFilters>) => void;
  onSortChange: (sortOption: string) => void;
}

const WorkoutFilters = ({ filters, sortOption, onFilterChange, onSortChange }: WorkoutFiltersProps) => {
  const workoutTypeIcons = {
    strength: <Dumbbell size={16} />,
    cardio: <Heart size={16} />,
    yoga: <PersonStanding size={16} />,
    stretch: <BicepsFlexed size={16} />
  };

  return (
    <Paper className={classes.filtersContainer} p={20} radius="md" shadow="sm">
      <Group gap={16} mb={16}>
        <TextInput
          placeholder="Search workouts..."
          leftSection={<Search size={16} />}
          value={filters.searchQuery}
          onChange={(e) => onFilterChange({ searchQuery: e.target.value })}
          className={classes.searchInput}
          flex={1}
        />

        <Select
          placeholder="Sort by"
          value={sortOption}
          onChange={(value) => onSortChange(value || 'name_asc')}
          data={[
            { value: 'name_asc', label: 'Name A-Z' },
            { value: 'name_desc', label: 'Name Z-A' },
            { value: 'duration_asc', label: 'Duration (Short)' },
            { value: 'duration_desc', label: 'Duration (Long)' },
            { value: 'difficulty_asc', label: 'Difficulty (Easy)' },
            { value: 'difficulty_desc', label: 'Difficulty (Hard)' }
          ]}
          w={200}
          classNames={{
            option: classes.hoverColor
          }}
        />
      </Group>

      <Tabs
        value={filters.selectedType || "all"}
        onChange={(value) => onFilterChange({ selectedType: value === "all" ? null : value })}
        className={classes.categoryTabs}
      >
        <Tabs.List>
          <Tabs.Tab value="all" className={classes.hoverColor}>
            All Categories
          </Tabs.Tab>
          <Tabs.Tab value="strength" leftSection={workoutTypeIcons.strength} className={classes.hoverColor}>
            Strength
          </Tabs.Tab>
          <Tabs.Tab value="cardio" leftSection={workoutTypeIcons.cardio} className={classes.hoverColor}>
            Cardio
          </Tabs.Tab>
          <Tabs.Tab value="yoga" leftSection={workoutTypeIcons.yoga} className={classes.hoverColor}>
            Yoga
          </Tabs.Tab>
          <Tabs.Tab value="stretch" leftSection={workoutTypeIcons.stretch} className={classes.hoverColor}>
            Stretch
          </Tabs.Tab>
        </Tabs.List>
      </Tabs>

      <Group gap={16} mt={16}>
        <Select
          placeholder="Difficulty"
          value={filters.selectedDifficulty}
          onChange={(value) => onFilterChange({ selectedDifficulty: value })}
          data={[
            { value: 'beginner', label: 'Beginner' },
            { value: 'intermediate', label: 'Intermediate' },
            { value: 'advanced', label: 'Advanced' }
          ]}
          clearable
          w={150}
          classNames={{
            option: classes.hoverColor
          }}
        />

        <Select
          placeholder="Equipment"
          value={filters.selectedEquipment}
          onChange={(value) => onFilterChange({ selectedEquipment: value })}
          data={[
            { value: 'none', label: 'No Equipment' },
            { value: 'dumbbells', label: 'Dumbbells' },
            { value: 'resistance_bands', label: 'Resistance Bands' },
            { value: 'yoga_mat', label: 'Yoga Mat' },
            { value: 'kettlebell', label: 'Kettlebell' },
            { value: 'barbell', label: 'Barbell' }
          ]}
          clearable
          w={180}
          classNames={{
            option: classes.hoverColor
          }}
        />
      </Group>
    </Paper>
  );
};

export default WorkoutFilters;