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
import { useDisclosure } from '@mantine/hooks';
function ManagePatientUser() {
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    id: '',
    PatientName: '',
    Gender: '',
    AdmittedDate: '',
    DistarchedDate: '',
    Fees: '',
    Status:'',
  });
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [editData, setEditData] = useState(null);
  const [tableData, setTableData] = useState([
    {
        id: 45,
        PatientName: 'John snow',
        Gender: 'male',
        AdmittedDate: '08-04-2002',
        DistarchedDate: '08-04-2003',
        Fees: 23456,
        Status:'paid',
    },
    {
        id: 34,
        PatientName: 'John snow',
        Gender: 'male',
        AdmittedDate: '08-04-2002',
        DistarchedDate: '08-04-2003',
        Fees: 23456,
        Status:'notpaid',
    },
    {
        id: 54,
        PatientName: 'John snow',
        Gender: 'male',
        AdmittedDate: '08-04-2002',
        DistarchedDate: '08-04-2003',
        Fees: 23456,
        Status:'paid',
    },
    {
        id: 89,
        PatientName: 'John snow',
        Gender: 'male',
        AdmittedDate: '08-04-2002',
        DistarchedDate: '08-04-2003',
        Fees: 23456,
        Status:'notpaid',
    },
    {
        id: 58,
        PatientName: 'John snow',
        Gender: 'male',
        AdmittedDate: '08-04-2002',
        DistarchedDate: '08-04-2003',
        Fees: 23456,
        Status:'notpaid',
    },
    {
        id: 51,
        PatientName: 'John snow',
        Gender: 'male',
        AdmittedDate: '08-04-2002',
        DistarchedDate: '08-04-2003',
        Fees: 23456,
        Status:'paid',
    },
    {
        id: 50,
        PatientName: 'John snow',
        Gender: 'male',
        AdmittedDate: '08-04-2002',
        DistarchedDate: '08-04-2003',
        Fees: 23456,
        Status:'paid',
    },
    {
        id: 59,
        PatientName: 'John snow',
        Gender: 'male',
        AdmittedDate: '08-04-2002',
        DistarchedDate: '08-04-2003',
        Fees: 23456,
        Status:'paid',
    },
    {
        id: 56,
        PatientName: 'John snow',
        Gender: 'male',
        AdmittedDate: '08-04-2002',
        DistarchedDate: '08-04-2003',
        Fees: 23456,
        Status:'notpaid',
    },
    {
        id: 32,
        PatientName: 'John Rnow',
        Gender: 'male',
        AdmittedDate: '08-04-2002',
        DistarchedDate: '08-04-2003',
        Fees: 23456,
        Status:'paid',
    },

  ]);

  const [filters, setFilters] = useState({});
  const handleFilterChange = (column, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [column]: value.toLowerCase(), // Convert filter value to lowercase
    }));
  };
  
  const handleAddUser = () => {
    const newUser = {
      id: Number(formData.id),
      PatientName: formData.PatientName,
      Gender: formData.Gender,
      AdmittedDate: Date(formData.AdmittedDate),
      DistarchedDate:Date(formData.DistarchedDate),
      Fees:formData.Fees,
      Status: formData.Status,
    };
  

    setTableData((prevData) => [...prevData, newUser]);

    setFormData({
      id: '',
      PatientName: '',
      Gender: '',
      AdmittedDate: '',
      DistarchedDate: '',
      Fees:'',
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
      const columnValue = String(record[key] || ''); // Convert column value to a string
      const filterValue = filters[key] ? String(filters[key]).toLowerCase() : ''; // Convert filter value to a string and lowercase
      return columnValue.toLowerCase().includes(filterValue); // Compare lowercase values
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
            accessor: 'PatientName',
            title: (
              <>
                Patient Name
                <TextInput
                  m="xs"
                  size="xs"
                  placeholder="Search Patient Name"
                  value={filters.PatientName || ''}
                  onChange={(event) =>
                    handleFilterChange('PatientName', event.target.value)
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
            accessor: 'AdmittedDate',
            title: (
              <>
                Admitted Date
                <TextInput
                  m="xs"
                  size="xs"
                  placeholder="Admitted Date"
                  value={filters.AdmittedDate || ''}
                  onChange={(event) => handleFilterChange('AdmittedDate', event.target.value)}
                />
              </>
            ),
            textAlignment:"center"
          },
          {
            accessor: 'DistarchedDate',
            title: (
              <>
                Distarched Date
                <TextInput
                  m="xs"
                  size="xs"
                  placeholder="Distarched Date"
                  value={filters.DistarchedDate || ''}
                  onChange={(event) => handleFilterChange('DistarchedDate', event.target.value)}
                />
              </>
            ),
            textAlignment:"center"
          },
          {
            accessor: 'Fees',
            title: (
              <>
                Fees
                <TextInput
                  m="xs"
                  size="xs"
                  placeholder="Fees"
                  value={filters.Fees || ''}
                  onChange={(event) => handleFilterChange('Fees', event.target.value)}
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
                        color: data?.Status === "paid" ? "#3B72FF" : "#FF3B3B",
                        backgroundColor:
                            data?.Status === "paid" ? "#E3EBFF" : "#FFE4E4",
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
                 background: "rgba(139, 127, 194, 1)", cursor: "pointer"}} 
                 onClick={() => setAddModalOpen(true)} >
                    Add User
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
                  onClick={() => handleDelete(data.id)} 
                  />
                </Button>
                <Button size="xs" variant="subtle">
                  <IconEdit 
                  color="gray" 
                  size={16} 
                  onClick={() => handleEdit(data)} 
                  />
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
          label="Patient Name"
          required
          value={formData.EmployeeName}
          onChange={(event) => setFormData({ ...formData, PatientName: event.target.value })}
        />
        <TextInput
          label="Gender"
          required
          value={formData.Gender}
          onChange={(event) => setFormData({ ...formData, Gender: event.target.value })}
        />
        <TextInput
          label="Admitted Date"
          required
          value={formData.AdmittedDate}
          onChange={(event) => setFormData({ ...formData, AdmittedDate: event.target.value })}
        />
        <TextInput
          label="Distarched Date"
          required
          value={formData.DistarchedDate}
          onChange={(event) => setFormData({ ...formData, DistarchedDate: event.target.value })}
        />
        <TextInput
          label="Fees"
          required
          value={formData.Fees}
          onChange={(event) => setFormData({ ...formData, Fees: event.target.value })}
        />
        <TextInput
          label="Status"
          required
          value={formData.Status}
          onChange={(event) => setFormData({ ...formData, Status: event.target.value })}
        />

        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '2rem' }}>
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
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '2rem' }}>
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
            label="Patient Name"
            required
            value={editData?.PatientName}
            onChange={(event) =>
              setEditData((prevData) => ({ ...prevData, PatientName: event.target.value }))
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
            label="Admitted Date"
            required
            value={editData?.AdmittedDate}
            onChange={(event) =>
              setEditData((prevData) => ({ ...prevData, AdmittedDate: event.target.value }))
            }
          />
          <TextInput
            label="Distarched Date"
            required
            value={editData?.DistarchedDate}
            onChange={(event) =>
              setEditData((prevData) => ({ ...prevData, DistarchedDate: event.target.value }))
            }
          />
          <TextInput
            label="Fees"
            required
            value={editData?.Fees}
            onChange={(event) =>
              setEditData((prevData) => ({ ...prevData, Fees: event.target.value }))
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

export default ManagePatientUser;
