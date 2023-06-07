import { Group, Card } from '@mantine/core';
import { Calendar } from '@mantine/dates';

export default function Demo() {
  return (
    <Group position="center">
      <Card shadow="sm" padding="md" radius='md'>
        <text>Appointments Calendar</text>
        <Calendar />
      </Card>
    </Group>
  );
}