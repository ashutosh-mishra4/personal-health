import { Tooltip } from '@mantine/core';
import { ActivityLevel, StreakFilterType } from '../../../../enums';
import { DayActivity } from '../../../../types';
import { formatDate } from '../../../../stringFormatters';
import classes from './ActivitySquare.module.css';

interface ActivitySquareProps {
  date: string;
  level: ActivityLevel;
  activities: DayActivity;
  selectedFilter: string;
  onToggle?: (date: string) => void;
  style?: React.CSSProperties;
}

const ActivitySquare = ({ date, level, activities, selectedFilter, onToggle, style }: ActivitySquareProps) => {
  const getTooltipContent = () => {
    const dateObj = new Date(date);
    const formattedDate = formatDate(dateObj);
    
    let activityText = '';
    let activityCount = 0;

    switch (selectedFilter) {
      case StreakFilterType.WORKOUTS:
        activityCount = activities.workouts;
        activityText = `${activityCount} workout${activityCount !== 1 ? 's' : ''}`;
        break;
      case StreakFilterType.GOALS:
        activityCount = activities.goals;
        activityText = `${activityCount} goal${activityCount !== 1 ? 's' : ''}`;
        break;
      case StreakFilterType.DIET:
        activityCount = activities.diet;
        activityText = `${activityCount} diet entr${activityCount !== 1 ? 'ies' : 'y'}`;
        break;
      case StreakFilterType.ALL:
      default:
        activityCount = activities.workouts + activities.goals + activities.diet;
        activityText = `${activityCount} activit${activityCount !== 1 ? 'ies' : 'y'}`;
        break;
    }

    return `${formattedDate}\n${activityText} completed`;
  };

  const getLevelClass = () => {
    switch (level) {
      case ActivityLevel.NONE:
        return classes.levelNone;
      case ActivityLevel.LOW:
        return classes.levelLow;
      case ActivityLevel.MEDIUM:
        return classes.levelMedium;
      case ActivityLevel.HIGH:
        return classes.levelHigh;
      default:
        return classes.levelNone;
    }
  };

  const today = new Date();
  const squareDate = new Date(date);
  const isEditable = squareDate <= today;

  const handleClick = () => {
    if (isEditable && onToggle) {
      onToggle(date);
    }
  };

  return (
    <Tooltip 
      label={getTooltipContent()}
      multiline
      withArrow
      position="top"
    >
      <div 
        className={`${classes.square} ${getLevelClass()} ${isEditable ? classes.editable : classes.nonEditable}`}
        style={style}
        onClick={handleClick}
      />
    </Tooltip>
  );
};

export default ActivitySquare;