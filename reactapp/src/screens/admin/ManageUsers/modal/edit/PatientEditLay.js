import { 
  TextInput,
  Select,
  Button 
} from "@mantine/core";
import { useForm } from "@mantine/form";

export default function PatientEditLay(props){
  const {records, onClose, onSubmit} = props
  const form = useForm({
      initialValues: {
          firstName:records?.firstName,
          lastName:records?.lastName,
          email:records?.email,
          age:records?.age,
          gender:records?.gender,
          phone:records?.phone,
          address:records?.address,
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
          <TextInput label="Address" required {...form.getInputProps("address")} />
          <Button type="submit" mt="md" style={{background: "rgba(139, 127, 194, 1)",
          cursor:"pointer",
          borderColor:"rgba(139, 127, 194, 1)"}} onClick={handleSubmit} >Save</Button>
          <Button mt="md" style={{background: "rgba(139, 127, 194, 1)",
          cursor:"pointer",
          borderColor:"rgba(139, 127, 194, 1)" ,position:"relative",overflow:"hidden",left:"61%"}} onClick={onClose}>Cancel</Button>
        </form>
  );
}
