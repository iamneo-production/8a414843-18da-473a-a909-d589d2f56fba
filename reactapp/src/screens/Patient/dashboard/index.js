import { Card, Image, Text, Badge, Button, Group, Tabs, Select, Center, Autocomplete } from '@mantine/core';
import { Grid } from '@mantine/core';
import classes from './index.css';
import {useState} from 'react';
import { IconPhoto, IconMessageCircle, IconSettings } from '@tabler/icons-react'
import { useDispatch,useSelector } from 'react-redux';
// import { Calendar } from '@mantine/dates';


export default function PatientDashboard() {
  const dispatch = useDispatch()
  const user = useSelector((s) => s?.user?.value)


  return (
    <Center h={700}> 
    <Grid grow gutter='sm'>

      <Grid.Col xs={4} lg={4}>
      
        <Card shadow="sm" padding="lg" radius="md" withBorder h={400} style={{minHeight:400}}>
          {/* <Card.Section > */}
            <Image
              src="https://thumbs.dreamstime.com/z/flat-style-character-avatar-icon-vector-flat-style-character-avatar-icon-female-107139893.jpg"
              height={150}
              
            />
          {/* </Card.Section> */}

          <Group  mt="md" mb="xs"  >
          
          <div className={classes.name}>
         
          
          <Text weight={800}>Bess Willis</Text>
          <Text weight={800}>27years,California</Text>
          
          </div>
          
          
          </Group>
          <Group position="below" mt="md" mb="lg" >
          
                             
                            <text>Weight</text>
                            <h2>60kg</h2>
                                <text>Height</text>                        
                                <h2>170cm</h2>
                                <text>Blood Group</text>
                                <h2>O+</h2>
          </Group>  
        </Card>
       
      </Grid.Col>
    <Grid.Col xs={4} lg={4} >
    
    <Card shadow="sm" padding="lg" radius="md" withBorder style={{minHeight:400}}>
      {/* <Card.Section > */}
      
        <Group position="center">
        <Badge color="pink" variant="light" size={50} > 
                <h1 weight={1000}>Appointments</h1>
               </Badge> 
          <Tabs variant="outline" defaultValue="Appointment">
            <Tabs.List>
              <Tabs.Tab value="Appointments"><h2>Appointments</h2></Tabs.Tab>
              <Tabs.Tab value="Today Appointments"><h2>Today Appointments</h2></Tabs.Tab>
              
            </Tabs.List>

            <Tabs.Panel value="Appointments" pt="xs">
            
              <Card padding="lg" radius="md"  xs={2}>
              
              <Group position='apart'>
                <img src=" https://th.bing.com/th/id/R.170b39e33f173267a55da898e738c3cb?rik=RsSoJKbxIOdGBw&riu=http%3a%2f%2ficons.iconarchive.com%2ficons%2fgoogle%2fnoto-emoji-people-profession%2f1024%2f10303-man-office-worker-light-skin-tone-icon.png&ehk=2mgY7Ya8ae5t782z4R%2bhbLHub%2bPNyoUbP5Ku0LEO%2b2s%3d&risl=&pid=ImgRaw&r=0" height={25}></img>
                <h5>Dr.Sam</h5>
                <h5>10 June</h5>
                <text>10:00</text>
                </Group>
                
              <Group position='apart'>
                  <img src=" https://th.bing.com/th/id/R.170b39e33f173267a55da898e738c3cb?rik=RsSoJKbxIOdGBw&riu=http%3a%2f%2ficons.iconarchive.com%2ficons%2fgoogle%2fnoto-emoji-people-profession%2f1024%2f10303-man-office-worker-light-skin-tone-icon.png&ehk=2mgY7Ya8ae5t782z4R%2bhbLHub%2bPNyoUbP5Ku0LEO%2b2s%3d&risl=&pid=ImgRaw&r=0" height={25}></img>
                  <h5>Dr.Sam</h5>
                  <h5>17 June</h5>
                  <text>13:00</text>
                
              </Group>
              <Group position='apart'>
                <img src=" https://th.bing.com/th/id/R.170b39e33f173267a55da898e738c3cb?rik=RsSoJKbxIOdGBw&riu=http%3a%2f%2ficons.iconarchive.com%2ficons%2fgoogle%2fnoto-emoji-people-profession%2f1024%2f10303-man-office-worker-light-skin-tone-icon.png&ehk=2mgY7Ya8ae5t782z4R%2bhbLHub%2bPNyoUbP5Ku0LEO%2b2s%3d&risl=&pid=ImgRaw&r=0" height={25}></img>
                <h5>Dr.Sam</h5>
                <h5>23 June</h5>
                <text>15:00</text>
                
              </Group>
              <Group position='apart'>
                <img src=" https://th.bing.com/th/id/R.170b39e33f173267a55da898e738c3cb?rik=RsSoJKbxIOdGBw&riu=http%3a%2f%2ficons.iconarchive.com%2ficons%2fgoogle%2fnoto-emoji-people-profession%2f1024%2f10303-man-office-worker-light-skin-tone-icon.png&ehk=2mgY7Ya8ae5t782z4R%2bhbLHub%2bPNyoUbP5Ku0LEO%2b2s%3d&risl=&pid=ImgRaw&r=0" height={25}></img>
                <h5>Dr.Sam</h5>
                <h5>30 June</h5>
                <text>11:00</text>
                
              </Group>
      
              </Card>
            
                                    
            </Tabs.Panel>

            <Tabs.Panel value="Today Appointments" pt="xs">
                <Card >
                  <Group position='apart'>
                  <img src=" https://th.bing.com/th/id/R.170b39e33f173267a55da898e738c3cb?rik=RsSoJKbxIOdGBw&riu=http%3a%2f%2ficons.iconarchive.com%2ficons%2fgoogle%2fnoto-emoji-people-profession%2f1024%2f10303-man-office-worker-light-skin-tone-icon.png&ehk=2mgY7Ya8ae5t782z4R%2bhbLHub%2bPNyoUbP5Ku0LEO%2b2s%3d&risl=&pid=ImgRaw&r=0" height={25}></img>
                  <h5>Dr.Sam</h5>
                  
                  <text>11:00</text>
                  <h5>Cardiology</h5>
                  </Group>
                </Card>
            </Tabs.Panel>

            
          </Tabs>
  
        </Group>
    </Card>
    
    </Grid.Col>

    <Grid.Col xs={4} lg={4}>
   
    <Card shadow="sm" padding="lg" radius="md" withBorder mx="auto" style={{minHeight:400}}>
      {/* <Card.Section > */}
      
        <Group position="center">
        <Badge color="pink" variant="light" size={50} > 
                <h1 weight={1000}>Our Doctors</h1>
               </Badge> 
               </Group>
          <Tabs variant="outline" defaultValue="Appointment">
            <Tabs.List>
              <Tabs.Tab value="Doctors"><h2>Doctor</h2></Tabs.Tab>
              <Tabs.Tab value="Specialization"><h2>Specialization</h2></Tabs.Tab>
              
            </Tabs.List>

            <Tabs.Panel value="Doctors" pt="xs">
            
              <Card padding="lg" radius="md"  xs={2}>
              
              <Group position='apart'>
                <img src=" https://th.bing.com/th/id/R.170b39e33f173267a55da898e738c3cb?rik=RsSoJKbxIOdGBw&riu=http%3a%2f%2ficons.iconarchive.com%2ficons%2fgoogle%2fnoto-emoji-people-profession%2f1024%2f10303-man-office-worker-light-skin-tone-icon.png&ehk=2mgY7Ya8ae5t782z4R%2bhbLHub%2bPNyoUbP5Ku0LEO%2b2s%3d&risl=&pid=ImgRaw&r=0" height={25}></img>
                <h5>Dr.Sam</h5>
                <h5>MBBS, MD, FRCP, and MRCP</h5> 
                </Group>
                
              <Group position='apart'>
                  <img src="https://whatemoji.org/wp-content/uploads/2020/07/%E2%8A%9B-Woman-In-Tuxedo-Emoji-1024x1024.png" height={30}></img>
                  <h5>Dr.William</h5>
                  <h5>MBBS and MD in Opthomology</h5> 
              </Group>
              <Group position='apart'>
                <img src=" https://th.bing.com/th/id/R.170b39e33f173267a55da898e738c3cb?rik=RsSoJKbxIOdGBw&riu=http%3a%2f%2ficons.iconarchive.com%2ficons%2fgoogle%2fnoto-emoji-people-profession%2f1024%2f10303-man-office-worker-light-skin-tone-icon.png&ehk=2mgY7Ya8ae5t782z4R%2bhbLHub%2bPNyoUbP5Ku0LEO%2b2s%3d&risl=&pid=ImgRaw&r=0" height={25}></img>
                <h5>Dr.Prabha</h5>
                <h5>MBBS and MD in Gynecology</h5>
                
                
              </Group>
              <Group position='apart'>
                <img src="https://whatemoji.org/wp-content/uploads/2020/07/%E2%8A%9B-Woman-In-Tuxedo-Emoji-1024x1024.png" height={30}></img>
                <h5>Dr.Priya</h5>
                <h5>MBBs and DM in Neurology</h5> 
              </Group>
      
              </Card>
            
                                    
            </Tabs.Panel>

            <Tabs.Panel value="Specialization" pt="xs">
                <Card >
                  <Group position='apart'>
                  <img src=" https://th.bing.com/th/id/R.170b39e33f173267a55da898e738c3cb?rik=RsSoJKbxIOdGBw&riu=http%3a%2f%2ficons.iconarchive.com%2ficons%2fgoogle%2fnoto-emoji-people-profession%2f1024%2f10303-man-office-worker-light-skin-tone-icon.png&ehk=2mgY7Ya8ae5t782z4R%2bhbLHub%2bPNyoUbP5Ku0LEO%2b2s%3d&risl=&pid=ImgRaw&r=0" height={25}></img>
                  <h5>Dr.William</h5>
                  <h5>Opthomologist</h5>
                  </Group>
                  <Group position='apart'>
                  <img src=" https://th.bing.com/th/id/R.170b39e33f173267a55da898e738c3cb?rik=RsSoJKbxIOdGBw&riu=http%3a%2f%2ficons.iconarchive.com%2ficons%2fgoogle%2fnoto-emoji-people-profession%2f1024%2f10303-man-office-worker-light-skin-tone-icon.png&ehk=2mgY7Ya8ae5t782z4R%2bhbLHub%2bPNyoUbP5Ku0LEO%2b2s%3d&risl=&pid=ImgRaw&r=0" height={25}></img>
                  <h5>Dr.Sam</h5>
                  <h5>Cardiologist</h5>
                  </Group>
                  <Group position='apart'>
                  <img src=" https://whatemoji.org/wp-content/uploads/2020/07/%E2%8A%9B-Woman-In-Tuxedo-Emoji-1024x1024.png" height={30}></img>
                  <h5>Dr.Prabha</h5>
                  <h5>Gynecologist</h5>
                  </Group>
                  <Group position='apart'>
                  <img src=" https://whatemoji.org/wp-content/uploads/2020/07/%E2%8A%9B-Woman-In-Tuxedo-Emoji-1024x1024.png" height={30}></img>
                  <h5>Dr.Priya</h5>
                  <h5>Neurologist</h5>
                  </Group>
                  
                </Card>
            </Tabs.Panel>

            
          </Tabs>
  
        
    </Card>
   
    </Grid.Col>
    
  
    </Grid>
    </Center>
  );
}



