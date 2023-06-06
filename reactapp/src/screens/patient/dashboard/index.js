import { Card, Image, Text, Badge, Button, Group, Tabs, Select } from '@mantine/core';
import { Grid } from '@mantine/core';
import classes from './index.css';
import { IconPhoto, IconMessageCircle, IconSettings } from '@tabler/icons-react'
// import { Calendar } from '@mantine/dates';
export default function PatientDashboard() {
  return (
    <Grid>
      <Grid.Col xs={3} lg={3}>
        <Card shadow="sm" padding="lg" radius="md" withBorder height={500}>
          {/* <Card.Section > */}
            <Image
              src="https://thumbs.dreamstime.com/z/flat-style-character-avatar-icon-vector-flat-style-character-avatar-icon-female-107139893.jpg"
              height={150}
              
            />
          {/* </Card.Section> */}

          <Group position="below" mt="md" mb="xs"  >
          <div className={classes.name}>
         
          <Text weight={500}>Bess Willis</Text>
          <Text weight={500}>27years, California</Text>
          </div>
          
          
          </Group>
          <Group position="below" mt="md" mb="lg" >
          
                              <div className={classes.left} >
                                <text>Weight</text>
                                <h2>60kg</h2>
                            </div>
                            <div className={classes.center}>
                                <text>Height</text>                        
                                <h2>170cm</h2>
                            </div>
                            <div className={classes.right}>
                                <text>Blood Group</text>
                                <h2>O+</h2>
                            </div>
          </Group>  
        </Card>
      </Grid.Col>

      {/* <Grid.Col xs={4.5} lg={4.5}>
          <Card shadow="sm" padding="lg" radius="md" withBorder>

           <Group mt="md" mb="xs"> 
             <div className={classes.appointment}>
                
               <Badge color="pink" variant="light" size={50} > 
                <h1 weight={1000}>Appointment</h1>
               </Badge> 
             </div> 
           
            </Group>

             <Group position="below" mt="md" mb="lg">
                            <div className={classes.date} >

                                <text>10:00 - 11:00</text>
                                <h2>5 June'22</h2>
                            </div>
                            <div className={classes.future}>
                                <text>Upcoming Appointments</text>                       
                                <h2>10/02/22</h2>
                            </div>
                            <div className={classes.plan}>
                                <text>Diagnosis</text>
                                <h2>Diabetis</h2>
                            </div>
                            <div className={classes.doc}>
                                <text>Doctor</text>
                                <h2>Dr. Ameen</h2>
                            </div>
             </Group>
          </Card>
      </Grid.Col> */}

      {/* <Grid.Col xs={4} lg={4}>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Image
              src="https://img.freepik.com/free-vector/stretching-exercises-concept-illustration_114360-8922.jpg?w=1380&t=st=1685703360~exp=1685703960~hmac=38760083836c1870fbc66e8d81bac770f773f80734a22cad42ab36f30d684320"
              height={200} 
            />
           <Group mt="md" mb="xs">   
               <Badge color="pink" variant="light" size={50} > 
                <h1 weight={1000}>Activity Assigned </h1>
               </Badge> 
            </Group>

             <Group position="below" mt="md" mb="lg">
                            <div className={classes.date} >
                                <h2>Walking</h2>
                                <text>30 Mins a Day</text>
                                
                            </div>
                            <div className={classes.future}>
                                <h2>Meditation</h2>
                                <text>10 Mins a day</text>                       
                                
                            </div>
                            <div className={classes.plan}>
                                <h2>Basic Exercise</h2>
                                <text>30 Mins </text>                                
                            </div>
             </Group>

          </Card>
  
      </Grid.Col>  */}
    <Grid.Col xs={3} lg={3}>
    <Card shadow="sm" padding="lg" radius="md" withBorder>
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

    <Grid.Col xs={3} lg={3}>
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      {/* <Card.Section > */}
      
        <Group position="center">
        <Badge color="pink" variant="light" size={50} > 
                <h1 weight={1000}>Our Doctors</h1>
               </Badge> 
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
  
        </Group>
    </Card>
    </Grid.Col>
    
  
    </Grid>
  );
}



