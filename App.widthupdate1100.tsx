import { MantineProvider } from '@mantine/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './src/components/Layout/Layout';
import FitnessDashboard from './src/components/FitnessDashboard/FitnessDashboard';
import WorkoutPage from './src/components/WorkoutPage/WorkoutPage';
import DietPlanPage from './src/components/DietPlanPage/DietPlanPage';
import GoalsPage from './src/components/GoalsPage/GoalsPage';
import { Goal } from './src/types';
import { mockRootProps as dashboardMockData } from './src/fitnessDashboardMockData';
import { mockRootProps as workoutMockData } from './src/workoutMockData';
import { mockRootProps as dietPlanMockData } from './src/dietPlanMockData';
import { mockRootProps as goalsMockData } from './src/goalsMockData';
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

  return (
    <MantineProvider theme={theme}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route 
              path="/" 
              element={<FitnessDashboard {...dashboardMockData} />} 
            />
            <Route 
              path="/workout" 
              element={<WorkoutPage {...workoutMockData} />} 
            />
            <Route 
              path="/diet" 
              element={
                <DietPlanPage 
                  meals={dietPlanMockData.meals}
                  nutritionSummary={dietPlanMockData.nutritionSummary}
                  prepList={dietPlanMockData.prepList}
                />
              } 
            />
            <Route 
              path="/goals" 
              element={
                <GoalsPage 
                  {...goalsMockData}
                  onAddGoal={handleAddGoal}
                  onEditGoal={handleEditGoal}
                  onMarkComplete={handleMarkComplete}
                  onRemoveGoal={handleRemoveGoal}
                />
              } 
            />
            <Route 
              path="*" 
              element={<FitnessDashboard {...dashboardMockData} />} 
            />
          </Routes>
        </Layout>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;