import { MantineProvider } from '@mantine/core';
import WorkoutPage from './src/components/WorkoutPage/WorkoutPage';
import { mockRootProps } from './src/workoutMockData';
import theme from './src/theme';

function App() {
  return (
    <MantineProvider theme={theme}>
      <WorkoutPage {...mockRootProps} />
    </MantineProvider>
  );
}

export default App;