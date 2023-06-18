import{
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
} from "@mantine/core";
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
const PAGE_SIZE = 10;
export default function ManagePatient() {
    const[page,setpage] = useState(1);

    useEffect(()=>{
        const from = (page-1)*PAGE_SIZE;
        const to = from+PAGE_SIZE
    })

    // const [selectedRecords, setSelectedRecords] = useState<any>([]);
    const colDef = [
      {
        accessor: "id",
        title: "ItemID",
        titleStyle: { color: "" },
        textAlignment: "center",
      },
      {
        accessor: "name",
        title: "Name of the Equipments",
        titleStyle: { color: "" },
        textAlignment: "center",
      },
      {
        accessor: "category",
        title: "Categories",
        titleStyle: { color: "" },
        textAlignment: "center",
      },
      {
        accessor: "quantity",
        title: "Net Quantity",
        titleStyle: { color: "" },
        textAlignment: "center",
      },
    ];

    const records = [
        {   id:1,
            name:"Bandages", 
            category:"Medical",
            quantity:"male",
            
        },
        {   id:2,
            name:"Syringes", 
            category:"Medical",
            quantity:"male",
           
        },
        {   id:3,
            name:"Gloves", 
            category:"Medical",
            quantity:"male",
           
        },
        {   id:4,
            name:"Surgical Masks", 
            category:"Medical",
            quantity:"male",
            
        },
        {   id:5,
            name:"X-ray Machine", 
            category:"Equipment",
            quantity:"male",
           
        },
        {   id:6,
            name:"Blood Pressure Monitor", 
            category:"Equipment",
            quantity:"male",
           
        },
        {   id:7,
            name:"IV Fluids", 
            category:"Medication",
            quantity:"male",
           
        },
        {   id:7,
            name:"Scalpels", 
            category:"Surgical",
            quantity:"male",
            
        },
        {   id:9,
            name:"Wheelchairs", 
            category:"Equipemnt",
            quantity:"male",
            
        },
        {   id:10,
            name:"	Forceps", 
            category:"Surgical",
            quantity:"male",
            
        },
        {   id:11,
            name:"Bone Drill", 
            category:"Equipment",
            quantity:"male",
          
        },
        {   id:12,
            name:"Electrosurgical Unit",
            category:"Equipment",
            quantity:"male",
            
        },
    ];
    return(
        <Box m="md">
            {/* <Grid>
                <Grid.Col xs={2} lg={2}>
                    <Card m="md" shadow="xl" p={20} 
                     style={{fontFamily:"unset",
                     borderRadius:"20px",
                     background:"rgba(139, 127, 194, 1)",
                      color:"white",
                      textAlign:"center"}}>
                        PATIENTS MANAGEMENT
                    </Card>
                </Grid.Col>
                <Grid.Col xs={8} lg={8}></Grid.Col>
                <Grid.Col xs={2} lg={2}>
                    <Button p={30} left="46%" style={{borderRadius:"20px",top:"13%"}} >Add User</Button>
                </Grid.Col>
            </Grid> */}


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