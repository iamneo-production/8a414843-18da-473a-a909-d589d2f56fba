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
import React, { useEffect, useState } from "react";
import { keys } from "@mantine/utils";
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

import InvoiceViewModal from "./modal/invoiceViewModal";
import CustomTable from "../../../components/customTable";
import { get } from "../../../api";
import EndPoints from "../../../api/endPoints";
import { useSelector } from 'react-redux';


export default function Table() {
  const [invoicemodal, setInvoicemodal] = useState(false);
  const [ records, setRecords ] = useState([]);

  const user = useSelector((s) => s?.user?.value)
console.log("records",records);

  async function getCompletedAppointments() {
    await get(`${EndPoints.fetchAppointment}/${user?.id}?appointmentStatus=completed`)
      .then((response) => {
        setRecords(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getCompletedAppointments();
  }, []);

  const colDef = [
    {
      accessor: "id",
      textAlignment: "center",
    },
    {
      accessor: "doctor.firstName",
      title: "Attending Doctor",
      titleStyle: { color: "" },
      textAlignment: "center",
     
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
      accessor: "appointmentStatus",
      title: "Appointment Status",
      textAlignment: "center",
    },
  ];

  const [searchValue, setSearchValue] = React.useState("");

//   const filteredRecords = React.useMemo(() => {
//     if (!searchValue) {
//       return records;
//     }

//     return records.filter((record) =>
//       Object.values(record)
//         .join(" ")
//         .toLowerCase()
//         .includes(searchValue.toLowerCase())
//     );
//   }, [searchValue, records]);

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
      <InvoiceViewModal
        open={invoicemodal}
        close={() => {
          setInvoicemodal(false);
        }}
      />

      <Text
        ta="center"
        size="xl"
        style={{ marginTop: "15px", fontWeight: "bold", color: "#BF94E4" }}
      >
        MEDICAL RECORDS
      </Text>

      <Box m="md" ml="20px" mr="20px">
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
        <CustomTable coloumnDef={colDef} records={records} />
      </Box>

      {/* <MedicalRecords coloumnDef={colDef} records={filteredRecords} /> */}
    </>
  );
}
