// import{
//     Box,
//     Button,
//     Grid,
//     Group,
//     TextInput,
//     Text,
//     Image,
//     createStyles,
//     useMantineTheme,
//     ActionIcon,
//     Menu,
//     Title,
//     Loader,
//     ScrollArea,
// } from "@mantine/core";
// import { Card } from "@mantine/core";
// import { DataTable, DataTableColumn } from "mantine-datatable"
// import { useState } from "react";
// import { useEffect } from "react";
// import {
//     IconDotsVertical,
//     IconEdit,
//     IconEye,
//     IconSearch,
//     IconTrash,
// } from "@tabler/icons-react";

// //import CustomTable from ".";
// const PAGE_SIZE = 10;
// export default function ManagePatient() {
//     const[page,setpage] = useState(1);

//     useEffect(()=>{
//         const from = (page-1)*PAGE_SIZE;
//         const to = from+PAGE_SIZE
//     })

//     // const [selectedRecords, setSelectedRecords] = useState<any>([]);
//     const colDef = [
//         {
//             accessor: "id",
//             title: "ID",
//             titleStyle: { color: "" },
//             textAlignment: "center",
//             render: (data) => (
//                 <Group position="center">
//                     <Text>{data?.id}</Text>
//                 </Group>
//             ),
//         },
//         {
//             accessor: "PatientName",
//             title: "Patient Name",
//             titleStyle: { color: "" },
//             textAlignment: "center",
//             render: (data) => (
//                 <Group position="center">
//                     <Text>{data?.patientName}</Text>
//                 </Group>
//             ),
//         },
//         {
//             accessor: "AppointmentTime",
//             title: "Time",
//             titleStyle: { color: "" },
//             textAlignment: "center",
//             render: (data) => {
//                 return(
//                 <Group position="center">
//                     <Text>{data?.AppointmentTime}</Text>
//                 </Group>
//                 );
//             },
//         },
        
        
//     ];

//     const records = [
//         { 
//             id: 1, 
//             patientName: "Patient 1", 
//             AppointmentTime:"9:00:00",
//         },
//         { 
//             id: 2, 
//             patientName: "Patient 2", 
//             AppointmentTime:"9:00:00",
//         },
//         { 
//             id: 3, 
//             patientName: "Patient 3", 
//             AppointmentTime:"9:00:00",
//         },
//         { 
//             id: 4, 
//             patientName: "Patient 4", 
//             AppointmentTime:"9:00:00",
//         },
//         { 
//             id: 5, 
//             patientName: "Patient 5", 
//             AppointmentTime:"9:00:00",
//         },
//         { 
//             id: 6, 
//             patientName: "Patient 6", 
//             AppointmentTime:"9:00:00",
//         },
        
//     ];
//     return (
//         <ScrollArea height={100}>
//           <Box m="md">
//             <DataTable
//               height={300}
//               withBorder
//               shadow="md"
//               highlightOnHover
//               borderRadius="md"
//               striped
//               horizontalSpacing="xs"
//               verticalSpacing="xs"
//               verticalAlignment="top"
//               columns={colDef}
//               records={records}
//             />
//           </Box>
//         </ScrollArea>
//       );
//     }
    

//-------------------------------------


// import React, { useState, useEffect } from "react";
// import { Box, Card, ScrollArea, Text } from "@mantine/core";
// import { DataTable } from "mantine-datatable";
// import { useSelector } from "react-redux";
// import { get } from "../../../api/index";
// import EndPoints from "../../../api/endPoints";


// const ManagePatient = () => {
//   const [selectedPatient, setSelectedPatient] = useState(null);

//   const user = useSelector((s) => s?.user?.value);
//   const [loading, setLoading] = useState(false);
//   const [records, setRecords] = useState([]);

//   const handleRowClick = (patient) => {
//     setSelectedPatient(patient);
//   };

//   const handleClosePopup = () => {
//     setSelectedPatient(null);
//   };

//   const colDef = [
//     {
//       accessor: "id",
//       title: "ID",
//       titleStyle: { color: "" },
//       textAlignment: "center",
//     },
//     {
//       accessor: "patient.firstName",
//       title: "Patient Name",
//       titleStyle: { color: "" },
//       textAlignment: "center",
//     },
//     {
//       accessor: "time",
//       title: "Time",
//       titleStyle: { color: "" },
//       textAlignment: "center",
//     },
//   ];


//   const getUsers = async () => {
//     setLoading(true);
//     try {
//       const response = await get(
//         `${EndPoints.doctorAppointment}/${user?.id}?appointmentStatus=accepted`
//       );
//       setRecords(response);
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     getUsers();
//   }, []);

//   // const records = [
//   //   {
//   //     id: 1,
//   //     patientName: "Patient 1",
//   //     AppointmentTime: "9:00:00",
//   //     age: 25,
//   //     gender: "Male",
//   //     weight: "70 kg",
//   //   },
//   //   {
//   //     id: 2,
//   //     patientName: "Patient 2",
//   //     AppointmentTime: "9:00:00",
//   //     age: 30,
//   //     gender: "Female",
//   //     weight: "60 kg",
//   //   },
//   //   {
//   //     id: 3,
//   //     patientName: "Patient 3",
//   //     AppointmentTime: "9:00:00",
//   //     age: 40,
//   //     gender: "Male",
//   //     weight: "80 kg",
//   //   },
//   //   {
//   //       id: 4,
//   //       patientName: "Patient 4",
//   //       AppointmentTime: "9:00:00",
//   //       age: 40,
//   //       gender: "Male",
//   //       weight: "80 kg",
//   //     },
//   //     {
//   //       id: 5,
//   //       patientName: "Patient 5",
//   //       AppointmentTime: "9:00:00",
//   //       age: 40,
//   //       gender: "Male",
//   //       weight: "80 kg",
//   //     },
//   //     {
//   //       id: 6,
//   //       patientName: "Patient 6",
//   //       AppointmentTime: "9:00:00",
//   //       age: 40,
//   //       gender: "Male",
//   //       weight: "80 kg",
//   //     },
//   //     {
//   //       id: 7,
//   //       patientName: "Patient 7",
//   //       AppointmentTime: "9:00:00",
//   //       age: 40,
//   //       gender: "Male",
//   //       weight: "80 kg",
//   //     },
//   //   // Add more records here...
//   // ];

//   return (
//     <ScrollArea height={300}>

//       <Box m="md">
//         <DataTable
//           height={300}
//           withBorder
//           shadow="md"
//           highlightOnHover
//           borderRadius="md"
//           striped
//           horizontalSpacing="xs"
//           verticalSpacing="xs"
//           verticalAlignment="top"
//           columns={colDef}
//           records={records}
//           onRowClick={handleRowClick}
//           selectedRowIds={selectedPatient ? [selectedPatient.id] : []}
//         />
//       </Box>
//       {selectedPatient && (
//         <Box
//           position="fixed"
//           top="50%"
//           left="50%"
//           transform="translate(-50%, -50%)"
//           width={400}
//           height={200}
//           bg="white"
//           shadow="lg"
//           radius="md"
//           padding="lg"
//         >
//           <Card>
//             ID: {selectedPatient.id}
//             <br />
//             Name: {selectedPatient.patientName}
//             <br />
//             Age: {selectedPatient.age}
//             <br />
//             Gender: {selectedPatient.gender}
//             <br />
//             Weight: {selectedPatient.weight}
//           </Card>
//           <button radius="md"
//           variant="subtle"
//           style={{color:"white", backgroundColor:'red', }} 
//           onClick={handleClosePopup}>Close</button>
//         </Box>
//       )}
//     </ScrollArea>
//   );
// };

// export default ManagePatient;


//--------------------------------------------------------------------------------------------------------


import React, { useState, useEffect } from "react";
import { Box, Card, ScrollArea, Text, Loader } from "@mantine/core";
import { DataTable } from "mantine-datatable";
import { useSelector } from "react-redux";
import { get } from "../../../api/index";
import EndPoints from "../../../api/endPoints";

const ManagePatient = () => {
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [loading, setLoading] = useState(true);
  const [records, setRecords] = useState([]);
  const user = useSelector((s) => s?.user?.value);

  const handleRowClick = (patient) => {
    setSelectedPatient(patient);
  };

  const handleClosePopup = () => {
    setSelectedPatient(null);
  };

  const colDef = [
    {
      accessor: "id",
      title: "ID",
      titleStyle: { color: "" },
      textAlignment: "center",
    },
    {
      accessor: "patient.firstName",
      title: "Patient Name",
      titleStyle: { color: "" },
      textAlignment: "center",
    },
    {
      accessor: "time",
      title: "Time",
      titleStyle: { color: "" },
      textAlignment: "center",
    },
  ];

  const getUsers = async () => {
    setLoading(true);
    try {
      const response = await get(
        `${EndPoints.doctorAppointment}/${user?.id}?appointmentStatus=accepted`
      );
      setRecords(response);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <ScrollArea height={300}>
      <Box m="md">
        {loading ? (
          <Card style={{ textAlign: "center", padding: "20px" }}>
            <Loader size="lg" />
          </Card>
        ) : (
          <DataTable
            height={300}
            withBorder
            shadow="md"
            highlightOnHover
            borderRadius="md"
            striped
            horizontalSpacing="xs"
            verticalSpacing="xs"
            verticalAlignment="top"
            columns={colDef}
            records={records}
            onRowClick={handleRowClick}
            selectedRowIds={selectedPatient ? [selectedPatient.id] : []}
          />
        )}
      </Box>
      {selectedPatient && (
        <Box
          position="fixed"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          width={400}
          height={200}
          bg="white"
          shadow="lg"
          radius="md"
          padding="lg"
        >
          <Card>
            ID: {selectedPatient.id}
             <br />
            Name: {selectedPatient.patient.firstName}
             <br />
            Age: {selectedPatient.patient.age}
             <br />
            Gender: {selectedPatient.patient.gender}
             <br />
            Appointment Time: {selectedPatient.time}
          </Card>
          <button
            radius="md"
            variant="subtle"
            style={{ color: "white", backgroundColor: "red" }}
            onClick={handleClosePopup}
          >
            Close
          </button>
        </Box>
      )}
    </ScrollArea>
  );
};

export default ManagePatient;