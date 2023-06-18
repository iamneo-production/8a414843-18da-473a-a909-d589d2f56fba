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
        title: "ID",
        titleStyle: { color: "" },
        textAlignment: "center",
      },
      {
        accessor: "drug",
        title: "Drug Name",
        titleStyle: { color: "" },
        textAlignment: "center",
      },
      {
        accessor: "company",
        title: "Drug company",
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
            drug:"paracetamol 650 mg", 
            company: "Dolo", 
            quantity:6,
            
        },
        {   id:2,
            drug:"Anatensol 1mg", 
            company: "Abbott India Ltd.", 
            quantity:2,
           
        },
        {   id:3,
            drug:"Strepsils", 
            company: "RK World Infocom Pvt Ltd", 
            quantity:2,
           
        },
        {   id:4,
            drug:"Eno", 
            company: "Haleon", 
            quantity:1,
            
        },
        {   id:5,
            drug:" Diphenhydramine", 
            company: "Benadryl", 
            quantity:3,
           
        },
        {   id:6,
            drug:"Vicks 500", 
            company: "vicks.pvt.ltd", 
            quantity:5,
           
        },
        {   id:7,
            drug:"Digene", 
            company: "Abbott india ltd.", 
            quantity:2,
           
        },
        {   id:7,
            drug:"Aciloc 25mg", 
            company: "Cadila", 
            quantity:3,
            
        },
        {   id:9,
            drug:"Antibiotic 400mg", 
            company: "Cipla", 
            quantity:56,
            
        },
        {   id:10,
            drug:"Ibuprofen 800", 
            company: "Motrin", 
            quantity:59,
            
        },
        {   id:11,
            drug:"Azithromycin 250", 
            company: "Zithromax", 
            quantity:56,
          
        },
        {   id:12,
            drug: "Cephalexin 500 mg", 
            company: "Keflex", 
            quantity:24,
            
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