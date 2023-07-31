import { useState } from 'react';
import { DataTable } from 'mantine-datatable';
import { 
  Button, 
  Modal, 
  TextInput,
  Group,
  Text,
} from '@mantine/core';
import { IconTrash} from '@tabler/icons-react';
import { IconEdit } from '@tabler/icons-react';
export default function ManageStaffDoctorsUser() {
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    id: '',
    EmployeeName: '',
    Gender: '',
    Category: '',   
    Salary: '',
    Status: '',
  });
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [editData, setEditData] = useState(null);
  const [tableData, setTableData] = useState([
    {
      id: 11,
      EmployeeName: 'John Doe',
      Gender: 'Male',
      Category: 'Doctor',
      Salary: '$5000',
      Status:'Online',
    },
    {
      id: 78,
      EmployeeName: 'Jane Smith',
      Gender: 'Female',
      Category: 'Staff',
      Salary: '$4000',
      Status: 'Offline',
    },
    {
      id: 65,
      EmployeeName: 'Jane Smith',
      Gender: 'Female',
      Category: 'Doctor',
      Salary: '$4000',
      Status: 'Online',
    },
    {
      id: 12,
      EmployeeName: 'Jane Smith',
      Gender: 'Female',
      Category: 'Staff',
      Salary: '$4000',
      Status: 'Offline',
    },
    {
      id: 45,
      EmployeeName: 'Jane Smith',
      Gender: 'Female',
      Category: 'Staff',
      Salary: '$4000',
      Status: 'Online',
    },
    {
      id: 67,
      EmployeeName: 'Jane Smith',
      Gender: 'Female',
      Category: 'Doctor',
      Salary: '$4000',
      Status: 'Offline',
    },
    {
      id: 29,
      EmployeeName: 'Jane Smith',
      Gender: 'Female',
      Category: 'Staff',
      Salary: '$4000',
      Status: 'Online',
    },
    {
      id: 25,
      EmployeeName: 'Jane Smith',
      Gender: 'Female',
      Category: 'Doctor',
      Salary: '$4000',
      Status: 'Offline',
    },
    {
      id: 24,
      EmployeeName: 'Jane Smith',
      Gender: 'Female',
      Category: 'Doctor',
      Salary: '$4000',
      Status: 'Online',
    },
    {
      id: 89,
      EmployeeName: 'Jane Smith',
      Gender: 'Female',
      Category: 'Doctor',
      Salary: '$4000',
      Status: 'Offline',
    },
    {
      id: 20,
      EmployeeName: 'Jane Smith',
      Gender: 'Female',
      Category: 'Staff',
      Salary: '$4000',
      Status: 'Online',
    },
    {
      id: 96,
      EmployeeName: 'Jane Smith',
      Gender: 'Female',
      Category: 'Doctor',
      Salary: '$4000',
      Status: 'Offline',
    },
    {
      id: 95,
      EmployeeName: 'Jane Smith',
      Gender: 'Female',
      Category: 'Doctor',
      Salary: '$4000',
      Status: 'Offline',
    },
    {
      id: 94,
      EmployeeName: 'Jane Smith',
      Gender: 'Female',
      Category: 'Doctor',
      Salary: '$4000',
      Status: 'Offline',
    },
    {
      id: 93,
      EmployeeName: 'Jane Smith',
      Gender: 'Female',
      Category: 'Staff',
      Salary: '$4000',
      Status: 'Offline',
    },
    {
      id: 92,
      EmployeeName: 'Jane Smith',
      Gender: 'Female',
      Category: 'Staff',
      Salary: '$4000',
      Status: 'Offline',
    },
    {
      id: 91,
      EmployeeName: 'Jane Smith',
      Gender: 'Female',
      Category: 'Staff',
      Salary: '$4000',
      Status: 'Offline',
    },
  ]);

  const [filters, setFilters] = useState({});
  const handleFilterChange = (column, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [column]: value.toLowerCase(), 
    }));
  };
  
  const handleAddUser = () => {
    const newUser = {
      id: Number(formData.id),
      EmployeeName: formData.EmployeeName,
      Gender: formData.Gender,
      Category: formData.Category,
      Salary: formData.Salary,
      Status: formData.Status,
    };
  
    setTableData((prevData) => [...prevData, newUser]);
  
    setFormData({
      id: '',
      EmployeeName: '',
      Gender: '',
      Category: '',
      Salary: '',
      Status: '',
    });
  
    setAddModalOpen(false);
  };
  
  const handleDelete = (id) => {
    setDeleteId(id);
    setDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    setTableData((prevData) => prevData.filter((record) => record.id !== deleteId));
    setDeleteModalOpen(false);
  };

  const handleEdit = (data) => {
    setEditData(data);
    setEditModalOpen(true);
  };


  const handleUpdate = () => {
    setTableData((prevData) =>
      prevData.map((record) => (record.id === editData.id ? { ...record, ...editData } : record))
    );
    setEditModalOpen(false);
  };
  const filteredData = tableData.filter((record) => {
    const filterKeys = Object.keys(filters);
    return filterKeys.every((key) => {
      const columnValue = String(record[key] || ''); 
      const filterValue = filters[key] ? String(filters[key]).toLowerCase() : ''; 
      return columnValue.toLowerCase().includes(filterValue); 
    });
  });
  
  return (
    <>
      {/* <Button m="md" style={{left:"90%",borderRadius:"15px",textDecoration:"none",
                borderColor: "rgba(139, 127, 194, 1)", 
                color: "white", position: "relative", 
                overflow: "hidden", 
                background: "rgba(139, 127, 194, 1)", cursor: "pointer"}} onClick={() => setAddModalOpen(true)} >Add User
      </Button> */}
      <DataTable
        height={300}
        withBorder
        shadow="md"
        withColumnBorders
        highlightOnHover
        striped
        verticalAlignment="top"
        loaderVariant="bars"
        minHeight="80vh"
        m="md"
        borderRadius="lg"
        horizontalSpacing="sm"
        verticalSpacing="sm"
        fontSize="sm"
        records={filteredData}
        columns={[
          {
            accessor: 'id',
            title: (
              <>
                ID
                <TextInput
                  m="xs"
                  size="xs"
                  placeholder="Search ID"
                  value={filters.id || ''}
                  onChange={(event) => handleFilterChange('id', event.target.value)}
                />
              </>
            ),
            
            textAlignment:"center"
          },
          {
            accessor: 'EmployeeName',
            title: (
              <>
                Employee Name
                <TextInput
                  m="xs"
                  size="xs"
                  placeholder="Search Employee Name"
                  value={filters.EmployeeName || ''}
                  onChange={(event) =>
                    handleFilterChange('EmployeeName', event.target.value)
                  }
                />
              </>
            ),
            
            textAlignment:"center"
          },
          {
            accessor: 'Gender',
            title: (
              <>
                Gender
                <TextInput
                  m="xs"
                  size="xs"
                  placeholder="Search Gender"
                  value={filters.Gender || ''}
                  onChange={(event) => handleFilterChange('Gender', event.target.value)}
                />
              </>
            ),

            textAlignment:"center"
          },
          {
            accessor: 'Category',
            title: (
              <>
                Category
                <TextInput
                  m="xs"
                  size="xs"
                  placeholder="Search Category"
                  value={filters.Category || ''}
                  onChange={(event) => handleFilterChange('Category', event.target.value)}
                />
              </>
            ),
            textAlignment:"center"
          },
          {
            accessor: 'Salary',
            title: (
              <>
                Salary
                <TextInput
                  m="xs"
                  size="xs"
                  placeholder="Search Salary"
                  value={filters.Salary || ''}
                  onChange={(event) => handleFilterChange('Salary', event.target.value)}
                />
              </>
            ),
            textAlignment:"center"
          },
          {
            accessor: 'Status',
            title: (
              <>
              Status
              <TextInput
                  m="xs"
                  size="xs"
                  placeholder="Search Status"
                  value={filters.Status || ''}
                  onChange={(event) => handleFilterChange('Status', event.target.value)}
                />
              </>
            ),
            render: (data) => (
              <Group position="center">
                  <Text
                      fz="12px"
                      fw={500}
                      p={5}
                      style={{
                          fontWeight: "bold",
                          color: data?.Status === "Online" ? "#3B72FF" : "#FF3B3B",
                          backgroundColor:
                              data?.Status === "Online" ? "#E3EBFF" : "#FFE4E4",
                          borderRadius: "6px",
                      }}
                  >
                      {data?.Status}
                  </Text>
              </Group>
            /* render:(data)=>(
              {/* <TextInput
                  m="xs"
                  size="xs"
                  placeholder="Search Status"
                  value={filters.Status || ''}
                  onChange={(event) => handleFilterChange('Status', event.target.value)}
                /> */
            ),
            textAlignment:"center"
          },
          {
            accessor: 'actions',
            title:(
              <>
              <Text>Actions</Text>
              <Button m="xs"
                  size="xs" 
                  style={{borderRadius:"15px",
                textDecoration:"none",
                borderColor: "rgba(139, 127, 194, 1)", 
                color: "white",
                background: "rgba(139, 127, 194, 1)", cursor: "pointer"}} onClick={() => setAddModalOpen(true)} >Add User
                </Button>
              </>
            ),
            textAlignment: 'center',
            render: (data) => (
              <>
                <Button size="xs" variant="subtle">
                  <IconTrash
                   color="red" 
                   size={16} 
                   onClick={() => handleDelete(data.id)} />
                </Button>
                <Button size="xs" variant="subtle">
                  <IconEdit 
                  color="gray" 
                  size={16}
                  onClick={() => handleEdit(data)} />
                </Button>
              </>
            ),
          },
        ]}
      />
      <Modal
      centered      
      opened={addModalOpen}
      onClose={() => setAddModalOpen(false)}
      title="Add User"
      hideCloseButton
      size="sm"
       >
      <form onSubmit={handleAddUser}>
        <TextInput
          label="ID"
          required
          value={formData.id}
          onChange={(event) => setFormData({ ...formData, id: event.target.value })}
        />
        <TextInput
          label="Employee Name"
          required
          value={formData.EmployeeName}
          onChange={
            (event) => setFormData({ ...formData, EmployeeName: event.target.value })
          }
        />
        <TextInput
          label="Gender"
          required
          value={formData.Gender}
          onChange={
            (event) => setFormData({ ...formData, Gender: event.target.value })
          }
        />
        <TextInput
          label="Category"
          required
          value={formData.Category}
          onChange={
            (event) => setFormData({ ...formData, Category: event.target.value })
          }
        />
        <TextInput
          label="Salary"
          required
          value={formData.Salary}
          onChange={
            (event) => setFormData({ ...formData, Salary: event.target.value })
          }
        />
        <TextInput
          label="Status"
          required
          value={formData.Status}
          onChange={
            (event) => setFormData({ ...formData, Status: event.target.value })
          }
        />

        <div 
        style={{ 
          display: 'flex', 
          justifyContent: 'flex-end',
           marginTop: '2rem' }}>
        <Button
          style={{
            background: "rgba(139, 127, 194, 1)",
            cursor: "pointer",
            borderColor: "rgba(139, 127, 194, 1)",
            position: "relative",
            marginRight: '12rem'
        }}
            type="submit"
          >
            Add
          </Button>
          <Button
            style={{
                background: "rgba(139, 127, 194, 1)",
                cursor: "pointer",
                borderColor: "rgba(139, 127, 194, 1)",
                position: "relative",
            }}
            onClick={() => setAddModalOpen(false)}
          >
            Cancel
          </Button>
        </div>
      </form>
      </Modal>
      <Modal
        opened={deleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        title="confirm Delete"
        size="sm"
        hideCloseButton
      >
        <div 
        style={{ 
          display: 'flex', 
          justifyContent: 'flex-end', 
          marginTop: '2rem' }}>
        <Button
            mt="md"
            style={{
                background: "rgba(139, 127, 194, 1)",
                cursor: "pointer",
                borderColor: "rgba(139, 127, 194, 1)",
                position: "relative",
                overflow: "hidden",
                left:"25%"
            }}
            onClick={() => setDeleteModalOpen(false)}    
            >
            Cancel
            </Button>
          <Button
            mt="md"
            style={{
                background: "rgba(139, 127, 194, 1)",
                cursor: "pointer",
                borderColor: "rgba(139, 127, 194, 1)",
                position: "relative",
                overflow: "hidden",
                right:"78%"
            }}
            onClick={confirmDelete}
            >
            Delete
            </Button>
        </div>
      </Modal>
      <Modal
        opened={editModalOpen}
        onClose={() => setEditModalOpen(false)}
        title="Edit Record"
        hideCloseButton
        centered
      >
        <form>
          <TextInput
            label="Employee Name"
            required
            value={editData?.EmployeeName}
            onChange={(event) =>
              setEditData((prevData) => ({ ...prevData, EmployeeName: event.target.value }))
            }
          />
          <TextInput
            label="Gender"
            required
            value={editData?.Gender}
            onChange={(event) =>
              setEditData((prevData) => ({ ...prevData, Gender: event.target.value }))
            }
          />
          <TextInput
            label="Category"
            required
            value={editData?.Category}
            onChange={(event) =>
              setEditData((prevData) => ({ ...prevData, Category: event.target.value }))
            }
          />
          <TextInput
            label="Salary"
            required
            value={editData?.Salary}
            onChange={(event) =>
              setEditData((prevData) => ({ ...prevData, Salary: event.target.value }))
            }
          />
          <TextInput
            label="Status"
            required
            value={editData?.Status}
            onChange={(event) =>
              setEditData((prevData) => ({ ...prevData, Status: event.target.value }))
            }
          />
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '2rem' }}>
          <Button
            mt="md"
            style={{
                background: "rgba(139, 127, 194, 1)",
                cursor: "pointer",
                borderColor: "rgba(139, 127, 194, 1)",
                position: "relative",
                overflow: "hidden",
                right:"56%"
            }}
            onClick={handleUpdate}
            >
            Update
            </Button>
            <Button
            mt="md"
            style={{
                background: "rgba(139, 127, 194, 1)",
                cursor: "pointer",
                borderColor: "rgba(139, 127, 194, 1)",
                position: "relative",
                overflow: "hidden",
            }}
            onClick={() => setEditModalOpen(false)}
            >
            Cancel
            </Button>
          </div>
        </form>
      </Modal>
    </>
  );
}
