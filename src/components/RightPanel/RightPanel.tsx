import { Stack } from '@mantine/core';
import SchedulePanel from '../SchedulePanel/SchedulePanel';
import GoalsSection from '../GoalsSection/GoalsSection';
import PremiumCard from '../PremiumCard/PremiumCard';
import classes from './RightPanel.module.css';

interface ScheduleItem {
  day: string;
  exercise: string;
  time: string;
  target: string;
  image: string;
}

interface Goal {
  title: string;
  date: string;
  target: string;
}

interface PremiumOffer {
  title: string;
  description: string;
  image: string;
}

interface RightPanelProps {
  schedule: ScheduleItem[];
  goals: Goal[];
  premiumOffer: PremiumOffer;
}

const RightPanel = ({ schedule, goals, premiumOffer }: RightPanelProps) => {
  return (
    <Stack gap={40} className={classes.container}>
      <SchedulePanel schedule={schedule} />
      <GoalsSection goals={goals} />
      <PremiumCard 
        title={premiumOffer.title}
        description={premiumOffer.description}
        image={premiumOffer.image}
      />
    </Stack>
  );
};

export default RightPanel;