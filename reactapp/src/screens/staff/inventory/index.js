// Inventory
import{
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
    Loader,Badge
  } from "@mantine/core";
//   import { IconSearch, IconPlus, IconTrash, IconEdit } from "@tabler/icons-react";
  import { Modal} from '@mantine/core';
  import { useForm } from "@mantine/form";
  import { useDisclosure } from "@mantine/hooks";
  import { Card } from "@mantine/core";
  import { DataTable, DataTableColumn } from "mantine-datatable"
  import { useState } from "react";
  import { useEffect } from "react";
  import {
    IconEdit,
    IconEye,
    IconSearch,
    IconTrash,
    IconPlus
  } from "@tabler/icons-react";
 import ModifyAndCreateModal from "./Modal/index";
  //import CustomTable from ".";
  
  export default function Inventory(props) {
  const [opened, { open, close }] = useDisclosure(false);
//   const { products, fetching, } = props
  const [editRecordId, setEditRecordId] = useState(null);
  const [addRecord, setAddRecord] = useState(null);
  const [recordss,setRecords] = useState();
  const [searchValue, setSearchValue] = useState("");


  const handleInputChange = (event) => {
     const value = event.target.value;
 

  };
  
    const form = useForm({
        initialValues: {
            ProductName:'',
            ItemNumber:'',
            Usage:'',
            Manufacturer:'', 
            Category:'',
            Price:'',
            Quantity:'',
            ExpiryDate:'',
        },
        // validate :{
        //     ProductName: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
        //     id : (value)=> (/^\S+$/.test(value) ? null : 'Enter Id'),
        //     gender :(value) => (/^\S+$/.test(value) ? null : 'Select one value'),
        //     fees :(value) => (/^\S+$/.test(value) ? null : 'Enter Salary'),
        //     payment :(value) => (/^\S+$/.test(value) ? null : 'Select one value'),
        // },
    });


    function handleDelete(data){
        const modified = recordss.filter((item)=>{
            return item!==data;
        })
        setRecords(modified);
    }
    const handleCreateNewRow = (values) => {
        records.push(values);
        setRecords([...recordss]);
    };


    const handleSaveEdit = (editedData) => {
        const updatedRecords = recordss.map((record) => {
            if (record.id === editRecordId.id) {
              return { ...record, ...editedData };
            }
            return record;
        });
        console.log(updatedRecords);
        setEditRecordId(null);
        setRecords(updatedRecords);
    };
    
    const colDef = [
        {
            accessor: "productname",
            title: "Product Name",
            titleStyle: { color: "" },
            textAlignment: "center",
            render: (data) => (
                <Group position="center">
                    <Text>{data?.ProductName}</Text>
                </Group>
            ),
        },
        {
            accessor: "Item No.",
            title: "Item Number",
            titleStyle: { color: "" },
            textAlignment: "center",
            render: (data) => (
                <Group position="center">
                    <Text>{data?.ItemNumber}</Text>
                </Group>
            ),
        },
        {
            accessor: "Usage",
            title: "Usage",
            titleStyle: { color: "" },
            textAlignment: "center",
            render: (data) => {
                return(
                <Group position="center">
                    <Text>{data?.Usage}</Text>
                </Group>
                );
            },
        },
        {
            accessor: "Manufacturer",
            title: "Manufacturer",
            titleStyle: { color: "" },
            textAlignment: "center",
            render: (data) => {
                return(
                <Group position="center">
                    <Text>{data?.Manufacturer}</Text>
                </Group>
                );
            },
        },
        {
            accessor: "Category",
            title:"Category",
            textAlignment: "center",
            render: (data) => (
                <Group position="center">
                    <Text
                        fz="12px"
                        fw={500}
                        p={5}
                        // style={{
                        //     fontWeight: "bold",
                        //     color: data?.payment === "paid" ? "#3B72FF" : "#FF3B3B",
                        //     backgroundColor:
                        //         data?.payment === "paid" ? "#E3EBFF" : "#FFE4E4",
                        //     borderRadius: "6px",
                        // }}
                    >
                        {data?.Category}
                    </Text>
                </Group>
            ),
        },
        {
          accessor: "Price",
          title: "Price (Per Piece)",
          titleStyle: { color: "" },
          textAlignment: "center",
          render: (data) => {
              return(
              <Group position="center">
                  <Text>{data?.Price}</Text>
              </Group>
              );
          },
      },
      {
        accessor: "Quantity",
        title: "Quantity",
        titleStyle: { color: "" },
        textAlignment: "center",
        render: (data) => {
            return(
            <Group position="center">
                <Text>{data?.Quantity}</Text>
            </Group>
            );
        },
    },
    {
        accessor: 'actions',
        title: <Text mr="xs">Row actions</Text>,
        textAlignment: 'center',
        render: (data) => (
            <Group spacing={4} position="center" noWrap>
                <ActionIcon color="blue" onClick={() => setEditRecordId(data)}>
                    <IconEdit size={16} />
                </ActionIcon>
                <ActionIcon color="red" 
                // onClick={() => handleDelete(data)
                // }
                >
                    <IconTrash size={16} />
                </ActionIcon>
            </Group>
        ),
      },
    
        
    ];
  
    const records = [
        { 
          ProductName:'Acetaminophen (A1 Cream)',
          ItemNumber:'HK59368',
          Usage:'Acne',
          Manufacturer:'Vickmans Labratory', 
          Category:'Cream',
          Price:'300',
          Quantity:'1',
          ExpiryDate:'Feb 2024',
        },
        { 
          ProductName:'Cofsils Naturals Cough Syrup',
          ItemNumber:'HK59299',
          Usage:'Cough',
          Manufacturer:'Cipla LTD', 
          Category:'Syrup',
          Price:'200',
          Quantity:'1',
          ExpiryDate:'Jan 2025',
        },
        { 
          ProductName:'Acetaminophen (A1 Cream)',
          ItemNumber:'HK59299',
          Usage:'Acne',
          Manufacturer:'Vickmans Labratory', 
          Category:'Cream',
          Price:'300',
          Quantity:'1',
          ExpiryDate:'Feb 2024',
        },
        { 
          ProductName:'Acetaminophen (A1 Cream)',
          ItemNumber:'HK59299',
          Usage:'Acne',
          Manufacturer:'Vickmans Labratory', 
          Category:'Cream',
          Price:'300',
          Quantity:'1',
          ExpiryDate:'Feb 2024',
        },
        { 
          ProductName:'Acetaminophen (A1 Cream)',
          ItemNumber:'HK59299',
          Usage:'Acne',
          Manufacturer:'Vickmans Labratory', 
          Category:'Cream',
          Price:'300',
          Quantity:'1',
          ExpiryDate:'Feb 2024',
        },
        { 
          ProductName:'Acetaminophen (A1 Cream)',
          ItemNumber:'HK59299',
          Usage:'Acne',
          Manufacturer:'Vickmans Labratory', 
          Category:'Cream',
          Price:'300',
          Quantity:'1',
          ExpiryDate:'Feb 2024',
        },
        { 
          ProductName:'Acetaminophen (A1 Cream)',
          ItemNumber:'HK59299',
          Usage:'Acne',
          Manufacturer:'Vickmans Labratory', 
          Category:'Cream',
          Price:'300',
          Quantity:'1',
          ExpiryDate:'Feb 2024',
        },
        { 
          ProductName:'Acetaminophen (A1 Cream)',
          ItemNumber:'HK59299',
          Usage:'Acne',
          Manufacturer:'Vickmans Labratory', 
          Category:'Cream',
          Price:'300',
          Quantity:'1',
          ExpiryDate:'Feb 2024',
        },
        { 
          ProductName:'Acetaminophen (A1 Cream)',
          ItemNumber:'HK59299',
          Usage:'Acne',
          Manufacturer:'Vickmans Labratory', 
          Category:'Cream',
          Price:'300',
          Quantity:'1',
          ExpiryDate:'Feb 2024',
        },
        { 
          ProductName:'Acetaminophen (A1 Cream)',
          ItemNumber:'HK59299',
          Usage:'Acne',
          Manufacturer:'Vickmans Labratory', 
          Category:'Cream',
          Price:'300',
          Quantity:'1',
          ExpiryDate:'Feb 2024',
        },
        
    ];
    return(
        <Box m="md">
            <Grid grow gutter='sm'>
                <Grid.Col xs={2} lg={2}>  
                <Badge  variant="light" size={50} h={50}  style={{cursor: "pointer"}} > 
                <h1 weight={1000}>Inventory Management</h1>
               </Badge> 
                </Grid.Col>
                {/* <Grid.Col xs={8} lg={8}></Grid.Col> */}
                <Group>
                <Grid.Col xs={2} lg={2}>
                <Badge  variant="light" size={50} h={50} onClick={open} style={{cursor: "pointer"}} > 
                <h1 weight={1000}>Add New Record</h1>
               </Badge> 
                </Grid.Col>
                </Group>
            </Grid>
            <TextInput
              my="md"
                radius="md"
                placeholder="Search..."
                icon={<IconSearch />}
                value={searchValue}
                onChange={handleInputChange}
                // onIconClick={handleIconClick}
                // style={{ borderBlockColor: "transparent" }}
              />
               <Modal opened={addRecord !== null} onClose={() => setAddRecord(null)} title="Add New Product" centered>
                <ModifyAndCreateModal onClose={() => setAddRecord(null)} onSubmit={handleCreateNewRow}/>
            </Modal>
              <Modal opened={editRecordId !== null} onClose={() => setEditRecordId(null)} title="Edit Record" centered>
                <ModifyAndCreateModal records={editRecordId} onClose={() => setEditRecordId(null)} onSubmit={handleSaveEdit}/>
            </Modal>
            <Modal opened={opened} onClose={close} title="Add New Record" centered>
                <form onSubmit={form.onSubmit((values) => console.log(values))}>
                <TextInput mt="md" 
                placeholder="Product Name" label="Product Name"
                {...form.getInputProps('ProductName')}
                />
                <TextInput mt="md" label="Item Number"
                    placeholder="Item Number"
                    {...form.getInputProps('ItemNumber')}
                />
                
                <TextInput mt="md" label="Usage"
                    placeholder="Usage"
                    {...form.getInputProps('Usage')} 
                />
                <TextInput mt="md" label="Manufacturer"
                    placeholder="Manufacturer"
                    {...form.getInputProps('Manufacturer')}
                />
                <TextInput mt="md" label="Category"
                    placeholder="Category"
                    {...form.getInputProps('Category')}
                />
                <TextInput mt="md" label="Price"
                    placeholder="Price"
                    {...form.getInputProps('Price')}
                />
                <TextInput mt="md" label="Quantity"
                    placeholder="Quantity"
                    {...form.getInputProps('Quantity')}
                />
                <TextInput mt="md" label="Expiry Date"
                    placeholder="Expiry Date"
                    {...form.getInputProps('"Expiry Date')}
                />
                {/* <Select mt="md" placeholder="Select Payment Progress"
                data={[
                    { value: 'active', label: 'Active' },
                    { value: 'offline', label: 'Offline' },
                    ]}{...form.getInputProps('status')} 
                /> */}
                <Button type="submit" mt="md"style={{textDecoration:"none",
                borderColor: "rgba(139, 127, 194, 1)", 
                color: "white", position: "relative", 
                overflow: "hidden", 
                background: "rgba(139, 127, 194, 1)", cursor: "pointer",left:"38%"}} onClick={close}>Add
                </Button>
                </form>
            </Modal>
        <DataTable height={500}
            withBorder
            shadow="md"
            // withColumnBorders
            highlightOnHover
            borderRadius='md'
            striped
            horizontalSpacing="xs"
            verticalSpacing="xs"
            // fontSize="xs"
            verticalAlignment="top"
            //fetching={fetching}
            loaderVariant="bars"
            minHeight="80vh"
            // height={window.innerHeight - 230}
            columns={colDef}
            records={records}
        // emptyState={<Stack align="center" spacing="xs">
        //     <NoData />
        // </Stack>}
        // selectedRecords={selectedRecords}
        // onSelectedRecordsChange={setSelectedRecords}
        />
        </Box>
    );
  }
  





