import { MantineProvider } from '@mantine/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './src/components/Layout/Layout';
import GoalsPage from './src/components/GoalsPage/GoalsPage';
import { Goal } from './src/types';
import { mockRootProps } from './src/goalsMockData';
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
        <Routes>
          <Route 
            path="/goals" 
            element={
              <Layout>
                <GoalsPage 
                  {...mockRootProps}
                  onAddGoal={handleAddGoal}
                  onEditGoal={handleEditGoal}
                  onMarkComplete={handleMarkComplete}
                  onRemoveGoal={handleRemoveGoal}
                />
              </Layout>
            } 
          />
          <Route 
            path="*" 
            element={
              <Layout>
                <GoalsPage 
                  {...mockRootProps}
                  onAddGoal={handleAddGoal}
                  onEditGoal={handleEditGoal}
                  onMarkComplete={handleMarkComplete}
                  onRemoveGoal={handleRemoveGoal}
                />
              </Layout>
            } 
          />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;