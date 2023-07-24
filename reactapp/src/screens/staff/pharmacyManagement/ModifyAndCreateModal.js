import {
    NumberInput,
    TextInput,
    Select,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { DateInput } from '@mantine/dates';
import { post, put } from '../../../api';
import EndPoints from '../../../api/endPoints';


export default function ModifyAndCreateModal(props) {


    
    const {records, onClose } = props

    const form = useForm({
        initialValues: {
            medicineName : records?.medicineName !==null ? records?.medicineName : '' ,
            usages : records?.usages !==null ? records?.usages : '',
            category : records?.category !==null ? records?.category : '',
            price : records?.price !==null ? records?.price : '',
            quantity : records?.quantity !==null ? records?.quantity : '',
            expiry_date : records?.expiry_date !==null ? records?.expiry_date : '',
        },
        validate: {
            price: (value) => (value > 0 ? null : 'Enter the correct value' ),
            quanity: (value) => (value > 0 ? null : 'Enter the correct value' ),
        },
    });

    const handleSubmit = async() => {
        const data = form.values;
        if(records===undefined){
            await post(`${EndPoints.addInventory}`,data).then((response) => {
                console.log(response);
            }).catch(error => {
                console.log(error);
            })
        }else{
            await put(`${EndPoints.updateInventory}/${records.id}`,data).then((response) => {
                console.log(response);
            }).catch(error => {
                console.log(error);
            })
        }
        onClose();
      };

    return (

        <form style={{margin:"10px",padding:"10px"}} onSubmit={form.onSubmit((values) => { console.log(values); handleSubmit()})}>
            <TextInput style={{ height: "7vh",marginBottom:"20px"}} label="Medicine Name" placeholder="Medicine Name" {...form.getInputProps('medicineName')} />
            <TextInput style={{ height: "7vh",marginBottom:"20px"}} label="Usage" placeholder="Usage" {...form.getInputProps('usages')} />
            <Select style={{ height: "7vh",marginBottom:"20px"}} label="Category" placeholder="Category" data={[
                { value: 'Tablet', label: 'Tablet' },
                { value: 'Syrup', label: 'Syrup' },
                { value: 'Cream', label: 'Cream' },{ value: 'general', label: 'general' },
            ]}
            {...form.getInputProps('category')} />
            <TextInput style={{ height: "7vh",marginBottom:"20px",width:"50%",display:"inline-block",paddingRight:"5px"}} label="Price (per unit)" placeholder="Price" {...form.getInputProps('price')} />
            <NumberInput style={{ height: "7vh",marginBottom:"20px",width:"50%",display:"inline-block",paddingLeft:"5px"}} label="Quantity" {...form.getInputProps('quantity')}/>
            <DateInput style={{ height: "7vh",marginBottom:"20px"}} label="Expiry Date" placeholder="Expiry Date" {...form.getInputProps('expiryDate')}/>
            <button onClick={handleSubmit} style={{marginTop:"20px", padding: "10px 20px", borderRadius: "7px",border:"none",color: "white", position: "relative", background: "rgba(139, 127, 194, 1)", cursor: "pointer", left: "82%" }}>Add</button> 
        </form>
            
    )
}
