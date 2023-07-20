
//----------------------------------------------------------------------------------------------------------------------

import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Text,
  Group,
  Notification,
  ScrollArea,
  Card,
} from "@mantine/core";
import { useSelector } from 'react-redux';
import {get} from "../../../api/index";
import EndPoints from "../../../api/endPoints";

const AppointmentRequest = () => {
  const [selectedNotification, setSelectedNotification] = useState(null);
  const [records, setRecords] = useState([]);
  //const [records, setRecords] = useState([]);


  const user = useSelector((s) => s?.user?.value)
    console.log(user);


  const handleAccept = (patientName) => {
    setSelectedNotification({
      color: "green",
      message: `Appointment with ${patientName} is fixed.`,
    });
  };

  const handleReject = (patientName) => {
    setSelectedNotification({
      color: "red",
      message: `Appointment with ${patientName} is rejected.`,
    });
  };


  const getUsers =async() =>{
    await get(`${EndPoints.doctorAppointment}/${user?.id}?appointmentStatus=pending`).then((response)=>{
      setRecords(response);
      console.log(response);
  }).catch(error =>{
      console.log(error);
  })

  }
  useEffect(()=>{
    getUsers()
  },[])

  

  

  return (
    <ScrollArea height={300}>
      <Box m="md" style={{ display: "flex", flexWrap: "wrap" }}>
        {records.map((patient) => (
          <Card
            key={patient.id}
            shadow="md"
            style={{ marginBottom: "16px", marginRight: "16px", width: "300px" }}
          >
            <Box padding="md">
              <Text weight={500} style={{ marginBottom: "8px", fontSize: "18px" }}>
                {patient?.Id}
              </Text>
              <Group position="center">
                <Text weight={500} style={{ marginRight: "8px" }}>
                  Date: {patient.date}
                </Text>
                <Text weight={500} style={{ marginRight: "8px" }}>
                  Time: {patient.time}
                </Text>
              </Group>
              <Group position="center">
                <Button
                  radius="md"
                  variant="subtle"
                  onClick={() => handleAccept(patient.patientName)}
                >
                  Accept
                </Button>
                <Button
                  style={{ color: "red" }}
                  radius="md"
                  variant="subtle"
                  onClick={() => handleReject(patient.patientName)}
                >
                  Reject
                </Button>
              </Group>
            </Box>
          </Card>
        ))}
        {selectedNotification && (
          <Notification
            title="Appointment Status"
            color={selectedNotification.color}
            onClose={() => setSelectedNotification(null)}
          >
            {selectedNotification.message}
          </Notification>
        )}
      </Box>
    </ScrollArea>
  );
};

export default AppointmentRequest;


//-----------------------------------------------------------------------------------------------------------------


// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   Button,
//   Text,
//   Group,
//   Notification,
//   ScrollArea,
//   Card,
// } from "@mantine/core";
// import EndPoints from "../../../api/endPoints";

// const AppointmentRequest = () => {
//   const [selectedNotification, setSelectedNotification] = useState(null);
//   const [records, setRecords] = useState([]);

//   const handleAccept = (patientName) => {
//     setSelectedNotification({
//       color: "green",
//       message: `Appointment with ${patientName} is fixed.`,
//     });
//   };

//   const handleReject = (patientName) => {
//     setSelectedNotification({
//       color: "red",
//       message: `Appointment with ${patientName} is rejected.`,
//     });
//   };

//   useEffect(() => {
//     handleSubmit();
//   }, []);

//   const handleSubmit = async () => {
//     const doctorId = 1; // Replace 1 with the actual doctorId you want to use.
//     const url = EndPoints.doctorAppointment.replace("{doctorId}", doctorId) + "?appointmentStatus=pending";

//     try {
//       const response = await fetch(url);
//       const data = await response.json();
//       setRecords(data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <ScrollArea height={300}>
//       <Box m="md" style={{ display: "flex", flexWrap: "wrap" }}>
//         {records.map((patient) => (
//           <Card
//             key={patient.id}
//             shadow="md"
//             style={{ marginBottom: "16px", marginRight: "16px", width: "300px" }}
//           >
//             <Box padding="md">
//               <Text weight={500} style={{ marginBottom: "8px", fontSize: "18px" }}>
//                 {patient.patientName}
//               </Text>
//               <Group position="center">
//                 <Text weight={500} style={{ marginRight: "8px" }}>
//                   Date: {patient.AppointmentDate}
//                 </Text>
//                 <Text weight={500} style={{ marginRight: "8px" }}>
//                   Time: {patient.AppointmentTime}
//                 </Text>
//               </Group>
//               <Group position="center">
//                 <Button
//                   radius="md"
//                   variant="subtle"
//                   onClick={() => handleAccept(patient.patientName)}
//                 >
//                   Accept
//                 </Button>
//                 <Button
//                   style={{ color: "red" }}
//                   radius="md"
//                   variant="subtle"
//                   onClick={() => handleReject(patient.patientName)}
//                 >
//                   Reject
//                 </Button>
//               </Group>
//             </Box>
//           </Card>
//         ))}
//         {selectedNotification && (
//           <Notification
//             title="Appointment Status"
//             color={selectedNotification.color}
//             onClose={() => setSelectedNotification(null)}
//           >
//             {selectedNotification.message}
//           </Notification>
//         )}
//       </Box>
//     </ScrollArea>
//   );
// };

// export default AppointmentRequest;


//-------------------------------------------------------------------------------------------------------------



// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   Button,
//   Text,
//   Group,
//   Notification,
//   ScrollArea,
//   Card,
// } from "@mantine/core";
// import { useSelector } from 'react-redux';
// import EndPoints from "../../../api/endPoints";

// const AppointmentRequest = () => {
//   const [selectedNotification, setSelectedNotification] = useState(null);
//   const [records, setRecords] = useState([]);

//   const user = useSelector((s) => s?.appointment?.value);
//   console.log(user);

//   const handleAccept = (patientName) => {
//     setSelectedNotification({
//       color: "green",
//       message: `Appointment with ${patientName} is fixed.`,
//     });
//   };

//   const handleReject = (patientName) => {
//     setSelectedNotification({
//       color: "red",
//       message: `Appointment with ${patientName} is rejected.`,
//     });
//   };

//   const getUsers = async () => {
//     const doctorId = 1;
//     const url = `${EndPoints.doctorAppointment.replace("{doctorId}", doctorId)}?appointmentStatus=pending`;

//     try {
//       const response = await fetch(url);
//       const data = await response.json();
//       setRecords(data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getUsers();
//   }, []);

//   return (
//     <ScrollArea height={300}>
//       <Box m="md" style={{ display: "flex", flexWrap: "wrap" }}>
//         {records.map((patient) => (
//           <Card
//             key={patient.id}
//             shadow="md"
//             style={{ marginBottom: "16px", marginRight: "16px", width: "300px" }}
//           >
//             <Box padding="md">
//               <Text weight={500} style={{ marginBottom: "8px", fontSize: "18px" }}>
//                 {patient.patientName}
//               </Text>
//               <Group position="center">
//                 <Text weight={500} style={{ marginRight: "8px" }}>
//                   Date: {patient.AppointmentDate}
//                 </Text>
//                 <Text weight={500} style={{ marginRight: "8px" }}>
//                   Time: {patient.AppointmentTime}
//                 </Text>
//               </Group>
//               <Group position="center">
//                 <Button
//                   radius="md"
//                   variant="subtle"
//                   onClick={() => handleAccept(patient.patientName)}
//                 >
//                   Accept
//                 </Button>
//                 <Button
//                   style={{ color: "red" }}
//                   radius="md"
//                   variant="subtle"
//                   onClick={() => handleReject(patient.patientName)}
//                 >
//                   Reject
//                 </Button>
//               </Group>
//             </Box>
//           </Card>
//         ))}
//         {selectedNotification && (
//           <Notification
//             title="Appointment Status"
//             color={selectedNotification.color}
//             onClose={() => setSelectedNotification(null)}
//           >
//             {selectedNotification.message}
//           </Notification>
//         )}
//       </Box>
//     </ScrollArea>
//   );
// };

// export default AppointmentRequest;
