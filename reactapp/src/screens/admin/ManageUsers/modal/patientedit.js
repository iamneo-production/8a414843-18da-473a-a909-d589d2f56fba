import { 
    TextInput,
    Select,
    Button 
} from "@mantine/core";
import { useForm } from "@mantine/form";
export default function Editlay(props){
    const {records, onClose, onSubmit} = props
    const form = useForm({
        initialValues: {
            id:records?.id,
            patient_Name:records?.patient_Name,
            gender:records?.gender,
            appointmentDate:records?.appointmentDate,
            distarchedDate:records?.distarchedDate,
            fees:records?.fees,
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
            <TextInput label="ID" required {...form.getInputProps("id")} />
            <TextInput label="Patient Name" required {...form.getInputProps("patient_Name")} />
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
              label="Appointed Date"
              type="date"
              required
              {...form.getInputProps("appointmentDate")}
            />
            <TextInput
              label="Distarched Date"
              type="date"
              required
              {...form.getInputProps("distarchedDate")}
            />
            <TextInput
              label="Fees"
              required
              {...form.getInputProps("fees")}
            />
            <Select
              label="Status"
              required
              placeholder="Select Status"
              data={[
                { value: "paid", label: "paid" },
                { value: "not paid", label: "not paid" },
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


