import { MantineProvider } from '@mantine/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './src/components/Layout/Layout';
import DashboardContent from './src/components/DashboardContent/DashboardContent';
import WorkoutContent from './src/components/WorkoutContent/WorkoutContent';
import { mockRootProps as dashboardMockData } from './src/fitnessDashboardMockData';
import { mockRootProps as workoutMockData } from './src/workoutMockData';
import theme from './src/theme';

function App() {
  return (
    <MantineProvider theme={theme}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route 
              path="/" 
              element={
                <DashboardContent 
                  activities={dashboardMockData.activities}
                  goalProgress={dashboardMockData.goalProgress}
                  foodEntries={dashboardMockData.foodEntries}
                  schedule={dashboardMockData.schedule}
                  goals={dashboardMockData.goals}
                  premiumOffer={dashboardMockData.premiumOffer}
                />
              } 
            />
            <Route 
              path="/workout" 
              element={
                <WorkoutContent 
                  workouts={workoutMockData.workouts}
                  currentWorkoutSession={workoutMockData.currentWorkoutSession}
                  filters={workoutMockData.filters}
                  sortOption={workoutMockData.sortOption}
                />
              } 
            />
            <Route 
              path="*" 
              element={
                <DashboardContent 
                  activities={dashboardMockData.activities}
                  goalProgress={dashboardMockData.goalProgress}
                  foodEntries={dashboardMockData.foodEntries}
                  schedule={dashboardMockData.schedule}
                  goals={dashboardMockData.goals}
                  premiumOffer={dashboardMockData.premiumOffer}
                />
              } 
            />
          </Routes>
        </Layout>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;