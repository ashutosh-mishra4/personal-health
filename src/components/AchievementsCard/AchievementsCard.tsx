import { Card, Stack, Text } from '@mantine/core';
import AchievementItem from '../AchievementItem/AchievementItem';
import { Trophy, Target, Grid3X3 } from 'lucide-react';
import classes from './AchievementsCard.module.css';

interface Achievement {
  id: string;
  title: string;
  status: 'unlocked' | 'in_progress' | 'locked';
  icon: React.ReactNode;
}

interface AchievementsCardProps {
  achievements: Achievement[];
}

const AchievementsCard = ({ achievements }: AchievementsCardProps) => {
  const defaultAchievements: Achievement[] = [
    {
      id: '1',
      title: '3-Day Workout Streak',
      status: 'unlocked',
      icon: <Trophy size={16} />
    },
    {
      id: '2',
      title: '5 Strength Sessions',
      status: 'in_progress',
      icon: <Target size={16} />
    },
    {
      id: '3',
      title: 'Tried All Categories',
      status: 'locked',
      icon: <Grid3X3 size={16} />
    }
  ];

  const achievementsToShow = achievements.length > 0 ? achievements : defaultAchievements;

  return (
    <Card className={classes.card} radius="md" shadow="sm" withBorder>
      <Stack gap={16}>
        <Text fz={16} fw={600} c="#1e293b">
          Achievements
        </Text>

        <Stack gap={8}>
          {achievementsToShow.map((achievement) => (
            <AchievementItem
              key={achievement.id}
              title={achievement.title}
              status={achievement.status}
              icon={achievement.icon}
            />
          ))}
        </Stack>
      </Stack>
    </Card>
  );
};

export default AchievementsCard;