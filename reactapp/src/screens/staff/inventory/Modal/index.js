import {
    NumberInput,
    TextInput,
    Select,
} from '@mantine/core';
import { useForm } from '@mantine/form';



export default function ModifyAndCreateModal(props) {

    const {records, onClose, onSubmit} = props

    const form = useForm({
        initialValues: {
            ProductName : records?.ProductName,
            ItemNumber : records?.ItemNumber,
            Manufacturer : records?.Manufacturer,
            Usage: records?.Usage,
            Category : records?.Category,
            Price : records?.Price,
            Quanity : 0,
            ExpiryDate : records?.ExpiryDate,
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
            
            <TextInput style={{ height: "6vh",marginBottom:"20px"}} label="Product Name" placeholder="Product Name" {...form.getInputProps('ProductName')} />
            <TextInput style={{ height: "6vh",marginBottom:"20px"}} label="Item Number"  {...form.getInputProps('ItemNumber')} />
            <TextInput style={{ height: "6vh",marginBottom:"20px"}} label="Manufacturer" placeholder="Manufacturer" {...form.getInputProps('Manufacturer')} />
            <TextInput style={{ height: "6vh",marginBottom:"20px"}} label="Usage" placeholder="Usage" {...form.getInputProps('Usage')} />
            <Select style={{ height: "6vh",marginBottom:"20px"}} label="Category" placeholder="Category" data={[
                { value: 'Tablet', label: 'Tablet' },
                { value: 'Syrup', label: 'Syrup' },
                { value: 'Cream', label: 'Cream' },
            ]}


            {...form.getInputProps('Category')} />
            <TextInput style={{ height: "6vh",marginBottom:"20px",width:"50%",display:"inline-block",paddingRight:"5px"}} label="Price (per unit)" placeholder="Price" {...form.getInputProps('Price')} />
            <NumberInput style={{ height: "6vh",marginBottom:"20px",width:"50%",display:"inline-block",paddingLeft:"5px"}} label="Quantity" {...form.getInputProps('Quanity')}/>
            <TextInput type='date' style={{ height: "6vh",marginBottom:"20px"}} label="Expiry Date" placeholder="Expiry Date" {...form.getInputProps('ExpiryDate')}/>
            <button 
            // onClick={handleSubmit}
             style={{marginTop:"20px", padding: "10px 20px", borderRadius: "7px",border:"none",color: "white", position: "relative", background: "rgba(139, 127, 194, 1)", cursor: "pointer", left: "82%" }}>Save</button> 
        </form>
            
    )
}
