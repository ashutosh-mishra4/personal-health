import { useState, useEffect } from 'react';
import { Stack, Text } from '@mantine/core';
import { Goal, TopPriorityGoal, GoalStreak, GoalsPageProps } from '../../types';
import { GoalCategory, GoalPriority, GoalStatus } from '../../enums';
import CategorySection from '../CategorySection/CategorySection';
import TopPrioritiesWidget from '../TopPrioritiesWidget/TopPrioritiesWidget';
import StreakTrackerWidget from '../StreakTrackerWidget/StreakTrackerWidget';
import AddGoalModal from '../AddGoalModal/AddGoalModal';
import ProgressUpdateModal from '../ProgressUpdateModal/ProgressUpdateModal';
import classes from './GoalsPage.module.css';

const GoalsPage = ({ 
  goals: initialGoals, 
  topPriorities: initialTopPriorities, 
  streaks: initialStreaks,
  onAddGoal,
  onEditGoal,
  onMarkComplete,
  onRemoveGoal 
}: GoalsPageProps) => {
  const [goals, setGoals] = useState<Goal[]>(initialGoals);
  const [topPriorities, setTopPriorities] = useState<TopPriorityGoal[]>(initialTopPriorities);
  const [streaks, setStreaks] = useState<GoalStreak[]>(initialStreaks);
  const [addModalOpened, setAddModalOpened] = useState(false);
  const [progressModalOpened, setProgressModalOpened] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [editingGoal, setEditingGoal] = useState<Goal | null>(null);
  const [progressGoal, setProgressGoal] = useState<Goal | null>(null);

  // Update derived data when goals change
  useEffect(() => {
    updateTopPriorities();
    updateStreaks();
  }, [goals]);

  const updateTopPriorities = () => {
    const highPriorityGoals = goals
      .filter(goal => goal.priority === GoalPriority.HIGH && goal.status !== GoalStatus.COMPLETED)
      .slice(0, 3)
      .map(goal => ({
        id: goal.id,
        name: goal.name,
        currentProgress: goal.currentProgress,
        targetProgress: goal.targetProgress,
        status: goal.status
      }));
    setTopPriorities(highPriorityGoals);
  };

  const updateStreaks = () => {
    // Update streaks based on completed goals (simplified logic)
    const updatedStreaks = streaks.map(streak => {
      const relatedGoal = goals.find(goal => goal.name === streak.goalName);
      if (relatedGoal && relatedGoal.status === GoalStatus.COMPLETED) {
        return { ...streak, currentStreak: streak.currentStreak + 1 };
      }
      return streak;
    });
    setStreaks(updatedStreaks);
  };

  const handleAddGoal = (category: string) => {
    setSelectedCategory(category);
    setEditingGoal(null);
    setAddModalOpened(true);
    onAddGoal?.(category);
  };

  const handleEditGoal = (goal: Goal) => {
    setEditingGoal(goal);
    setSelectedCategory(goal.category);
    setAddModalOpened(true);
    onEditGoal?.(goal);
  };

  const handleSaveGoal = (goalData: Omit<Goal, 'id'>) => {
    if (editingGoal) {
      // Update existing goal
      setGoals(prevGoals => 
        prevGoals.map(goal => 
          goal.id === editingGoal.id 
            ? { ...goalData, id: editingGoal.id }
            : goal
        )
      );
    } else {
      // Add new goal
      const newGoal: Goal = {
        ...goalData,
        id: Math.max(...goals.map(g => g.id)) + 1
      };
      setGoals(prevGoals => [...prevGoals, newGoal]);
    }
  };

  const handleMarkComplete = (goalId: number) => {
    setGoals(prevGoals => 
      prevGoals.map(goal => 
        goal.id === goalId 
          ? { ...goal, status: GoalStatus.COMPLETED, currentProgress: goal.targetProgress }
          : goal
      )
    );
    onMarkComplete?.(goalId);
  };

  const handleRemoveGoal = (goalId: number) => {
    setGoals(prevGoals => prevGoals.filter(goal => goal.id !== goalId));
    onRemoveGoal?.(goalId);
  };

  const handleUpdateProgress = (goal: Goal) => {
    setProgressGoal(goal);
    setProgressModalOpened(true);
  };

  const handleProgressUpdate = (goalId: number, newProgress: number) => {
    setGoals(prevGoals => 
      prevGoals.map(goal => {
        if (goal.id === goalId) {
          const updatedGoal = { ...goal, currentProgress: newProgress };
          // Auto-complete if target reached
          if (newProgress >= goal.targetProgress) {
            updatedGoal.status = GoalStatus.COMPLETED;
          } else if (newProgress > 0) {
            updatedGoal.status = GoalStatus.IN_PROGRESS;
          }
          return updatedGoal;
        }
        return goal;
      })
    );
  };

  const groupGoalsByCategory = (goals: Goal[]) => {
    return goals.reduce((acc, goal) => {
      if (!acc[goal.category]) {
        acc[goal.category] = [];
      }
      acc[goal.category].push(goal);
      return acc;
    }, {} as Record<string, Goal[]>);
  };

  const groupedGoals = groupGoalsByCategory(goals);
  const categories = Object.values(GoalCategory);

  return (
    <div className={classes.container}>
      <div className={classes.mainContent}>
        <div className={classes.pageHeader}>
          <Text className={classes.pageTitle}>
            Goals
          </Text>
          <Text className={classes.pageSubtitle}>
            Track and manage your fitness goals across different categories
          </Text>
        </div>

        <div className={classes.categoriesContainer}>
          {categories.map((category) => (
            <CategorySection
              key={category}
              category={category}
              goals={groupedGoals[category] || []}
              onAddGoal={handleAddGoal}
              onEditGoal={handleEditGoal}
              onMarkComplete={handleMarkComplete}
              onRemoveGoal={handleRemoveGoal}
              onUpdateProgress={handleUpdateProgress}
            />
          ))}
        </div>
      </div>

      <div className={classes.sidebar}>
        <Stack gap={24} className={classes.sidebarWidgets}>
          <TopPrioritiesWidget priorities={topPriorities} />
          <StreakTrackerWidget streaks={streaks} />
        </Stack>
      </div>

      <AddGoalModal
        opened={addModalOpened}
        onClose={() => setAddModalOpened(false)}
        onSave={handleSaveGoal}
        category={selectedCategory}
        editGoal={editingGoal}
      />

      <ProgressUpdateModal
        opened={progressModalOpened}
        onClose={() => setProgressModalOpened(false)}
        goal={progressGoal}
        onUpdateProgress={handleProgressUpdate}
      />
    </div>
  );
};

export default GoalsPage;