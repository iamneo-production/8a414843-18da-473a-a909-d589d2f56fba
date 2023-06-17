import React, { useState, useEffect } from 'react';
import { Card, Text, TextInput, Button } from '@mantine/core';

const AppointmentsCard = ({ appointments, onSelect }) => {
  return (
    <Card shadow="xs" padding="lg">
      <Text style={{ marginBottom: '1rem' }}>Today's Appointments</Text>
      {appointments.map((appointment) => (
        <Card
          key={appointment.id}
          shadow="xs"
          padding="lg"
          onClick={() => onSelect(appointment)}
          style={{ marginBottom: '0.5rem', cursor: 'pointer' }}
        >
          <Text>{`Patient ID: ${appointment.patientId}`}</Text>
          <Text>{`Name: ${appointment.patientName}`}</Text>
          <Text>{`Appointment Time: ${appointment.appointmentTime}`}</Text>
        </Card>
      ))}
    </Card>
  );
};

const PatientDetailsCard = ({ patient, onSavePrescription }) => {
  const [prescription, setPrescription] = useState('');

  const handlePrescriptionChange = (event) => {
    setPrescription(event.target.value);
  };

  const handleSavePrescription = () => {
    onSavePrescription(patient.id, prescription);
    setPrescription('');
  };

  return (
    <Card shadow="xs" padding="lg">
      <Text style={{ marginBottom: '1rem' }}>Patient Details</Text>
      <Text>{`Name: ${patient.name}`}</Text>
      <Text>{`Age: ${patient.age}`}</Text>
      <Text>{`Weight: ${patient.weight}`}</Text>
      <Text>{`Gender: ${patient.gender}`}</Text>
      <TextInput
        label="Prescription"
        value={prescription}
        onChange={handlePrescriptionChange}
        multiline
        rows={4}
        style={{ marginTop: '1rem' }}
      />
      <Button onClick={handleSavePrescription} style={{ marginTop: '1rem' }}>
        Save Prescription
      </Button>
    </Card>
  );
};

const App = () => {
  const [appointments, setAppointments] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);

  useEffect(() => {
    // Fetch today's appointments from backend API
    const fetchAppointments = async () => {
      try {
        const response = await fetch('your-backend-api/appointments'); // Update the API endpoint accordingly
        const data = await response.json();
        setAppointments(data);
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };

    fetchAppointments();
  }, []);

  const handlePatientSelect = (patient) => {
    setSelectedPatient(patient);
  };

  const handleSavePrescription = async (patientId, prescription) => {
    try {
      await fetch('your-backend-api/prescriptions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ patientId, prescription }),
      });
      // Handle success or show a notification
    } catch (error) {
      console.error('Error saving prescription:', error);
      // Handle error or show a notification
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      <AppointmentsCard appointments={appointments} onSelect={handlePatientSelect} />
      {selectedPatient && (
        <PatientDetailsCard patient={selectedPatient} onSavePrescription={handleSavePrescription} />
      )}
    </div>
  );
};

export default App;
