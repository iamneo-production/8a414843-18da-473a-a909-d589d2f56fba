
import React from "react";
import { TextInput, Select, Button } from "@mantine/core";
import { useState } from "react";
import { post } from "../../../../../api";
import EndPoints from "../../../../../api/endPoints";

const AddDoctor = ({onAddDoctor}) => {
    const [doctorData, setDoctorData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        age: "",
        gender: "",
        //dob: "",
        address: "",
        phone: "",
        salary: "",
        specialist: "",
    });
    const handleChange = (event, name) => {
    const { value } = event.currentTarget;
    setDoctorData((prevDoctorData) => ({ ...prevDoctorData, [name]: value }));
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        onAddDoctor(doctorData);
        console.log(doctorData);
    }
      
    return (
    <form onSubmit={handleSubmit}>
    <TextInput label="First Name" value={doctorData.firstName} onChange={(event) => handleChange(event, "firstName")} />
    <TextInput label="Last Name" value={doctorData.lastName} onChange={(event) => handleChange(event, "lastName")} />
    <TextInput label="Address" value={doctorData.address} onChange={(event) => handleChange(event, "address")} />
    <TextInput label="E-mail" value={doctorData.email} onChange={(event) => handleChange(event, "email")} />
    <TextInput type="number" label="Age" value={doctorData.age} onChange={(event) => handleChange(event, "age")} />
    <TextInput label="Gender" value={doctorData.gender} onChange={(event) => handleChange(event, "gender")} /> 
    <TextInput type="tel" label="Phone" value={doctorData.phone} onChange={(event) => handleChange(event, "phone")} />
    <TextInput type="number" label="Salary" value={doctorData.salary} onChange={(event) => handleChange(event, "salary")} />
    <TextInput label="Specialist" value={doctorData.specialist} onChange={(event) => handleChange(event, "specialist")} />

      <Button type="submit" mt="md" style={{ padding: "10px 20px", borderRadius: "7px",
      border:"none",color: "white", position: "relative", 
      background: "rgba(139, 127, 194, 1)", cursor: "pointer",left:"35%"}}>Add User</Button>
    </form>
  );
};

export default AddDoctor;
