import { Card, Text, Avatar, Container, Grid, Divider, TextInput, Button} from '@mantine/core';
import Calendar from './calendar'
import appointmentLogo from '../Dashboard/appointment-icon.png';
import patientLogo from '../Dashboard/Pateint-icon.png';
import DoctorCard from './onlinestatus';
import PatientCard from './patientdetails';


// import { UserIcon } from '@modulz/radix-icons';


export default function Demo() {
  return (
    <div>
    <Grid grow gutter='sm' >
      <Grid.Col span={12}>Welcome Doctor</Grid.Col>
      <Grid.Col span={4}>
      <Card shadow="sm" padding="md" radius='md'>
      <Container>
        <Grid gutter="md" align="center">
          <Grid.Col span={10}>
            <Text size="lg" weight={500} style={{ marginBottom: '8px' }}>
              Total Patients
            </Text>
            <Text size="xl" weight={500}>
              20{/* {totalPatients} */}
            </Text>
          </Grid.Col>
          <Grid.Col span={1} style={{ textAlign: 'right' }}>
          <img src={patientLogo} alt="Image" style={{ maxWidth: '50px', height: '50px' }}/>
          </Grid.Col>
        </Grid>
      </Container>
    </Card>
      </Grid.Col>
      <Grid.Col span={4}>
      <Card shadow="sm" padding="md" radius='md'>
      <Container>
        <Grid gutter="md" align="center">
          <Grid.Col span={10}>
            <Text size="lg" weight={500} style={{ marginBottom: '8px' }}>
              Appointments Today
            </Text>
            <Text size="xl" weight={500}>
              5{/* {totalAppointments} */}
            </Text>
          </Grid.Col>
          <Grid.Col span={1} style={{ textAlign: 'right' }}>
            <img src={appointmentLogo} alt="Image" style={{ maxWidth: '50px', height: '50px' }}/>
          </Grid.Col>
        </Grid>
      </Container>
    </Card>
      </Grid.Col>
      <Grid.Col span={4}>
        <DoctorCard/>
      </Grid.Col>
      <Grid.Col span={4}>
        <Calendar/>
      </Grid.Col>
      <Grid.Col span={6}>4</Grid.Col>
      <Grid.Col span={4}>
        <PatientCard/>
        
      </Grid.Col>
      <Grid.Col span={4}>6</Grid.Col>
    </Grid>
    </div>
  );
}