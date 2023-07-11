import {
    NumberInput,
    TextInput,
    Select,
} from '@mantine/core';
import { useForm } from '@mantine/form';


export default function Edit(props) {

    const {records, onClose, onSubmit} = props

    const form = useForm({
        initialValues: {
            id : records?.id,
            name : records?.name,
            quantity : records?.quantity,
            category : records?.category,
            price : records?.price,
            supplier : records?.supplier,
           
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
            <TextInput style={{ height: "6vh",marginBottom:"20px"}} label="Product Name" placeholder="Product Name" {...form.getInputProps('name')} />
            <NumberInput style={{ height: "6vh",marginBottom:"20px",width:"50%",display:"inline-block",paddingLeft:"5px"}} label="Quantity" {...form.getInputProps('quanity')}/>
            
            <Select style={{ height: "6vh",marginBottom:"20px"}} label="Category" placeholder="Category" data={[
                { value: 'Tablet', label: 'Tablet' },
                { value: 'Syrup', label: 'Syrup' },
                { value: 'Cream', label: 'Cream' },
            ]}
            {...form.getInputProps('category')} />
            <TextInput style={{ height: "6vh",marginBottom:"20px",width:"50%",display:"inline-block",paddingRight:"5px"}} label="Price (per unit)" placeholder="Price" {...form.getInputProps('price')} />
            <TextInput style={{ height: "6vh",marginBottom:"20px"}} label="Supplier" placeholder="Supplier" {...form.getInputProps('supplier')} />  
            <button onClick={handleSubmit} style={{marginTop:"20px", padding: "10px 20px", borderRadius: "7px",border:"none",color: "white", position: "relative", background: "rgba(139, 127, 194, 1)", cursor: "pointer", left: "82%" }}>Add</button> 
        </form>
            
    )
}
