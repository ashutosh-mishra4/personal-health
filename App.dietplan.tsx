import { MantineProvider } from '@mantine/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './src/components/Layout/Layout';
import DietPlanPage from './src/components/DietPlanPage/DietPlanPage';
import { mockRootProps } from './src/dietPlanMockData';
import theme from './src/theme';

function App() {
  return (
    <MantineProvider theme={theme}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route 
              path="/diet" 
              element={
                <DietPlanPage 
                  meals={mockRootProps.meals}
                  nutritionSummary={mockRootProps.nutritionSummary}
                  prepList={mockRootProps.prepList}
                />
              } 
            />
            <Route 
              path="*" 
              element={
                <DietPlanPage 
                  meals={mockRootProps.meals}
                  nutritionSummary={mockRootProps.nutritionSummary}
                  prepList={mockRootProps.prepList}
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