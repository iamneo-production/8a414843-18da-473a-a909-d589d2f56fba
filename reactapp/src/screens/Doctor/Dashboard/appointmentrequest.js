
//----------------------------------------------------------------------------------------------------------------------

import React, { useState } from "react";
import {
  Box,
  Button,
  Text,
  Group,
  Notification,
  ScrollArea,
  Card,
} from "@mantine/core";
import { get } from "enzyme/build/configuration";
import EndPoints from "../../../api/endPoints";

const AppointmentRequest = () => {
  const [selectedNotification, setSelectedNotification] = useState(null);

  const handleAccept = (patientName) => {
    setSelectedNotification({
      color: "green",
      message: `Appointment with ${patientName} is fixed.`,
    });
  };

  const handleReject = (patientName) => {
    setSelectedNotification({
      color: "red",
      message: `Appointment with ${patientName} is rejected.`,
    });
  };


  const handleSubmit = async() => {
    const data = records.values
    data.appointmentStatus="pending"
    console.log("fromDoctorAppointment",data)

    await get(EndPoints.doctorAppointment,data).then((response)=>{
      console.log(response.data);
    }).catch(error =>{
      console.log(error);
    })

  }

  const records = [
    {
      id: 1,
      patientName: "Patient 1",
      gender: "male",
      AppointmentDate: "04/06/2023",
      AppointmentTime: "9:00:00",
    },
    {
      id: 2,
      patientName: "Patient 2",
      gender: "male",
      AppointmentDate: "04/06/2023",
      AppointmentTime: "9:00:00",
    },
    {
      id: 3,
      patientName: "Patient 3",
      gender: "male",
      AppointmentDate: "04/06/2023",
      AppointmentTime: "9:00:00",
    },
    {
      id: 4,
      patientName: "Patient 4",
      gender: "male",
      AppointmentDate: "04/06/2023",
      AppointmentTime: "9:00:00",
    },
    {
      id: 5,
      patientName: "Patient 5",
      gender: "male",
      AppointmentDate: "04/06/2023",
      AppointmentTime: "9:00:00",
    },
    {
      id: 6,
      patientName: "Patient 6",
      gender: "male",
      AppointmentDate: "04/06/2023",
      AppointmentTime: "9:00:00",
    },
  ];

  return (
    <ScrollArea height={300}>
      <Box m="md" style={{ display: "flex", flexWrap: "wrap" }}>
        {records.map((patient) => (
          <Card
            key={patient.id}
            shadow="md"
            style={{ marginBottom: "16px", marginRight: "16px", width: "300px" }}
          >
            <Box padding="md">
              <Text weight={500} style={{ marginBottom: "8px", fontSize: "18px" }}>
                {patient.patientName}
              </Text>
              <Group position="center">
                <Text weight={500} style={{ marginRight: "8px" }}>
                  Date: {patient.AppointmentDate}
                </Text>
                <Text weight={500} style={{ marginRight: "8px" }}>
                  Time: {patient.AppointmentTime}
                </Text>
              </Group>
              <Group position="center">
                <Button
                  radius="md"
                  variant="subtle"
                  onClick={() => handleAccept(patient.patientName)}
                >
                  Accept
                </Button>
                <Button
                  style={{ color: "red" }}
                  radius="md"
                  variant="subtle"
                  onClick={() => handleReject(patient.patientName)}
                >
                  Reject
                </Button>
              </Group>
            </Box>
          </Card>
        ))}
        {selectedNotification && (
          <Notification
            title="Appointment Status"
            color={selectedNotification.color}
            onClose={() => setSelectedNotification(null)}
          >
            {selectedNotification.message}
          </Notification>
        )}
      </Box>
    </ScrollArea>
  );
};

export default AppointmentRequest;
