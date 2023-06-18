import {
    Box,
    Button,
    Grid,
    Group,
    TextInput,
    Text,
    Menu,
    Title,
    Card,
} from "@mantine/core";
import { useDisclosure } from '@mantine/hooks';
import { Modal} from '@mantine/core';
import { useForm } from '@mantine/form'
import {
    IconDotsVertical,
    IconEdit,
    IconEye,
    IconTrash,
    IconMoneybag,
} from "@tabler/icons-react";
import { useState } from 'react';

import CustomTable from "../../../components/customTable/index";

// import Data from "./data";

export default function SampleTable() {

    const [records,setRecords] = useState([
        { doctor_id: 1, 
            doctor_name: "Campaign 1", 
            specialization:"Dermatologist", 
            status: "Active", 
            salary:"20000" 
        },
        {
            doctor_id: 2,
            doctor_name: "Campaign 2",
            specialization:"Dermatologist",
            status: "Offline",
            salary:"20000"
        },
        { doctor_id: 3, 
            doctor_name: "Campaign 3", 
            specialization:"Dermatologist", 
            status: "Active", 
            salary:"20000" 
        },
        {
            doctor_id: 4,
            doctor_name: "Campaign 4",
            specialization:"Dermatologist",
            status: "Offline",
            salary:"20000"
        },
        { doctor_id: 5, 
            doctor_name: "Campaign 5", 
            specialization:"Dermatologist", 
            status: "Active", 
            salary:"20000" 
        },
        {
            doctor_id: 6,
            doctor_name: "Campaign 6",
            specialization:"Dermatologist",
            status: "Offline",
            salary:"20000"
        },
        { doctor_id: 7, 
            doctor_name: "Campaign 7", 
            specialization:"Dermatologist", 
            status: "Active", 
            salary:"20000" 
        },
    ]);

    const [records2,setRecords2] =useState( [
        { staff_id: 1, 
            doctor_name: "staff_name 1", 
            specialization:"Medico", 
            status: "Active", 
            salary:"20000" 
        },
        {
            staff_id: 2,
            doctor_name: "staff_name 2",
            specialization:"Medico",
            status: "Offline",
            salary:"20000"
        },
        { staff_id: 3, 
            doctor_name: "staff_name 3", 
            specialization:"Medico", 
            status: "Active", 
            salary:"20000" 
        },
        {
            staff_id: 4,
            doctor_name: "staff_name 4",
            specialization:"Medico",
            status: "Offline",
            salary:"20000"
        },
        { staff_id: 5, 
            doctor_name: "staff_name 5", 
            specialization:"Medico", 
            status: "Active", 
            salary:"20000" 
        },
        {
            staff_id: 6,
            doctor_name: "staff_name 6",
            specialization:"Medico",
            status: "Offline",
            salary:"20000"
        },
        { staff_id: 7, 
            doctor_name: "staff_name 7", 
            specialization:"Medico", 
            status: "Active", 
            salary:"20000" 
        },
    ]);

    const colDef = [
        {
            accessor: "doctorid",
            title: "Doctor_id",
            titleStyle: { color: "" },
            textAlignment: "center",
            render: (data) => (
                <Group position="center">
                    <Text>{data?.doctor_id}</Text>
                </Group>
  
            ),
        },
        {
            accessor: "doctordetails",
            title: "Doctor_name",
            titleStyle: { color: "" },
            textAlignment: "center",
            render: (data) => (
                <Group position="center">
                    <Text>{data?.doctor_name}</Text>
                </Group>
  
            ),
        },
    
        {
            accessor: "specail",
            title: "specialization",
            titleStyle: { color: "" },
            textAlignment: "center",
            render: (data) => (
                <Group position="center">
                    <Text>{data?.specialization}</Text>
                </Group>
            ),
            
        },

        
        {
            accessor: "status",
            textAlignment: "center",
            render: (data) => (
                <Group position="center">
                    <Text
                        fz="12px"
                        fw={500}
                        p={5}
                        style={{
                            fontWeight: "bold",
                            color: data?.status === "Active" ? "#3B72FF" : "#FF3B3B",
                            backgroundColor:
                                data?.status === "Active" ? "#E3EBFF" : "#FFE4E4",
                            borderRadius: "6px",
                        }}
                    >
                        {data?.status}
                    </Text>
                </Group>
            ),
        },
        {
            accessor: "salamount",
            title: "salary",
            titleStyle: { color: "" },
            textAlignment: "center",
            render: (data) => (
                <Group position="center">
                    <Text>{data?.salary}</Text>
                </Group>),
                
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
                        <Menu.Item 
                                icon={<IconEye size={19} style={{ color: "#081226" }} />}
                                style={{
                                    color: "black",
                                    fontSize: 15,
                                    fontWeight: "500",
                                }}
                            >
                                View
                            </Menu.Item>
                            <Menu.Item
                                icon={<IconMoneybag size={19} style={{ color: "#081226" }} />}
                                style={{
                                    color: "black",
                                    fontSize: 15,
                                    fontWeight: "500",
                                }}
                            >
                                pay
                            </Menu.Item>
                            <Menu.Item onClick={() => {
                                         setSelectedIndex(data.doctor_id);
                                        open();
                                         }}
                                icon={<IconEdit size={17} style={{ color: "#081226" }} />}
                                style={{
                                    color: "black",
                                    fontSize: 15,
                                    fontWeight: "500",
                                }}
                            >
                                Edit
                            </Menu.Item>

                            <Menu.Item onClick={() => handleDelete(data.doctor_id)}
                                icon={<IconTrash color="red" size={16} />}
                                style={{
                                    color: "black",
                                    fontSize: 15,
                                    fontWeight: "500",
                                }}
                            >
                                Delete
                            </Menu.Item>
                        </Menu.Dropdown>
                    </Menu>
                );
            },
        },
    ];

    const handleDelete = (doctorId) => {
        setRecords((prevRecords) =>
          prevRecords.filter((record) => record.doctor_id !== doctorId)
        );
      };

    const colDef2 = [
        {
            accessor: "staffid",
            title: "staff_id",
            titleStyle: { color: "" },
            textAlignment: "center",
            render: (data) => (
                <Group position="center">
                    <Text>{data?.staff_id}</Text>
                </Group>
  
            ),
        },
        {
            accessor: "doctordetails",
            title: "staff_name",
            titleStyle: { color: "" },
            textAlignment: "center",
            render: (data) => (
                <Group position="center">
                    <Text>{data?.doctor_name}</Text>
                </Group>
  
            ),
        },
    
        {
            accessor: "specail",
            title: "specialization",
            titleStyle: { color: "" },
            textAlignment: "center",
            render: (data) => (
                <Group position="center">
                    <Text>{data?.specialization}</Text>
                </Group>
                
            ),
           
        },

        
        {
            accessor: "status",
            textAlignment: "center",
            render: (data) => (
                <Group position="center">
                    <Text
                        fz="12px"
                        fw={500}
                        p={5}
                        style={{
                            fontWeight: "bold",
                            color: data?.status === "Active" ? "#3B72FF" : "#FF3B3B",
                            backgroundColor:
                                data?.status === "Active" ? "#E3EBFF" : "#FFE4E4",
                            borderRadius: "6px",
                        }}
                    >
                        {data?.status}
                    </Text>
                </Group>
            ),
        },
        {
            accessor: "salamount",
            title: "salary",
            titleStyle: { color: "" },
            textAlignment: "center",
            render: (data) => (
                <Group position="center">
                    <Text>{data?.salary}</Text>
                </Group>),
            
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
                        <Menu.Item 
                                icon={<IconEye size={19} style={{ color: "#081226" }} />}
                                style={{
                                    color: "black",
                                    fontSize: 15,
                                    fontWeight: "500",
                                }}
                            >
                                View

                            </Menu.Item>
                            
                            <Menu.Item
                                icon={<IconMoneybag size={19} style={{ color: "#081226" }} />}
                                style={{
                                    color: "black",
                                    fontSize: 15,
                                    fontWeight: "500",
                                }}
                            >
                                pay
                            </Menu.Item>
                            <Menu.Item  onClick={() => {
                                         setSelectedIndex2(data.staff_id);
                                        open();
                                         }}
                                icon={<IconEdit size={17} style={{ color: "#081226" }} />}
                                style={{
                                    color: "black",
                                    fontSize: 15,
                                    fontWeight: "500",
                                }}
                            >
                                Edit
                            </Menu.Item>

                            <Menu.Item onClick={() => handDelete(data.staff_id)}
                                icon={<IconTrash color="red" size={16} />}
                                style={{
                                    color: "black",
                                    fontSize: 15,
                                    fontWeight: "500",
                                }}
                            >
                                Delete
                            </Menu.Item>
                        </Menu.Dropdown>
                    </Menu>
                );
            },
        },
    ];

    const [active,setActive]=useState(1)
    const [opened, { open, close }] = useDisclosure(false);

   
    const handDelete = (staffId) => {
        setRecords2((prevRecords) =>
            prevRecords.filter((records2) => records2.staff_id !== staffId)
        );
    };

    const form = useForm({
        initialValues: {
            salary:''
        
        },
    });

    const [selectedIndex, setSelectedIndex] = useState(null);
    const handlSalaryUpdate = () => {
        const updatedRecords =records;
        updatedRecords[selectedIndex-1].salary = form.values.salary;
        setRecords(updatedRecords);
        close();
      };

    const [selectedIndex2, setSelectedIndex2] = useState(null);
    const handleSalaryUpdate = () => {
        const updatedRecords =records2;
        updatedRecords[selectedIndex2-1].salary = form.values.salary;
        setRecords2(updatedRecords);
        close();
      };
    

    return (

        
        <Grid>
        {/* <Grid.Col xs={1} lg={1}></Grid.Col> */}
          <Grid.Col xs={3} lg={3} onClick={()=>{setActive(1)}}>
                <Card shadow="xl" m="lg" padding="xl" withBorder style={{background: "rgba(139, 127, 194, 1)", background: active === 1 ? "rgba(139, 127, 194, 1)" :"rgb(255, 255, 255)" , textDecoration: "none", borderColor: "rgba(139, 127, 194, 1)",  position: "relative", overflow: "hidden", cursor: "pointer",  borderRadius: "10px", }} >
                    <Title style={{ fontSize: "20px", textAlign: "center"}} >Doctor Payroll {<IconMoneybag size={20} style={{ color: "#081226" }} />}</Title>
                                    
                </Card>
            </Grid.Col>
            <Grid.Col xs={3} lg={3} onClick={()=>{setActive(2)}}>
                <Card shadow="xl" m="lg" padding="xl" withBorder style={{background: "rgba(139, 127, 194, 1)", background: active === 2 ? "rgba(139, 127, 194, 1)" :"rgb(255, 255, 255)" , textDecoration: "none", borderColor: "rgba(139, 127, 194, 1)",  position: "relative", overflow: "hidden", cursor: "pointer",  borderRadius: "10px",}}>
                    <Title style={{ fontSize: "20px", textAlign: "center"}}>Staffs Payroll {<IconMoneybag size={20} style={{ color: "#081226" }} />}</Title>
                </Card>
            </Grid.Col>
            <Grid.Col xs={8} lg={8}></Grid.Col >
            <Grid.Col xs={12} lg={12}> 
            <Modal opened={opened} onClose={close} title="Salary Update" centered>
                <form onSubmit={form.onSubmit(handlSalaryUpdate)}>
                    <TextInput
                    placeholder="Salary"
                    value={form.values.salary}
                    onChange={form.getInputProps('salary').onChange}
                    mt="md"
                    />
                <Button style={{ background: "rgba(139, 127, 194, 1)" }} type="submit"> Update </Button>
                </form>
            </Modal>
            <Modal opened={opened} onClose={close} title="Salary Update" centered>
                <form onSubmit={form.onSubmit(handleSalaryUpdate)}>
                    <TextInput
                    placeholder="Salary"
                    value={form.values.salary}
                    onChange={form.getInputProps('salary').onChange}
                    mt="md"
                    />
                <Button style={{ background: "rgba(139, 127, 194, 1)" }} type="submit"> Update </Button>
                </form>
            </Modal>

            <Box m="md">
                <CustomTable coloumnDef={active===1?colDef:colDef2} records={active===1?records:records2} />
            </Box>
        </Grid.Col></Grid>
    );
}