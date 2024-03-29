import {
    Box,
    Button,
    Grid,
    Group,
    TextInput,
    Text,
    Menu,
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
    IconTrash,
    IconMoneybag,
} from "@tabler/icons-react";
import { useState, useEffect } from 'react';
import CustomTable from "../../../components/customTable";
import {post,put,del} from '../../../api';
import EndPoints from '../../../api/endPoints';

export default function SampleTable() {

    const [doctors,setDoctors] = useState([]);
    const [staff,setStaff] = useState([]);
    const [activeTab, setActiveTab] = useState('first');
    const [opened, { open, close }] = useDisclosure(false);
    const [selectedIndex, setSelectedIndex] = useState(null);

   
    const colDef = [
        {
            accessor: "id",
            title: "Id",
            titleStyle: { color: "" },
            textAlignment: "center",
            
            render: (data) => (
                <Group position="center">
                    <Text>
                        {data?.id}
                    </Text>
                </Group>
                
  
            ),
        },
        {
            accessor: "firstName",
            title: "FirstName",
            titleStyle: { color: "" },
            textAlignment: "center",
            render: (data) => (
                <Group position="center">
                    <Text>
                        {data?.firstName}
                    </Text>
                </Group>
  
            ),
        },
        {
            accessor: "lastName",
            title: "LastName",
            titleStyle: { color: "" },
            textAlignment: "center",
            render: (data) => (
                <Group position="center">
                    <Text>
                        {data?.lastName}
                    </Text>
                </Group>
  
            ),
        },
        {
            accessor: "email",
            title: "Email",
            titleStyle: { color: "" },
            textAlignment: "center",
            render: (data) => (
                <Group position="center">
                    <Text>
                        {data?.email}
                    </Text>
                </Group>
            ),
            
        },
        {
            accessor: "age",
            title: "Age",
            titleStyle: { color: "" },
            textAlignment: "center",
            render: (data) => (
                <Group position="center">
                    <Text>
                        {data?.age}
                    </Text>
                </Group>
            ),
            
        },    
        {
            accessor: "gender",
            title: "Gender",
            titleStyle: { color: "" },
            textAlignment: "center",
            render: (data) => (
                <Group position="center">
                    <Text>
                        {data?.gender}
                    </Text>
                </Group>
            ),            
        },        
        {
            accessor: "address",
            title: "Address",
            titleStyle: { color: "" },
            textAlignment: "center",
            render: (data) => (
                <Group position="center">
                    <Text>
                        {data?.address}
                    </Text>
                </Group>
            ),  
        },
        {
            accessor: "phone",
            title: "Phone",
            titleStyle: { color: "" },
            textAlignment: "center",
            render: (data) => (
                <Group position="center">
                    <Text>
                        {data?.phone}
                    </Text>
                </Group>
            ),
        },      
        {
            accessor: "salary",
            title: "Salary",
            titleStyle: { color: "" },
            textAlignment: "center",
            render: (data) => (
                <Group position="center">
                    <Text>
                        {data?.salary}
                    </Text>
                </Group>
                ),      
        },
        {
            accessor: "specialist",
            title: "Specialist",
            titleStyle: { color: "" },
            textAlignment: "center",
            render: (data) => (
                <Group position="center">
                    <Text>
                        {data?.specialist}
                    </Text>
                </Group>
                ),
        },       
        {
            accessor: "actions",
            title: <Text mr="xs">Actions</Text>,
            textAlignment: "center",
            render: (data) => {
              

                return (
                    <Menu position="bottom-start" shadow="xl" width={160}>
                        <Menu.Target>
                            <Button
                                radius="md"
                                variant="subtle"
                            >
                                <IconDotsVertical />
                            </Button>
                        </Menu.Target>
                        <Menu.Dropdown>
                            <Menu.Item  onClick={() => handlePayDoctor(data)}
                                icon={<IconMoneybag size={19} style={{ color: "#081226" }} />}
                                style={
                                    {
                                    color: "black",
                                    fontSize: 15,
                                    fontWeight: "500",
                                }
                            }
                            >
                                pay
                            </Menu.Item>
                            <Menu.Item onClick={() => {
                                         setSelectedIndex(data);
                                        open();
                                         }}
                                icon={<IconEdit size={17} style={{ color: "#081226" }} />}
                                style={
                                    {
                                    color: "black",
                                    fontSize: 15,
                                    fontWeight: "500",
                                }
                            }
                            >
                                Edit
                            </Menu.Item>
                            <Menu.Item 
                            onClick={() => {
                                handleDelete(data);
                    
                                }}
                                icon={<IconTrash color="red" size={16} />}
                                style={
                                    {
                                    color: "black",
                                    fontSize: 15,
                                    fontWeight: "500",
                                }
                            }
                            >
                                Delete
                            </Menu.Item>
                        </Menu.Dropdown>
                    </Menu>
                );
            },
        },
    ];


    const colDef2 = [
        {
            accessor: "id",
            title: "Id",
            titleStyle: { color: "" },
            textAlignment: "center",
            render: (data) => (
                <Group position="center">
                    <Text>
                        {data?.id}
                    </Text>
                </Group>
  
            ),
        },
        {
            accessor: "firstName",
            title: "FirstName",
            titleStyle: { color: "" },
            textAlignment: "center",
            render: (data) => (
                <Group position="center">
                    <Text>
                        {data?.firstName}
                    </Text>
                </Group>
  
            ),
        },
        {
            accessor: "lastName",
            title: "LastName",
            titleStyle: { color: "" },
            textAlignment: "center",
            render: (data) => (
                <Group position="center">
                    <Text>
                        {data?.lastName}
                    </Text>
                </Group>
                
            ),  
        },
        {
            accessor: "email",
            title: "Email",
            titleStyle: { color: "" },
            textAlignment: "center",
            render: (data) => (
                <Group position="center">
                    <Text>
                        {data?.email}
                    </Text>
                </Group>
                
            ),   
        },
        {
            accessor: "age",
            title: "Age",
            titleStyle: { color: "" },
            textAlignment: "center",
            render: (data) => (
                <Group position="center">
                    <Text>
                        {data?.age}
                    </Text>
                </Group>
                
            ), 
        },
        {
            accessor: "gender",
            title: "Gender",
            titleStyle: { color: "" },
            textAlignment: "center",
            render: (data) => (
                <Group position="center">
                    <Text>
                        {data?.gender}
                    </Text>
                </Group>
                
            ), 
        },
        {
            accessor: "address",
            title: "Address",
            titleStyle: { color: "" },
            textAlignment: "center",
            render: (data) => (
                <Group position="center">
                    <Text>
                        {data?.address}
                    </Text>
                </Group>
                
            ),  
        },
        {
            accessor: "phone",
            title: "Phone",
            titleStyle: { color: "" },
            textAlignment: "center",
            render: (data) => (
                <Group position="center">
                    <Text>
                        {data?.phone}
                    </Text>
                </Group>
                
            ),
           
        },
        {
            accessor: "salary",
            title: "Salary",
            titleStyle: { color: "" },
            textAlignment: "center",
            render: (data) => (
                <Group position="center">
                    <Text>
                        {data?.salary}
                    </Text>
                </Group>),
            
        },
        {
            accessor: "actions",
            title: <Text mr="xs">Actions</Text>,
            textAlignment: "center",
            render: (data) => {
    
               
                

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
                                onClick={() => handlePay(data)}
                                icon={<IconMoneybag size={19} style={{ color: "#081226" }} />}
                                style={
                                    {
                                    color: "black",
                                    fontSize: 15,
                                    fontWeight: "500",
                                }
                            }
                            >
                                pay
                            </Menu.Item>
                            
                            <Menu.Item  
                                onClick={()=> {setSelectedIndex(data); 
                                    open();}}
                                icon={<IconEdit size={17} style={{ color: "#081226" }} />}
                                style={
                                    {
                                    color: "black",
                                    fontSize: 15,
                                    fontWeight: "500",
                                }
                            }
                            >
                                Edit
                            </Menu.Item>

                            <Menu.Item 
                                 onClick={()=> {handleDelete(data); 
                                   }}
                                icon={<IconTrash color="red" size={16} />}
                                style={
                                    {
                                    color: "black",
                                    fontSize: 15,
                                    fontWeight: "500",
                                }
                            }
                            >
                                Delete
                            </Menu.Item>
                        </Menu.Dropdown>
                    </Menu>
                );
            },
        },
    ];

    const getDoctors =async() =>{
        await post(EndPoints.getDoctors,{role:'ROLE_DOCTOR'}).then((response)=>
        {
            setDoctors(response.data);
            console.log(response);
        }
        ).catch(error =>{
            console.log(error);
        }
        )
        
    }

    const getStaff =async() =>{
        await post(EndPoints.getDoctors,{role:'ROLE_STAFF'}).then((response)=>
        {
            setStaff(response.data);
            console.log(response);
        }
        ).catch(error =>{
            console.log(error);
        }
        )
       
    }

    const [selectedNotification, setSelectedNotification] = useState(null);
    const handlePayDoctor = async(Id) => {
    console.log("fromRegister",Id)

    await post(EndPoints.salaryPay,Id).then((response)=>{
      console.log(response);
    }).catch(error =>{
      console.log(error);
    })
      setSelectedNotification(
        {
        color: 'green',
        message: `Salary credited successfully for Doctor ${Id}.`,
      }
      );
    };

    const handlePay = async(Id) => {
        console.log("fromRegister",Id)
    
        await post(EndPoints.salaryPay,Id).then((response)=>{
          console.log(response);
        }).catch(error =>{
          console.log(error);
        })
          setSelectedNotification(
            {
            color: 'green',
            message: `Salary credited successfully for staff ${Id}.`,
          }
          );
        };


     const handleDelete = async(data)=>{
        console.log("FromDeleteMethod",);
       
         await del(`${EndPoints.deleteUsers}/${data.id}`).then((response) => {
            console.log(response);
         }).catch(error => {
            console.log(error);
        })
        getDoctors();
        getStaff();
        window.location.reload();
     
    };

    useEffect(()=>{
        getDoctors();
        getStaff();
        if (selectedNotification) {
            const timerId = setTimeout(() => {
                setSelectedNotification(null);
            }, 2000);
            return () => clearTimeout(timerId);
        }
      
    },[selectedNotification]
    )

    
    const handleSalaryUpdate = async() => {
        const data = form.values
        await put(`${EndPoints.updateUserDetails}/${selectedIndex?.id}`,data).then((response)=>{
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })

        close();
         window.location.reload();
    };
    
    

    const form = useForm({
        initialValues: {
            salary:selectedIndex?.salary,        
        },
    });

    const [searchQuery, setSearchQuery] = useState('');


    return (

        <Grid>
          <Grid.Col xs={12} lg={12}>
           
        <Modal opened={opened} onClose={close} title="Salary Update" centered>
            <form onSubmit={form.onSubmit(() => {
                handleSalaryUpdate()
                }
            )
        }
        >
        <TextInput
        placeholder="Salary"
         mt="md"
        {...form.getInputProps('salary')}
        />
        <Grid.Col xs={12} lg={12}></Grid.Col>
        <Button style={{ background: "rgba(139, 127, 194, 1)" }} type="submit"> Update </Button>
        </form>
        </Modal>

        <Box m="md">
        <Text ta="center" size="xl" style={{ marginTop: "15px", fontWeight: "bold", color: "#BF94E4" }}>
             Payroll          
        </Text>
        <Grid.Col xs={12} lg={12}></Grid.Col>
                
        <Tabs value={activeTab} onTabChange={setActiveTab}>
        <Tabs.List>
        <Tabs.Tab value="first" icon={<IconMoneybag size="0.8rem" />}>
            Doctor
        </Tabs.Tab>
        <Tabs.Tab value="second" icon={<IconMoneybag size="0.8rem" />}>
            Staff
        </Tabs.Tab>
        </Tabs.List>
        <Grid.Col xs={12} lg={12}></Grid.Col>
<Tabs.Panel value="first">
    <TextInput
        placeholder="Search by Id, FirstName, or Phone..."
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
    />
     <Grid.Col xs={12} lg={12}></Grid.Col>
    <CustomTable
        coloumnDef={colDef}
        records={doctors.filter((record) =>
            Object.values(record).some((value) =>
                String(value).toLowerCase().includes(searchQuery.toLowerCase())
            )
        )}
    />
</Tabs.Panel>
<Tabs.Panel value="second">
    <TextInput
        placeholder="Search by Id, FirstName, or Phone..."
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
    />
     <Grid.Col xs={12} lg={12}></Grid.Col>
    <CustomTable
        coloumnDef={colDef2}
        records={staff.filter((record) =>
            Object.values(record).some((value) =>
                String(value).toLowerCase().includes(searchQuery.toLowerCase())
            )
        )}
    />
</Tabs.Panel>
</Tabs>

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






