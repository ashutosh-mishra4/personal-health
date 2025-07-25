import { Group } from '@mantine/core';
import MainContent from '../MainContent/MainContent';
import RightPanel from '../RightPanel/RightPanel';
import classes from './DashboardContent.module.css';

interface DashboardContentProps {
  activities: Array<{
    type: 'workout' | 'calories' | 'steps';
    value: string;
    icon: string;
    backgroundImage: string;
  }>;
  goalProgress: {
    weeklyData: Array<{
      day: string;
      workout: number;
      calories: number;
      steps: number;
    }>;
  };
  foodEntries: Array<{
    id: number;
    food: string;
    meal: string;
    calories: string;
    time: string;
    carbs: string;
    image: string;
  }>;
  schedule: Array<{
    day: string;
    exercise: string;
    time: string;
    target: string;
    image: string;
  }>;
  goals: Array<{
    title: string;
    date: string;
    target: string;
  }>;
  premiumOffer: {
    title: string;
    description: string;
    image: string;
  };
}

const DashboardContent = ({ 
  activities, 
  goalProgress, 
  foodEntries, 
  schedule, 
  goals, 
  premiumOffer 
}: DashboardContentProps) => {
  return (
    <Group gap={0} align="flex-start" className={classes.content}>
      <MainContent 
        activities={activities}
        goalProgress={goalProgress}
        foodEntries={foodEntries}
      />
      
      <RightPanel 
        schedule={schedule}
        goals={goals}
        premiumOffer={premiumOffer}
      />
    </Group>
  );
};

export default DashboardContent;