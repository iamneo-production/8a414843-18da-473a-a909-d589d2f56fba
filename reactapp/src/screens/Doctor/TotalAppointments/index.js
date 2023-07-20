import React, { useState, useEffect } from "react";
import { Tabs } from '@mantine/core';
import { IconCalendarTime, IconCheckbox } from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';
import {
  Box,
  Card,
  ScrollArea,
  Text,
  Button,
  Modal,
  Group,
  Grid,
  Container,
  Notification,
  TextInput,
  Select,
  Checkbox
} from "@mantine/core";
import { DataTable } from "mantine-datatable";
import { useSelector } from 'react-redux';
import { get } from "../../../api/index";
import EndPoints from "../../../api/endPoints";

const AcceptedAppointments = () => {
  const { opened, open, close } = useDisclosure();
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [records, setRecords] = useState([]);
  const [medicineId, setMedicineId] = useState("");

  const user = useSelector((s) => s?.user?.value);
  console.log(user);

  const handleRowClick = (patient) => {
    setSelectedPatient(patient);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const getUsers = async () => {
    await get(`${EndPoints.doctorAppointment}/${user?.id}?appointmentStatus=accepted`)
      .then((response) => {
        setRecords(response);
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    getUsers();
  }, []);

  const handleMedicineChange = (value) => {
    setMedicineId(value);
  };

  const handleClosePrescriptionModal = () => {
    close();
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
    {
      accessor: "appointmentStatus",
      title: "Status",
      titleStyle: { color: "" },
      textAlignment: "center",
    },
    {
      accessor: "actions",
      title: "Actions",
      textAlignment: "center",
      render: (data) => (
        <Button onClick={open}>Add Prescription</Button>
      ),
    },
  ];

  const filteredRecords = records.filter(record =>
    record.patient?.firstName.toLowerCase().includes(searchTerm.toLowerCase())
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
        {selectedPatient && (
          <>
            <Modal opened={opened} onClose={close} title="Prescription">
              <Select
                value={medicineId}
                name="medicineId"
                onChange={handleMedicineChange}
                placeholder="Medicine Id"
                radius="md"
                data={[
                  { value: "1", label: "Medicine 1" },
                  { value: "2", label: "Medicine 2" },
                  { value: "3", label: "Medicine 3" },
                ]}
              />
              <Button onClick={handleClosePrescriptionModal}>Cancel</Button>
            </Modal>
          </>
        )}
      </ScrollArea>
    </div>
  );
};

const CompletedAppointments = () => {
  const { opened, open, close } = useDisclosure();
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [records, setRecords] = useState([]);

  const user = useSelector((s) => s?.user?.value);
  console.log(user);

  const handleRowClick = (patient) => {
    setSelectedPatient(patient);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const getUsers = async () => {
    await get(`${EndPoints.doctorAppointment}/${user?.id}?appointmentStatus=prescribed`)
      .then((response) => {
        setRecords(response);
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    getUsers();
  }, []);

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

  const filteredRecords = records.filter(record =>
    record.patient?.firstName.toLowerCase().includes(searchTerm.toLowerCase())
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
        {selectedPatient && (
          <>
            <Modal opened={opened} onClose={close} title="Prescription">
              {/* ... Modal Content ... */}
            </Modal>
          </>
        )}
      </ScrollArea>
    </div>
  );
};

export default function ManagePatient() {
  const [selectedTab, setSelectedTab] = useState("pending appointments");

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div>
      <Tabs radius="xl" value={selectedTab} onTabChange={handleTabChange}>
        <Tabs.List>
          <Tabs.Tab value="pending appointments" icon={<IconCalendarTime size="0.8rem" />}>Pending Appointments</Tabs.Tab>
          <Tabs.Tab value="completed appointments" icon={<IconCheckbox size="0.8rem" />}>Completed Appointments</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="pending appointments" pt="xs">
          <AcceptedAppointments />
        </Tabs.Panel>

        <Tabs.Panel value="completed appointments" pt="xs">
          <CompletedAppointments />
        </Tabs.Panel>
      </Tabs>
    </div>
  );
}
