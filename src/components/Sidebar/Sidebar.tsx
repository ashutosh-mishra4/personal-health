import { AppShell, Text, Stack, Group } from '@mantine/core';
import { NavLink } from '@mantine/core';
import { 
  LayoutDashboard, 
  ScanBarcode, 
  BellMinus, 
  ShieldCheck, 
  CalendarDays, 
  ChartColumnIncreasing,
  CircleHelp,
  ArrowLeftFromLine
} from 'lucide-react';
import classes from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <AppShell.Navbar className={classes.navbar}>
      <Stack gap={24} h="100%">
        <Group gap={16} className={classes.brand}>
          <ScanBarcode size={24} color="#f97316" />
          <Text fw={800} fz={18} c="#f97316">Fitness</Text>
        </Group>
        
        <Stack gap={16} flex={1}>
          <NavLink
            label="Overview"
            leftSection={<LayoutDashboard size={20} />}
            active
            className={classes.activeLink}
          />
          <NavLink
            label="Workout"
            leftSection={<ScanBarcode size={20} />}
            className={classes.link}
          />
          <NavLink
            label="Diet Plan"
            leftSection={<BellMinus size={20} />}
            className={classes.link}
          />
          <NavLink
            label="Goals"
            leftSection={<ShieldCheck size={20} />}
            className={classes.link}
          />
          <NavLink
            label="My Schedule"
            leftSection={<CalendarDays size={20} />}
            className={classes.link}
          />
          <NavLink
            label="Progress"
            leftSection={<ChartColumnIncreasing size={20} />}
            className={classes.link}
          />
        </Stack>

        <Stack gap={16} className={classes.bottomActions}>
          <NavLink
            label="Help"
            leftSection={<CircleHelp size={20} />}
            className={classes.link}
          />
          <NavLink
            label="Logout"
            leftSection={<ArrowLeftFromLine size={20} />}
            className={classes.logoutLink}
          />
        </Stack>
      </Stack>
    </AppShell.Navbar>
  );
};

export default Sidebar;