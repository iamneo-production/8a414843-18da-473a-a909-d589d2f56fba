import React, { useState } from "react";
import {
  Text,
  Table,
  Grid,
  Col,
  TextInput,
  Card,
  Title,
  Button,
  Group,
  ActionIcon
} from "@mantine/core";
import moment from "moment";
import { IconSearch, IconPlus, IconEdit, IconTrash } from "@tabler/icons-react";
import AppointmentModal from "./modals/appointmentModal";
import CustomTable from "../../../components/customTable";


export default function PatientAppointment() {
  const[editData, setEditData]=useState({});
  const[rowData, setRowData]=useState([
    {
      id:1,
      name: "Sanga Chakrabarty",
      mobile: "6289645805",
      email: "sangyachakrabarty@gmail.com",
      dob: "2023-06-27T18:30:00.000Z",
      gender: "female",
      date: "2023-06-26T18:30:00.000Z",
      time: "05:34",
      dept: "y",
      doctor: "z",
      address: "54+56/1/2/2 kashinath Chatterjee Lane, Howrah-2"
  },
  {
    id:2,  
    name: "Bibyaswan Chakrabarty",
    mobile: "5689645805",
    email: "sangyachakrabarty@gmail.com",
    dob: "2023-06-27T18:30:00.000Z",
    gender: "female",
    date: "2023-06-26T18:30:00.000Z",
    time: "05:34",
    dept: "y",
    doctor: "z",
    address: "54+56/1/2/2 kashinath Chatterjee Lane, Howrah-2"

  }
  ]);
  const [appModal, setAppModal] = useState(false);
  const apps = [
    {
      userName: "Adison Madsen",
      email: "adds@gmail.com",
      mobile: 7638908765,
      date: "13th June, 2023",
      time: "12:30 PM",
      doctor: "X",
      dept: "Y",
    },
    {
      userName: "Craig Troff",
      email: "craigs@gmail.com",
      mobile: 7638678765,
      date: "17th June, 2023",
      time: "1:30 PM",
      doctor: "Z",
      dept: "X",
    },
    {
      userName: "Curt Wills",
      email: "curtss@gmail.com",
      mobile: 7635678765,
      date: "10th July, 2023",
      time: "2:30 PM",
      doctor: "Y",
      dept: "Z",
    },
  ];

  const colDef = [
    {
      accessor: "name",
      title: "Name",
      titleStyle: { color: "" },
      textAlignment: "center",
      // render: (data) => {
      //   console.log("data", data);
      //   // return
      //   return (
      //     <Group position="center">
      //       <Text>{data?.userName}</Text>
      //     </Group>
      //   );
      // },
    },

    {
      accessor: "email",
      title: "Email",
      textAlignment: "center",
      // render: (data) => {
      //     console.log("wdw", data, data?.status, data?.status === "Active");
      //     return <Text>{data?.date}</Text>;
      // },
    },
    {
      accessor: "mobile",
      title: "Mobile",
      textAlignment: "center",
      // render: (data) => (
      //     <Group position="center">
      //         <Text>{data?.description}</Text>
      //     </Group>
      // ),
    },
    // {
    //   accessor: "dob",
    //   title: "DOB",
    //   textAlignment: "center",
    //   render: (data) => {
    //     console.log("data", data);
    //     // return
    //     let m=moment(data?.dob).format("DD-MM-YYYY")
    //     return (
    //       <Group position="center">
    //         <Text>{m}</Text>
    //       </Group>
    //     );
    //   },
    // },
    {
      accessor: "gender",
      title: "Gender",
      textAlignment: "center",
      // render: (data) => (
      //     <Group position="center">
      //         <Text>{data?.next_appointment}</Text>
      //     </Group>
      // ),
    },
    {
      accessor: "date",
      title: "Date",
      textAlignment: "center",
      render: (data) => {
        console.log("data", data);
        // return
        let m=moment(data?.date).format("DD-MM-YYYY")
        return (
          <Group position="center">
            <Text>{m}</Text>
          </Group>
        );
      },
    },
    {
      accessor: "time",
      title: "Time",
      textAlignment: "center",
      // render: (data) => {
      //   console.log("data", data);
      //   // return
      //   let m=moment(data?.time).format("hh:mm a")
      //   return (
      //     <Group position="center">
      //       <Text>{m}</Text>
      //     </Group>
      //   );
      },
      
    
    // {
    //   accessor: "dept",
    //   title: "Department",
    //   textAlignment: "center",
    //   // render: (data) => (
    //   //     <Group position="center">
    //   //         <Text>{data?.amount}</Text>
    //   //     </Group>
    //   // ),
    // },
    {
      accessor: "doctor",
      title: "Doctor",
      textAlignment: "center",
      // render: (data) => (
      //     <Group position="center">
      //         <Text>{data?.amount}</Text>
      //     </Group>
      // ),
    },
    // {
    //   accessor: "address",
    //   title: "Address",
    //   textAlignment: "center",
    //   // render: (data) => (
    //   //     <Group position="center">
    //   //         <Text>{data?.amount}</Text>
    //   //     </Group>
    //   // ),
    // },


    {
      accessor: 'actions',
      title: <Text mr="xs">Row actions</Text>,
      textAlignment: 'center',
      render: (data) => (
          <Group spacing={4} position="center" noWrap>
              <ActionIcon color="blue" 
              onClick={() =>{
                 setEditData(data);
                 setAppModal(true);
                 }}
              >
                  <IconEdit size={16} />
              </ActionIcon>
              <ActionIcon color="red" 
              // onClick={() => handleDelete(data)}
              >
                  <IconTrash size={16} />
              </ActionIcon>
          </Group>
      ),
    },
  ];
  console.log("check", rowData);
  console.log("mom", moment("2023-06-26T18:30:00.000Z").format("DD-MM-YYYY"));

  return (
    
    <>
      <div>
        <AppointmentModal
          open={appModal}
          close={() => {
            setEditData({});
            setAppModal(false);
          }}
          rowData={rowData}
          setRowData={setRowData}
          editData={editData}
        />
        <Card
          radius="lg"
          //   style={{
          //     width: "1000px",
          //     height: "455px",
          //     margin: "0",
          //     padding: "0",
          //   }}
        >
          <Grid>
            <Grid.Col xs={4} lg={4} />
            <Grid.Col xs={8} lg={8}>
              <Group position="apart">
                <Title>Appointment</Title>

                <Button
                  onClick={() => {
                    setAppModal(true);
                  }}
                >
                  <IconPlus />
                </Button>
              </Group>
            </Grid.Col>
          </Grid>

          {/* </Grid>
          <Grid> */}

          <TextInput
            my="md"
            radius="md"
            placeholder="Search Name, Date, Number..."
            icon={<IconSearch />}
            // value={searchValue}
            // onChange={handleInputChange}
            // onIconClick={handleIconClick}
            // style={{ borderBlockColor: "transparent" }}
          />

          <CustomTable coloumnDef={colDef} records={rowData} />
          {/* <Table >
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile Number</th>
                <th>Appointment Date</th>
                <th>Appointment Time</th>
                <th>Doctor</th>
                <th>Department</th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </Table> */}
        </Card>
      </div>
    </>
  );
}
