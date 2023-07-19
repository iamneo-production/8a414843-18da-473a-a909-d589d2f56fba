import React, { useState } from "react";

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

} from "@mantine/core";
import { DataTable } from "mantine-datatable";
import appointIcon from "../Dashboard/appointment-icon.png";

const ManagePatient = () => {
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [prescriptionModalOpen, setPrescriptionModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMedicine, setSelectedMedicine] = useState("");

  const handleRowClick = (patient) => {
    setSelectedPatient(patient);
  };

  const handleAddPrescription = () => {
    setPrescriptionModalOpen(true);
  };

  const handlePrescriptionSubmit = (event) => {
    event.preventDefault();
    setPrescriptionModalOpen(false);
  };

  const handleClosePrescriptionModal = () => {
    setPrescriptionModalOpen(false);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleMedicineChange = (value) => {
        setSelectedMedicine(value);
      };

    const [patient, setPatient] = useState({
      issue: "",
      doctorId: "",
      date: null,
      time: null,
       // Set the patientId as the default value
    });
  
    const { doctorId, date, time, issue } = patient;
  
    const onInputChange = (e) => {
      const { name, value } = e.target;
      setPatient((prevPatient) => ({
        ...prevPatient,
        [name]: value,
      }));
    };

    const [opened, { open, close }] = useDisclosure(false);

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
        <Button onClick={open}>Add Prescription</Button>
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
          <Modal opened={opened} onClose={close} title="Authentication">
          {/* <Select
              value={doctorId}
              name="doctorId"
              onChange={(value) =>
                onInputChange({ target: { name: "doctorId", value } })
              }
              placeholder="Doctor Id"
              radius="md"
              data={[
                { value: "1", label: "1" },
                { value: "2", label: "2" },
                { value: "3", label: "3" },
              ]}
            /> */}
      </Modal>

      
          </>
        )}
      </ScrollArea>
    </div>
  );
};

export default ManagePatient;



//-------------------------------------------------------------------------------------------------------



// import React, { useState } from "react";
// import {
//   Box,
//   ScrollArea,
//   Text,
//   Button,
//   Modal,
//   TextInput,
//   Select,
//   Checkbox,
// } from "@mantine/core";
// import { DataTable } from "mantine-datatable";

// const ManagePatient = () => {
//   const [selectedPatient, setSelectedPatient] = useState(null);
//   const [prescriptionModalOpen, setPrescriptionModalOpen] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedMedicine, setSelectedMedicine] = useState("");
//   const [selectedTimings, setSelectedTimings] = useState([]);
//   const [comment, setComment] = useState("");

//   const handleRowClick = (patient) => {
//     setSelectedPatient(patient);
//   };

//   const handleAddPrescription = () => {
//     setPrescriptionModalOpen(true);
//   };

//   const handlePrescriptionSubmit = (event) => {
//     event.preventDefault();
//     // Logic to submit prescription
//     setPrescriptionModalOpen(false);
//   };

//   const handleClosePrescriptionModal = () => {
//     setPrescriptionModalOpen(false);
//   };

//   const handleSearchChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const handleMedicineChange = (value) => {
//     setSelectedMedicine(value);
//   };

//   const handleTimingChange = (value, checked) => {
//     if (checked) {
//       setSelectedTimings((prevTimings) => [...prevTimings, value]);
//     } else {
//       setSelectedTimings((prevTimings) =>
//         prevTimings.filter((timing) => timing !== value)
//       );
//     }
//   };

//   const handleCommentChange = (event) => {
//     setComment(event.target.value);
//   };

//   const colDef = [
//     {
//       accessor: "id",
//       title: "ID",
//       align: "center",
//     },
//     {
//       accessor: "patientName",
//       title: "Patient Name",
//       align: "center",
//     },
//     {
//       accessor: "age",
//       title: "Age",
//       align: "center",
//     },
//     {
//       accessor: "gender",
//       title: "Gender",
//       align: "center",
//     },
//     {
//       accessor: "weight",
//       title: "Weight",
//       align: "center",
//     },
//     {
//       accessor: "actions",
//       title: "Actions",
//       align: "center",
//       render: (data) => (
//         <Button onClick={() => handleAddPrescription(data)}>
//           Add Prescription
//         </Button>
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
//     // Add more records here...
//   ];

//   const filteredRecords = records.filter((record) =>
//     record.patientName.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div>
//       <ScrollArea height={300}>
//         <Box m="md">
//           <TextInput
//             placeholder="Search by Name"
//             value={searchTerm}
//             onChange={handleSearchChange}
//             style={{ marginBottom: "16px" }}
//           />
//           <DataTable
//             columns={colDef}
//             records={filteredRecords}
//             rowKey="id"
//             onRowClick={handleRowClick}
//           />
//         </Box>
//         {selectedPatient && (
//           <Modal
//             opened={prescriptionModalOpen}
//             onClose={handleClosePrescriptionModal}
//             size="sm"
//             title="Add Prescription"
//           >
//             <Box
//               padding="md"
//               backgroundColor="blue"
//               color="white"
//               style={{ marginBottom: "16px" }}
//               position="relative"
//             >
//               <Text size="md" weight={500}>
//                 Adding prescription for {selectedPatient.patientName}
//               </Text>
//               <Text size="sm">Enter the prescription details here.</Text>
//             </Box>
//             <form onSubmit={handlePrescriptionSubmit}>
//               <label>
//                 Medicine:
//                 <Select
//                   value={selectedMedicine}
//                   onChange={handleMedicineChange}
//                   placeholder="Select medicine"
//                   style={{ marginBottom: "16px" }}
//                 >
//                   <option value="medicine1">Medicine 1</option>
//                   <option value="medicine2">Medicine 2</option>
//                   <option value="medicine3">Medicine 3</option>
//                 </Select>
//               </label>
//               <label>
//                 Timings:
//                 <div>
//                   <label>
//                     <Checkbox
//                       value="morning"
//                       checked={selectedTimings.includes("morning")}
//                       onChange={(event) =>
//                         handleTimingChange("morning", event.target.checked)
//                       }
//                     />
//                     Morning
//                   </label>
//                   <label>
//                     <Checkbox
//                       value="noon"
//                       checked={selectedTimings.includes("noon")}
//                       onChange={(event) =>
//                         handleTimingChange("noon", event.target.checked)
//                       }
//                     />
//                     Noon
//                   </label>
//                   <label>
//                     <Checkbox
//                       value="night"
//                       checked={selectedTimings.includes("night")}
//                       onChange={(event) =>
//                         handleTimingChange("night", event.target.checked)
//                       }
//                     />
//                     Night
//                   </label>
//                 </div>
//               </label>
//               <label>
//                 Comment:
//                 <TextInput
//                   value={comment}
//                   onChange={handleCommentChange}
//                   multiline
//                   rows={6}
//                   style={{ marginBottom: "16px" }}
//                 />
//               </label>
//               <Button type="submit" variant="outline">
//                 Submit Prescription
//               </Button>
//             </form>
//             <Button
//               variant="outline"
//               onClick={handleClosePrescriptionModal}
//             >
//               Close
//             </Button>
//           </Modal>
//         )}
//       </ScrollArea>
//     </div>
//   );
// };

// export default ManagePatient;


//---------------------------------------------------------------------------------------


// import React, { useState } from "react";
// import {
//   Box,
//   ScrollArea,
//   Text,
//   Button,
//   Modal,
//   TextInput,
//   Select,
//   Checkbox,
// } from "@mantine/core";
// import { DataTable } from "mantine-datatable";

// const ManagePatient = () => {
//   const [selectedPatient, setSelectedPatient] = useState(null);
//   const [prescriptionModalOpen, setPrescriptionModalOpen] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedMedicine, setSelectedMedicine] = useState("");
//   const [selectedTimings, setSelectedTimings] = useState([]);
//   const [comment, setComment] = useState("");

//   const handleRowClick = (patient) => {
//     setSelectedPatient(patient);
//   };

//   const handleAddPrescription = () => {
//     setPrescriptionModalOpen(true);
//   };

//   const handlePrescriptionSubmit = (event) => {
//     event.preventDefault();
//     // Logic to submit prescription
//     setPrescriptionModalOpen(false);
//   };

//   const handleClosePrescriptionModal = () => {
//     setPrescriptionModalOpen(false);
//   };

//   const handleSearchChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const handleMedicineChange = (value) => {
//     setSelectedMedicine(value);
//   };

//   const handleTimingChange = (value, checked) => {
//     if (checked) {
//       setSelectedTimings((prevTimings) => [...prevTimings, value]);
//     } else {
//       setSelectedTimings((prevTimings) =>
//         prevTimings.filter((timing) => timing !== value)
//       );
//     }
//   };

//   const handleCommentChange = (event) => {
//     setComment(event.target.value);
//   };

//   const colDef = [
//     {
//       accessor: "id",
//       title: "ID",
//       align: "center",
//     },
//     {
//       accessor: "patientName",
//       title: "Patient Name",
//       align: "center",
//     },
//     {
//       accessor: "age",
//       title: "Age",
//       align: "center",
//     },
//     {
//       accessor: "gender",
//       title: "Gender",
//       align: "center",
//     },
//     {
//       accessor: "weight",
//       title: "Weight",
//       align: "center",
//     },
//     {
//       id: "actions", // Add id property with a unique value
//       title: "Actions",
//       align: "center",
//       render: (data) => (
//         <Button onClick={() => handleAddPrescription(data)}>
//           Add Prescription
//         </Button>
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
//     // Add more records here...
//   ];

//   const filteredRecords = records.filter((record) =>
//     record.patientName.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div>
//       <ScrollArea height={300}>
//         <Box m="md">
//           <TextInput
//             placeholder="Search by Name"
//             value={searchTerm}
//             onChange={handleSearchChange}
//             style={{ marginBottom: "16px" }}
//           />
//           <DataTable
//             columns={colDef}
//             records={filteredRecords}
//             rowKey="id"
//             onRowClick={handleRowClick}
//           />
//         </Box>
//         {selectedPatient && (
//           <Modal
//             opened={prescriptionModalOpen}
//             onClose={handleClosePrescriptionModal}
//             size="sm"
//             title="Add Prescription"
//           >
//             <Box
//               padding="md"
//               backgroundColor="blue"
//               color="white"
//               style={{ marginBottom: "16px" }}
//               position="relative"
//             >
//               <Text size="md" weight={500}>
//                 Adding prescription for {selectedPatient.patientName}
//               </Text>
//               <Text size="sm">Enter the prescription details here.</Text>
//             </Box>
//             <form onSubmit={handlePrescriptionSubmit}>
//               <label>
//                 Medicine:
//                 <Select
//                   value={selectedMedicine}
//                   onChange={handleMedicineChange}
//                   placeholder="Select medicine"
//                   style={{ marginBottom: "16px" }}
//                 >
//                   <option value="medicine1">Medicine 1</option>
//                   <option value="medicine2">Medicine 2</option>
//                   <option value="medicine3">Medicine 3</option>
//                 </Select>
//               </label>
//               <label>
//                 Timings:
//                 <div>
//                   <label>
//                     <Checkbox
//                       value="morning"
//                       checked={selectedTimings.includes("morning")}
//                       onChange={(event) =>
//                         handleTimingChange("morning", event.target.checked)
//                       }
//                     />
//                     Morning
//                   </label>
//                   <label>
//                     <Checkbox
//                       value="noon"
//                       checked={selectedTimings.includes("noon")}
//                       onChange={(event) =>
//                         handleTimingChange("noon", event.target.checked)
//                       }
//                     />
//                     Noon
//                   </label>
//                   <label>
//                     <Checkbox
//                       value="night"
//                       checked={selectedTimings.includes("night")}
//                       onChange={(event) =>
//                         handleTimingChange("night", event.target.checked)
//                       }
//                     />
//                     Night
//                   </label>
//                 </div>
//               </label>
//               <label>
//                 Comment:
//                 <TextInput
//                   name="comment"
//                   value={comment}
//                   onChange={handleCommentChange}
//                   multiline
//                   rows={6}
//                   style={{ marginBottom: "16px" }}
//                 />
//               </label>
//               <Button type="submit" variant="outline">
//                 Submit Prescription
//               </Button>
//             </form>
//             <Button variant="outline" onClick={handleClosePrescriptionModal}>
//               Close
//             </Button>
//           </Modal>
//         )}
//       </ScrollArea>
//     </div>
//   );
// };

// export default ManagePatient;
