import {
    NumberInput,
    TextInput,
    Select,
} from '@mantine/core';
import { useForm } from '@mantine/form';


export default function Modify(props) {

    const {records, onClose, onSubmit} = props

    const form = useForm({
        initialValues: {
            id : records?.id,
            medicine_name : records?.medicine_name,
            manufacturer : records?.manufacturer,
            category : records?.category,
            price : records?.price,
            quanity : 0,
            expiry_date : records?.expiry_date,
        },
        validate: {
            price: (value) => (value > 0 ? null : 'Enter the correct value' ),
            quanity: (value) => (value > 0 ? null : 'Enter the correct value' ),
        },
    });

    const handleSubmit = () => {
        onSubmit(form.values);
        onClose();
      };

    return (

        <form onSubmit={(e) => e.preventDefault()}>
            <TextInput style={{ height: "6vh",marginBottom:"20px"}} label="Product Id"  {...form.getInputProps('id')} />
            <TextInput style={{ height: "6vh",marginBottom:"20px"}} label="Product Name" placeholder="Product Name" {...form.getInputProps('medicine_name')} />
            <TextInput style={{ height: "6vh",marginBottom:"20px"}} label="Manufacturer" placeholder="Manufacturer" {...form.getInputProps('manufacturer')} />
            <Select style={{ height: "6vh",marginBottom:"20px"}} label="Category" placeholder="Category" data={[
                { value: 'Tablet', label: 'Tablet' },
                { value: 'Syrup', label: 'Syrup' },
                { value: 'Cream', label: 'Cream' },
            ]}
            {...form.getInputProps('category')} />
            <TextInput style={{ height: "6vh",marginBottom:"20px",width:"50%",display:"inline-block",paddingRight:"5px"}} label="Price (per unit)" placeholder="Price" {...form.getInputProps('price')} />
            <NumberInput style={{ height: "6vh",marginBottom:"20px",width:"50%",display:"inline-block",paddingLeft:"5px"}} label="Quantity" {...form.getInputProps('quanity')}/>
            <TextInput type='date' style={{ height: "6vh",marginBottom:"20px"}} label="Expiry Date" placeholder="Expiry Date" {...form.getInputProps('expiry_date')}/>
            <button onClick={handleSubmit} style={{marginTop:"20px", padding: "10px 20px", borderRadius: "7px",border:"none",color: "white", position: "relative", background: "rgba(139, 127, 194, 1)", cursor: "pointer", left: "82%" }}>Add</button> 
        </form>
            
    )
}
