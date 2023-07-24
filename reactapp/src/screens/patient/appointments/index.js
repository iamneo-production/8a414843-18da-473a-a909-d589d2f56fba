import React, { useState, useEffect } from "react";
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
import { useSelector } from 'react-redux';

import ModalForm from "./modals/appointmentModal";
import CustomTable from "../../../components/customTable";

import { useDisclosure } from "@mantine/hooks";
import { Modal } from "@mantine/core";
import { Link } from "react-router-dom";
import { DataTable } from "mantine-datatable"

import { IconSearch, IconPlus, IconEdit, IconTrash, IconTrashX } from "@tabler/icons-react";

import axios from "axios";
import {del, get} from "../../../api"
import EndPoints from "../../../api/endPoints";
import { useParams } from "react-router-dom";


export default function PatientAppointment() {
  const [patients, setPatients] = useState([]);
  const[dlt, setDlt]=useState(null);



 
  const user = useSelector((s) => s?.user?.value)
  
  const {id}=useParams()

  const getAppointments =async() =>{
    await get(`${EndPoints.fetchAppointment}/${user?.id}`).then((response)=>{
      setPatients(response);
      console.log(response);
  }).catch(error =>{
      console.log(error);
  })

  }
  useEffect(()=>{
    getAppointments()
  },[])

  

  async function handleDelete(){
    console.log("FromDeleteMethod",dlt.id);
   
     await del(`${EndPoints.deleteAppointment}/${dlt.id}`).then((response) => {
        console.log(response);
     }).catch(error => {
        console.log(error);
    })
    setDlt(null);
    window.location.reload();
}


  

  const [opened, { open, close }] = useDisclosure(false);

  const colDef = [
    
    

    {
      accessor: "doctor.firstName",
      title: "Doctor Name",
      textAlignment: "center",
    },
    {
      accessor: "date",
      title: "Date",
      textAlignment: "center",
    },

    {
      accessor: "time",
      title: "Time",
      textAlignment: "center",
    },
    {
      accessor: "issue",
      title: "Issue",
      textAlignment: "center",
    },
    {
      accessor: "appointmentStatus",
      title: "Status",
      textAlignment: "center",
    },

    

    // {
    //   accessor: "actions",
    //   title: <Text mr="xs">Row actions</Text>,
    //   textAlignment: "center",
    // },
    {
      accessor: 'actions',
      title: <Text mr="xs">Row actions</Text>,
      textAlignment: 'center',
      render: (data) => (
          <Group spacing={4} position="center" noWrap>
              <ActionIcon color="blue">
                  <IconEdit size={16} />
              </ActionIcon>
              <ActionIcon color="red"  >
                  <IconTrash size={16} onClick={()=>{setDlt(data);console.log(data)}} />
              </ActionIcon>
          </Group>
      ),
    },


  ];
  return (
    <>
      <Grid pt="md" pb="lg" m={0} >
        <Grid.Col xs={4} lg={4} />
        <Grid.Col xs={8} lg={8}>
          <Group position="apart">
            <Title>Appointment</Title>

            <Modal
              opened={opened}
              onClose={close}
             
              centered
            >
              <ModalForm onCloseModal={close}  />
            </Modal>

            <Button onClick={open}>
              <IconPlus />
            </Button>
          </Group>
        </Grid.Col>
      </Grid>
      

      {/* <Table>
        <thead>
          <tr>
            {colDef.map((column, index) => (
              <th key={index}>{column.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {patients.map((patient, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>

              
              <td>{patient.doctor.firstName}</td>
              <td>{patient.date}</td>
              <td>{patient.time}</td>
              <td>{patient.issue}</td>
              <td>{patient.appointmentStatus}</td>
              
              <td>
              
                <Group spacing={4} position="center" noWrap>
                
                  <ActionIcon color="blue" onClick={open} to={`/editPatient/${patient.id}`}>
                    <IconEdit size={16} />
                  </ActionIcon>
                  <ActionIcon color="red">
                    <IconTrash size={16} />
                  </ActionIcon>
                </Group>
              </td>
            </tr>
          ))}
        </tbody>
      </Table> */}
      <Modal opened={dlt !== null} onClose={() => setDlt(null)} size="sm" withCloseButton={false} centered>
                <div style={{margin:"20px",  display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', height: '300px',padding:"10px" }}>
                    <IconTrashX style={{ width: "50px", height: "50px", color: 'red', marginBottom: "30px" }} />
                    <Text style={{ fontSize: "30px" }}>Are you sure?</Text>
                    <p style={{ textAlign: "center", fontSize: "12px", color: "#888" }}>Do you really want to delete these records? This process cannot be undone.</p>
                    <div style={{marginTop:"20px", display: 'flex', justifyContent: 'center' }}>
                        <Button style={{ marginRight: "15px",backgroundColor:"lightgrey" }} onClick={() => setDlt(null)}>Cancel</Button>
                        <Button style={{backgroundColor:"red"}} onClick={handleDelete}>Delete</Button>
                    </div>
                </div>
            </Modal>
      <DataTable
                withBorder
                shadow="md"
                withColumnBorders
                highlightOnHover
                borderRadius='md'
                striped
                horizontalSpacing="xs"
                verticalSpacing="xs"
                fontSize="xs"
                verticalAlignment="top"
                // fetching={fetching}
                loaderVariant="bars"
                minHeight="60vh"
                columns={colDef}
                records={patients}
            />
    </>
  );
}   