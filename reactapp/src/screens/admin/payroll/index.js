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
    Tabs,
    Notification
} from "@mantine/core";
// import {Notifications} form "@mantine/notifications";
import { useDisclosure } from '@mantine/hooks';
import { Modal} from '@mantine/core';
import { useForm } from '@mantine/form'
import {
    IconDotsVertical,
    IconEdit,
    IconEye,
    IconTrash,
    IconMoneybag,
    IconSearch,
} from "@tabler/icons-react";
import { useState } from 'react';

import CustomTable from "../../../components/customTable/index";

// import Data from "./data";

export default function SampleTable() {

    const [records,setRecords] = useState([
        { doctor_id: 1, 
            doctor_name: "Campaign 1", 
            Gender:"Male", 
            status: "Active", 
            salary:"20000" 
        },
        {
            doctor_id: 2,
            doctor_name: "Campaign 2",
            Gender:"Male",
            status: "Offline",
            salary:"20000"
        },
        { doctor_id: 3, 
            doctor_name: "Campaign 3", 
            Gender:"Male", 
            status: "Active", 
            salary:"20000" 
        },
        {
            doctor_id: 4,
            doctor_name: "Campaign 4",
            Gender:"Female",
            status: "Offline",
            salary:"20000"
        },
        { doctor_id: 5, 
            doctor_name: "Campaign 5", 
            Gender:"Female", 
            status: "Active", 
            salary:"20000" 
        },
        {
            doctor_id: 6,
            doctor_name: "Campaign 6",
            Gender:"Male",
            status: "Offline",
            salary:"20000"
        },
        { doctor_id: 7, 
            doctor_name: "Campaign 7", 
            Gender:"Female", 
            status: "Active", 
            salary:"20000" 
        },
    ]);

    const [records2,setRecords2] =useState( [
        { staff_id: 1, 
            doctor_name: "staff_name 1", 
            Gender:"Medico", 
            status: "Active", 
            salary:"20000" 
        },
        {
            staff_id: 2,
            doctor_name: "staff_name 2",
            Gender:"Medico",
            status: "Offline",
            salary:"20000"
        },
        { staff_id: 3, 
            doctor_name: "staff_name 3", 
            Gender:"Medico", 
            status: "Active", 
            salary:"20000" 
        },
        {
            staff_id: 4,
            doctor_name: "staff_name 4",
            Gender:"Medico",
            status: "Offline",
            salary:"20000"
        },
        { staff_id: 5, 
            doctor_name: "staff_name 5", 
            Gender:"Medico", 
            status: "Active", 
            salary:"20000" 
        },
        {
            staff_id: 6,
            doctor_name: "staff_name 6",
            Gender:"Medico",
            status: "Offline",
            salary:"20000"
        },
        { staff_id: 7, 
            doctor_name: "staff_name 7", 
            Gender:"Medico", 
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
            title: "Gender",
            titleStyle: { color: "" },
            textAlignment: "center",
            render: (data) => (
                <Group position="center">
                    <Text>{data?.Gender}</Text>
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
                            <Menu.Item  onClick={() => handlePayDoctor(data.doctor_id)}
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
      const [selectedNotification, setSelectedNotification] = useState(null);

  const handlePay = (staffName) => {
    setSelectedNotification({
      color: 'green',
      message: `Salary credited successfully for staff ${staffName}.`,
    });
  };
  const handlePayDoctor = (Doctor_name) => {
    setSelectedNotification({
      color: 'green',
      message: `Salary credited successfully for Doctor ${Doctor_name}.`,
    });
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
            title: "Gender",
            titleStyle: { color: "" },
            textAlignment: "center",
            render: (data) => (
                <Group position="center">
                    <Text>{data?.Gender}</Text>
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
                            onClick={() => handlePay(data.staff_id)}
                            
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
    const [activeTab, setActiveTab] = useState('first');
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
      const [searchTerm, setSearchTerm] = useState('');
      const [searchByStatus, setSearchByStatus] = useState('');
      const [searchByGender, setSearchByGender] = useState('');
    
      const filteredDoctorRecords = records.filter((record) =>
        record.doctor_name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        record.status.toLowerCase().includes(searchByStatus.toLowerCase()) &&
        record.Gender.toLowerCase().includes(searchByGender.toLowerCase())
      );
    
      const filteredStaffRecords = records2.filter((record) =>
        record.doctor_name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        record.status.toLowerCase().includes(searchByStatus.toLowerCase()) &&
        record.Gender.toLowerCase().includes(searchByGender.toLowerCase())
      );

    return (

        
        <Grid>
          
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
            <Tabs value={activeTab} onTabChange={setActiveTab}>
      <Tabs.List>
        <Tabs.Tab value="first">Doctor</Tabs.Tab>
        <Tabs.Tab value="second">Staff</Tabs.Tab>
      </Tabs.List>
      
      {/* <Tabs.Panel value="first">
      <CustomTable coloumnDef={active===1?colDef:colDef2} records={active===1?records:records2 } />
      </Tabs.Panel>
      <Tabs.Panel value="second">
      <CustomTable coloumnDef={active===2?colDef:colDef2} records={active===2?records:records2 } />
      </Tabs.Panel> */}
      <Grid>
      <Grid.Col xs={4} lg={4}>
       <TextInput
        placeholder="Search by Name"
        icon={<IconSearch color="#BF94E4" size={16} />}
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        mt="md"
      />
      </Grid.Col>
      <Grid.Col xs={4} lg={4}>
      <TextInput
          placeholder="Search by Gender"
          icon={<IconSearch color="#BF94E4" size={16} />}
          value={searchByGender}
          onChange={(event) => setSearchByGender(event.target.value)}
          mt="md"
        />
    
      </Grid.Col>
      <Grid.Col xs={4} lg={4}>
      <TextInput
        placeholder="Search by Status"
        icon={<IconSearch color="#BF94E4" size={16} />}
        value={searchByStatus}
        onChange={(event) => setSearchByStatus(event.target.value)}
        mt="md"
      />
      </Grid.Col>
      
      </Grid>
      <Grid.Col xs={12} lg={12}></Grid.Col>
      <Tabs.Panel value="first">
        <CustomTable coloumnDef={colDef} records={filteredDoctorRecords} />
      </Tabs.Panel>
      <Tabs.Panel value="second">
        <CustomTable coloumnDef={colDef2} records={filteredStaffRecords} />
      </Tabs.Panel>
      
        </Tabs>


                {/* <CustomTable coloumnDef={active===1?colDef:colDef2} records={active===1?records:records2} /> */}
                {selectedNotification && (
          <Notification
            title="Salary Payment Status"
            color={selectedNotification.color}
            onClose={() => setSelectedNotification(null)}
          >
            {selectedNotification.message}
          </Notification>
        )}
            </Box>
           
            </Grid.Col>
        </Grid>
    );
}


