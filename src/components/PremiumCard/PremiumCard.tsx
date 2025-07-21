import { Card, Stack, Text, Button, Group, Image } from '@mantine/core';
import classes from './PremiumCard.module.css';

interface PremiumCardProps {
  title: string;
  description: string;
  image: string;
}

const PremiumCard = ({ title, description, image }: PremiumCardProps) => {
  return (
    <Card className={classes.card} radius="md" p={16}>
      <Stack justify="space-between" h="100%">
        <Stack gap={24}>
          <Text fz={14} fw={600} c="white" className={classes.title}>
            {title}
          </Text>
          <Text fz={12} fw={400} c="white" lh="16px" style={{ letterSpacing: '0.10px' }}>
            {description}
          </Text>
        </Stack>
        
        <Group justify="space-between" align="flex-end">
          <Button 
            className={classes.upgradeButton}
            radius="md"
            size="sm"
            fw={600}
          >
            Upgrade
          </Button>
          <Image src={image} w={87} h={119} className={classes.promoImage} />
        </Group>
      </Stack>
    </Card>
  );
};

export default PremiumCard;