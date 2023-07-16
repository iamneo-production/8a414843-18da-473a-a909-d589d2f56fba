import { useEffect, useState } from "react";
import { Box } from "@mantine/core";
import { DataTable } from "mantine-datatable";

export default function Pharmacy() {
  const [records, setRecords] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/inventory");
        const data = await response.json();
        setRecords(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredRecords = records.filter((record) => {
    const medicineName = record.medicineName ? record.medicineName.toLowerCase() : "";
    return (
      record.id.toString().includes(searchTerm) ||
      medicineName.includes(searchTerm.toLowerCase())
    );
  });
  const colDef = [
    {
      accessor: "id",
      title: "S.No",
      titleStyle: { fontWeight: "bold" },
      textStyle: { fontWeight: "normal" },
      textAlignment: "center",
    },
    {
      accessor: "medication_name",
      title: "Medication Name",
      titleStyle: { fontWeight: "bold" },
      textStyle: { fontWeight: "normal" },
      textAlignment: "center",
    },
    {
      accessor: "dosage",
      title: "Dosage",
      titleStyle: { fontWeight: "bold" },
      textStyle: { fontWeight: "normal" },
      textAlignment: "center",
    },
    {
      accessor: "refill_date",
      title: "Refill Date",
      titleStyle: { fontWeight: "bold" },
      textStyle: { fontWeight: "normal" },
      textAlignment: "center",
    },
    {
      accessor: "prescription_number",
      title: "Prescription Number",
      titleStyle: { fontWeight: "bold" },
      textStyle: { fontWeight: "normal" },
      textAlignment: "center",
    },
    {
      accessor: "patient_id",
      title: "Patient ID",
      titleStyle: { fontWeight: "bold" },
      textStyle: { fontWeight: "normal" },
      textAlignment: "center",
    },
  ];
  //Dummy data
//   const records = [
//     {   id:1,
//         drug:"paracetamol 650 mg", 
//         company: "Dolo", 
//         quantity:6,
        
//     },
//     {   id:2,
//         drug:"Anatensol 1mg", 
//         company: "Abbott India Ltd.", 
//         quantity:2,
       
//     },
//     {   id:3,
//         drug:"Strepsils", 
//         company: "RK World Infocom Pvt Ltd", 
//         quantity:2,
       
//     },
//     {   id:4,
//         drug:"Eno", 
//         company: "Haleon", 
//         quantity:1,
        
//     },
//     {   id:5,
//         drug:" Diphenhydramine", 
//         company: "Benadryl", 
//         quantity:3,
       
//     },
//     {   id:6,
//         drug:"Vicks 500", 
//         company: "vicks.pvt.ltd", 
//         quantity:5,
       
//     },
//     {   id:7,
//         drug:"Digene", 
//         company: "Abbott india ltd.", 
//         quantity:2,
       
//     },
//     {   id:7,
//         drug:"Aciloc 25mg", 
//         company: "Cadila", 
//         quantity:3,
        
//     },
//     {   id:9,
//         drug:"Antibiotic 400mg", 
//         company: "Cipla", 
//         quantity:56,
        
//     },
//     {   id:10,
//         drug:"Ibuprofen 800", 
//         company: "Motrin", 
//         quantity:59,
        
//     },
//     {   id:11,
//         drug:"Azithromycin 250", 
//         company: "Zithromax", 
//         quantity:56,
      
//     },
//     {   id:12,
//         drug: "Cephalexin 500 mg", 
//         company: "Keflex", 
//         quantity:24,
        
//     },
// ];

  

  return (
    <Box m="md">
      <div style={{ display: "flex", alignItems: "center" }}>
        <input
          type="text"
          placeholder="🔍ID or Medication Name"
          value={searchTerm}
          onChange={handleSearch}
          style={{
            height: "32px",
            fontSize: "12px",
            border: "1px solid #ddd",
            borderRadius: "6px",
            marginBottom: "8px",
            paddingLeft: "8px",
          }}
        />
      </div>
      <DataTable
        height={500}
        withBorder
        shadow="md"
        highlightOnHover
        borderRadius="md"
        striped
        horizontalSpacing="xs"
        verticalSpacing="xs"
        fontSize="xs"
        verticalAlignment="top"
        columns={colDef}
        records={filteredRecords}
      />
    </Box>
  );
}
