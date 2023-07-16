import { useEffect, useState } from "react";
import { Box } from "@mantine/core";
import { DataTable } from "mantine-datatable";
export default function Inventory() {
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
      accessor: "quantity",
      title: "Quantity",
      titleStyle: { fontWeight: "bold" },
      textStyle: { fontWeight: "normal" },
      textAlignment: "center",
    },
                                                                   //{*uncomment price if needed*}
    // {                                           
    //   accessor: "price",
    //   title: "Price",
    //   titleStyle: { fontWeight: "bold" },
    //   textStyle: { fontWeight: "normal" },
    //   textAlignment: "center",
    // },
    {
      accessor: "medicineName",
      title: "Medicine Name",
      titleStyle: { fontWeight: "bold" },
      textStyle: { fontWeight: "normal" },
      textAlignment: "center",
    },
    {
      accessor: "usages",
      title: "Usages",
      titleStyle: { fontWeight: "bold" },
      textStyle: { fontWeight: "normal" },
      textAlignment: "center",
    },
    {
      accessor: "itemNumber",
      title: "Item Number",
      titleStyle: { fontWeight: "bold" },
      textStyle: { fontWeight: "normal" },
      textAlignment: "center",
    },
    {
      accessor: "category",
      title: "Category",
      titleStyle: { fontWeight: "bold" },
      textStyle: { fontWeight: "normal" },
      textAlignment: "center",
    },
    {
      accessor: "expiryStatus",
      title: "Expiry Status",
      titleStyle: { fontWeight: "bold" },
      textStyle: { fontWeight: "normal" },
      textAlignment: "center",
    },
                                                          // {uncomment created and updated if need }
    //{
    //   accessor: "created",
    //   title: "Created",
    //   titleStyle: { fontWeight: "bold" },
    //   textStyle: { fontWeight: "normal" },
    //   textAlignment: "center",
    // },
    // {
    //   accessor: "updated",
    //   title: "Updated",
    //   titleStyle: { fontWeight: "bold" },
    //   textStyle: { fontWeight: "normal" },
    //   textAlignment: "center",
    // },
    
  ];
  
                                                      //DUMMY DATA
//   const records = [
//     {   id:1,
//         name:"Bandages", 
//         category:"Medical",
//         quantity:"male",
        
//     },
//     {   id:2,
//         name:"Syringes", 
//         category:"Medical",
//         quantity:"male",
       
//     },
//     {   id:3,
//         name:"Gloves", 
//         category:"Medical",
//         quantity:"male",
       
//     },
//     {   id:4,
//         name:"Surgical Masks", 
//         category:"Medical",
//         quantity:"male",
        
//     },
//     {   id:5,
//         name:"X-ray Machine", 
//         category:"Equipment",
//         quantity:"male",
       
//     },
//     {   id:6,
//         name:"Blood Pressure Monitor", 
//         category:"Equipment",
//         quantity:"male",
       
//     },
//     {   id:7,
//         name:"IV Fluids", 
//         category:"Medication",
//         quantity:"male",
       
//     },
//     {   id:7,
//         name:"Scalpels", 
//         category:"Surgical",
//         quantity:"male",
        
//     },
//     {   id:9,
//         name:"Wheelchairs", 
//         category:"Equipemnt",
//         quantity:"male",
        
//     },
//     {   id:10,
//         name:"	Forceps", 
//         category:"Surgical",
//         quantity:"male",
        
//     },
//     {   id:11,
//         name:"Bone Drill", 
//         category:"Equipment",
//         quantity:"male",
      
//     },
//     {   id:12,
//         name:"Electrosurgical Unit",
//         category:"Equipment",
//         quantity:"male",
        
//     },
// ];
  
  

  return (
    <Box m="md">
      <div style={{ display: "flex", alignItems: "center" }}>

        <input
          type="text"
          placeholder="🔍ID or Name"
          value={searchTerm}
          onChange={handleSearch}
          style={{
            height: "32px",
            fontSize: "12px",
            border: "1px solid #ddd",
            borderRadius: "6px",
            marginBottom:"8px",
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
