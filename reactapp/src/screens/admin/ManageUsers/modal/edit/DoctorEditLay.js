import { 
  TextInput,
  Select,
  Button 
} from "@mantine/core";
import { useForm } from "@mantine/form";

export default function DoctorEditLay(props){
  const {records, onClose, onSubmit} = props
  const form = useForm({
      initialValues: {
          firstName:records?.firstName,
          lastName:records?.lastName,
          email:records?.email,
          age:records?.age,
          gender:records?.gender,
          phone:records?.phone,
          salary:records?.salary,
          specialist:records?.specialist,
      }
  })
  const handleSubmit = () => {
      console.log(form.values);
      onSubmit(form.values);
      onClose();
  };  
  return(
      <form onSubmit={(e) => e.preventDefault()}>
          <TextInput label="First Name" required {...form.getInputProps("firstName")} />
          <TextInput label="Last Name" required {...form.getInputProps("lastName")} />
          <TextInput label="E-mail" required {...form.getInputProps("email")} />
          <TextInput label="Age" required {...form.getInputProps("age")} />
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
          <TextInput label="Phone" required {...form.getInputProps("phone")} />
          <TextInput label="salary" required {...form.getInputProps("salary")} />
          <TextInput
            label="Specialist"
            required
            {...form.getInputProps("specialist")}
          />
          <Button type="submit" mt="md" style={{background: "rgba(139, 127, 194, 1)",
          cursor:"pointer",
          borderColor:"rgba(139, 127, 194, 1)"}} onClick={handleSubmit} >Save</Button>
          <Button mt="md" style={{background: "rgba(139, 127, 194, 1)",
          cursor:"pointer",
          borderColor:"rgba(139, 127, 194, 1)" ,position:"relative",overflow:"hidden",left:"61%"}} onClick={onClose}>Cancel</Button>
        </form>
  );
}

/* import React, { useState, useEffect } from "react";
import { TextInput, Select, Button } from "@mantine/core";

const EditDoctorModal = ({ doctor, onEditDoctor }) => {
  const [doctorData, setDoctorData] = useState({ ...doctor });

  useEffect(() => {
    setDoctorData({ ...doctor });
  }, [doctor]);

  const handleChange = (event, name) => {
    const { value } = event.currentTarget;
    setDoctorData((prevDoctorData) => ({ ...prevDoctorData, [name]: value }));
  };

  const handleUpdate = () => {
    // Call the onEditDoctor prop with the updated doctor data
    onEditDoctor(doctorData);
  };

  return (
    <form>
      <TextInput label="First Name" value={doctorData.firstName} onChange={(event) => handleChange(event, "firstName")} />
      <TextInput label="Last Name" value={doctorData.lastName} onChange={(event) => handleChange(event, "lastName")} />
      <TextInput label="E-mail" value={doctorData.email} onChange={(event) => handleChange(event, "email")} />
      <TextInput type="number" label="Age" value={doctorData.age} onChange={(event) => handleChange(event, "age")} />
      <Select
        label="Gender"
        data={[
          { value: "male", label: "Male" },
          { value: "female", label: "Female" },
          { value: "others", label: "Others" },
        ]}
        value={doctorData.gender}
        onChange={(event) => handleChange(event, "gender")}
      />
      <TextInput type="date" label="DOB" value={doctorData.dob} onChange={(event) => handleChange(event, "dob")} />
      <TextInput type="tel" label="Phone" value={doctorData.phone} onChange={(event) => handleChange(event, "phone")} />
      <TextInput type="number" label="Salary" value={doctorData.salary} onChange={(event) => handleChange(event, "salary")} />
      <TextInput label="Specialist" value={doctorData.specialist} onChange={(event) => handleChange(event, "specialist")} />

      <Button onClick={handleUpdate}>Update Doctor</Button>
    </form>
  );
};

export default EditDoctorModal;
 */
