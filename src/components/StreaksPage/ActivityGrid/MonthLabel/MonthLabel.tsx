import { Text } from '@mantine/core';
import classes from './MonthLabel.module.css';

interface MonthLabelProps {
  month: string;
}

const MonthLabel = ({ month }: MonthLabelProps) => {
  return (
    <Text 
      fz={12} 
      fw={500} 
      c="#64748b" 
      className={classes.monthLabel}
    >
      {month}
    </Text>
  );
};

export default MonthLabel;