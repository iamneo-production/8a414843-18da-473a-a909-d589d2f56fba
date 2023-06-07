import React, { useState } from "react";
import {
  Table,
  Grid,
  Col,
  TextInput,
  Card,
  Title,
  Button,
  Group,
} from "@mantine/core";
import { IconSearch,IconPlus } from "@tabler/icons-react";
import AppointmentModal from "./modals/appointmentModal";


export default function PatientAppointment() {
    const [appModal, setAppModal]=useState(false)
  const apps = [
    {
      name: "Adison Madsen",
      email: "adds@gmail.com",
      mobile: 7638908765,
      AppDate: "13th June, 2023",
      AppTime: "12:30 PM",
      Doctor: "X",
      Department: "Y",
    },
    {
      name: "Craig Troff",
      email: "craigs@gmail.com",
      mobile: 7638678765,
      AppDate: "17th June, 2023",
      AppTime: "1:30 PM",
      Doctor: "Z",
      Department: "X",
    },
    {
      name: "Curt Wills",
      email: "curtss@gmail.com",
      mobile: 7635678765,
      AppDate: "10th July, 2023",
      AppTime: "2:30 PM",
      Doctor: "Y",
      Department: "Z",
    },
  ];

  const repeatedApps = [...apps, ...apps, ...apps];

  const [searchValue, setSearchValue] = useState("");
  const [filteredApps, setFilteredApps] = useState(repeatedApps);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchValue(value);
    filterApps(value);
  };

  const filterApps = (searchValue) => {
    const filtered = repeatedApps.filter(
      (app) =>
        app.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        app.AppDate.toLowerCase().includes(searchValue.toLowerCase()) ||
        app.mobile.toString().includes(searchValue)
    );

    setFilteredApps(filtered);
  };

  const rows = filteredApps.map((app, index) => (
    <tr key={index}>
      <td style={{ fontWeight: "bold" }}>{app.name}</td>
      <td>{app.email}</td>
      <td>{app.mobile}</td>
      <td>{app.AppDate}</td>
      <td>{app.AppTime}</td>
      <td>{app.Doctor}</td>
      <td>{app.Department}</td>
    </tr>
  ));

  return (
    <>
      <div 
        
      >
      <AppointmentModal open={appModal} close={()=>{
         setAppModal(false);
      }}/>
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
                <Grid.Col xs={4} lg={4}/>
                <Grid.Col xs={8} lg={8}>
                <Group position="apart">
                <Title>Appointment</Title>
              
            
              <Button
               onClick={()=>{
                setAppModal(true);
               }}
              >
                <IconPlus/>
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
                value={searchValue}
                onChange={handleInputChange}
                // onIconClick={handleIconClick}
                // style={{ borderBlockColor: "transparent" }}
              />
            
          
          <Table>
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
          </Table>
        </Card>
      </div>
    </>
  );
}
