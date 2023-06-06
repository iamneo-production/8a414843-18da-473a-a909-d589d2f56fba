import {
    Box,
    Button,
    Grid,
    Group,
    TextInput,
    Text,
    Image,
    createStyles,
    useMantineTheme,
    ActionIcon,
    Menu,
    Title,
    Loader,
    ScrollArea,
    UnstyledButton,
    rem,
  } from "@mantine/core";
  import React, { useState } from "react";
  import { keys } from '@mantine/utils';
  import {
    IconDotsVertical,
    IconEdit,
    IconEye,
    IconSearch,
    IconSelector,
    IconChevronDown,
    IconChevronUp,
    IconTrash,
  } from "@tabler/icons-react";
  import { Link } from "react-router-dom";
 
  import InvoiceViewModal  from "./modal/invoiceViewModal";
  import CustomTable from "../../../components/customTable";
  
  
  export default function Table() {
  const [invoicemodal,setInvoicemodal] =useState(false);
    const colDef = [
        {
            accessor: "attendingDoctor",
            title: "Attending Doctor",
            titleStyle: { color: "" },
            textAlignment: "center",
            render: (data) => (
                <Group position="center">
                    <Text>{data?.attending_doctor}</Text>
                </Group>
            ),
        },
  
        {
            accessor: "date",
            title: "Date",
            textAlignment: "center",
            render: (data) => {
                console.log("wdw", data, data?.status, data?.status === "Active");
                return <Text>{data?.date}</Text>;
            },
        },
        {
            accessor: "description",
            title: "Description",
            textAlignment: "center",
            render: (data) => (
                <Group position="center">
                    <Text>{data?.description}</Text>
                </Group>
            ),
        },
        {
            accessor: "prescribedMedication",
            title: "Prescribed Medication",
            textAlignment: "center",
            render: (data) => (
                <Group position="center">
                    <Text>{data?.prescribed_medication}</Text>
                </Group>
            ),
        },
        {
            accessor: "nextAppointment",
            title: "Next Appointment",
            textAlignment: "center",
            render: (data) => (
                <Group position="center">
                    <Text>{data?.next_appointment}</Text>
                </Group>
            ),
        },
        {
            accessor: "amount",
            title: "Amount",
            textAlignment: "center",
            render: (data) => (
                <Group position="center">
                    <Text>{data?.amount}</Text>
                </Group>
            ),
        },
  
        // ...
  
  {
      accessor: "Invoice",
      textAlignment: "center",
      render: (data) => (
        // <Group position="center">
        //   <Link to="/pay">
        //     <Text
        //       fz="12px"
        //       fw={500}
        //       p={5}
        //       style={{
        //         fontWeight: "bold",
        //         color: data?.status === "View",
        //         backgroundColor: "#BF94E4",
        //         borderRadius: "6px",
        //       }}
        //     >
        //       {data?.invoice}
        //     </Text>
        //   </Link>
        // </Group>
        <Button size='xs' onClick ={()=>{
            setInvoicemodal(true)
        }}> View </Button>
      ),
    },
    
    // ...
    
    ];
  
    const records = [
        { attending_doctor: "Attending doctor  1", date: "1/05/2023", description: "description 1", prescribed_medication: "prescribed_medication 1", next_appointment: "Next Appointment 1", amount: "amount", invoice: "View" },
        {
            attending_doctor: "Attending doctor  2",
            date: "1/05/2023",
            description: "description 2",
            prescribed_medication: "prescribed_medication 2",
            next_appointment: "Next Appointment 2",
            amount: "Amount",
            invoice: "View"
        },
        {
            attending_doctor: "Attending doctor  3", date: "1/05/2023", description: "description 3", prescribed_medication: "prescribed_medication 3", next_appointment: "Next Appointment 3",
            amount: "Amount 3", invoice: "View"
        },
        {
            attending_doctor: "Attending doctor  4",
            date: "1/05/2023",
            description: "description 4",
            next_appointment: "Next Appointment 4",
            amount: "Amount 4",
            prescribed_medication: "prescribed_medication 4",
            invoice: "View"
        },
        {
            attending_doctor: "Attending doctor  5", date: "1/05/2023", description: "description 5", prescribed_medication: "prescribed_medication 5", next_appointment: "Next Appointment 5",
            amount: "Amount 5", invoice: "View"
        },
        {
            attending_doctor: "Attending doctor  6",
            date: "1/05/2023",
            description: "description 6",
            prescribed_medication: "prescribed_medication 6",
            next_appointment: "Next Appointment 6",
            amount: "Amount 6",
            invoice: "View"
        },
        {
            attending_doctor: "Attending doctor  7", date: "1/05/2023", description: "description 7", prescribed_medication: "prescribed_medication 7", next_appointment: "Next Appointment 7",
            amount: "Amount 7", invoice: "View"
        },
    ];
  
    const [searchValue, setSearchValue] = React.useState("");
  
    const filteredRecords = React.useMemo(() => {
      if (!searchValue) {
        return records;
      }
  
      return records.filter((record) =>
        Object.values(record)
          .join(" ")
          .toLowerCase()
          .includes(searchValue.toLowerCase())
      );
    }, [searchValue, records]);
  
  
      //   return (
      //       <><Text ta="center">Medical records</Text><Box m="md">
      //           <MedicalRecords coloumnDef={colDef} records={records} />
      //       </Box></>
      //    <> <Text ta="center" size="xl" style={{ marginTop: "15px", fontWeight: "bold" }}>
      //     MEDICAL RECORDS
      //   </Text><Box m="md">
      //          <MedicalRecords coloumnDef={colDef} records={records} />
      //       </Box></>
      //   );
      return (

          <>
           <InvoiceViewModal open={invoicemodal} close={()=>{
              setInvoicemodal(false)
           }}/>



          <Text ta="center" size="xl" style={{ marginTop: "15px", fontWeight: "bold", color: "#BF94E4" }}>
    MEDICAL RECORDS
  </Text>
  
            <Box  m="md" ml="20px" mr="20px"> 
             {/* 205 line -- search box border */}
              <TextInput
                value={searchValue}
                onChange={(event) => setSearchValue(event.currentTarget.value)}
                placeholder="Search..."
                icon={<IconSearch color="#BF94E4" />}
                radius="md"
                styles={{
                  input: { color: "#BF94E4" },
                  icon: { color: "#BF94E4" },
                }}
              />
            </Box>
            <Box mt={1} ml={20} mr={20} mb={0}> 
             {/* 219 line -- table border */}
          <CustomTable coloumnDef={colDef} records={filteredRecords} />
        </Box>
      
          {/* <MedicalRecords coloumnDef={colDef} records={filteredRecords} /> */}
          </>
        );
    }
  
  
  