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
// import { IconSearch, IconPlus, IconEdit, IconTrash } from "@tabler/icons-react";
import ModalForm from "../appointmentForm";
import CustomTable from "../../../components/customTable";

import { useDisclosure } from "@mantine/hooks";
import { Modal } from "@mantine/core";
import { Link } from "react-router-dom";

import { IconSearch, IconPlus, IconEdit, IconTrash } from "@tabler/icons-react";

import axios from "axios";
import { useParams } from "react-router-dom";


// export default function PatientAppointment() {
//   const [patients, setPatients] = useState([]);
  
//   const {id}=useParams()

//   useEffect(() => {
//     loadPatients();
//   }, []); //will run only once when the page loads

//   const loadPatients = async () => {
//     const result = await axios.get("http://localhost:8080/api/appointment/");
//     setPatients(result.data);
//   };

//   const deletePatient=async(id)=>{
//     await axios.delete(`http://localhost:8080/api/appointment/${id}`)
//     loadPatients()
//   }

export default function PatientAppointment() {
  const [patients, setPatients] = useState([]);
  const patientId = 8; // patient ID should be set over here

  useEffect(() => {
    loadPatients();
  }, []); // Fetch patients 

  const loadPatients = async () => {
    try {
      const result = await axios.get("http://localhost:8080/api/appointment");
      const filteredPatients = result.data.filter(
        (patient) => patient.patientId === patientId
      );
      setPatients(filteredPatients);
    } catch (error) {
      console.error(error);
    }
  };

  const deletePatient = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/appointment/${id}`);
      loadPatients();
    } catch (error) {
      console.error(error);
    }
  };
  

  const [opened, { open, close }] = useDisclosure(false);

  const colDef = [
    {
      accessor: "id",
      title: "Id",
      titleStyle: { color: "" },
      textAlignment: "center",
    },
    // {
    //   accessor: "patientId",
    //   title: "Patient Id",
    //   titleStyle: { color: "" },
    //   textAlignment: "center",
    // },

    {
      accessor: "doctorId",
      title: "Doctor Id",
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

    

    {
      accessor: "actions",
      title: <Text mr="xs">Row actions</Text>,
      textAlignment: "center",
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
              <ModalForm onCloseModal={close} patientId={patientId} />
            </Modal>

            <Button onClick={open}>
              <IconPlus />
            </Button>
          </Group>
        </Grid.Col>
      </Grid>

      <Table>
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

              {/* <td>{patient.patientId}</td> */}
              <td>{patient.doctorId}</td>
              <td>{patient.date}</td>
              <td>{patient.time}</td>
              <td>{patient.issue}</td>
              <td>{patient.appointmentStatus}</td>
              {/* <td>{patient.doctor}</td> */}
              <td>
                <Group spacing={4} position="center" noWrap>
                
                  <ActionIcon disabled color="blue" onClick={open} to={`/editPatient/${patient.id}`}>
                    <IconEdit size={16} />
                  </ActionIcon>
                  <ActionIcon disabled color="red" onClick={()=>{deletePatient(patient.id)}}>
                    <IconTrash size={16} />
                  </ActionIcon>
                </Group>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}   