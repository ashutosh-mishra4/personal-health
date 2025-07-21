import { Card, Group, Stack, Text, BackgroundImage } from '@mantine/core';
import TimerIcon from '../Icons/TimerIcon.svg';
import FlameIcon from '../Icons/FlameIcon.svg';
import FootprintsIcon from '../Icons/FootprintsIcon.svg';
import classes from './ActivityCard.module.css';

interface ActivityCardProps {
  type: 'workout' | 'calories' | 'steps';
  value: string;
  backgroundImage: string;
}

const ActivityCard = ({ type, value, backgroundImage }: ActivityCardProps) => {
  const getIcon = () => {
    switch (type) {
      case 'workout':
        return <TimerIcon width={45} height={45} color="white" />;
      case 'calories':
        return <FlameIcon width={45} height={45} color="white" />;
      case 'steps':
        return <FootprintsIcon width={45} height={45} color="white" />;
    }
  };

  const getTitle = () => {
    switch (type) {
      case 'workout':
        return 'Workout';
      case 'calories':
        return 'Calories';
      case 'steps':
        return 'Steps';
    }
  };

  const getCardClass = () => {
    switch (type) {
      case 'workout':
        return classes.workoutCard;
      case 'calories':
        return classes.caloriesCard;
      case 'steps':
        return classes.stepsCard;
    }
  };

  return (
    <Card className={`${classes.card} ${getCardClass()}`} radius="md" h={168} w="100%">
      <Group gap={16} mb={16}>
        {getIcon()}
        <Stack gap={4}>
          <Text fz={16} fw={700} c="white">{getTitle()}</Text>
          <Text fz={12} fw={400} c="white">{value}</Text>
        </Stack>
      </Group>
      <BackgroundImage
        src={backgroundImage}
        className={classes.backgroundImage}
      />
    </Card>
  );
};

export default ActivityCard;