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
import { useState } from "react";

import CustomTable from "../../../components/customTable/index";
import PrescriptionModal from "../Modals/prescriptionModal";


export default function Appointments() {
  const [rowData, setRowData] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

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
    {
      accessor: "actions",
      title: "Actions",
      textAlignment: "center",
      render: (data) => <Button onClick={()=>{
        setModalOpen(true)
      }}>Add Prescription</Button>,
    },
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

  return (
    <>
      <CustomTable records={records} coloumnDef={colDef} />
      {modalOpen && <PrescriptionModal open={modalOpen} close={()=>{
        setModalOpen(false)
      }}/>}
    </>
  );
}
