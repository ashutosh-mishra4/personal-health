import { Group, Text, TextInput, Stack, Avatar } from '@mantine/core';
import { Search, Bell, Settings } from 'lucide-react';
import classes from './Header.module.css';

interface HeaderProps {
  user: {
    name: string;
    greeting: string;
  };
}

const Header = ({ user }: HeaderProps) => {
  return (
    <Group justify="space-between" className={classes.header}>
      <Stack gap={4}>
        <Text fz={10} fw={400} c="#64748b">{user.greeting}</Text>
        <Text fz={16} fw={600} c="#475569">Welcome Back!</Text>
      </Stack>
      
      <Group gap={16}>
        <TextInput
          placeholder="Search"
          leftSection={<Search size={16} color="#64748b" />}
          className={classes.searchInput}
          w={900}
        />
        
        <Group gap={16}>
          <Bell size={20} color="#64748b" />
          <Settings size={20} color="#64748b" />
          <Avatar size={40} radius="xl" src="https://i.pravatar.cc/150?img=1" />
        </Group>
      </Group>
    </Group>
  );
};

export default Header;