import React from "react";
import { TextInput, Select, Button } from "@mantine/core";
import { useState } from "react";
import { post } from "../../../../../api";
import EndPoints from "../../../../../api/endPoints";

const AddStaff = ({onAddStaff}) => {
    const [staffData, setStaffData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        age: "",
        gender: "",
        dob: "",
        address: "",
        phone: "",
        salary: "",
    });
    const handleChange = (event, name) => {
    const { value } = event.currentTarget;
    setStaffData((prevStaffData) => ({ ...prevStaffData, [name]: value }));
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        onAddStaff(staffData);
        console.log(staffData);
    } 
    return (
    <form onSubmit={handleSubmit}>
    <TextInput label="First Name" value={staffData.firstName} onChange={(event) => handleChange(event, "firstName")} />
    <TextInput label="Last Name" value={staffData.lastName} onChange={(event) => handleChange(event, "lastName")} />
    <TextInput label="Address" value={staffData.address} onChange={(event) => handleChange(event, "address")} />
    <TextInput label="E-mail" value={staffData.email} onChange={(event) => handleChange(event, "email")} />
    <TextInput type="number" label="Age" value={staffData.age} onChange={(event) => handleChange(event, "age")} />
    <TextInput label="Gender" value={staffData.gender} onChange={(event) => handleChange(event, "gender")} />
    <TextInput label="DOB" value={staffData.dob} onChange={(event) => handleChange(event, "dob")} />   
    <TextInput type="tel" label="Phone" value={staffData.phone} onChange={(event) => handleChange(event, "phone")} />
    <TextInput type="number" label="Salary" value={staffData.salary} onChange={(event) => handleChange(event, "salary")} />

      <Button type="submit"  mt="md" style={{ padding: "10px 20px", borderRadius: "7px",
      border:"none",color: "white", position: "relative", 
      background: "rgba(139, 127, 194, 1)", cursor: "pointer",left:"35%"}} >Add Staff</Button>
    </form>
  );
};

export default AddStaff;
