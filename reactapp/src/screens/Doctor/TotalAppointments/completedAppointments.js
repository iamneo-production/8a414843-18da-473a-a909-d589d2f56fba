import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  ScrollArea,
  Text,
  Button,
  Modal,
  Grid,
  Container,
  Notification,
  TextInput,
} from "@mantine/core";
import { DataTable } from "mantine-datatable";
import { useSelector } from 'react-redux';
import {get} from "../../../api/index";
import EndPoints from "../../../api/endPoints";


const ManagePatient = () => {
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [records, setRecords] = useState([]);

  const user = useSelector((s) => s?.user?.value)
    console.log(user);

  const handleRowClick = (patient) => {
    setSelectedPatient(patient);
  };


  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const getUsers =async() =>{
    await get(`${EndPoints.doctorAppointment}/${user?.id}?appointmentStatus=prescribed`).then((response)=>{
      setRecords(response);
      console.log(response);
  }).catch(error =>{
      console.log(error);
  })

  }
  useEffect(()=>{
    getUsers()
  },[])


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
      accessor: "patient.age",
      title: "Age",
      titleStyle: { color: "" },
      textAlignment: "center",
    },
    {
      accessor: "patient.gender",
      title: "Gender",
      titleStyle: { color: "" },
      textAlignment: "center",
    },
    // {
    //   accessor: "patient.weight",
    //   title: "Weight",
    //   titleStyle: { color: "" },
    //   textAlignment: "center",
    // },
    {
      accessor: "appointmentStatus",
      title: "Status",
      textAlignment: "center",
    },
  ];

  // const records = [
  //   {
  //     id: 1,
  //     patientName: "Patient 1",
  //     age: 25,
  //     gender: "Male",
  //     weight: "70 kg",
  //   },
  //   {
  //     id: 2,
  //     patientName: "Patient 2",
  //     age: 30,
  //     gender: "Female",
  //     weight: "60 kg",
  //   },
  //   {
  //     id: 3,
  //     patientName: "Patient 3",
  //     age: 40,
  //     gender: "Male",
  //     weight: "80 kg",
  //   },
  //   {
  //     id: 4,
  //     patientName: "Patient 4",
  //     age: 43,
  //     gender: "Female",
  //     weight: "80 kg",
  //   },
  //   {
  //     id: 5,
  //     patientName: "Patient 5",
  //     age: 45,
  //     gender: "Male",
  //     weight: "80 kg",
  //   },
  //   {
  //     id: 6,
  //     patientName: "Patient 6",
  //     age: 50,
  //     gender: "Female",
  //     weight: "80 kg",
  //   },
  //   {
  //     id: 7,
  //     patientName: "Patient 7",
  //     age: 60,
  //     gender: "Male",
  //     weight: "80 kg",
  //   },
  //   {
  //     id: 8,
  //     patientName: "Patient 8",
  //     age: 47,
  //     gender: "Male",
  //     weight: "80 kg",
  //   },
  //   {
  //     id: 9,
  //     patientName: "Patient 9",
  //     age: 41,
  //     gender: "Male",
  //     weight: "80 kg",
  //   },
  //   {
  //     id: 10,
  //     patientName: "Patient 10",
  //     age: 42,
  //     gender: "Male",
  //     weight: "80 kg",
  //   },
  //   {
  //     id: 11,
  //     patientName: "Patient 11",
  //     age: 43,
  //     gender: "Male",
  //     weight: "80 kg",
  //   },
  //   // Add more records here...
  // ];

  const filteredRecords = records.filter((record) =>
    record.patient?.firstName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  console.log(records);

  return (
    <div>
      <ScrollArea height={300}>
        
        <Box m="md">
          <TextInput
            placeholder="Search by Name"
            value={searchTerm}
            onChange={handleSearchChange}
            style={{ marginBottom: "16px" }}
          />
          <DataTable
            height={550}
            withBorder
            shadow="md"
            highlightOnHover
            borderRadius="md"
            striped
            horizontalSpacing="xs"
            verticalSpacing="xs"
            verticalAlignment="top"
            columns={colDef}
            records={filteredRecords}
            onRowClick={handleRowClick}
            selectedRowIds={selectedPatient ? [selectedPatient.id] : []}
          />
        </Box>
      </ScrollArea>
    </div>
  );
};

export default ManagePatient;