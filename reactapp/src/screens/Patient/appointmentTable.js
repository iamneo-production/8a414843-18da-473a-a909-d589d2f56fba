import React, { useState } from 'react';
import { Table, Grid, Col, TextInput, Card,Title,Button } from '@mantine/core';
import { IconSearch } from "@tabler/icons-react";

export default function AptTable() {
  const apps = [
    { name:'Adison Madsen', email:'adds@gmail.com', mobile:7638908765, AppDate:'13th June, 2023',AppTime:'12:30 PM', Doctor:'X', Department:'Y' },
    { name:'Craig Troff', email:'craigs@gmail.com', mobile:7638678765, AppDate:'17th June, 2023',AppTime:'1:30 PM', Doctor:'Z', Department:'X' },
    { name:'Curt Wills', email:'curtss@gmail.com', mobile:7635678765, AppDate:'10th July, 2023',AppTime:'2:30 PM', Doctor:'Y', Department:'Z' },
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
    const filtered = repeatedApps.filter(app =>
      app.name.toLowerCase().includes(searchValue.toLowerCase())
      || app.AppDate.toLowerCase().includes(searchValue.toLowerCase())
      || app.mobile.toString().includes(searchValue)
    );

    setFilteredApps(filtered);
  };

  const rows = filteredApps.map((app, index) => (
    <tr key={index}>
      <td style={{ fontWeight: 'bold' }}>{app.name}</td>
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

    <div style={{backgroundColor:'#D8D8D8', margin: 0,display: "flex", justifyContent: "end",paddingTop:'20px',paddingRight:'40px', alignItems: "center", height: "100vh", }}>
        <Card radius="lg"
          
          style={{ width: "1000px", height: "455px", margin:'0', padding:'0' }}
        >
        <Grid>
          <Grid.Col xs={12} lg={8}>
            <div style={{ display: "flex", color: "black", paddingLeft:'380px' }}>
              <Title>Appointment</Title>
            </div>
          </Grid.Col>
          <Grid.Col pr={40} xs={12} lg={4} style={{ display: "flex", justifyContent: "flex-end", alignItems: "center",paddingTop:'18px' }}>
            <Button style={{backgroundColor:'#9370DB',paddingLeft:'45px', paddingRight:'45px', }} >Button</Button>
          </Grid.Col>
        </Grid>
      <Grid>
        <Grid.Col xs={12} lg={12}>
          <TextInput
            radius="md"
            placeholder="Search Name, Date, Number..."
            icon={<IconSearch />}
            value={searchValue}
            onChange={handleInputChange}
           
            style={{borderBlockColor:'transparent'}}
          />
        </Grid.Col>
      </Grid>
      <Table>
        <thead >
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
