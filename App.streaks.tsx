import { MantineProvider } from '@mantine/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './src/components/Layout/Layout';
import StreaksPage from './src/components/StreaksPage/StreaksPage';
import { mockRootProps } from './src/streaksMockData';
import theme from './src/theme';

function App() {
  const handleFilterChange = (filter: string) => {
    console.log('Filter changed to:', filter);
  };

  const handleActivityUpdate = (data: any[]) => {
    console.log('Activity data updated:', data);
  };

  return (
    <MantineProvider theme={theme}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route 
              path="/" 
              element={
                <StreaksPage 
                  {...mockRootProps}
                  onFilterChange={handleFilterChange}
                  onActivityUpdate={handleActivityUpdate}
                />
              } 
            />
            <Route 
              path="/streaks" 
              element={
                <StreaksPage 
                  {...mockRootProps}
                  onFilterChange={handleFilterChange}
                  onActivityUpdate={handleActivityUpdate}
                />
              } 
            />
            <Route 
              path="*" 
              element={
                <StreaksPage 
                  {...mockRootProps}
                  onFilterChange={handleFilterChange}
                  onActivityUpdate={handleActivityUpdate}
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