import React, { useState } from "react";
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


const ManagePatient = () => {
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleRowClick = (patient) => {
    setSelectedPatient(patient);
  };


  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const colDef = [
    {
      accessor: "id",
      title: "ID",
      titleStyle: { color: "" },
      textAlignment: "center",
    },
    {
      accessor: "patientName",
      title: "Patient Name",
      titleStyle: { color: "" },
      textAlignment: "center",
    },
    {
      accessor: "age",
      title: "Age",
      titleStyle: { color: "" },
      textAlignment: "center",
    },
    {
      accessor: "gender",
      title: "Gender",
      titleStyle: { color: "" },
      textAlignment: "center",
    },
    {
      accessor: "weight",
      title: "Weight",
      titleStyle: { color: "" },
      textAlignment: "center",
    },
    // {
    //   accessor: "status",
    //   title: "Status",
    //   textAlignment: "center",
    // },
  ];

  const records = [
    {
      id: 1,
      patientName: "Patient 1",
      age: 25,
      gender: "Male",
      weight: "70 kg",
    },
    {
      id: 2,
      patientName: "Patient 2",
      age: 30,
      gender: "Female",
      weight: "60 kg",
    },
    {
      id: 3,
      patientName: "Patient 3",
      age: 40,
      gender: "Male",
      weight: "80 kg",
    },
    {
      id: 4,
      patientName: "Patient 4",
      age: 43,
      gender: "Female",
      weight: "80 kg",
    },
    {
      id: 5,
      patientName: "Patient 5",
      age: 45,
      gender: "Male",
      weight: "80 kg",
    },
    {
      id: 6,
      patientName: "Patient 6",
      age: 50,
      gender: "Female",
      weight: "80 kg",
    },
    {
      id: 7,
      patientName: "Patient 7",
      age: 60,
      gender: "Male",
      weight: "80 kg",
    },
    {
      id: 8,
      patientName: "Patient 8",
      age: 47,
      gender: "Male",
      weight: "80 kg",
    },
    {
      id: 9,
      patientName: "Patient 9",
      age: 41,
      gender: "Male",
      weight: "80 kg",
    },
    {
      id: 10,
      patientName: "Patient 10",
      age: 42,
      gender: "Male",
      weight: "80 kg",
    },
    {
      id: 11,
      patientName: "Patient 11",
      age: 43,
      gender: "Male",
      weight: "80 kg",
    },
    // Add more records here...
  ];

  const filteredRecords = records.filter((record) =>
    record.patientName.toLowerCase().includes(searchTerm.toLowerCase())
  );

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