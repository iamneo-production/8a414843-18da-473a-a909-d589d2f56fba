import React from 'react';
import { Card, Text, Avatar, Container, Grid, Badge } from '@mantine/core';

function DoctorCard({ doctorName, online }) {
  return (
    <Card shadow="sm" padding="md" radius="lg">
      <Grid gutter="md" align="center">
        <Grid.Col span={10}>
          <Text size="lg" weight={500} style={{ marginBottom: '8px' }}>
            Doctor's Name{/* {doctorName} */}
          </Text>
          <Text size="sm" style={{ marginBottom: '8px' }}>
            {"online" ? (
              <span style={{ fontWeight: 'bold', color: 'green' }}>Online</span>
            ) : (
              <span style={{ fontWeight: 'bold', color: 'red' }}>Offline</span>
            )}
          </Text>
        </Grid.Col>
        <Grid.Col span={1} style={{ textAlign: 'right' }}>
          {/* Default placeholder */}
          <Avatar radius="xl" size='lg' src="null" />
        </Grid.Col>
      </Grid>
    </Card>
  );
}

export default DoctorCard;