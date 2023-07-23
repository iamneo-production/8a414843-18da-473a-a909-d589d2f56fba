import {
    Avatar,
    TextInput,
    Textarea,
    Modal,
    Button,
    ActionIcon,
    Card
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useState } from "react";
import { useSelector } from 'react-redux';
import { put,putFile } from '../../api';
import EndPoints from '../../api/endPoints';
import { IconEditCircle } from '@tabler/icons-react';

//style
const imgContainer = { display: "flex",justifyContent: "center", alignItems: "center",height: "120px"}

const imageStyle = { position:'absolute',top:'9%',left:'43%',width:'7em',height:'7em',borderRadius:'50%',objectFit:'cover' }

const editIconStyle = { position:'absolute',top:'22%',left:'53%',borderRadius:'50%',objectFit:'cover' }


const container = { display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '5px 20px 5px 20px' }

const content = { display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', margin: '20px 0 0 0' }

const layout = { marginBottom: '15px', width: 'calc(100% / 2 - 20px)' }

const updateButton = { marginTop:"20px", padding: "10px 20px", borderRadius: "7px",border:"none",color: "white", position: "relative", background: "rgba(139, 127, 194, 1)", cursor: "pointer", left: "88%" }

const cancelButton = { marginTop:"20px", padding: "10px 20px", borderRadius: "7px",border:"none",color: "white", position: "relative", background: "rgba(139, 127, 194, 1)", cursor: "pointer", left: "62%" }

const imageUpload = { height: '50vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center'};

export default function ProfileDetailModal(props){
    const{ open, close} = props;
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);

  
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

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
        console.log("photo",selectedFile);
      };

    const handleUploadfile = async(e) => {
        const formData = new FormData();
        formData.append('profileImage', selectedFile, {'Content-Type': 'multipart/form-data'});
        await putFile(`${EndPoints.updateUserProfile}/${user?.id}`,formData).then((response)=>{
        console.log(response);
        }).catch(error =>{
        console.log(error);
        })
    }



    return(
        <>
        <Modal size={800} radius={20} opened={open} onClose={() => close()} title="Personal Details" centered>
            <div style={imgContainer}>
                <Avatar style={imageStyle}  src={`data:image/png;base64,${user?.profileImage}`} alt=""/>
                <ActionIcon style={editIconStyle} onClick={() => {setModalOpen(true);}}>
                    <IconEditCircle color='blue'/>
                </ActionIcon>
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
        <Modal size={400} radius={30} shadow="xl" opened={modalOpen} onClose={()=>setModalOpen(false)} title="Upload Image" >
            <Card padding="xl" style={imageUpload}>
                <Avatar size={120} src={`data:image/png;base64,${user?.profileImage}`}  alt="" style={{ marginBottom: '10px' }}/>
                <input type="file" accept="image/*" onChange={handleFileChange} style={{marginTop:'10px', marginLeft: '80px' }}/>
                <div style={{marginTop:"20px", display: 'flex', justifyContent: 'center' }}>
                        <Button style={{ marginRight: "15px",backgroundColor:"lightgrey" }} onClick={() => setModalOpen(false)} >Cancel</Button>
                        <Button style={{backgroundColor:"rgba(139, 127, 194, 1)"}} onClick={() => {handleUploadfile(); setModalOpen(false);}}>Upload</Button>
                    </div>
            </Card>
        </Modal>
        </>
    )
}