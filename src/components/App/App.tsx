import { useState } from 'react';
import { MantineProvider } from '@mantine/core';
import FitnessDashboard from '../FitnessDashboard/FitnessDashboard';
import WorkoutPage from '../WorkoutPage/WorkoutPage';
import DietPlanPage from '../DietPlanPage/DietPlanPage';
import GoalsPage from '../GoalsPage/GoalsPage';
import { mockRootProps as dashboardMockData } from '../../fitnessDashboardMockData';
import { mockRootProps as workoutMockData } from '../../workoutMockData';
import { mockRootProps as dietPlanMockData } from '../../dietPlanMockData';
import { mockRootProps as goalsMockData } from '../../goalsMockData';
import { Goal } from '../../types';
import theme from '../../theme';

type CurrentPage = 'dashboard' | 'workout' | 'diet' | 'goals';

function App() {
  const [currentPage, setCurrentPage] = useState<CurrentPage>('dashboard');

  const handleNavigation = (page: CurrentPage) => {
    setCurrentPage(page);
  };

  const handleAddGoal = (category: string) => {
    console.log('Add goal for category:', category);
  };

  const handleEditGoal = (goal: Goal) => {
    console.log('Edit goal:', goal.id);
  };

  const handleMarkComplete = (goalId: number) => {
    console.log('Mark goal complete:', goalId);
  };

  const handleRemoveGoal = (goalId: number) => {
    console.log('Remove goal:', goalId);
  };

  return (
    <MantineProvider theme={theme}>
      {currentPage === 'dashboard' ? (
        <FitnessDashboard 
          {...dashboardMockData} 
          onNavigateToWorkout={() => handleNavigation('workout')}
          onNavigateToDiet={() => handleNavigation('diet')}
          onNavigateToGoals={() => handleNavigation('goals')}
        />
      ) : currentPage === 'workout' ? (
        <WorkoutPage 
          {...workoutMockData}
          onNavigateToDashboard={() => handleNavigation('dashboard')}
          onNavigateToDiet={() => handleNavigation('diet')}
          onNavigateToGoals={() => handleNavigation('goals')}
        />
      ) : currentPage === 'diet' ? (
        <DietPlanPage 
          {...dietPlanMockData}
          onNavigateToDashboard={() => handleNavigation('dashboard')}
          onNavigateToWorkout={() => handleNavigation('workout')}
          onNavigateToGoals={() => handleNavigation('goals')}
        />
      ) : (
        <GoalsPage 
          {...goalsMockData}
          onAddGoal={handleAddGoal}
          onEditGoal={handleEditGoal}
          onMarkComplete={handleMarkComplete}
          onRemoveGoal={handleRemoveGoal}
        />
      )}
    </MantineProvider>
  );
}

export default App;