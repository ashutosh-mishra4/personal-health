import { Card, Stack, Text, Checkbox, Group } from '@mantine/core';
import { Utensils, Leaf, Beef, Martini } from 'lucide-react';
import { useState } from 'react';
import classes from './PrepList.module.css';

interface PrepListProps {
  prepList: Array<{
    id: number;
    item: string;
    completed: boolean;
    icon: string;
  }>;
}

const PrepList = ({ prepList }: PrepListProps) => {
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>(
    prepList.reduce((acc, item) => ({ ...acc, [item.id]: item.completed }), {})
  );

  const handleItemCheck = (itemId: number, checked: boolean) => {
    setCheckedItems(prev => ({ ...prev, [itemId]: checked }));
  };

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case 'bowl':
        return <Utensils size={16} color="#64748b" />;
      case 'vegetables':
        return <Leaf size={16} color="#64748b" />;
      case 'meat':
        return <Beef size={16} color="#64748b" />;
      case 'smoothie':
        return <Martini size={16} color="#64748b" />;
      default:
        return <Utensils size={16} color="#64748b" />;
    }
  };

  return (
    <Card className={classes.card} radius="md" shadow="sm" withBorder>
      <Stack gap={20}>
        <Text fz={16} fw={600} c="#1e293b">
          Tomorrow's Prep List
        </Text>
        
        <Stack gap={12}>
          {prepList.map((item) => (
            <Group key={item.id} gap={12} align="center">
              <Checkbox
                checked={checkedItems[item.id]}
                onChange={(event) => handleItemCheck(item.id, event.currentTarget.checked)}
                color="orange"
                size="sm"
              />
              <Group gap={8} flex={1} align="center">
                {getIcon(item.icon)}
                <Text 
                  fz={14} 
                  fw={500} 
                  c={checkedItems[item.id] ? "#94a3b8" : "#475569"}
                  td={checkedItems[item.id] ? "line-through" : "none"}
                >
                  {item.item}
                </Text>
              </Group>
            </Group>
          ))}
        </Stack>
      </Stack>
    </Card>
  );
};

export default PrepList;