import { Grid, Skeleton, Container, Text,rem} from '@mantine/core';
import { IconHeart,IconUser,IconStethoscope,IconPills,IconBandage,IconMicroscope,IconThermometer} from '@tabler/icons-react';



export function GridAsymmetrical() {
  return (
    
    <Container my="lg">
      <Grid style={{ backgroundColor: '#f0f0f0' }}>
        
        <Grid.Col xs={6} style={{ minHeight: rem(80), backgroundColor: '#ADD8E6',textAlign: "center"}}>
        <IconUser size={40} />
          <Text>
            User
            </Text>
        </Grid.Col>
        <Grid.Col xs={6} style={{ minHeight: rem(80),  backgroundColor: '#ADD8E6',textAlign: "center"}} >
        <IconStethoscope size={40} />
          <Text>
            Stethoscope
            </Text>
        </Grid.Col >
        <Grid.Col xs={6} style={{ minHeight: rem(80), backgroundColor: '#ADD8E6',textAlign: "center"}}>
        <IconPills size={40} />
          <Text>
            Pills
            </Text>
        </Grid.Col>
        <Grid.Col xs={6} style={{ minHeight: rem(80), backgroundColor: '#ADD8E6',textAlign: "center"}}>
        <IconThermometer size={40} />
          <Text>
            Thermometer
            </Text>
        </Grid.Col>
        <Grid.Col xs={6} style={{ minHeight: rem(80),backgroundColor: '#ADD8E6',textAlign: "center" }}>
        <IconBandage size={40} />
          <Text>
            Bandage
            </Text>
        </Grid.Col>
        <Grid.Col xs={6} style={{ minHeight: rem(80), backgroundColor: '#ADD8E6',textAlign: "center" }}>
        <IconMicroscope size={40} />
          <Text>
            Microscope
            </Text>
        </Grid.Col>
      </Grid>
    </Container>
  );
}