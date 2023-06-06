import { 
    Card, 
     Text,
     Group, 
     Avatar 
    } from '@mantine/core';
import { Grid } from '@mantine/core';
export default function PatientDashboard() {
  return (
    <Grid>
        <Grid.Col xs={3} lg={3}>
            <Card shadow="sm" padding="lg" radius="md" withBorder height={500}>
                <Avatar size='xl' src={''} alt=''/>
                <Group position="below" mt="md" mb="xs"  >
                    <div >
                    
                        <Text weight={500}>Name</Text>
                        <Text weight={500}>Description</Text>
                    </div>
                </Group>
                <Text>-----Content------</Text>
            </Card>
        </Grid.Col>  
    </Grid>
  );
}