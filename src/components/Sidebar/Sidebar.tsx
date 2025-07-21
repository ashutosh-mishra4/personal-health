import { AppShell, Text, Stack, Group } from '@mantine/core';
import { NavLink } from '@mantine/core';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Dumbbell, 
  BellMinus, 
  ShieldCheck, 
  CalendarDays, 
  ChartColumnIncreasing,
  CircleHelp,
  ArrowLeftFromLine
} from 'lucide-react';
import classes from './Sidebar.module.css';

interface SidebarProps {
  currentPage?: string;
}

const Sidebar = ({ currentPage }: SidebarProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const handleNavigation = (path: string) => {
    navigate(path);
  };
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  return (
    <AppShell.Navbar className={classes.navbar}>
      <Stack gap={24} h="100%">
        <Group gap={16} className={classes.brand}>
          <Dumbbell size={24} color="#f97316" />
          <Text fw={800} fz={18} c="#f97316">Fitness</Text>
        </Group>
        
        <Stack gap={16} flex={1}>
          <NavLink
            label="Overview"
            leftSection={<LayoutDashboard size={20} />}
            active={isActive('/')}
            className={isActive('/') ? classes.activeLink : classes.link}
            onClick={() => handleNavigation('/')}
          />
          <NavLink
            label="Workout"
            leftSection={<Dumbbell size={20} />}
            active={isActive('/workout')}
            className={isActive('/workout') ? classes.activeLink : classes.link}
            onClick={() => handleNavigation('/workout')}
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