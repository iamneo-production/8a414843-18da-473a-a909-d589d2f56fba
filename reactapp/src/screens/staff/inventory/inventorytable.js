import {
    Modal,
    Paper,
    Text,
    Group,
    Button,
    TextInput,
    ActionIcon,
    Badge,
} from '@mantine/core';

import {
    IconEdit,
    IconPlus,
    IconSearch,
    IconTrash,
} from "@tabler/icons-react";

import { DataTable } from "mantine-datatable"
import { useState} from "react";
// import ModifyAndCreateModal from "./ModifyAndCreateModal"
import Edit from './edit';


export default function InventoryTable(props) {

    // Getting specific properties from the props 
    const { products, fetching, } = props

    //Managing the states for editing records and opening modals(popup)        
    const [editRecordId, setEditRecordId] = useState(null);
    //Adding new records to already existing records
    const [addRecord, setAddRecord] = useState(null);
    //State to maintain record 
    const [records,setRecords] = useState(products);


    //Creating new row in a record
    const handleCreateNewRow = (values) => {
        records.push(values);
        setRecords([...records]);
    };


    //Editing the already existing record
    const handleSaveEdit = (editedData) => {
        const updatedRecords = records.map((record) => {
            if (record.id === editRecordId.id) {
              return { ...record, ...editedData };
            }
            return record;
        });
        console.log(updatedRecords);
        setEditRecordId(null);
        setRecords(updatedRecords);
    };

    // Search to filter the records using product name
    function handleMedicine(e){
        
        const modified = products.filter(({name})=>{
            return `${name}`.toLowerCase().includes(e.currentTarget.value.toLowerCase());
        })
        console.log(modified);
        setRecords(modified);

    }

    
   
        
    //Deleting record
    function handleDelete(data){
        const modified = records.filter((item)=>{
            return item!==data;
        })
        setRecords(modified);
    }

    //styles
    const container = {
        display:'flex',
        justifyContent:'space-between',
        fontSize: '40px'
    };

    const searchBar={
        width : '250px',
        padding : '10px',
        display : 'inline-block',
    }

    const [isHovered, setIsHovered] = useState(false);
    
    const btnstyle={
        margin: '16px',
        backgroundColor: isHovered ? '#F3F4F6' : '#FAFBFC',
        transition: 'background-color 0.3s',
        border: '1px solid rgba(27, 31, 35, 0.15)',
        borderRadius: '6px',
        boxShadow: 'rgba(27, 31, 35, 0.04) 0 1px 0, rgba(255, 255, 255, 0.25) 0 1px 0 inset',
        boxSizing: 'border-box',
        color: '#24292E',
        cursor: 'pointer',
        overflow: 'auto',
        top: '50px',
    };

    return (
        <Paper style={{padding:'20px',borderRadius:"20px",backgroundColor:"white"}}>
            <Badge h={50}><h1 style={container}>
                Inventory  Management
            </h1>
            </Badge>
            
            <div style={container}>
                
                    <TextInput style={searchBar}
                        
                        icon={<IconSearch  />}
                        placeholder="Search by Name"
                       
                        onChange={handleMedicine}
                    />
                
                <div>
                    <Button style={{btnstyle,background: "rgba(139, 127, 194, 1)"}} onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)} onClick={()=>setAddRecord(1)}>Add Inventory</Button>
                </div>
            </div>
            <Modal opened={addRecord !== null} onClose={() => setAddRecord(null)} title="Add New Product" centered>
                <Edit onClose={() => setAddRecord(null)} onSubmit={handleCreateNewRow}/>

            </Modal>
            <Modal opened={editRecordId !== null} onClose={() => setEditRecordId(null)} title="Edit Record" centered>
                <Edit records={editRecordId} onClose={() => setEditRecordId(null)} onSubmit={handleSaveEdit}/>
            </Modal>

            <DataTable style={{display:'block',margin:'20px'}}
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
                fetching={fetching}
                loaderVariant="bars"
                minHeight="60vh"
                // height={window.innerHeight - 230}
                columns={[
                    {
                        accessor: "id",//for api
                        title: "Id",
                        titleStyle: { color: "" },//define style
                        textAlignment: "center",
                        render: (data) => (
                            <Group position="center">
                                <Text>{data?.id}</Text>
                            </Group>
                        ),
                    },
                    {
                        accessor: "name",//for api
                        title: "Name",
                        titleStyle: { color: "" },//define style
                        textAlignment: "center",
                        render: (data) => (
                            <Group position="center">
                                <Text>{data?.name}</Text>
                            </Group>
                        ),
                    },
                    {
                        accessor: "quantity",//for api
                        title: "Quanity",
                        titleStyle: { color: "" },//define style
                        textAlignment: "center",
                        render: (data) => (
                            <Group position="center">
                                <Text>{data?.quanity}</Text>
                            </Group>
                        ),
                    },
                    
                    {
                        accessor: "category",//for api
                        title: "Category",
                        titleStyle: { color: "" },//define style
                        textAlignment: "center",
                        render: (data) => (
                            <Group position="center">
                                <Text>{data?.category}</Text>
                            </Group>
                        ),
                    },
                    {
                        accessor: "price",//for api
                        title: "Price (per unit)",
                        titleStyle: { color: "" },//define style
                        textAlignment: "center",
                        render: (data) => (
                            <Group position="center">
                                <Text>{data?.price}</Text>
                            </Group>
                        ),
                    },
                    
                    {
                        accessor: "Supplier",//for api
                        title: "Supplier",
                        titleStyle: { color: "" },//define style
                        textAlignment: "center",
                        render: (data) => (
                            <Group position="center">
                                <Text>{data?.supplier}</Text>
                            </Group>
                        ),
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
                                <ActionIcon color="red" onClick={() => handleDelete(data)}>
                                    <IconTrash size={16} />
                                </ActionIcon>
                            </Group>
                        ),
                      },
                ]}
                records={records}
            />
        </Paper>
    )
}