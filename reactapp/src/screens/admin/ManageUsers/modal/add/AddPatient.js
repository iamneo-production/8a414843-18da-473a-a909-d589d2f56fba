import React from "react";
import { TextInput, Select, Button } from "@mantine/core";
import { useState } from "react";
import { post } from "../../../../../api";
import EndPoints from "../../../../../api/endPoints";

const AddPatient = ({onAddPatient}) => {
    const [patientData, setPatientData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        age: "",
        gender: "",
        dob: "",
        address: "",
        phone: "",
        address:"",
    });
    const handleChange = (event, name) => {
    const { value } = event.currentTarget;
    setPatientData((prevPatientData) => ({ ...prevPatientData, [name]: value }));
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        onAddPatient(patientData);
        console.log(patientData);
    } 
    return (
    <form onSubmit={handleSubmit}>
    <TextInput label="First Name" value={patientData.firstName} onChange={(event) => handleChange(event, "firstName")} />
    <TextInput label="Last Name" value={patientData.lastName} onChange={(event) => handleChange(event, "lastName")} />
    <TextInput label="Address" value={patientData.address} onChange={(event) => handleChange(event, "address")} />
    <TextInput label="E-mail" value={patientData.email} onChange={(event) => handleChange(event, "email")} />
    <TextInput type="number" label="Age" value={patientData.age} onChange={(event) => handleChange(event, "age")} />
    <TextInput label="Gender" value={patientData.gender} onChange={(event) => handleChange(event, "gender")} />
    <TextInput label="DOB" value={patientData.dob} onChange={(event) => handleChange(event, "dob")} />   
    <TextInput type="tel" label="Phone" value={patientData.phone} onChange={(event) => handleChange(event, "phone")} />
      <Button type="submit"  mt="md" style={{ padding: "10px 20px", borderRadius: "7px",
      border:"none",color: "white", position: "relative", 
      background: "rgba(139, 127, 194, 1)", cursor: "pointer",left:"33%"}}>Add Patient</Button>
    </form>
  );
};

export default AddPatient;
