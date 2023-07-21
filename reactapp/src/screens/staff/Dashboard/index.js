import { 
    Menu,
    Paper,
    Card, 
     Text,
     Button,
     Modal, 
     Avatar 
    } from '@mantine/core';

import { useState } from "react";
import Profile from '../../../assests/man.png';
import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
const staffDetails =  {name:'Andy', id:'001' , designation:'STAFF', status:true, gender:'Male', dob:'29/09/2003', age: '28',
bloodGroup:'O+ve', email:'abcd@gmail.com', number:'123456XXX9', martialStatus: 'Unmarried', address:'London'}

//Styles

const container = {
    padding:'10px 20px 20px 20px',
    backgroundColor:'#cbcbcb00'
}
const content = { 
    width:'100%',height:'80vh',padding:'20px',position:'relative',backgroundColor:'white',borderRadius:'20px'
}
const cardStyle = {
    position:'absolute',
    top:'0%',
    left:'0%',
    margin:'10px',
    padding:'0%',
    width:'20em',
    backgroundColor:'rgb(255,255,255',
    borderRadius:'1em',
    textAlign:'center',
    ontSize:'1em',
    border:'1px solid black'
}

const cardContent1 = {padding:'2em',height:'7.5em',backgroundImage:'linear-gradient(70deg,#ab12f88f,#ae22eb)'}

const cardContent2 = {color:'#565656',padding:'3.5em'}

const menuStyle = {position:'absolute',top:'3%',right:'0%',background:'none',border:'none',outline:'none',padding:'3px'}

const imageStyle = {position:'absolute',top:'11%',left:'calc(100% - 218px)',width:'7em',height:'7em',borderRadius:'50%',objectFit:'cover'}


export default function PatientDashboard() {

    const dispatch = useDispatch()
    const user = useSelector((s) => s?.user?.value)
    console.log("userdate",user);

    const [record,setRecord] = useState(staffDetails);

    const [modal, setModal] = useState(false);

    const handleSaveEdit = (editedData) => {
        setModal(false);
        setRecord(editedData);
    };


  return (
        <Paper style={container}>
            <h2 style={{margin:'10px',textTransform:'uppercase'}}>Welcome {user?.firstName},</h2>
            <div style={content}>
                
                <Card style={cardStyle}>
                    <div style={cardContent1}>
                    {/* <Menu style={menuStyle} >
                        <Menu.Target>
                            <Button  ><IconDotsVertical/></Button>
                        </Menu.Target>
                        <Menu.Dropdown>
                            <Menu.Item onClick={() => setModal(true)} icon={<IconEdit/>}>Profile</Menu.Item>
                        </Menu.Dropdown>
                        </Menu> */}
                        <Avatar src={Profile} style={imageStyle} />
                    </div> 
                    
                    <div style={cardContent2}>
                        <Text style={{fontSize:'1.5em',textTransform:'uppercase' }}>
                            {user?.firstName} {user?.lastName} 
                        </Text>
                        <Text style={{fontSize:'1em',color:'#9e9e9e' }}>
                            STAFF
                        </Text>
                        <Text style={{ margin: '10px' }}>
                            {user?.status ? (
                            <span style={{ fontWeight: 'bold', color: '#0eeb3a'}}>Active</span>
                            ) : (
                            <span style={{ fontWeight: 'bold', color: 'red' }}>Inactive</span>
                            )}
                        </Text>
                    </div>
                </Card>
                {/* <Modal size={800} radius={20} opened={modal} onClose={() => setModal(false)} title="Personal Details" centered>
                    <PersonalDetails details={record} onClose={() => setModal(false)} onSubmit={handleSaveEdit}/>
                </Modal> */}
            </div>
        </Paper>


  );
}