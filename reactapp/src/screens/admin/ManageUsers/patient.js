import{
    Box,
    Button,
    Grid,
    Group,
    TextInput,
    Select,
    Text,} 
from  "@mantine/core";
import { Card } from "@mantine/core";
import { useForm } from '@mantine/form';
import { DataTable} from "mantine-datatable"
import { useState } from "react";
import { Modal} from '@mantine/core';
import {
    IconEdit,
    IconTrash,
} from "@tabler/icons-react";
import Editlay from "./modal/patientedit";
export default function Managepatient() {
    const form = useForm({ 
        initialValues: { 
            id:'',
            name:'',
            gender:'',
            appointmentDate:'',
            distarchedDate:'',
            fees:'',
            status:'',
        },
        validate :{
            id : (value)=> (/^\S+$/.test(value) ? null : 'Enter Id'),
            name: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
            gender :(value) => (/^\S+$/.test(value) ? null : 'Select one value'),
            appointmentDate :(value) => (/^\S+$/.test(value) ? null : 'Enter Date'),
            distarchedDate :(value) => (/^\S+$/.test(value) ? null : 'Enter Date'),
            fees :(value) => (/^\S+$/.test(value) ? null : 'Enter Fees'),
            status :(value) => (/^\S+$/.test(value) ? null : 'Select one Status'),
        },
    });
    const handleToggleAddUserModal = () => {
        setShowAddUserModal(!showAddUserModal);
    };
    const [showAddUserModal, setShowAddUserModal] = useState(false);
    const [editingRecordId, setEditingRecordId] = useState(null);
    const [deletingRecordId, setDeletingRecordId] = useState(null);
    const handleAddUser = (formData) => {
        const newUser = {
        id: formData.id,
        patient_Name: formData.name,
        gender: formData.gender,
        appointmentDate: formData.appointmentDate,
        distarchedDate: formData.distarchedDate,
        fees: formData.fees,
        status: formData.status,
    };
        setRecords((prevRecords) => [...prevRecords, newUser]);
        handleToggleAddUserModal();
    };
    const handleDelete = (id) => {
      setDeletingRecordId(id);
    };
    const handleConfirmDelete = () => {
      const updatedRecords = records.filter((records) => records.id !== deletingRecordId);
      setDeletingRecordId(null);
      setRecords(updatedRecords);
    };
    const handleCancelDelete = () => {
      setDeletingRecordId(null);
    };
    const handleEdit = (id) => {
      setEditingRecordId(id);
    };
    const handleChange = (field) => (event) => {
        form.setFieldValue(field, event.currentTarget.value);
    };
    const handleSaveEdit = (editedData) => {
        const updatedRecords = records.map((record) => {
            if (record.id === editingRecordId.id) {
              return { ...record, ...editedData };
            }
            return record;
        });
        console.log(updatedRecords);
        setEditingRecordId(null);
        setRecords(updatedRecords);         
    };
    const handleCancelEdit = () => {
      setEditingRecordId(null);
    };
    const colDef = [
        {
            accessor: "id",
            title: "ID",
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
            accessor: "patient_Name",
            title: "Patient Name",
            titleStyle: { color: "" },
            textAlignment: "center",
            render: (data) => {
                return(
                    <Group position="center">
                        <Text>{data?.patient_Name}</Text>
                    </Group>
                );
            },
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
            },
        },
        {
            accessor: "appointmentDate",
            title: "Appointed Date",
            titleStyle: { color: "" },
            textAlignment: "center",
            render: (data) => {
                return(
                <Group position="center">
                    <Text>{data?.appointmentDate}</Text>
                </Group>
                );
            },
        },
        {
            accessor: "distarchedDate",
            title: "Distarched Date",
            titleStyle: { color: "" },
            textAlignment: "center",
            render: (data) => {
                return(
                    <Group position="center">
                        <Text>{data?.distarchedDate}</Text>
                    </Group>
                );
            },
        },
        {
            accessor: "fees",
            title: "Fees",
            titleStyle: { color: "" },
            textAlignment: "center",
            render: (data) => {
                return(
                    <Group position="center">
                        <Text>{data?.fees}</Text>
                    </Group>
                );
            },
        },
        {
            accessor: "status",
            title:"Status",
            textAlignment: "center",
            render: (data) => (
                <Group position="center">
                    <Text
                        fz="12px"
                        fw={500}
                        p={5}
                        style={{
                            fontWeight: "bold",
                            color: data?.status === "paid" ? "#3B72FF" : "#FF3B3B",
                            backgroundColor:
                                data?.status === "paid" ? "#E3EBFF" : "#FFE4E4",
                            borderRadius: "6px",
                        }}
                    >
                        {data?.status}
                    </Text>
                </Group>
            ),
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
                      <IconTrash color="red" size={16}  onClick={() => handleDelete(data.id)} />
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
    ];

    const [records, setRecords] = useState([
        { 
            id: 5793479, 
            patient_Name: "Patient1", 
            gender:"male",
            appointmentDate:"2023-04-08",
            distarchedDate: "2023-04-12",
            fees:"7489",
            status:"paid",
        },
        { 
            id: 5793429, 
            patient_Name: "Patient2", 
            gender:"male",
            appointmentDate:"2023-04-08",
            distarchedDate: "2023-04-12",
            fees:"7489",
            status:"paid",
        },
        { 
            id: 5723449, 
            patient_Name: "Patient3", 
            gender:"male",
            appointmentDate:"2023-04-08",
            distarchedDate: "2023-04-12",
            fees:"7489",
            status:"not paid",
        },
        { 
            id: 5753479, 
            patient_Name: "Patient4", 
            gender:"male",
            appointmentDate:"2023-04-08",
            distarchedDate: "2023-04-12",
            fees:"7489",
            status:"paid",
        },
        { 
            id: 5783479, 
            patient_Name: "Patient5", 
            gender:"male",
            appointmentDate:"2023-04-08",
            distarchedDate: "2023-04-12",
            fees:"7489",
            status:"paid",
        },
        { 
            id: 5713479, 
            patient_Name: "Patient6", 
            gender:"male",
            appointmentDate:"2023-04-08",
            distarchedDate: "2023-04-12",
            fees:"7489",
            status:"not paid",
        },
        { 
            id: 5433479, 
            patient_Name: "Patient7", 
            gender:"male",
            appointmentDate:"2023-04-08",
            distarchedDate: "2023-04-12",
            fees:"7489",
            status:"not paid",
        },
        { 
            id: 5533479, 
            patient_Name: "Patient8", 
            gender:"male",
            appointmentDate:"2023-04-08",
            distarchedDate: "2023-04-12",
            fees:"7489",
            status:"paid",
        },
        { 
            id: 563479, 
            patient_Name: "Patient9", 
            gender:"male",
            appointmentDate:"2023-04-08",
            distarchedDate: "2023-04-12",
            fees:"7489",
            status:"not paid",
        },
        { 
            id: 563479, 
            patient_Name: "Patient9", 
            gender:"male",
            appointmentDate:"2023-04-08",
            distarchedDate: "2023-04-12",
            fees:"7489",
            status:"not paid",
        },
        { 
            id: 563479, 
            patient_Name: "Patient9", 
            gender:"male",
            appointmentDate:"2023-04-08",
            distarchedDate: "2023-04-12",
            fees:"7489",
            status:"not paid",
        },
        { 
            id: 563479, 
            patient_Name: "Patient9", 
            gender:"male",
            appointmentDate:"2023-04-08",
            distarchedDate: "2023-04-12",
            fees:"7489",
            status:"not paid",
        },
    ]);
    return(
        <Box m="md">
            <Grid>
                <Grid.Col xs={2} lg={2} style={{height:"13vh"}}>
                    {/* <Card m="md" shadow="xl" p={10} 
                    style={{fontFamily:"unset",
                    borderRadius:"15px",
                    background:"rgba(139, 127, 194, 1)", 
                    color:"white",
                    textAlign:"center"}}>
                        PATIENTS DATAS 
                    </Card> */}
                </Grid.Col>
                <Grid.Col xs={8} lg={8}></Grid.Col>
                <Grid.Col xs={2} lg={2}>
                <Button  style={{borderRadius:"15px",textDecoration:"none",
                borderColor: "rgba(139, 127, 194, 1)", 
                color: "white", position: "relative", 
                overflow: "hidden", 
                background: "rgba(139, 127, 194, 1)",
                 cursor: "pointer",
                 left:"30%",
                 top:"20%"}}
                onClick={handleToggleAddUserModal}>Add Patient</Button>
                </Grid.Col>
            </Grid>
            <Modal
          opened={deletingRecordId !== null}
          onClose={handleCancelDelete}
          title="Delete Confirmation"
        >
          <Text>Are you sure you want to delete this record?</Text>
          <Button variant="danger" mt="md" style={{textDecoration:"none",
                borderColor: "rgba(139, 127, 194, 1)", 
                color: "white", position: "relative", 
                overflow: "hidden", 
                background: "rgba(139, 127, 194, 1)", cursor: "pointer"}}  onClick={handleConfirmDelete}>
            Delete
          </Button>
          <Button style={{textDecoration:"none",
                borderColor: "rgba(139, 127, 194, 1)", 
                color: "white", position: "relative", 
                overflow: "hidden", 
                background: "rgba(139, 127, 194, 1)", cursor: "pointer",left:"60%"}} onClick={handleCancelDelete}>Cancel</Button>
        </Modal>
  
        <Modal opened={editingRecordId !== null} onClose={handleCancelEdit} title="Edit Record" centered>
            <Editlay records={editingRecordId} onClose={handleCancelEdit} onSubmit={handleSaveEdit} />
          {/* <form onSubmit={form.onSubmit(handleSaveEdit)}>
            <TextInput label="ID" required {...form.getInputProps("id")} />
            <TextInput label="Patient Name" required {...form.getInputProps("name")} />
            <Select
              label="Gender"
              required
              placeholder="Select Gender"
              data={[
                { value: "male", label: "Male" },
                { value: "female", label: "Female" },
                { value: "other", label: "Other" },
              ]}
              {...form.getInputProps("gender")}
            />
            <TextInput
              label="Appointed Date"
              type="date"
              required
              {...form.getInputProps("appointmentDate")}
            />
            <TextInput
              label="Distarched Date"
              type="date"
              required
              {...form.getInputProps("distarchedDate")}
            />
            <TextInput
              label="Fees"
              required
              {...form.getInputProps("fees")}
            />
            <Select
              label="Status"
              required
              placeholder="Select Status"
              data={[
                { value: "paid", label: "paid" },
                { value: "not paid", label: "not paid" },
              ]}
              {...form.getInputProps("status")}
            />
            <Button type="submit" mt="md" style={{background: "rgba(139, 127, 194, 1)",
            cursor:"pointer",
            borderColor:"rgba(139, 127, 194, 1)"}} >Save</Button>
            <Button mt="md" style={{background: "rgba(139, 127, 194, 1)",
            cursor:"pointer",
            borderColor:"rgba(139, 127, 194, 1)" ,position:"relative",overflow:"hidden",left:"61%"}} onClick={handleCancelEdit}>Cancel</Button>
          </form> */}
          </Modal>
        <Modal
            centered
            opened={showAddUserModal}
            onClose={handleToggleAddUserModal}
            title="Add Patient"
>
            <form onSubmit={form.onSubmit(handleAddUser)}>
            <TextInput 
            label="ID" 
            required {...form.getInputProps("id")}
             />
            <TextInput 
            label="Patient Name" 
            required {...form.getInputProps("name")} 
            />
            <Select
            label="Gender"
            required
            placeholder="Select Gender"
            data={[
                { value: "male", label: "Male" },
                { value: "female", label: "Female" },
                { value: "other", label: "Other" },
            ]}
            {...form.getInputProps("gender")}
            />
            <TextInput
              label="Appointed Date"
              type="date"
              required
              {...form.getInputProps("appointmentDate")}
            />
            <TextInput
              label="Distarched Date"
              type="date"
              required
              {...form.getInputProps("distarchedDate")}
            />
            <TextInput
              label="Fees"
              required
              {...form.getInputProps("fees")}
            />
            <Select
              label="Status"
              required
              placeholder="Select Status"
              data={[
                { value: "paid", label: "paid" },
                { value: "not paid", label: "not paid" },
              ]}
              {...form.getInputProps("status")}
            />
            <Button
                type="submit"
                mt="md"
                style={{
                background: "rgba(139, 127, 194, 1)",
                cursor: "pointer",
                borderColor: "rgba(139, 127, 194, 1)",
                }}
            >
                Add
            </Button>
            <Button
            mt="md"
            style={{
                background: "rgba(139, 127, 194, 1)",
                cursor: "pointer",
                borderColor: "rgba(139, 127, 194, 1)",
                position: "relative",
                overflow: "hidden",
                left: "61%",
            }}
            onClick={handleToggleAddUserModal}
            >
            Cancel
            </Button>
            </form>
        </Modal>
            <DataTable height={300}
            withBorder
            shadow="md"
            withColumnBorders
            highlightOnHover
            borderRadius='md'
            striped
            horizontalSpacing="xs"
            verticalSpacing="xs"
            verticalAlignment="top"
            loaderVariant="bars"
            minHeight="80vh"
            records={records}
            columns={colDef}
            searchable
            pagination
        />
        </Box>
    );
} 
