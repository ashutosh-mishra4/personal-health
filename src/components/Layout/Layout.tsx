import { AppShell } from '@mantine/core';
import { useLocation } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import classes from './Layout.module.css';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const currentPage = location.pathname === '/workout' ? 'workout' : 
                     location.pathname === '/diet' ? 'diet' : 'dashboard';

  return (
    <AppShell
      navbar={{ width: 240, breakpoint: 'sm' }}
      className={classes.shell}
    >
      <Sidebar currentPage={currentPage} />
      
      <AppShell.Main className={classes.main}>
        <Header user={{ name: "User", greeting: "Good Morning" }} />
        {children}
      </AppShell.Main>
    </AppShell>
  );
};

export default Layout;