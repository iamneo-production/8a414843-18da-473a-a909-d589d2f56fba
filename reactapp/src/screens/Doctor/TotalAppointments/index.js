import React, { useState, useEffect } from "react";
import { Tabs } from "@mantine/core";
import { IconCalendarTime, IconCheckbox } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
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
  Checkbox,
} from "@mantine/core";
import { DataTable } from "mantine-datatable";
import { useSelector } from "react-redux";
import { get } from "../../../api/index";
import EndPoints from "../../../api/endPoints";
import PrescriptionModal from "../Modals/prescriptionModal";

export default function ManagePatient() {
  const [selectedTab, setSelectedTab] = useState("pending appointments");
  const [ modalOpen, setModalOpen ] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [records, setRecords] = useState([]);
  const [appointmentData, setAppointmentData] = useState({});

  const user = useSelector((s) => s?.user?.value);
  console.log(user);

  const handleRowClick = (patient) => {
    setSelectedPatient(patient);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  const getAcceptedAppointments = async () => {
    await get(
      `${EndPoints.doctorAppointment}/${user?.id}?appointmentStatus=accepted`
    )
      .then((response) => {
        setRecords(response);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getPrescribedAppointments = async () => {
    await get(
      `${EndPoints.doctorAppointment}/${user?.id}?appointmentStatus=prescribed`
    )
      .then((response) => {
        setRecords(response);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (selectedTab === "pending appointments") {
      getAcceptedAppointments();
    } else if (selectedTab === "completed appointments") {
      getPrescribedAppointments();
    }
  }, [selectedTab]);

  const colDef1 = [
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
        <Button
          onClick={() => {
            setAppointmentData(data)
            setModalOpen(true)
          }}
        >
          Add Prescription
        </Button>
      ),
    },
  ];

  const colDef2 = [
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

  const filteredRecords = records.filter((record) =>
    record.patient?.firstName?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Tabs radius="xl" value={selectedTab} onTabChange={handleTabChange}>
        <Tabs.List>
          <Tabs.Tab
            value="pending appointments"
            icon={<IconCalendarTime size="0.8rem" />}
          >
            Pending Appointments
          </Tabs.Tab>
          <Tabs.Tab
            value="completed appointments"
            icon={<IconCheckbox size="0.8rem" />}
          >
            Completed Appointments
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="pending appointments" pt="xs">
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
              columns={colDef1}
              records={filteredRecords}
              onRowClick={handleRowClick}
              selectedRowIds={selectedPatient ? [selectedPatient.id] : []}
            />
          </Box>
        </Tabs.Panel>

        <Tabs.Panel value="completed appointments" pt="xs">
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
              columns={colDef2}
              records={filteredRecords}
              onRowClick={handleRowClick}
              selectedRowIds={selectedPatient ? [selectedPatient.id] : []}
            />
          </Box>
        </Tabs.Panel>
      </Tabs>
      {modalOpen && (
        <PrescriptionModal
          open={modalOpen}
          close={() => {
            setModalOpen(false);
          }}
          appointmentData={appointmentData}
        />
      )}
    </div>
  );
}
