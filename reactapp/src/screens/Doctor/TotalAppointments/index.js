// import React, { useState } from "react";
// import {
//   Box,
//   Card,
//   ScrollArea,
//   Text,
//   Button,
//   Modal,
//   Grid,
//   Container,
//   Notification,
// } from "@mantine/core";
// import { DataTable } from "mantine-datatable";
// import appointIcon from "../Dashboard/appointment-icon.png";

// const ManagePatient = () => {
//   const [selectedPatient, setSelectedPatient] = useState(null);
//   const [prescriptionModalOpen, setPrescriptionModalOpen] = useState(false);

//   const handleRowClick = (patient) => {
//     setSelectedPatient(patient);
//   };

//   const handleAddPrescription = () => {
//     setPrescriptionModalOpen(true);
//   };

//   const handlePrescriptionSubmit = (event) => {
//     event.preventDefault();
//     // Replace with your prescription submission logic
//     // Retrieve the prescription details from the form inputs and perform any necessary actions
//     setPrescriptionModalOpen(false);
//   };

//   const handleClosePrescriptionModal = () => {
//     setPrescriptionModalOpen(false);
//   };

//   const colDef = [
//     {
//       accessor: "id",
//       title: "ID",
//       titleStyle: { color: "" },
//       textAlignment: "center",
//     },
//     {
//       accessor: "patientName",
//       title: "Patient Name",
//       titleStyle: { color: "" },
//       textAlignment: "center",
//     },
//     {
//       accessor: "age",
//       title: "Age",
//       titleStyle: { color: "" },
//       textAlignment: "center",
//     },
//     {
//       accessor: "gender",
//       title: "Gender",
//       titleStyle: { color: "" },
//       textAlignment: "center",
//     },
//     {
//       accessor: "weight",
//       title: "Weight",
//       titleStyle: { color: "" },
//       textAlignment: "center",
//     },
//     {
//       accessor: "actions",
//       title: "Actions",
//       textAlignment: "center",
//       render: (data) => (
//         <Button onClick={handleAddPrescription}>Add Prescription</Button>
//       ),
//     },
//   ];

//   const records = [
//     {
//       id: 1,
//       patientName: "Patient 1",
//       age: 25,
//       gender: "Male",
//       weight: "70 kg",
//     },
//     {
//       id: 2,
//       patientName: "Patient 2",
//       age: 30,
//       gender: "Female",
//       weight: "60 kg",
//     },
//     {
//       id: 3,
//       patientName: "Patient 3",
//       age: 40,
//       gender: "Male",
//       weight: "80 kg",
//     },
//     {
//       id: 4,
//       patientName: "Patient 4",
//       age: 43,
//       gender: "Female",
//       weight: "80 kg",
//     },
//     {
//       id: 5,
//       patientName: "Patient 5",
//       age: 45,
//       gender: "Male",
//       weight: "80 kg",
//     },
//     {
//       id: 6,
//       patientName: "Patient 6",
//       age: 50,
//       gender: "Female",
//       weight: "80 kg",
//     },
//     {
//       id: 7,
//       patientName: "Patient 7",
//       age: 60,
//       gender: "Male",
//       weight: "80 kg",
//     },
//     {
//       id: 8,
//       patientName: "Patient 8",
//       age: 47,
//       gender: "Male",
//       weight: "80 kg",
//     },
//     {
//       id: 9,
//       patientName: "Patient 9",
//       age: 41,
//       gender: "Male",
//       weight: "80 kg",
//     },
//     {
//       id: 10,
//       patientName: "Patient 10",
//       age: 42,
//       gender: "Male",
//       weight: "80 kg",
//     },
//     {
//       id: 11,
//       patientName: "Patient 11",
//       age: 43,
//       gender: "Male",
//       weight: "80 kg",
//     },
//     // Add more records here...
//   ];

//   return (
//     <div >
//     <ScrollArea height={300}>
//       <Card>
//         <Card
//           shadow="sm"
//           padding="md"
//           radius="lg"
//           style={{ backgroundColor: "#9083D5", width: "300px" }}
//         >
//           {/* <Text size="lg" weight={500} color="white">
//             Total Appointments
//           </Text> */}
//           <Container>
//         <Grid gutter="md" align="center">
//           <Grid.Col span={10}>
//             {/* <Text size="lg" weight={500} style={{ marginBottom: '8px' }}>
//               Total Patients
//             </Text> */}
//             <Text size="xl" weight={500} style={{ color: 'white', marginBottom: '8px' }}>
//               Total Appointments
//             </Text>
//           </Grid.Col>
//           <Grid.Col span={1} style={{ textAlign: 'right' }}>
//           <img src={appointIcon} alt="Image" style={{ maxWidth: '50px', height: '50px' }}/>
//           </Grid.Col>
//         </Grid>
//       </Container>
//         </Card>
//         </Card>
    
//       <Box m="md">
//         <DataTable
//           height={600}
//           withBorder
//           shadow="md"
//           highlightOnHover
//           borderRadius="md"
//           striped
//           horizontalSpacing="xs"
//           verticalSpacing="xs"
//           verticalAlignment="top"
//           columns={colDef}
//           records={records}
//           onRowClick={handleRowClick}
//           selectedRowIds={selectedPatient ? [selectedPatient.id] : []}
//         />
//       </Box>
//       {selectedPatient && (
//         <Modal
//           opened={prescriptionModalOpen}
//           onClose={handleClosePrescriptionModal}
//           size="sm"
//           title="Add Prescription"
//         >
//         <Box
//           padding="md"
//           backgroundColor="blue"
//           color="white"
//           style={{ marginBottom: "16px" }}
//           position="relative"
//         >
//           <Text size="md" weight={500}>
//             Adding prescription for {selectedPatient.patientName}
//           </Text>
//           <Text size="sm">Enter the prescription details here.</Text>
//         </Box>
//           <form onSubmit={handlePrescriptionSubmit}>
//             <label>
//               Prescription:
//               <textarea name="prescription" rows="10" cols="40" />
//             </label>
//             <Button type="submit" variant="outline">
//               Submit Prescription
//             </Button>
//           </form>
//           <Button variant="outline" onClick={handleClosePrescriptionModal}>
//             Close
//           </Button>
//         </Modal>
//       )}
//     </ScrollArea>
//     </div>
//   );
// };

// export default ManagePatient;


//-----------------------------------------------------------------------------------

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
import appointIcon from "../Dashboard/appointment-icon.png";

const ManagePatient = () => {
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [prescriptionModalOpen, setPrescriptionModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleRowClick = (patient) => {
    setSelectedPatient(patient);
  };

  const handleAddPrescription = () => {
    setPrescriptionModalOpen(true);
  };

  const handlePrescriptionSubmit = (event) => {
    event.preventDefault();
    // Replace with your prescription submission logic
    // Retrieve the prescription details from the form inputs and perform any necessary actions
    setPrescriptionModalOpen(false);
  };

  const handleClosePrescriptionModal = () => {
    setPrescriptionModalOpen(false);
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
    {
      accessor: "actions",
      title: "Actions",
      textAlignment: "center",
      render: (data) => (
        <Button onClick={handleAddPrescription}>Add Prescription</Button>
      ),
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

  const filteredRecords = records.filter((record) =>
    record.patientName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <ScrollArea height={300}>
        <Card>
          <Card
            shadow="sm"
            padding="md"
            radius="lg"
            style={{ backgroundColor: "#9083D5", width: "300px" }}
          >
            {/* <Text size="lg" weight={500} color="white">
              Total Appointments
            </Text> */}
            <Container>
              <Grid gutter="md" align="center">
                <Grid.Col span={10}>
                  {/* <Text size="lg" weight={500} style={{ marginBottom: '8px' }}>
              Total Patients
            </Text> */}
                  <Text
                    size="xl"
                    weight={500}
                    style={{ color: "white", marginBottom: "8px" }}
                  >
                    Total Appointments
                  </Text>
                </Grid.Col>
                <Grid.Col span={1} style={{ textAlign: "right" }}>
                  <img
                    src={appointIcon}
                    alt="Image"
                    style={{ maxWidth: "50px", height: "50px" }}
                  />
                </Grid.Col>
              </Grid>
            </Container>
          </Card>
        </Card>

        <Box m="md">
          <TextInput
            placeholder="Search by Name"
            value={searchTerm}
            onChange={handleSearchChange}
            style={{ marginBottom: "16px" }}
          />
          <DataTable
            height={500}
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
          <Modal
            opened={prescriptionModalOpen}
            onClose={handleClosePrescriptionModal}
            size="sm"
            title="Add Prescription"
          >
            <Box
              padding="md"
              backgroundColor="blue"
              color="white"
              style={{ marginBottom: "16px" }}
              position="relative"
            >
              <Text size="md" weight={500}>
                Adding prescription for {selectedPatient.patientName}
              </Text>
              <Text size="sm">Enter the prescription details here.</Text>
            </Box>
            <form onSubmit={handlePrescriptionSubmit}>
              <label>
                Prescription:
                <textarea name="prescription" rows="10" cols="40" />
              </label>
              <Button type="submit" variant="outline">
                Submit Prescription
              </Button>
            </form>
            <Button
              variant="outline"
              onClick={handleClosePrescriptionModal}
            >
              Close
            </Button>
          </Modal>
        )}
      </ScrollArea>
    </div>
  );
};

export default ManagePatient;
