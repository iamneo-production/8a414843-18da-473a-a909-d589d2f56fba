import { TextInput,Select,Button } from "@mantine/core";
import { useForm } from "@mantine/form";
export default function Editlayout(props){
    const {records, onClose, onSubmit} = props
    const form = useForm({
        initialValues: {
            id:records?.id,
            employee_Name:records?.employee_Name,
            gender:records?.gender,
            department:records?.department,
            salary:records?.salary,
            joinedDate:records?.joinedDate,
            status:records?.status,
        },
        validate: {
            price: (value) => (value > 0 ? null : 'Enter the correct value' ),
        }
    })
    const handleSubmit = () => {
        console.log(form.values);
        onSubmit(form.values);
        onClose();
    };  
    return(
            <form onSubmit={(e) => e.preventDefault()}>
            <TextInput  label="ID" required {...form.getInputProps("id")} />
            <TextInput label="Employee Name" required {...form.getInputProps("employee_Name")} />
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
            borderColor:"rgba(139, 127, 194, 1)"}} onClick={handleSubmit} >Save</Button>
            <Button mt="md" style={{background: "rgba(139, 127, 194, 1)",
            cursor:"pointer",
            borderColor:"rgba(139, 127, 194, 1)" ,position:"relative",overflow:"hidden",left:"61%"}} onClick={onClose}>Cancel</Button>
          </form>
        );
}