import { useEffect, useState } from "react";
import { Box } from "@mantine/core";
import { DataTable } from "mantine-datatable";
import { get } from "../../../../api"; 
import EndPoints from "../../../../api/endPoints";


export default function Inventory() {
  const [records, setRecords] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getPharmacy =async() =>{
    await get(EndPoints.inventoryList).then((response)=>{
      setRecords(response.data);
      console.log(response);
  }).catch(error =>{
      console.log(error);
  })
}

useEffect(() => {
  getPharmacy();
}, []);

const filteredRecords = records.filter((record) =>
    record.medicineName?.toLowerCase().includes(searchTerm.toLowerCase())||record.id?.toString().includes(searchTerm)
  );
 

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
 
  const colDef = [
    {
      accessor: "id",
      title: "S.No",
      titleStyle: { fontWeight: "bold" },
      textStyle: { fontWeight: "normal" },
      textAlignment: "center",
    },
    {
      accessor: "medicineName",
      title: "Medicine Name",
      titleStyle: { fontWeight: "bold" },
      textStyle: { fontWeight: "normal" },
      textAlignment: "center",
    },
    {                                           
      accessor: "price",
      title: "Price",
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
    
  ];
  

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
