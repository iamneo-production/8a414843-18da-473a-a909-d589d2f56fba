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
// import { Notifications, } from '@mantine/notifications';
// import { Card } from "@mantine/core";
// import { DataTable, DataTableColumn } from "mantine-datatable"
// import { useState } from "react";
// import { useEffect } from "react";
// import {
//     IconArrowRight,
//     IconBan,
//     IconBold,
//     IconCheck,
//     IconCross,
//     IconDotsVertical,
//     IconEdit,
//     IconEye,
//     IconSearch,
//     IconTrash,
// } from "@tabler/icons-react";
// import { IconCrossFilled } from "@tabler/icons-react";

// //import CustomTable from ".";

// const PAGE_SIZE = 10;
// export default function ManagePatient() {
//     const[page,setpage] = useState(1);
//     const [selectedNotification, setSelectedNotification] = useState(null);

//     useEffect(()=>{
//         const from = (page-1)*PAGE_SIZE;
//         const to = from+PAGE_SIZE
//     })

//     const handleAccept = (patientName) => {
//         setSelectedNotification({
//           color: "green",
//           message: `Appointment with ${patientName} is fixed.`,
//         });
//       };
    
//       const handleReject = (patientName) => {
//         setSelectedNotification({
//           color: "red",
//           message: `Appointment with ${patientName} is rejected.`,
//         });
//       };

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
//                     <Text style={{fontWeight:'bold'}}>{data?.patientName}</Text>
//                 </Group>
//             ),
//         },
//         {
//             accessor: "gender",
//             title: "Gender",
//             titleStyle: { color: "" },
//             textAlignment: "center",
//             render: (data) => {
//                 return(
//                 <Group position="center">
//                     <Text>{data?.gender}</Text>
//                 </Group>
//                 );
//             },
//         },
//         {
//             accessor: "AppointmentDate: ",
//             title: "Date",
//             titleStyle: { color: "" },
//             textAlignment: "center",
//             render: (data) => {
//                 return(
//                 <Group position="center">
//                     <Text>{data?.AppointmentDate}</Text>
//                 </Group>
//                 );
//             },
//         },
//         {
//             accessor: "AppointmentTime",
//             title:"Time",
//             textAlignment: "center",
//             render: (data) => (
//                 <Group position="center">
//                     <Text
//                         fz="12px"
//                         fw={500}
//                         p={5}
//                         style={{
//                             // fontWeight: "bold",
//                             // color: data?.AppointmentTime === "paid" ? "#3B72FF" : "#FF3B3B",
//                             // backgroundColor:
//                             //     data?.AppointmentTime === "paid" ? "#E3EBFF" : "#FFE4E4",
//                             borderRadius: "6px",
//                         }}
//                     >
//                         {data?.AppointmentTime}
//                     </Text>
//                 </Group>
//             ),
//         },
        
//         {
            
//             accessor: "actions",
//             title: <Text mr="xs">Actions</Text>,
//             textAlignment: "center",
//             render: (data) => {
//                 console.log("data", data);
//                 return (
//                     <Menu position="bottom-start" shadow="xl" width={160}>
//                         <Menu.Target>
//                             <Button
//                                 radius="md"
//                                 variant="subtle"
//                             // sx={{ height: "20px", width: "45%" }}
//                             >
//                                 <IconDotsVertical />
//                             </Button>
//                         </Menu.Target>
//                         <Menu.Dropdown>
//                             {/* <Menu.Item
//                                 icon={<IconEye size={19} style={{ color: "#081226" }} />}
//                                 style={{
//                                     color: "black",
//                                     fontSize: 15,
//                                     fontWeight: "500",
//                                 }}
//                             >
//                                 View
//                             </Menu.Item> */}
//                             <Menu.Item
//                                 icon={<IconCheck color="green" size={17} style={{ color: "#081226" }} />}
//                                 style={{
//                                     color: "black",
//                                     fontSize: 15,
//                                     fontWeight: "500",
//                                 }}
//                                onClick={() => handleAccept(data.patientName)}
            
//                             >
//                                 Accept
//                             </Menu.Item>

//                             <Menu.Item
//                                 icon={<IconBan color="red" size={16} />}
//                                 style={{
//                                     color: "black",
//                                     fontSize: 15,
//                                     fontWeight: "500",
//                                 }}
//                                 onClick={() => handleReject(data.patientName)}
//                             >
//                                 Reject
//                             </Menu.Item>
//                         </Menu.Dropdown>
//                     </Menu>
//                 );
//             },
//         },
//     ];

//     const records = [
//         { 
//             id: 1, 
//             patientName: "Employee 1", 
//             gender:"male",
//             AppointmentDate: "04/06/2023",
//             AppointmentTime:"9:00:00",
//         },
//         { 
//             id: 2, 
//             patientName: "Employee 1", 
//             gender:"male",
//             AppointmentDate: "04/06/2023",
//             AppointmentTime:"9:00:00",
//         },
//         { 
//             id: 3, 
//             patientName: "Employee 1", 
//             gender:"male",
//             AppointmentDate: "04/06/2023",
//             AppointmentTime:"9:00:00",
//         },
//         { 
//             id: 4, 
//             patientName: "Employee 1", 
//             gender:"male",
//             AppointmentDate: "04/06/2023",
//             AppointmentTime:"9:00:00",
//         },
//         { 
//             id: 5, 
//             patientName: "Employee 1", 
//             gender:"male",
//             AppointmentDate: "04/06/2023",
//             AppointmentTime:"9:00:00",
//         },
        
//     ];

//     return(
//         <ScrollArea height={100}> 
//         <Box m="md">
//             {/* <Grid>
//                 <Grid.Col xs={2} lg={2}>
//                     <Card m="md" shadow="xl" p={20} 
//                      style={{fontFamily:"unset",
//                      borderRadius:"20px",
//                      background:"rgba(139, 127, 194, 1)",
//                       color:"white",
//                       textAlign:"center"}}>
//                         PATIENTS MANAGEMENT
//                     </Card>
//                 </Grid.Col>
//                 <Grid.Col xs={8} lg={8}></Grid.Col>
//                 <Grid.Col xs={2} lg={2}>
//                     <Button p={30} left="46%" style={{borderRadius:"20px",top:"13%"}} >Add User</Button>
//                 </Grid.Col>
//             </Grid> */}
//         <DataTable height={300}
//             withBorder
//             shadow="md"
//             // withColumnBorders
//             highlightOnHover
//             borderRadius='md'
//             striped
//             horizontalSpacing="xs"
//             verticalSpacing="xs"
//             // fontSize="xs"
//             verticalAlignment="top"
//             //fetching={fetching}
//             loaderVariant="bars"
//             minHeight="80vh"
//             // height={window.innerHeight - 230}
//             columns={colDef}
//             records={records}
//         // emptyState={<Stack align="center" spacing="xs">
//         //     <NoData />
//         // </Stack>}
//         // selectedRecords={selectedRecords}
//         // onSelectedRecordsChange={setSelectedRecords}
//         />
//         {selectedNotification && (
//           <Notifications
//             title="Appointment Status"
//             color={selectedNotification.color}
//             onClose={() => setSelectedNotification(null)}
//           >
//             {selectedNotification.message}
//           </Notifications>
//         )}
//         </Box>
//         </ScrollArea>
//     );
// }

//---------------------------------------------------------------------------


// import { showNotification } from '@mantine/notifications';
// import React, { useEffect, useState } from "react";
// import {
//   Box,
//   Button,
//   Grid,
//   Group,
//   Text,
//   Image,
//   createStyles,
//   useMantineTheme,
//   ActionIcon,
//   Menu,
//   Title,
//   Loader,
//   ScrollArea,
// } from "@mantine/core";
// import { Card } from "@mantine/core";
// import { DataTable, DataTableColumn } from "mantine-datatable";
// import {
//   IconArrowRight,
//   IconBan,
//   IconBold,
//   IconCheck,
//   IconCross,
//   IconDotsVertical,
//   IconEdit,
//   IconEye,
//   IconSearch,
//   IconTrash,
// } from "@tabler/icons-react";
// import { IconCrossFilled } from "@tabler/icons-react";

// const PAGE_SIZE = 10;

// export default function ManagePatient() {
//   const [page, setpage] = useState(1);
//   const [selectedNotification, setSelectedNotification] = useState(null);

//   useEffect(() => {
//     const from = (page - 1) * PAGE_SIZE;
//     const to = from + PAGE_SIZE;
//   });

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

//   const colDef = [
//     {
//       accessor: "id",
//       title: "ID",
//       titleStyle: { color: "" },
//       textAlignment: "center",
//       render: (data) => (
//         <Group position="center">
//           <Text>{data?.id}</Text>
//         </Group>
//       ),
//     },
//     {
//       accessor: "PatientName",
//       title: "Patient Name",
//       titleStyle: { color: "" },
//       textAlignment: "center",
//       render: (data) => (
//         <Group position="center">
//           <Text style={{ fontWeight: "bold" }}>{data?.patientName}</Text>
//         </Group>
//       ),
//     },
//     {
//       accessor: "gender",
//       title: "Gender",
//       titleStyle: { color: "" },
//       textAlignment: "center",
//       render: (data) => {
//         return (
//           <Group position="center">
//             <Text>{data?.gender}</Text>
//           </Group>
//         );
//       },
//     },
//     {
//       accessor: "AppointmentDate",
//       title: "Date",
//       titleStyle: { color: "" },
//       textAlignment: "center",
//       render: (data) => {
//         return (
//           <Group position="center">
//             <Text>{data?.AppointmentDate}</Text>
//           </Group>
//         );
//       },
//     },
//     {
//       accessor: "AppointmentTime",
//       title: "Time",
//       textAlignment: "center",
//       render: (data) => (
//         <Group position="center">
//           <Text
//             fz="12px"
//             fw={500}
//             p={5}
//             style={{
//               borderRadius: "6px",
//             }}
//           >
//             {data?.AppointmentTime}
//           </Text>
//         </Group>
//       ),
//     },
//     {
//       accessor: "actions",
//       title: <Text mr="xs">Actions</Text>,
//       textAlignment: "center",
//       render: (data) => {
//         return (
//           <Group position="center">
//             <div style={{ display: "flex" }}>
//               <Button
//                 radius="md"
//                 variant="subtle"
//                 onClick={() => handleAccept(data.patientName)}
//               >
//                 Accept
//               </Button>
//               <Button
//                 style={{ color: "red" }}
//                 radius="md"
//                 variant="subtle"
//                 onClick={() => handleReject(data.patientName)}
//               >
//                 Reject
//               </Button>
//             </div>
//           </Group>
//         );
//       },
//     },
//   ];

//   const records = [
//     {
//       id: 1,
//       patientName: "Patient 1",
//       gender: "male",
//       AppointmentDate: "04/06/2023",
//       AppointmentTime: "9:00:00",
//     },
//     {
//       id: 2,
//       patientName: "Patient 2",
//       gender: "male",
//       AppointmentDate: "04/06/2023",
//       AppointmentTime: "9:00:00",
//     },
//     {
//       id: 3,
//       patientName: "Patient 3",
//       gender: "male",
//       AppointmentDate: "04/06/2023",
//       AppointmentTime: "9:00:00",
//     },
//     {
//       id: 4,
//       patientName: "Patient 4",
//       gender: "male",
//       AppointmentDate: "04/06/2023",
//       AppointmentTime: "9:00:00",
//     },
//     {
//       id: 5,
//       patientName: "Patient 5",
//       gender: "male",
//       AppointmentDate: "04/06/2023",
//       AppointmentTime: "9:00:00",
//     },
//     {
//       id: 6,
//       patientName: "Patient 6",
//       gender: "male",
//       AppointmentDate: "04/06/2023",
//       AppointmentTime: "9:00:00",
//     },
//   ];

//   return (
//     <ScrollArea height={100}>
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
//         />
//         {selectedNotification && (
//           <showNotifications
//             title="Appointment Status"
//             color={selectedNotification.color}
//             onClose={() => setSelectedNotification(null)}
//           >
//             {selectedNotification.message}
//           </showNotifications>
//         )}
//       </Box>
//     </ScrollArea>
//   );
// }




// //--------------------------------------------------------------------------------------------------------------


import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Grid,
  Group,
  Text,
  Image,
  createStyles,
  useMantineTheme,
  ActionIcon,
  Menu,
  Title,
  Loader,
  ScrollArea,
  Notification,
} from "@mantine/core";
import { Card } from "@mantine/core";
import { DataTable, DataTableColumn } from "mantine-datatable";
import {
  IconArrowRight,
  IconBan,
  IconBold,
  IconCheck,
  IconCross,
  IconDotsVertical,
  IconEdit,
  IconEye,
  IconSearch,
  IconTrash,
} from "@tabler/icons-react";
import { IconCrossFilled } from "@tabler/icons-react";

const PAGE_SIZE = 10;

export default function ManagePatient() {
  const [page, setpage] = useState(1);
  const [selectedNotification, setSelectedNotification] = useState(null);

  useEffect(() => {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE;
  });

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

  const colDef = [
    {
      accessor: "id",
      title: "ID",
      titleStyle: { color: "" },
      textAlignment: "center",
      render: (data) => (
        <Group position="center">
          <Text>{data?.id}</Text>
        </Group>
      ),
    },
    {
      accessor: "PatientName",
      title: "Patient Name",
      titleStyle: { color: "" },
      textAlignment: "center",
      render: (data) => (
        <Group position="center">
          <Text style={{ fontWeight: "bold" }}>{data?.patientName}</Text>
        </Group>
      ),
    },
    {
      accessor: "gender",
      title: "Gender",
      titleStyle: { color: "" },
      textAlignment: "center",
      render: (data) => {
        return (
          <Group position="center">
            <Text>{data?.gender}</Text>
          </Group>
        );
      },
    },
    {
      accessor: "AppointmentDate",
      title: "Date",
      titleStyle: { color: "" },
      textAlignment: "center",
      render: (data) => {
        return (
          <Group position="center">
            <Text>{data?.AppointmentDate}</Text>
          </Group>
        );
      },
    },
    {
      accessor: "AppointmentTime",
      title: "Time",
      textAlignment: "center",
      render: (data) => (
        <Group position="center">
          <Text
            fz="12px"
            fw={500}
            p={5}
            style={{
              borderRadius: "6px",
            }}
          >
            {data?.AppointmentTime}
          </Text>
        </Group>
      ),
    },
    {
      accessor: "actions",
      title: <Text mr="xs">Actions</Text>,
      textAlignment: "center",
      render: (data) => {
        return (
          <Group position="center">
            <div style={{ display: "flex" }}>
              <Button
                radius="md"
                variant="subtle"
                onClick={() => handleAccept(data.patientName)}
              >
                Accept
              </Button>
              <Button
                style={{ color: "red" }}
                radius="md"
                variant="subtle"
                onClick={() => handleReject(data.patientName)}
              >
                Reject
              </Button>
            </div>
          </Group>
        );
      },
    },
  ];

  const records = [
    {
      id: 1,
      patientName: "Patient 1",
      gender: "male",
      AppointmentDate: "04/06/2023",
      AppointmentTime: "9:00:00",
    },
    {
      id: 2,
      patientName: "Patient 2",
      gender: "male",
      AppointmentDate: "04/06/2023",
      AppointmentTime: "9:00:00",
    },
    {
      id: 3,
      patientName: "Patient 3",
      gender: "male",
      AppointmentDate: "04/06/2023",
      AppointmentTime: "9:00:00",
    },
    {
      id: 4,
      patientName: "Patient 4",
      gender: "male",
      AppointmentDate: "04/06/2023",
      AppointmentTime: "9:00:00",
    },
    {
      id: 5,
      patientName: "Patient 5",
      gender: "male",
      AppointmentDate: "04/06/2023",
      AppointmentTime: "9:00:00",
    },
    {
      id: 6,
      patientName: "Patient 6",
      gender: "male",
      AppointmentDate: "04/06/2023",
      AppointmentTime: "9:00:00",
    },
  ];

  return (
    <ScrollArea height={100}>
      <Box m="md">
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
        />
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
}

//-------------------------------------------------------------------------------

