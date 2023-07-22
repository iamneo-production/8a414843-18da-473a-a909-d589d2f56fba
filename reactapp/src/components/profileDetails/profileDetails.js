import {
    Avatar,
    TextInput,
    Textarea,
    Modal,
    Button
} from '@mantine/core';
import { useForm } from '@mantine/form';
import Profile from '../../assests/man.png';
import ResetPassword from '../password/ResetPassword';
import { useDisclosure } from '@mantine/hooks';
import { useSelector } from 'react-redux';
import { put } from '../../api';
import EndPoints from '../../api/endPoints';

//style
const imgContainer = { display: "flex",justifyContent: "center", alignItems: "center",height: "120px"}

const imageStyle = { position:'absolute',top:'9%',left:'43%',width:'7em',height:'7em',borderRadius:'50%',objectFit:'cover' }

const container = { display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '5px 20px 5px 20px' }

const content = { display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', margin: '20px 0 0 0' }

const layout = { marginBottom: '15px', width: 'calc(100% / 2 - 20px)' }

const updateButton = { marginTop:"20px", padding: "10px 20px", borderRadius: "7px",border:"none",color: "white", position: "relative", background: "rgba(139, 127, 194, 1)", cursor: "pointer", left: "88%" }

const cancelButton = { marginTop:"20px", padding: "10px 20px", borderRadius: "7px",border:"none",color: "white", position: "relative", background: "rgba(139, 127, 194, 1)", cursor: "pointer", left: "62%" }


// const details =  {name:'Andy', id:'001' , designation:'STAFF', status:true, gender:'Male', dob:'29/09/2003', age: '28',
// bloodGroup:'O+ve', email:'abcd@gmail.com', phone:'123456XXX9', martialStatus: 'Unmarried', address:'London'}

export default function ProfileDetailModal(props){
    const{ open, close} = props;
    const user = useSelector((s) => s?.user?.value)
    console.log(user);

    const handleSubmit = async() => {   
        const data = form.values
        await put(`${EndPoints.updateUserDetails}/${user?.id}`,data).then((response)=>{
        console.log(response.data);
        }).catch(error =>{
        console.log(error);
        })

        close();
    
    }

    const form = useForm({
        initialValues: {
            firstName: user?.firstName,
            lastName: user?.lastName,
            id: user?.id ,
            status:user?.status,
            gender: user?.gender,
            dob: user?.dob,
            age: user?.age,
            email: user?.email,
            phone: user?.phone,
            address:user?.address,
        },
        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
            phone: (value) => (/^\d{10}$/.test(value) ? null : 'Please enter a valid phone number.')
        },
    });

    // const handleSubmit = () => {
    //     console.log(form.values);
    //     // onSubmit(form.values);
    //     close();
    //   };

    // const handleFileChange = async(e) => {
    //     console.log(e.target.files[0]);
    //     const data = form.values
    //     await put(`${EndPoints.updateUserProfile}/${user?.id}`,data).then((response)=>{
    //     console.log(response.data);
    //     }).catch(error =>{
    //     console.log(error);
    //     })
    // }



    return(
        <>
        <Modal size={800} radius={20} opened={open} onClose={() => close()} title="Personal Details" centered>
            {/* <PersonalDetails details={record} onClose={() => close()} onSubmit={handleSaveEdit}/> */}
            <div style={imgContainer}>
                <Avatar style={imageStyle} src={user.profileImage} alt=""/>
                {/* <input type="file" accept="image/*"  onChange={handleFileChange} /> */}
            </div>
            <div style={container}>
                <form>
                    <div style={content}>
                        <div style={layout}>
                            <label>First Name</label>
                            <TextInput {...form.getInputProps('firstName')}/>
                        </div>
                        <div style={layout}>
                            <label>Last Name</label>
                            <TextInput {...form.getInputProps('lastName')}/>
                        </div>
                        <div style={layout}>
                            <label>DOB</label>
                            <TextInput {...form.getInputProps('dob')}/>
                        </div>
                        <div style={layout}>
                            <label>Gender</label>
                            <TextInput {...form.getInputProps('gender')}/>
                        </div>
                        <div style={layout}>
                            <label>Age</label>
                            <TextInput {...form.getInputProps('age')}/>
                        </div>
                        <div style={layout}>
                            <label>Mobile No</label>
                            <TextInput {...form.getInputProps('phone')}/>
                        </div>
                        {/* <div style={layout}>
                            <label>Email Id</label>
                            <TextInput {...form.getInputProps('email')}/>
                        </div> */}
                        {/* <div style={layout}>
                            <label>BloodGroup</label>
                            <TextInput {...form.getInputProps('bloodGroup')}/>
                        </div> */}
                    </div>
                    <div>
                        <label>Email Id</label>
                        <TextInput {...form.getInputProps('email')}/>
                    </div>
                    <div style={{paddingTop:'15px'}}>
                        <label>Address</label>
                        <Textarea  {...form.getInputProps('address')}/>
                    </div>
                    <Button onClick={handleSubmit} style={updateButton}>Update</Button>
                    <Button onClick={()=>close()} style={cancelButton}>Cancel</Button>
                </form>
            </div>    
        </Modal>
        </>
    )
}