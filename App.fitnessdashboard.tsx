import { MantineProvider } from '@mantine/core';
import FitnessDashboard from './src/components/FitnessDashboard/FitnessDashboard';
import { mockRootProps } from './src/fitnessDashboardMockData';
import theme from './src/theme';

function App() {
  return (
    <MantineProvider theme={theme}>
      <FitnessDashboard {...mockRootProps} />
    </MantineProvider>
  );
}

export default App;