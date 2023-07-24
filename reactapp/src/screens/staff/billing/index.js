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

import BillingModal from "./modals/billingModal";
import CustomTable from "../../../components/customTable";
import { get } from "../../../api/index";
import EndPoints from "../../../api/endPoints";

export default function Table() {
  const [invoicemodal, setInvoicemodal] = useState(false);

  const [billingData, setBillingData] = useState([]);
  const [billGenerating, setBillGenerating] = useState([]);
  const [loading, setLoading] = useState(false);

  const getBilling = async () => {
    setLoading(true);
    await get(`${EndPoints.allBilling}`)
      .then((response) => {
        setBillingData(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
    setLoading(false);
  };

  useEffect(() => {
    getBilling();
  }, []);

  const colDef = [
    {
      accessor: "id",
      title: "Id",
      titleStyle: { color: "" },
      textAlignment: "center",
    },

    {
      accessor: "appointment.patient.firstName",
      title: "Patient Name",
      textAlignment: "center",
    },
    {
      accessor: "appointment.doctor.firstName",
      title: "Doctor Name",
      textAlignment: "center",
    },
    {
      accessor: "amount",
      title: "Amount",
      textAlignment: "center",
    },
    {
      accessor: "date",
      title: "Issued Date",
      textAlignment: "center",
      render: (data) => {
        console.log("dddd",data);

        const date = new Date(data?.created_at);
        const formattedDate = date.toISOString().split('T')[0];
               return <Text >{formattedDate}</Text>
              },
    },
    
    {
      accessor: "appointment.appointmentStatus",
      title: "Amount",
      textAlignment: "center",
    },
    {
      accessor: "Status",
      textAlignment: "center",
      render: (data) => {
console.log("dddd",data);
       return <Text color="green">{data?.paid?"Paid":"Not Paid"}</Text>
      },
    },
  ];

  const [searchValue, setSearchValue] = React.useState("");

  // const filteredRecords = React.useMemo(() => {
  //   if (!searchValue) {
  //     return records;
  //   }

  //   return records.filter((record) =>
  //     Object.values(record)
  //       .join(" ")
  //       .toLowerCase()
  //       .includes(searchValue.toLowerCase())
  //   );
  // }, [searchValue, records]);
  // const filteredRecords = React.useMemo(() => {
  //     if (!searchValue) {
  //       return records;
  //     }

  //     return records.filter((record) =>
  //       Object.values(record)
  //         .join(" ")
  //         .toLowerCase()
  //         .includes(searchValue.trim().toLowerCase())
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
      <Text
        ta="center"
        size="xl"
        style={{ marginTop: "15px", fontWeight: "bold", color: "#BF94E4" }}
      >
        BILLING
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
        <CustomTable
          coloumnDef={colDef}
          records={billingData}
          fetching={loading}
        />
      </Box>
{/* 
      {invoicemodal && (
        <BillingModal
          open={invoicemodal}
          close={() => {
            getBilling()
            setInvoicemodal(false);
          }}
          records={billGenerating}
        />
      )} */}

      {/* <MedicalRecords coloumnDef={colDef} records={filteredRecords} /> */}
    </>
  );
}
