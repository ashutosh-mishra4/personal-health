import { MantineProvider } from '@mantine/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './src/components/Layout/Layout';
import WorkoutPage from './src/components/WorkoutPage/WorkoutPage';
import DietPlanPage from './src/components/DietPlanPage/DietPlanPage';
import { mockRootProps as workoutMockData } from './src/workoutMockData';
import { mockRootProps as dietPlanMockData } from './src/dietPlanMockData';
import theme from './src/theme';

function App() {
  return (
    <MantineProvider theme={theme}>
      <BrowserRouter>
        <Layout>
          <Routes>
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
              path="*" 
              element={<WorkoutPage {...workoutMockData} />} 
            />
          </Routes>
        </Layout>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;