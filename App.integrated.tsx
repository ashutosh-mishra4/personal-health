import { MantineProvider } from '@mantine/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './src/components/Layout/Layout';
import FitnessDashboard from './src/components/FitnessDashboard/FitnessDashboard';
import WorkoutPage from './src/components/WorkoutPage/WorkoutPage';
import DietPlanPage from './src/components/DietPlanPage/DietPlanPage';
import GoalsPage from './src/components/GoalsPage/GoalsPage';
import StreaksPage from './src/components/StreaksPage/StreaksPage';
import { mockRootProps as dashboardMockData } from './src/fitnessDashboardMockData';
import { mockRootProps as workoutMockData } from './src/workoutMockData';
import { mockRootProps as dietPlanMockData } from './src/dietPlanMockData';
import { mockRootProps as goalsMockData } from './src/goalsMockData';
import { mockRootProps as streaksMockData } from './src/streaksMockData';
import { Goal } from './src/types';
import theme from './src/theme';

function App() {
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

  const handleFilterChange = (filter: string) => {
    console.log('Filter changed to:', filter);
  };

  const handleActivityUpdate = (data: any[]) => {
    console.log('Activity data updated:', data);
  };

  return (
    <MantineProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route 
            path="/" 
            element={
              <Layout>
                <FitnessDashboard {...dashboardMockData} />
              </Layout>
            } 
          />
          <Route 
            path="/workout" 
            element={
              <Layout>
                <WorkoutPage {...workoutMockData} />
              </Layout>
            } 
          />
          <Route 
            path="/diet" 
            element={
              <Layout>
                <DietPlanPage {...dietPlanMockData} />
              </Layout>
            } 
          />
          <Route 
            path="/goals" 
            element={
              <Layout>
                <GoalsPage 
                  {...goalsMockData}
                  onAddGoal={handleAddGoal}
                  onEditGoal={handleEditGoal}
                  onMarkComplete={handleMarkComplete}
                  onRemoveGoal={handleRemoveGoal}
                />
              </Layout>
            } 
          />
          <Route 
            path="/streaks" 
            element={
              <Layout>
                <StreaksPage 
                  {...streaksMockData}
                  onFilterChange={handleFilterChange}
                  onActivityUpdate={handleActivityUpdate}
                />
              </Layout>
            } 
          />
          <Route 
            path="*" 
            element={
              <Layout>
                <FitnessDashboard {...dashboardMockData} />
              </Layout>
            } 
          />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;