import{
    Box,
    Button,
    Grid,
    Group,
    TextInput,
    Select,
    Text,
} 
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
import Editlayout from "./modal/useredit";
export default function ManageStaffDoctor() {
    const form = useForm({ 
        initialValues: { 
            id:'',
            name:'',
            gender:'',
            department:'',
            salary:'',
            joinedDate:'',
            status:''
        },
        validate :{
            id : (value)=> (/^\S+$/.test(value) ? null : 'Enter Id'),
            name: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
            gender :(value) => (/^\S+$/.test(value) ? null : 'Select one value'),
            departmnent :(value) => (/^\S+$/.test(value) ? null : 'Select One Department'),
            salary :(value) => (/^\S+$/.test(value) ? null : 'Enter Salary'),
            joinedDate :(value) => (/^\S+$/.test(value) ? null : 'Enter Date'),
            status :(value) => (/^\S+$/.test(value) ? null : 'Select one Status'),
        },
    });
    const [showAddUserModal, setShowAddUserModal] = useState(false);
    const [editingRecordId, setEditingRecordId] = useState(null);
    const [deletingRecordId, setDeletingRecordId] = useState(null);
    const handleToggleAddUserModal = () => {
        setShowAddUserModal(!showAddUserModal);
    };
    const handleAddUser = (formData) => {
        const newUser = {
        id: formData.id,
        employee_Name: formData.name,
        gender: formData.gender,
        department: formData.department,
        salary: formData.salary,
        joinedDate: formData.joinedDate,
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
            render: (data) => (
                <Group position="center">
                    <Text>{data?.id}</Text>
                </Group>
            ),
        },
        {
            accessor: "emloyee_Name",
            title: "Employee Name",
            titleStyle: { color: "" },
            textAlignment: "center",
            render: (data) => (
                <Group position="center">
                    <Text>{data?.employee_Name}</Text>
                </Group>
            ),
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
            accessor: "department",
            title: "Department",
            titleStyle: { color: "" },
            textAlignment: "center",
            render: (data) => {
                return(
                <Group position="center">
                    <Text>{data?.department}</Text>
                </Group>
                );
            },
        },
        {
            accessor: "salary",
            title: "Salary",
            titleStyle: { color: "" },
            textAlignment: "center",
            render: (data) => (
                <Group position="center">
                    <Text>{data?.salary}</Text>
                </Group>
            ),
        },
        {
            accessor: "joinedDate",
            title: "Joined Date",
            titleStyle: { color: "" },
            textAlignment: "center",
            render: (data) => (
                <Text>{data?.joinedDate}</Text>
            ),
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
                            color: data?.status === "Online" ? "#3B72FF" : "#FF3B3B",
                            backgroundColor:
                                data?.status === "Online" ? "#E3EBFF" : "#FFE4E4",
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
            employee_Name: "Employee1", 
            gender:"male",
            department:"Doctor",
            salary: "56098",
            joinedDate:"08/04/2002",
            department:"Doctor",
            status:"Online",
        },
        { 
            id: 2337327, 
            employee_Name: "Employee2",
            gender:"female", 
            department:"doctor",
            salary: "56098", 
            joinedDate:"08/04/2002",
            department:"doctor",
            status:"Offline",
        },
        { 
            id: 34772349, 
            employee_Name: "Employee3",
            gender: "male", 
            department: "Staff",  
            salary: "56098",
            joinedDate:"08/04/2002",
            status:"Online",
        },
        { 
            id: 2382348, 
            employee_Name: "Employee3",
            gender: "male", 
            department: "Staff",  
            salary: "56098",
            joinedDate:"08/04/2002",
            status:"Offline",
        },
        { 
            id: 64277234, 
            employee_Name: "Employee3",
            gender: "male", 
            department: "Staff",  
            salary: "56098",
            joinedDate:"08/04/2002",
            status:"Online",
        },
        { 
            id: 32793998, 
            employee_Name: "Employee3",
            gender: "male", 
            department: "Staff",  
            salary: "56098",
            joinedDate:"08/04/2002",
            status:"Online",
        },
        { 
            id: 4537848, 
            employee_Name: "Employee3",
            gender: "male", 
            department: "Staff",  
            salary: "56098",
            joinedDate:"08/04/2002",
            status:"Offline",
        },
        { 
            id: 2472493, 
            employee_Name: "Employee3",
            gender: "male", 
            department: "Staff",  
            salary: "56098",
            joinedDate:"08/04/2002",
            status:"Offline",
        },
        { 
            id: 3442372, 
            employee_Name: "Employee3",
            gender: "male", 
            department: "Staff",  
            salary: "56098",
            joinedDate:"08/04/2002",
            status:"Online",
        },
        { 
            id: 3442372, 
            employee_Name: "Employee3",
            gender: "male", 
            department: "Staff",  
            salary: "56098",
            joinedDate:"08/04/2002",
            status:"Online",
        },
        { 
            id: 3442372, 
            employee_Name: "Employee3",
            gender: "male", 
            department: "Staff",  
            salary: "56098",
            joinedDate:"08/04/2002",
            status:"Online",
        },
        { 
            id: 3442372, 
            employee_Name: "Employee3",
            gender: "male", 
            department: "Staff",  
            salary: "56098",
            joinedDate:"08/04/2002",
            status:"Online",
        },
        { 
            id: 3442372, 
            employee_Name: "Employee3",
            gender: "male", 
            department: "Staff",  
            salary: "56098",
            joinedDate:"08/04/2002",
            status:"Online",
        },
    ]);
    return(
        <Box m="md">
            <Grid>
                <Grid.Col xs={2} lg={2}>
                    {/* <Card m="md" shadow="xl" p={10} 
                    style={{fontFamily:"unset",
                    borderRadius:"15px",
                    background:"rgba(139, 127, 194, 1)", 
                    color:"white",
                    textAlign:"center"}}>
                        STAFFS & DOCTORS
                    </Card> */}
                </Grid.Col>
                <Grid.Col xs={8} lg={8}></Grid.Col>
                <Grid.Col xs={2} lg={2}>
                <Button  style={{borderRadius:"15px",top:"13%",textDecoration:"none",
                borderColor: "rgba(139, 127, 194, 1)", 
                color: "white", position: "relative", 
                overflow: "hidden", 
                background: "rgba(139, 127, 194, 1)", cursor: "pointer",left:"38%",top:"30%"}}onClick={handleToggleAddUserModal}>Add User</Button>
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
            <Editlayout records={editingRecordId} onClose={handleCancelEdit} onSubmit={handleSaveEdit} />
            {/* <form onSubmit={form.onSubmit(handleSaveEdit)}>
            <TextInput  label="ID" required {...form.getInputProps("id")} />
            <TextInput label="Employee Name" required {...form.getInputProps("name")} />
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
              label="Department"
              required
              {...form.getInputProps("department")}
            />
            <TextInput label="Salary" required {...form.getInputProps("salary")} />
            <TextInput
              label="Joined Date"
              type="date"
              required
              {...form.getInputProps("joinedDate")}
            />
            <Select
              label="Status"
              required
              placeholder="Select Status"
              data={[
                { value: "Online", label: "Online" },
                { value: "Offline", label: "Offline" },
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
            title="Add User"
        >
            <form onSubmit={form.onSubmit(handleAddUser)}>
            <TextInput label="ID" required {...form.getInputProps("id")} />
            <TextInput label="Employee Name" required {...form.getInputProps("name")} />
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
            label="Department"
            required
            {...form.getInputProps("department")}
            />
            <TextInput label="Salary" required {...form.getInputProps("salary")} />
            <TextInput
            label="Joined Date"
            type="date"
            required
            {...form.getInputProps("joinedDate")}
            />
            <Select
            label="Status"
            required
            placeholder="Select Status"
            data={[
                { value: "Online", label: "Online" },
                { value: "Offline", label: "Offline" },
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

 /*
 const form = useForm({ 
        initialValues: { 
            id:'',
            name:'',
            gender:'',
            department:'',
            salary:'',
            joinedDate:'',
            status:''
        },
        validate :{
            id : (value)=> (/^\S+$/.test(value) ? null : 'Enter Id'),
            name: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
            gender :(value) => (/^\S+$/.test(value) ? null : 'Select one value'),
            departmnent :(value) => (/^\S+$/.test(value) ? null : 'Select One Department'),
            salary :(value) => (/^\S+$/.test(value) ? null : 'Enter Salary'),
            joinedDate :(value) => (/^\S+$/.test(value) ? null : 'Enter Date'),
            status :(value) => (/^\S+$/.test(value) ? null : 'Select one Status'),
        },
    });
    const [showAddUserModal, setShowAddUserModal] = useState(false);
    const [editingRecordId, setEditingRecordId] = useState(null);
    const [deletingRecordId, setDeletingRecordId] = useState(null);
    const handleToggleAddUserModal = () => {
        setShowAddUserModal(!showAddUserModal);
    };
    const handleAddUser = (formData) => {
        const newUser = {
        id: formData.id,
        employee_Name: formData.name,
        gender: formData.gender,
        department: formData.department,
        salary: formData.salary,
        joinedDate: formData.joinedDate,
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
      const updatedRecords = records.map((records) => {
        if (records.id === editingRecordId) {
          return { ...records, ...editedData };
        }
        return records;
      });
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
            render: (data) => (
                <Group position="center">
                    <Text>{data?.id}</Text>
                </Group>
            ),
        },
        {
            accessor: "emloyee_Name",
            title: "Employee Name",
            titleStyle: { color: "" },
            textAlignment: "center",
            render: (data) => (
                <Group position="center">
                    <Text>{data?.employee_Name}</Text>
                </Group>
            ),
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
            accessor: "department",
            title: "Department",
            titleStyle: { color: "" },
            textAlignment: "center",
            render: (data) => {
                return(
                <Group position="center">
                    <Text>{data?.department}</Text>
                </Group>
                );
            },
        },
        {
            accessor: "salary",
            title: "Salary",
            titleStyle: { color: "" },
            textAlignment: "center",
            render: (data) => (
                <Group position="center">
                    <Text>{data?.salary}</Text>
                </Group>
            ),
        },
        {
            accessor: "joinedDate",
            title: "Joined Date",
            titleStyle: { color: "" },
            textAlignment: "center",
            render: (data) => (
                <Text>{data?.joinedDate}</Text>
            ),
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
                            color: data?.status === "Online" ? "#3B72FF" : "#FF3B3B",
                            backgroundColor:
                                data?.status === "Online" ? "#E3EBFF" : "#FFE4E4",
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
                    <IconEdit color="gray" size={16} onClick={() => handleEdit(data.id)} />
                  </Button>
                  </>
                ),
        },
    ];

    const [records, setRecords] = useState([
        { 
            id: 5793479, 
            employee_Name: "Employee1", 
            gender:"male",
            department:"Doctor",
            salary: "56098",
            joinedDate:"08/04/2002",
            department:"Doctor",
            status:"Online",
        },
        { 
            id: 2337327, 
            employee_Name: "Employee2",
            gender:"female", 
            department:"doctor",
            salary: "56098", 
            joinedDate:"08/04/2002",
            department:"doctor",
            status:"Offline",
        },
        { 
            id: 34772349, 
            employee_Name: "Employee3",
            gender: "male", 
            department: "Staff",  
            salary: "56098",
            joinedDate:"08/04/2002",
            status:"Online",
        },
        { 
            id: 2382348, 
            employee_Name: "Employee3",
            gender: "male", 
            department: "Staff",  
            salary: "56098",
            joinedDate:"08/04/2002",
            status:"Offline",
        },
        { 
            id: 64277234, 
            employee_Name: "Employee3",
            gender: "male", 
            department: "Staff",  
            salary: "56098",
            joinedDate:"08/04/2002",
            status:"Online",
        },
        { 
            id: 32793998, 
            employee_Name: "Employee3",
            gender: "male", 
            department: "Staff",  
            salary: "56098",
            joinedDate:"08/04/2002",
            status:"Online",
        },
        { 
            id: 4537848, 
            employee_Name: "Employee3",
            gender: "male", 
            department: "Staff",  
            salary: "56098",
            joinedDate:"08/04/2002",
            status:"Offline",
        },
        { 
            id: 2472493, 
            employee_Name: "Employee3",
            gender: "male", 
            department: "Staff",  
            salary: "56098",
            joinedDate:"08/04/2002",
            status:"Offline",
        },
        { 
            id: 3442372, 
            employee_Name: "Employee3",
            gender: "male", 
            department: "Staff",  
            salary: "56098",
            joinedDate:"08/04/2002",
            status:"Online",
        },
    ]);
    return(
        <Box m="md" sx={{height:500}}>
            <Grid>
                <Grid.Col xs={2} lg={2}>
                    <Card m="md" shadow="xl" p={20} 
                    style={{fontFamily:"unset",
                    borderRadius:"15px",
                    background:"rgba(139, 127, 194, 1)", 
                    color:"white",
                    textAlign:"center"}}>
                        STAFFS & DOCTORS
                    </Card>
                </Grid.Col>
                <Grid.Col xs={8} lg={8}></Grid.Col>
                <Grid.Col xs={2} lg={2}>
                <Button  style={{borderRadius:"15px",top:"13%",textDecoration:"none",
                borderColor: "rgba(139, 127, 194, 1)", 
                color: "white", position: "relative", 
                overflow: "hidden", 
                background: "rgba(139, 127, 194, 1)", cursor: "pointer",left:"38%",top:"38%"}}onClick={handleToggleAddUserModal}>Add User</Button>
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
            <form onSubmit={form.onSubmit(handleSaveEdit)}>
            <TextInput  label="ID" required {...form.getInputProps("id")} />
            <TextInput label="Employee Name" required {...form.getInputProps("name")} />
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
              label="Department"
              required
              {...form.getInputProps("department")}
            />
            <TextInput label="Salary" required {...form.getInputProps("salary")} />
            <TextInput
              label="Joined Date"
              type="date"
              required
              {...form.getInputProps("joinedDate")}
            />
            <Select
              label="Status"
              required
              placeholder="Select Status"
              data={[
                { value: "Online", label: "Online" },
                { value: "Offline", label: "Offline" },
              ]}
              {...form.getInputProps("status")}
            />
            <Button type="submit" mt="md" style={{background: "rgba(139, 127, 194, 1)",
            cursor:"pointer",
            borderColor:"rgba(139, 127, 194, 1)"}} >Save</Button>
            <Button mt="md" style={{background: "rgba(139, 127, 194, 1)",
            cursor:"pointer",
            borderColor:"rgba(139, 127, 194, 1)" ,position:"relative",overflow:"hidden",left:"61%"}} onClick={handleCancelEdit}>Cancel</Button>
          </form>
          </Modal>
        <Modal
            opened={showAddUserModal}
            onClose={handleToggleAddUserModal}
            title="Add User"
            size="sm"
>
            <form onSubmit={form.onSubmit(handleAddUser)}>
            <TextInput label="ID" required {...form.getInputProps("id")} />
            <TextInput label="Employee Name" required {...form.getInputProps("name")} />
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
            label="Department"
            required
            {...form.getInputProps("department")}
            />
            <TextInput label="Salary" required {...form.getInputProps("salary")} />
            <TextInput
            label="Joined Date"
            type="date"
            required
            {...form.getInputProps("joinedDate")}
            />
            <Select
            label="Status"
            required
            placeholder="Select Status"
            data={[
                { value: "Online", label: "Online" },
                { value: "Offline", label: "Offline" },
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
            <DataTable
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
  */