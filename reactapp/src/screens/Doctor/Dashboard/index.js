// import { Card, Text, Avatar, Container, Grid, Divider, TextInput, Button, Box, ScrollArea} from '@mantine/core';
// import Calendar from './calendar'
// import appointmentLogo from '../Dashboard/appointment-icon.png';
// import patientLogo from '../Dashboard/Pateint-icon.png';
// import DoctorCard from './onlinestatus';
// import PatientCard from './patientdetails';
// import AppointmentRequest from './appointmentrequest';
// import TodayAppointments from './todaysappointments';
// import { useDispatch,useSelector } from 'react-redux';
// // import { UserIcon } from '@modulz/radix-icons';


// export default function DoctorDashboard() {
//  /*  const dispatch = useDispatch()
//   const user = useSelector((s) => s?.user?.value)
//   console.log("userdate",user); */
//   return (
//     <div >
//     <Grid grow gutter='sm' >
//       <Grid.Col style={{fontWeight: "bold", }} span={12}>Welcome Doctor</Grid.Col>
//       <Grid.Col span={4}>
//       <Card shadow="sm" padding="md" radius='lg'>
//       <Container>
//         <Grid gutter="md" align="center">
//           <Grid.Col span={10}>
//             <Text size="lg" weight={500} style={{ marginBottom: '8px' }}>
//               Total Patients
//             </Text>
//             <Text size="xl" weight={500}>
//               20{/* {totalPatients} */}
//             </Text>
//           </Grid.Col>
//           <Grid.Col span={1} style={{ textAlign: 'right' }}>
//           <img src={patientLogo} alt="Image" style={{ maxWidth: '50px', height: '50px' }}/>
//           </Grid.Col>
//         </Grid>
//       </Container>
//     </Card>
//       </Grid.Col>
//       <Grid.Col span={4}>
//       <Card shadow="sm" padding="md" radius='lg'>
//       <Container>
//         <Grid gutter="md" align="center">
//           <Grid.Col span={10}>
//             <Text size="lg" weight={500} style={{ marginBottom: '8px' }}>
//               Appointments Today
//             </Text>
//             <Text size="xl" weight={500}>
//               5{/* {totalAppointments} */}
//             </Text>
//           </Grid.Col>
//           <Grid.Col span={1} style={{ textAlign: 'right' }}>
//             <img src={appointmentLogo} alt="Image" style={{ maxWidth: '50px', height: '50px' }}/>
//           </Grid.Col>
//         </Grid>
//       </Container>
//     </Card>
//       </Grid.Col>
//       <Grid.Col span={4}>
//         <DoctorCard/>
//       </Grid.Col>
//       <Grid.Col span={6}>
//         {/* <Calendar/> */}
//         <Card shadow="sm" padding="md" radius='lg'>
//           <text style={{fontWeight:'bold'}}>Appointment Requests</text>
//           <AppointmentRequest/>
//         </Card>
//       </Grid.Col>
//       <Grid.Col span={4}>
//         <Card shadow="sm" padding="md" radius='lg'>
//             <text style={{fontWeight:'bold'}}>Today's Appointment</text>
//                 <TodayAppointments/>
//         </Card>
//       </Grid.Col>
//       {/* <Grid.Col span={4}>
//         <PatientCard/>
        
//       </Grid.Col>
//       <Grid.Col span={4}>6</Grid.Col> */}
//     </Grid>
//     </div>
//   );
// }




//------------------------------------------------------------------------------------------------------------------



// import React, { useState, useEffect } from "react";
// import {
//   Card,
//   Text,
//   Avatar,
//   Container,
//   Grid,
//   Divider,
//   TextInput,
//   Button,
//   Box,
//   ScrollArea,
//   Notification,
// } from "@mantine/core";
// import Calendar from "./calendar";
// import appointmentLogo from "../Dashboard/appointment-icon.png";
// import patientLogo from "../Dashboard/Pateint-icon.png";
// import DoctorCard from "./onlinestatus";
// import PatientCard from "./patientdetails";
// import AppointmentRequest from "./appointmentrequest";
// import TodayAppointments from "./todaysappointments";
// import { useDispatch, useSelector } from "react-redux";
// import { get } from "../../../api/index"; 
// import EndPoints from "../../../api/endPoints";

// export default function DoctorDashboard() {
//   const [totalPatients, setTotalPatients] = useState(0);
//   const [todaysAppointments, setTodaysAppointments] = useState(0);
//   const [selectedNotification, setSelectedNotification] = useState(null);

//   useEffect(() => {
//     get(`${EndPoints.usersList}?role=ROLE_PATIENT`)
//       .then((response) => {
//         setTotalPatients(response.length);
//       })
//       .catch((error) => {
//         console.log(error);
//       });


//     get(`${EndPoints.getTodaysAppointments}`)
//       .then((response) => {
//         setTodaysAppointments(response.count);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);


//   return (
//     <div>
//       <Grid grow gutter="sm">
//         <Grid.Col style={{ fontWeight: "bold" }} span={12}>
//           Welcome Doctor
//         </Grid.Col>
//         <Grid.Col span={4}>
//           <Card shadow="sm" padding="md" radius="lg">
//             <Container>
//               <Grid gutter="md" align="center">
//                 <Grid.Col span={10}>
//                   <Text size="lg" weight={500} style={{ marginBottom: "8px" }}>
//                     Total Patients
//                   </Text>
//                   <Text size="xl" weight={500}>
//                     {totalPatients}
//                   </Text>
//                 </Grid.Col>
//                 <Grid.Col span={1} style={{ textAlign: "right" }}>
//                   <img
//                     src={patientLogo}
//                     alt="Image"
//                     style={{ maxWidth: "50px", height: "50px" }}
//                   />
//                 </Grid.Col>
//               </Grid>
//             </Container>
//           </Card>
//         </Grid.Col>
//         <Grid.Col span={4}>
//           <Card shadow="sm" padding="md" radius="lg">
//             <Container>
//               <Grid gutter="md" align="center">
//                 <Grid.Col span={10}>
//                   <Text size="lg" weight={500} style={{ marginBottom: "8px" }}>
//                     Appointments Today
//                   </Text>
//                   <Text size="xl" weight={500}>
//                     {todaysAppointments}
//                   </Text>
//                 </Grid.Col>
//                 <Grid.Col span={1} style={{ textAlign: "right" }}>
//                   <img
//                     src={appointmentLogo}
//                     alt="Image"
//                     style={{ maxWidth: "50px", height: "50px" }}
//                   />
//                 </Grid.Col>
//               </Grid>
//             </Container>
//           </Card>
//         </Grid.Col>
//         <Grid.Col span={4}>
//           <DoctorCard />
//         </Grid.Col>
//         <Grid.Col span={6}>
//           <Card shadow="sm" padding="md" radius="lg">
//             <Text style={{ fontWeight: "bold" }}>Appointment Requests</Text>
//             <AppointmentRequest />
//           </Card>
//         </Grid.Col>
//         <Grid.Col span={4}>
//           <Card shadow="sm" padding="md" radius="lg">
//             <Text style={{ fontWeight: "bold" }}>Today's Appointment</Text>
//             <TodayAppointments />
//           </Card>
//         </Grid.Col>
//       </Grid>
//     </div>
//   );
// }

//-------------------------------------------------------------------------------------------------------------


import React, { useState, useEffect } from "react";
import {
  Card,
  Text,
  Avatar,
  Container,
  Grid,
  Divider,
  TextInput,
  Button,
  Box,
  ScrollArea,
  Notification,
} from "@mantine/core";
import Calendar from "./calendar";
import appointmentLogo from "../Dashboard/appointment-icon.png";
import patientLogo from "../Dashboard/Pateint-icon.png";
import DoctorCard from "./onlinestatus";
import PatientCard from "./patientdetails";
import AppointmentRequest from "./appointmentrequest";
import TodayAppointments from "./todaysappointments";
import { useDispatch, useSelector } from "react-redux";
import { get } from "../../../api/index";
import EndPoints from "../../../api/endPoints";

export default function DoctorDashboard() {
  const [totalPatients, setTotalPatients] = useState(0);
  const [todaysAppointments, setTodaysAppointments] = useState(0);
  const [selectedNotification, setSelectedNotification] = useState(null);

  useEffect(() => {
    get(`${EndPoints.usersList}?role=ROLE_PATIENT`)
      .then((response) => {
        setTotalPatients(response.data.length); 
      })
      .catch((error) => {
        console.log(error);
      });

      get(`${EndPoints.doctorAppointment}`)
      .then((response) => {
        setTodaysAppointments(response.data.count);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Grid grow gutter="sm">
        <Grid.Col style={{ fontWeight: "bold" }} span={12}>
          Welcome Doctor
        </Grid.Col>
        <Grid.Col span={4}>
          <Card shadow="sm" padding="md" radius="lg">
            <Container>
              <Grid gutter="md" align="center">
                <Grid.Col span={10}>
                  <Text size="lg" weight={500} style={{ marginBottom: "8px" }}>
                    Total Patients
                  </Text>
                  <Text size="xl" weight={500}>
                    {totalPatients}
                  </Text>
                </Grid.Col>
                <Grid.Col span={1} style={{ textAlign: "right" }}>
                  <img
                    src={patientLogo}
                    alt="Image"
                    style={{ maxWidth: "50px", height: "50px" }}
                  />
                </Grid.Col>
              </Grid>
            </Container>
          </Card>
        </Grid.Col>
        <Grid.Col span={4}>
          <Card shadow="sm" padding="md" radius="lg">
            <Container>
              <Grid gutter="md" align="center">
                <Grid.Col span={10}>
                  <Text size="lg" weight={500} style={{ marginBottom: "8px" }}>
                    Appointments Today
                  </Text>
                  <Text size="xl" weight={500}>
                    {todaysAppointments}
                  </Text>
                </Grid.Col>
                <Grid.Col span={1} style={{ textAlign: "right" }}>
                  <img
                    src={appointmentLogo}
                    alt="Image"
                    style={{ maxWidth: "50px", height: "50px" }}
                  />
                </Grid.Col>
              </Grid>
            </Container>
          </Card>
        </Grid.Col>
        <Grid.Col span={4}>
          <DoctorCard />
        </Grid.Col>
        <Grid.Col span={6}>
          <Card shadow="sm" padding="md" radius="lg">
            <Text style={{ fontWeight: "bold" }}>Appointment Requests</Text>
            <AppointmentRequest />
          </Card>
        </Grid.Col>
        <Grid.Col span={4}>
          <Card shadow="sm" padding="md" radius="lg">
            <Text style={{ fontWeight: "bold" }}>Today's Appointment</Text>
            <TodayAppointments />
          </Card>
        </Grid.Col>
      </Grid>
    </div>
  );
}
