import { useState } from 'react';
import { MantineProvider } from '@mantine/core';
import FitnessDashboard from '../FitnessDashboard/FitnessDashboard';
import WorkoutPage from '../WorkoutPage/WorkoutPage';
import DietPlanPage from '../DietPlanPage/DietPlanPage';
import { mockRootProps as dashboardMockData } from '../../fitnessDashboardMockData';
import { mockRootProps as workoutMockData } from '../../workoutMockData';
import { mockRootProps as dietPlanMockData } from '../../dietPlanMockData';
import theme from '../../theme';

type CurrentPage = 'dashboard' | 'workout' | 'diet';

function App() {
  const [currentPage, setCurrentPage] = useState<CurrentPage>('dashboard');

  const handleNavigation = (page: CurrentPage) => {
    setCurrentPage(page);
  };

  return (
    <MantineProvider theme={theme}>
      {currentPage === 'dashboard' ? (
        <FitnessDashboard 
          {...dashboardMockData} 
          onNavigateToWorkout={() => handleNavigation('workout')}
          onNavigateToDiet={() => handleNavigation('diet')}
        />
      ) : currentPage === 'workout' ? (
        <WorkoutPage 
          {...workoutMockData}
          onNavigateToDashboard={() => handleNavigation('dashboard')}
          onNavigateToDiet={() => handleNavigation('diet')}
        />
      ) : (
        <DietPlanPage 
          {...dietPlanMockData}
          onNavigateToDashboard={() => handleNavigation('dashboard')}
          onNavigateToWorkout={() => handleNavigation('workout')}
        />
      )}
    </MantineProvider>
  );
}

export default App;