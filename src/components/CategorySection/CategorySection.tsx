import { Stack, Group, Text, Button } from '@mantine/core';
import { Plus } from 'lucide-react';
import { Goal } from '../../types';
import { formatGoalCategory } from '../../stringFormatters';
import { GoalCategory } from '../../enums';
import GoalCard from '../GoalCard/GoalCard';
import classes from './CategorySection.module.css';

interface CategorySectionProps {
  category: string;
  goals: Goal[];
  onAddGoal?: (category: string) => void;
  onEditGoal?: (goal: Goal) => void;
  onMarkComplete?: (goalId: number) => void;
  onRemoveGoal?: (goalId: number) => void;
  onUpdateProgress?: (goal: Goal) => void;
}

const CategorySection = ({ 
  category, 
  goals, 
  onAddGoal, 
  onEditGoal, 
  onMarkComplete, 
  onRemoveGoal,
  onUpdateProgress 
}: CategorySectionProps) => {
  return (
    <div className={classes.section}>
      <Group justify="space-between" align="center" className={classes.header}>
        <Text fz={18} fw={700} c="#1e293b">
          {formatGoalCategory(category as GoalCategory)}
        </Text>
        <Button
          size="xs"
          leftSection={<Plus size={14} />}
          onClick={() => onAddGoal?.(category)}
          className={classes.addButton}
        >
          Add Goal
        </Button>
      </Group>

      {goals.length > 0 ? (
        <Stack gap={16} className={classes.goalsGrid}>
          {goals.map((goal) => (
            <GoalCard
              key={goal.id}
              goal={goal}
              onEdit={onEditGoal}
              onMarkComplete={onMarkComplete}
              onRemove={onRemoveGoal}
              onUpdateProgress={onUpdateProgress}
            />
          ))}
        </Stack>
      ) : (
        <div className={classes.emptyState}>
          <Text fz={14} c="#64748b">
            No goals in this category yet
          </Text>
        </div>
      )}
    </div>
  );
};

export default CategorySection;