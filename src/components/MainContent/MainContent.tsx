import { Stack, Group, Card, Text } from '@mantine/core';
import ActivityCard from '../ActivityCard/ActivityCard';
import GoalProgressChart from '../GoalProgressChart/GoalProgressChart';
import classes from './MainContent.module.css';

interface Activity {
  type: 'workout' | 'calories' | 'steps';
  value: string;
  icon: string;
  backgroundImage: string;
}

interface GoalProgressData {
  day: string;
  workout: number;
  calories: number;
  steps: number;
}

interface MainContentProps {
  activities: Activity[];
  goalProgress: {
    weeklyData: GoalProgressData[];
  };
}

const MainContent = ({ activities, goalProgress }: MainContentProps) => {
  return (
    <Stack gap={24} className={classes.container}>
      {/* Hero Section */}
      <Card className={classes.heroCard} radius="md" p={32}>
        <Stack gap={5}>
          <Text fz={24} fw={800} c="white" className={classes.heroCardTitle}>Track Your Daily Activities</Text>
          <Text fz={12} fw={400} c="white" lh="18px" style={{ letterSpacing: '0.10px' }} className={classes.heroCardDescription}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          </Text>
        </Stack>
      </Card>

      {/* Activity Cards */}
      <Group gap={16} grow>
        {activities.map((activity, index) => (
          <ActivityCard
            key={index}
            type={activity.type}
            value={activity.value}
            backgroundImage={activity.backgroundImage}
          />
        ))}
      </Group>

      {/* Goal Progress Chart */}
      <GoalProgressChart data={goalProgress.weeklyData} />
    </Stack>
  );
};

export default MainContent;