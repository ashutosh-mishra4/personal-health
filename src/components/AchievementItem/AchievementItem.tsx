import { Group, Text, Badge } from '@mantine/core';
import classes from './AchievementItem.module.css';

interface AchievementItemProps {
  title: string;
  status: 'unlocked' | 'in_progress' | 'locked';
  icon: React.ReactNode;
}

const AchievementItem = ({ title, status, icon }: AchievementItemProps) => {
  const getStatusBadge = () => {
    switch (status) {
      case 'unlocked':
        return (
          <Badge variant="filled" color="green" size="xs">
            Unlocked
          </Badge>
        );
      case 'in_progress':
        return (
          <Badge variant="filled" color="orange" size="xs">
            In Progress
          </Badge>
        );
      case 'locked':
        return (
          <Badge variant="light" color="gray" size="xs">
            Locked
          </Badge>
        );
      default:
        return null;
    }
  };

  const getIconColor = () => {
    switch (status) {
      case 'unlocked':
        return '#22c55e';
      case 'in_progress':
        return '#f97316';
      case 'locked':
        return '#64748b';
      default:
        return '#64748b';
    }
  };

  return (
    <Group justify="space-between" align="center" className={classes.item}>
      <Group gap={8} align="center">
        <div style={{ color: getIconColor() }}>
          {icon}
        </div>
        <Text fz={13} fw={500} c={status === 'locked' ? '#94a3b8' : '#475569'}>
          {title}
        </Text>
      </Group>
      {getStatusBadge()}
    </Group>
  );
};

export default AchievementItem;