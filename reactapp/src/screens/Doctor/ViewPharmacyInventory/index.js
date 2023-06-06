import React, { useState } from 'react';
import { Table, Button } from '@mantine/core';
import { AiFillCheckCircle, AiFillMinusCircle, AiOutlineSearch } from 'react-icons/ai';
import './index.css';
export default function DoctorPharmacyInvt() {
  const elements = [
    { DName: 'Adison Rheil Madsen', id: '1234567890', spec: 'ortho', status: 'Active' },
    { DName: 'Paityn Lubin', id: '0987654321', spec: 'neuro', status: 'Active' },
    { DName: 'Phillip Bator', id: '9876543210', spec: 'phys', status: 'Active' },
  ];

  const repeatedElements = [...elements, ...elements, ...elements];

  const [searchTerm, setSearchTerm] = useState('');
  const [rows, setRows] = useState(repeatedElements);

  const filteredRows = rows.filter((row) => {
    const searchString = `${row.DName} ${row.id} ${row.spec}`;
    return searchString.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const handleRemoveRow = (index) => {
    setRows((prevRows) => {
      const updatedRows = [...prevRows];
      updatedRows.splice(index, 1);
      return updatedRows;
    });
  };

  const handleMarkRow = (index) => {
    setRows((prevRows) => {
      const updatedRows = [...prevRows];
      updatedRows[index].status = 'Marked';
      return updatedRows;
    });
  };

  const rowElements = filteredRows.map((row, index) => (
    <tr key={index}>
      <td>{row.DName}</td>
      <td>{row.id}</td>
      <td>{row.spec}</td>
      <td>{row.status}</td>
      <td>
        {row.status !== 'Marked' && (
          <AiFillCheckCircle onClick={() => handleMarkRow(index)} />
        )}
      </td>
      <td>
        <AiFillMinusCircle onClick={() => handleRemoveRow(index)} />
      </td>
    </tr>
  ));

  return (
    <div>
      <div className="search-bar">
        <div className="search-icon-container">
          <AiOutlineSearch className="search-icon" />
        </div>
        <input
          type="text"
          placeholder="Search Name, Id"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div style={{ marginLeft: 'auto' }}>
          <Button
            color="rgba(144, 131, 213, 1)"
            radius="md"
            style={{ marginRight: '10px', marginTop: '7px' }}
          >
            Pharmacy
          </Button>
          <Button
            color="rgba(144, 131, 213, 1)"
            radius="md"
            style={{ marginRight: '10px', marginTop: '7px' }}
          >
            Inventory
          </Button>
        </div>
      </div>
      <Table className="apt-table">
        <thead>
          <tr>
            <th>Doctor Name</th>
            <th>Doctor Id</th>
            <th>Specialization</th>
            <th>Status</th>
            <th>Mark</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>{rowElements}</tbody>
      </Table>
    </div>
  );
}
