// Inventory
import {
  Box,
  Button,
  Grid,
  Group,
  TextInput,
  Text,
  Select,
  Image,
  createStyles,
  useMantineTheme,
  ActionIcon,
  Menu,
  Title,
  Loader,
  Badge,
} from "@mantine/core";
//   import { IconSearch, IconPlus, IconTrash, IconEdit } from "@tabler/icons-react";
import { Modal } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { Card } from "@mantine/core";
import { DataTable, DataTableColumn } from "mantine-datatable";
import { useState } from "react";
import { useEffect } from "react";
import {
  IconEdit,
  IconEye,
  IconSearch,
  IconTrash,
  IconPlus,
} from "@tabler/icons-react";
// import ModifyAndCreateModal from "./Modal/index";
import ModifyAndCreateModal from "./edit";
//import CustomTable from ".";
import { get, post, put, del } from "../../../api/index";
import EndPoints from "../../../api/endPoints";

export default function Inventory(props) {
  //Managing the states for editing records and opening modals(popup)
  const [editRecordId, setEditRecordId] = useState(null);
  //Adding new records to already existing records
  const [addRecord, setAddRecord] = useState(null);
  //State to maintain record
  const [records, setRecords] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");
  const [deleteModalOpen, setDeleteModalOpen] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [loading, setLoading] = useState(false);

  const deletingData = [];

  const getInventory = async () => {
    setLoading(true);
    await get(EndPoints.inventoryList)
      .then((response) => {
        setRecords(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    setLoading(false);
  };

  useEffect(() => {
    getInventory();
  }, []);

  const filteredRecords = records.filter(
    (record) =>
      record.medicineName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      record.category?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      record.usages?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const colDef = [
    {
      accessor: "id", //for api
      title: "Item No",
      titleStyle: { color: "" }, //define style
      textAlignment: "center",
    },
    {
      accessor: "medicineName", //for api
      title: "Medicine Name",
      titleStyle: { color: "" }, //define style
      textAlignment: "center",
    },
    {
      accessor: "usages", //for api
      title: "Usage",
      titleStyle: { color: "" }, //define style
      textAlignment: "center",
    },
    {
      accessor: "category", //for api
      title: "Category",
      titleStyle: { color: "" }, //define style
      textAlignment: "center",
    },
    {
      accessor: "price", //for api
      title: "Price (per unit)",
      titleStyle: { color: "" }, //define style
      textAlignment: "center",
    },
    {
      accessor: "quantity", //for api
      title: "Quanity",
      titleStyle: { color: "" }, //define style
      textAlignment: "center",
    },
    {
      accessor: "expiryDate", //for api
      title: "Expiry Date",
      titleStyle: { color: "" }, //define style
      textAlignment: "center",
    },
    {
      accessor: "actions",
      title: <Text mr="xs">Row actions</Text>,
      textAlignment: "center",
      render: (data) => (
        <Group spacing={4} position="center" noWrap>
          <ActionIcon color="blue" onClick={() => setEditRecordId(data)}>
            <IconEdit size={16} />
          </ActionIcon>
          <ActionIcon color="red" onClick={() => setDeleteModalOpen(data)}>
            <IconTrash size={16} />
          </ActionIcon>
        </Group>
      ),
    },
  ];

  // Search to filter the records using product name
  function handleSearch(e) {
    setSearchTerm(e.currentTarget.value);
  }

  //Deleting record
  const handleDelete = async () => {
    console.log("FromDeleteMethod", deleteModalOpen);
    deletingData.push(deleteModalOpen);
    await del(`${EndPoints.deleteInventory}/${deleteModalOpen.id}`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    setDeleteModalOpen(null);
    getInventory();
  };

  const btnstyle = {
    backgroundColor: isHovered ? "#F3F4F6" : "#FAFBFC",
    transition: "background-color 0.3s",
    border: "1px solid rgba(27, 31, 35, 0.15)",
    borderRadius: "6px",
    boxShadow:
      "rgba(27, 31, 35, 0.04) 0 1px 0, rgba(255, 255, 255, 0.25) 0 1px 0 inset",
    boxSizing: "border-box",
    color: "#24292E",
    cursor: "pointer",
  };

  return (
    <>
      <Grid>
        <Grid.Col xs={4} lg={4} />
        <Grid.Col xs={8} lg={8}>
          <Group position="apart">
            <Text
              ta="center"
              size="xl"
              style={{ margin: "25px", fontWeight: "bold", color: "#BF94E4" }}
            >
              {" "}
              INVENTORY MANAGEMENT
            </Text>
            <Button
              style={btnstyle}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={() => setAddRecord(1)}
            >
              <IconPlus color="blue" />
            </Button>
          </Group>
        </Grid.Col>
      </Grid>
      <TextInput
        my="md"
        radius="md"
        placeholder="Search Medicine Name, Usage, Category..."
        icon={<IconSearch />}
        onChange={handleSearch}
      />

      <Modal
        opened={addRecord !== null}
        onClose={() => setAddRecord(null)}
        title="Add New Product"
        centered
      >
        <ModifyAndCreateModal
          onClose={() => setAddRecord(null)}
          getInventory={getInventory}
        />
      </Modal>
      <Modal
        opened={editRecordId !== null}
        onClose={() => setEditRecordId(null)}
        title="Edit Record"
        centered
      >
        <ModifyAndCreateModal
          records={editRecordId}
          onClose={() => setEditRecordId(null)}
          getInventory={getInventory}
        />
      </Modal>
      <Modal
        opened={deleteModalOpen !== null}
        onClose={() => setDeleteModalOpen(null)}
        size="sm"
        withCloseButton={false}
        centered
      >
        <div
          style={{
            margin: "20px",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            height: "300px",
            padding: "10px",
          }}
        >
          <IconTrash
            style={{
              width: "50px",
              height: "50px",
              color: "red",
              marginBottom: "30px",
            }}
          />
          <Text style={{ fontSize: "30px" }}>Are you sure?</Text>
          <p style={{ textAlign: "center", fontSize: "12px", color: "#888" }}>
            Do you really want to delete these records? This process cannot be
            undone.
          </p>
          <div
            style={{
              marginTop: "20px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              style={{ marginRight: "15px", backgroundColor: "lightgrey" }}
              onClick={() => setDeleteModalOpen(null)}
            >
              Cancel
            </Button>
            <Button style={{ backgroundColor: "red" }} onClick={handleDelete}>
              Delete
            </Button>
          </div>
        </div>
      </Modal>
      {/* <CustomTable coloumnDef={colDef} records={filteredRecords}/> */}

      <DataTable
        withBorder
        shadow="md"
        withColumnBorders
        highlightOnHover
        borderRadius="md"
        striped
        horizontalSpacing="xs"
        verticalSpacing="xs"
        fontSize="xs"
        verticalAlignment="top"
        fetching={loading}
        loaderVariant="bars"
        height="60vh"
        columns={colDef}
        records={filteredRecords}
      />
    </>
  );
}

// import { Box } from "@mantine/core";


// import InventoryTable from "./inventorytable";

// Sending Records or Data to the table
// export default function Inventory(){

//     //Data
//     const records = [
//         { 
//             id: 1,
//             name: "Aspirin",
//             quanity: "150", 
//             category:"Tablet",
//             price:"2.50",
//             supplier:"AbcD"
            
//         },
//         {
//             id: 2,
//             name: "Dolo 120mg",
//             quanity: "150",
//             category:"Syrup",
//             price:"120",
//             supplier:"xyz"
            
//         },
//         { 
//             id: 3, 
//             name: "Paracetamol", 
//             quanity: "150",
//             category:"Tablet", 
//             price:"2.50", 
//             supplier:"efgh"
           
//         },
//         {
//             id: 4,
//             name: "Dolo 250 Suspension",
//             quanity: "150",
//             category:"Syrup",
//             price:"120",
//             supplier:"uvw"
           
//         },
//         { 
//             id: 5, 
//             name: "Acephen", 
//             quanity: "150",
//             category:"Tablet", 
//             price:"2.50", 
//             supplier:"qrst"
           
            
//         },
//         {
//             id: 6,
//             name: "Crocin 240 DS",
//             quanity: "150", 
//             category:"Syrup",
//             price:"120",
//             supplier:"qrst" 
//         },
        
//     ];

//     return (
//         <>
//             <Box m="md">
//                 {/* Passing records to the table  */}
//                 <InventoryTable products={records} />
//             </Box>
//         </>
//     );
// }