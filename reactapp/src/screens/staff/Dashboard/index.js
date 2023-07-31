import { 
    Paper,
    Card, 
     Text, 
     Avatar, 
     Box,
     Grid,
     Divider
    } from '@mantine/core';
import Profile from '../../../assests/man.png';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import DoctorIcon from '../../../assests/DoctorIcon.png'
import PatientIcon from '../../../assests/PatientIcon.png'
import { post } from '../../../api';
import EndPoints from '../../../api/endPoints';

//Styles

const container = {
    padding:'5px 20px 5px 20px',
}
const content = { 
    width:'100%',height:'80vh',padding:'20px',position:'relative',borderRadius:'20px'
}

// const menuStyle = {position:'absolute',top:'3%',right:'0%',background:'none',border:'none',outline:'none',padding:'3px'}

const imageStyle = {position:'absolute',top:'11%',left:'calc(100% - 218px)',width:'7em',height:'7em',borderRadius:'50%',objectFit:'cover'}

const records = [
    {
        name:"Hari",
        date:"28-01-2023",
        time:"12:00 PM",
        doctorName:"Prasath"
    },
    {
        name:"Hari",
        date:"28-01-2023",
        time:"12:00 PM",
        doctorName:"Prasath"
    },
    {
        name:"Hari",
        date:"28-01-2023",
        time:"12:00 PM",
        doctorName:"Prasath"
    },
    {
        name:"Hari",
        date:"28-01-2023",
        time:"12:00 PM",
        doctorName:"Prasath"
    }
]

function Row(props) {
    return(
        <Paper style={{height:'auto',margin:'10px',borderRadius:'20px',border:'1px solid #d3d3d3',padding:'10px'}}>
            <Grid>                          
                <Grid.Col xs={4} lg={4}>
                    <Grid>
                        <Grid.Col xs={5} lg={5} style={{display: 'flex', justifyContent: 'center'}}>
                            <Avatar src={Profile} />
                        </Grid.Col>
                        <Grid.Col xs={6} lg={6}>
                            <Text style={{ textAlign: 'center' ,color:'#d3d3d3',fontSize:'12px' }}>Name</Text>
                            <Text style={{ textAlign: 'center' }}>{props.name} {props.name}</Text>
                        </Grid.Col>
                    </Grid>                    
                </Grid.Col>
                <Divider orientation='vertical' size="xs"/>
                <Grid.Col xs={4} lg={4}>
                    <Text style={{ textAlign: 'center' }}>{props.time}</Text>
                    <Text style={{ textAlign: 'center' }}>{props.date}</Text>
                </Grid.Col>
                <Divider orientation='vertical' size="xs"/>
                <Grid.Col xs={3} lg={3}>
                    <Text style={{ textAlign: 'center' ,color:'#d3d3d3',fontSize:'12px' }}>Doctor</Text>
                    <Text style={{ textAlign: 'center' }}>Dr.{props.doctorName}</Text> 
                </Grid.Col>
            </Grid>
        </Paper>

    );
}

function Container(props) {
    return(
        <Card shadow="sm" padding="lg" radius="md" withBorder style={{height:'130px', display: 'flex', alignItems: 'center' }}>
            <Avatar size="xl" src={props.image}/>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Text>{props.name}</Text>
                {props.status !== null && (
                    <Text>
                    {props.status ? (
                        <span style={{ fontWeight: 'bold', color: '#0eeb3a' }}>Active</span>
                        ) : (
                        <span style={{ fontWeight: 'bold', color: 'red' }}>Inactive</span>
                    )}
                    </Text>
                )}
                {props.data !== null && (
                    <Text>{props.data}</Text>
                )}                
            </div>
        </Card>

    );
}


export default function StaffDashboard() {
    
    const [patientCount, setPatientCount] = useState(null);
    const [doctorCount,setDoctorCount] = useState(null);

      



    const getPatientAndDoctors =async() =>{
        await post(EndPoints.getRolesCount,{roles:'ROLE_DOCTOR'}).then((response)=>{
            setDoctorCount(response.data);
            console.log(response);
        }).catch(error =>{
            console.log(error);
        })
        await post(EndPoints.getRolesCount,{roles:'ROLE_PATIENT'}).then((response)=>{
            setPatientCount(response.data);
            console.log(response);
        }).catch(error =>{
            console.log(error);
        })
      }
      useEffect(()=>{
        getPatientAndDoctors();
      },[])


    const user = useSelector((s) => s?.user?.value)

    const slides = records.map((item) => (        
          <Row {...item} />        
      ));

   



  return (
        <div style={container}>
            <h2 style={{margin:'0',textTransform:'uppercase'}}>Welcome {user?.firstName},</h2>
            <Grid style={content}>
                <Grid.Col lg={4} xs={4}>
                    <Container image={DoctorIcon} name={"Active Doctors"} status={null} data={doctorCount}/>                        
                </Grid.Col>
                <Grid.Col lg={4} xs={4}>
                    <Container image={PatientIcon} name={"Active Patient"} status={null} data={patientCount}/>                        
                </Grid.Col>
                <Grid.Col lg={4} xs={4}>
                    <Container image={`data:image/png;base64,${user?.profileImage}`} name={`${user?.firstName} ${user?.lastName}`} status={user?.status} data={null}/>                        
                </Grid.Col>
                <Grid.Col lg={8} xs={8}>
                    <Card shadow="sm" padding="xl" radius="md" withBorder  style={{overflow:'auto',height:'57vh'}} >
                        <Text style={{marginBottom:'20px'}}>Upcoming Appointments</Text>
                        {slides}                    
                    </Card> 
                </Grid.Col>
                {/* <Grid.Col lg={4} xs={4}>
                    <Card shadow="sm" padding="xl" radius="md" withBorder  style={{overflow:'auto',height:'57vh'}} >
                        <Text style={{marginBottom:'20px'}}>Notification</Text>
                    </Card> 
                </Grid.Col> */}
            </Grid>
        </div>


  );
}