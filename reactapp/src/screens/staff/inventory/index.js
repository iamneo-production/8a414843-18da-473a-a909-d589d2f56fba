// import { Card, Image, Text, Badge, Button, Group, Input ,ActionIcon,Table} from '@mantine/core';
// import { Grid } from '@mantine/core';
// import classes from './patientcard.module.css'
// import { Select } from '@mantine/core';
// import InventoryTable from './InventoryTable';

// export default function Patientcard() {
    
    
//   return (
    

    
//     <Grid>
//       <Grid.Col xs={9} lg={9} spacing={10}>
//           <Card shadow="sm" padding="lg" radius="md" > 
//           <Group position="apart" mt="md" mb="xs" > 
//              <div className={classes.appointment}>
//                 <h2>Inventory List</h2>
//     {/* <ActionIcon>
//       <IconHttpDelete size="1.125rem" />
//     </ActionIcon> */}
  
               
//              </div> 
           
//             </Group>
//             <div className={classes.head}>
//              <Group>    
                          
//                 <Input.Wrapper  label="Product Name"  mx="auto">
//                      <Input placeholder="Search"/>
//                 </Input.Wrapper>
                               
                           
//                 <Select
//                     label="Manufacturer"
//                     placeholder=""
//                     data={[
//                                         { value: 'Vensitro Biotech', label: 'Vensitro Biotech' },
//                                         { value: 'Novartis', label: 'Novartis' },
//                                         { value: 'Rouche', label: 'Rouche' },
//                                         { value: 'Sanofi', label: 'Sanofi' },
//                     ]}
//                                     />
//                 <Input.Wrapper  label="Item Number"  >
//                     <Input placeholder="" />
//                 </Input.Wrapper>
//                             <Select
//                                     label="Problem/Condition"
//                                     placeholder=""
                                    
//                                     data={[
//                                         // { value: 'react', label: 'React' },
//                                         // { value: 'ng', label: 'Angular' },
//                                         // { value: 'svelte', label: 'Svelte' },
//                                         // { value: 'vue', label: 'Vue' },
//                                     ]}
//                                     />
//                             <Select
//                                     label="Category"
//                                     placeholder=""
//                                     data={[
//                                         // { value: 'react', label: 'React' },
//                                         // { value: 'ng', label: 'Angular' },
//                                         // { value: 'svelte', label: 'Svelte' },
//                                         // { value: 'vue', label: 'Vue' },
//                                     ]}
//                                     />
//                                 <Button  color='blue'> Apply Filter</Button>
//                                 <Button  color='gray'> Intake</Button>
                               
                     
//              </Group>
//              </div> 
//           </Card>
//       </Grid.Col>  
//      </Grid>
     
     
//   );
// }



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
    Loader,
  } from "@mantine/core";
  import { Modal} from '@mantine/core';
  import { useForm } from "@mantine/form";
  import { useDisclosure } from "@mantine/hooks";
  import { Card } from "@mantine/core";
  import { DataTable, DataTableColumn } from "mantine-datatable"
  import { useState } from "react";
  import { useEffect } from "react";
  import {
    IconDotsVertical,
    IconEdit,
    IconEye,
    IconSearch,
    IconTrash,
  } from "@tabler/icons-react";
 
  
  //import CustomTable from ".";
  
  export default function Inventory() {
    const [opened, { open, close }] = useDisclosure(false);
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
    // const [selectedRecords, setSelectedRecords] = useState<any>([]);
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
      accessor: "ExpiryDate",
      title: "Expiry Date",
      titleStyle: { color: "" },
      textAlignment: "center",
      render: (data) => {
          return(
          <Group position="center">
              <Text>{data?.ExpiryDate}</Text>
          </Group>
          );
      },
  },
        {
            accessor: "actions",
            title: <Text mr="xs">Actions</Text>,
            textAlignment: "center",
            render: (data) => {
                console.log("data", data);
                return (
                    <Menu position="bottom-start" shadow="xl" width={160}>
                        <Menu.Target>
                            <Button
                                radius="md"
                                variant="subtle"
                            // sx={{ height: "20px", width: "45%" }}
                            >
                                <IconDotsVertical />
                            </Button>
                        </Menu.Target>
                        <Menu.Dropdown>
                            {/* <Menu.Item
                                icon={<IconEye size={19} style={{ color: "#081226" }} />}
                                style={{
                                    color: "black",
                                    fontSize: 15,
                                    fontWeight: "500",
                                }}
                            >
                                View
                            </Menu.Item> */}
                            <Menu.Item
                                icon={<IconEdit size={17} style={{ color: "#081226" }} />}
                                style={{
                                    color: "black",
                                    fontSize: 15,
                                    fontWeight: "500",
                                }}
                            >
                                Available
                            </Menu.Item>
  
                            <Menu.Item
                                icon={<IconTrash color="red" size={16} />}
                                style={{
                                    color: "black",
                                    fontSize: 15,
                                    fontWeight: "500",
                                }}
                            >
                                Not Available
                            </Menu.Item>
                        </Menu.Dropdown>
                    </Menu>
                );
            },
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
            <Grid>
                <Grid.Col xs={2} lg={2}>
                    <Card m="md" shadow="xl" p={20} 
                     style={{fontFamily:"unset",
                     borderRadius:"15px",
                     background:"rgba(139, 127, 194, 1)",
                      color:"white",
                      textAlign:"center"}}>
                        INVENTORY MANAGEMENT
                    </Card>
                </Grid.Col>
                <Grid.Col xs={8} lg={8}></Grid.Col>
                <Grid.Col xs={2} lg={2}>
                    <Button p={30} left="46%" style={{borderRadius:"15px",top:"13%",textDecoration:"none",
                borderColor: "rgba(139, 127, 194, 1)", 
                color: "white", position: "relative", 
                overflow: "hidden",
                background: "rgba(139, 127, 194, 1)", cursor: "pointer",left:"38%" }} onClick={open}  >Add New Medicine</Button>
                </Grid.Col>
            </Grid>
            <Modal opened={opened} onClose={close} title="Add New Medicine" centered>
                <form onSubmit={form.onSubmit((values) => console.log(values))}>
                <TextInput mt="md" 
                placeholder="Product Name"
                {...form.getInputProps('ProductName')}
                />
                <TextInput mt="md"
                    placeholder="Item Number"
                    {...form.getInputProps('ItemNumber')}
                />
               
                <TextInput mt="md"
                    placeholder="Usage"
                    {...form.getInputProps('Usage')}
                />
                <TextInput mt="md"
                    placeholder="Manufacturer"
                    {...form.getInputProps('Manufacturer')}
                />
                <TextInput mt="md"
                    placeholder="Category"
                    {...form.getInputProps('Category')}
                />
                <TextInput mt="md"
                    placeholder="Price"
                    {...form.getInputProps('Price')}
                />
                <TextInput mt="md"
                    placeholder="Quantity"
                    {...form.getInputProps('Quantity')}
                />
                <TextInput mt="md"
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
                background: "rgba(139, 127, 194, 1)", cursor: "pointer",left:"38%"}}>Add
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
  