import React,{useEffect, useState} from "react";
import { DataTable } from "mantine-datatable";
import { Button,Col,Group,Text,Input,Grid } from "@mantine/core";
import { useDisclosure } from '@mantine/hooks';
import { Modal } from "@mantine/core";
import AddDoctor from "./modal/add/AddDoctor";
import { IconTrash,IconEdit } from "@tabler/icons-react";
import EndPoints from "../../../api/endPoints";
import { post,del,put } from "../../../api";
import DoctorEditLay from "./modal/edit/DoctorEditLay";
const DoctorUser = () =>{

    const [records, setRecords] = useState([]);
    const [opened, { open, close }] = useDisclosure(false);
    const [editingRecordId, setEditingRecordId] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredRecords, setFilteredRecords] = useState([]);


    const getDoctors =async() =>{
        await post(EndPoints.getUsers,{role:'ROLE_DOCTOR'}).then((response)=>{
          setRecords(response.data);
          console.log(response);
      }).catch(error =>{
          console.log(error);
      })
      console.log("sssss",records);
      }
      useEffect(()=>{
        getDoctors();
      },[])
    
    useEffect(() => {
        // Update filteredRecords whenever the searchTerm or records change
        const filtered = records.filter(
          (record) =>
            record.id.toString().includes(searchTerm) ||
            record.firstName.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredRecords(filtered);
    }, [searchTerm, records]);
    
    
    
    const handleAddDoctor = async(doctorData) => {
        /* // Update the records state with the new doctor data
        console.log("Doctor data received:", doctorData);
        setRecords((prevRecords) => [...prevRecords, doctorData]);
        // Close the modal after adding the doctor */
        doctorData.roles="ROLE_DOCTOR";
        await post(EndPoints.register,doctorData).then((response)=>{
            console.log(response);
        }).catch(error =>{
            console.log(error);
        })
        close();
        getDoctors();
      };
      const handleEdit = (id) => {
        setEditingRecordId(id);
      };
      const handleSaveEdit = async(editedData) => {
          await put(`${EndPoints.updateUserDetails}/${editingRecordId.id}`,editedData).then((response) => {
            console.log(response);

        }).catch(error => {
            console.log(error);
        })
        setEditingRecordId(null);        
        window.location.reload();
      };
    const handleDeleteClick = async(doctorId) => {
      console.log("FromDeleteMethod",doctorId);
      await del(`${EndPoints.deleteUserDetails}/${doctorId}`).then((response) => {
        console.log(response);
     }).catch(error => {
        console.log(error);
    })
    window.location.reload();
    };
  
    const colDef = [
        {
            accessor: "id",            
            title: "Id",
            titleStyle: { color: "" },
            textAlignment: "center",
            render: (data) => {
                return(
                    <Group position="center">
                        <Text>{data?.id}</Text>
                    </Group>
                );
            }
        },
        {
            accessor: "firstName",            
            title: "First Name",
            titleStyle: { color: "" },
            textAlignment: "center",
            render: (data) => {
                return(
                    <Group position="center">
                        <Text>{data?.firstName}</Text>
                    </Group>
                );
            }
        },
        {
            accessor: "lastName",            
            title: "Last Name",
            titleStyle: { color: "" },
            textAlignment: "center",
            render: (data) => {
                return(
                    <Group position="center">
                        <Text>{data?.lastName}</Text>
                    </Group>
                );
            }
        },
        {
            accessor: "email",            
            title: "E-mail",
            titleStyle: { color: "" },
            textAlignment: "center",
            render: (data) => {
                return(
                    <Group position="center">
                        <Text>{data?.email}</Text>
                    </Group>
                );
            }
        },
        {
            accessor: "age",            
            title: "Age",
            titleStyle: { color: "" },
            textAlignment: "center",
            render: (data) => {
                return(
                    <Group position="center">
                        <Text>{data?.age}</Text>
                    </Group>
                );
            }
        },
        {
            accessor: "gender",            
            title: "Gender",
            titleStyle: { color: "" },
            textAlignment: "center",
            render: (data) => {
                return(
                    <Group position="center">
                        <Text>{data?.gender}</Text>
                    </Group>
                );
            }
        },
        /* {
            accessor: "dob",            
            title: "DOB",
            titleStyle: { color: "" },
            textAlignment: "center",
            render: (data) => {
                return(
                    <Group position="center">
                        <Text>{data?.dob}</Text>
                    </Group>
                );
            }
        }, */
        /* {
            accessor: "address",            
            title: "Addess",
            titleStyle: { color: "" },
            textAlignment: "center",
            width:"21%",
            render: (data) => {
                return(
                    <Group position="center">
                        <Text>{data?.address}</Text>
                    </Group>
                );
            }
        }, */
        {
            accessor: "phone",            
            title: "Phone",
            titleStyle: { color: "" },
            textAlignment: "center",
            render: (data) => {
                return(
                    <Group position="center">
                        <Text>{data?.phone}</Text>
                    </Group>
                );
            }
        },
        {
            accessor: "salary",            
            title: "Salary",
            titleStyle: { color: "" },
            textAlignment: "center",
            render: (data) => {
                return(
                    <Group position="center">
                        <Text>{data?.salary}</Text>
                    </Group>
                );
            }
        },
        {
            accessor: "specialist",            
            title: "Specialist",
            titleStyle: { color: "" },
            textAlignment: "center",
            render: (data) => {
                return(
                    <Group position="center">
                        <Text>{data?.specialist}</Text>
                    </Group>
                );
            }
        },
        {
            accessor: "actions",
            title: "Actions",
            textAlignment: "center",
                render: (data) => (
                    <>
                    <Button
                      size="xs"
                      variant="subtle"
                    >
                      <IconTrash color="red" size={16}  onClick={() => handleDeleteClick(data.id)}/>
                    </Button>
                    <Button
                        size="xs"
                        variant="subtle"
                    >
                    <IconEdit color="gray" size={16} onClick={() => handleEdit(data)} />
                  </Button>
                  </>
                ),
        },
    ]
    return(
            <Grid gutter="lg">
            <Col span={6}>
            <Input
                mt="sm"
                style={{width:"40%",padding:"10px 20px"}}
                placeholder="Search by ID or First Name"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.currentTarget.value)}
            />
            </Col>
            <Col span={6}>
            <Button mt="sm" style={{ padding: "10px 20px", borderRadius: "7px",
            border:"none",color: "white", position: "relative", 
            background: "rgba(139, 127, 194, 1)", cursor: "pointer",left:"75%",top:"16%"}} onClick={open}>
                Add Doctors
            </Button>   
            </Col>                                                                                 
            <Modal opened={opened} onClose={close} title="Add Doctors" centered>
                <AddDoctor onAddDoctor={handleAddDoctor} />
            </Modal>
            <Modal opened={editingRecordId !== null} onClose={()=>{setEditingRecordId(null)}} title="Edit Record" centered>
                <DoctorEditLay records={editingRecordId} onClose={()=>{setEditingRecordId(null)}} onSubmit={handleSaveEdit} />
            </Modal>
            <Col span={12}>
            <DataTable
            height={100} withBorder shadow="md" highlightOnHover striped verticalAlignment="top" loaderVariant="bars"
            minHeight="60vh" m="md" borderRadius="lg" horizontalSpacing="sm" verticalSpacing="sm" fontSize="sm" records={filteredRecords}
            columns={colDef}/>
            </Col>
            </Grid>
    );
}
export default DoctorUser;