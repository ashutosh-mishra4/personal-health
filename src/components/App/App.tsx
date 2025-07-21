import { useState } from 'react';
import { MantineProvider } from '@mantine/core';
import FitnessDashboard from '../FitnessDashboard/FitnessDashboard';
import WorkoutPage from '../WorkoutPage/WorkoutPage';
import { mockRootProps as dashboardMockData } from '../../fitnessDashboardMockData';
import { mockRootProps as workoutMockData } from '../../workoutMockData';
import theme from '../../theme';

type CurrentPage = 'dashboard' | 'workout';

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
        />
      ) : (
        <WorkoutPage 
          {...workoutMockData}
          onNavigateToDashboard={() => handleNavigation('dashboard')}
        />
      )}
    </MantineProvider>
  );
}

export default App;