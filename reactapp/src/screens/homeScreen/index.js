import { useState } from "react";
import CustomHeader from "../../header";
import {
    Text,
    Image,
    Header,
    Group,
    Button,
    Box,
    TextInput,
    Select,
    Grid,
    Title,
    Divider,
    Container,
    Textarea
} from '@mantine/core';
import { useForm } from '@mantine/form';
import VaccinationResearch from "../../assests/VaccinationResearch .svg"
import TwoPersonImage from "../../assests/Twoperson.png"
import CustomFooter from '../../components/footer/index'
import SignUp from "./auth/signUp";


export default function HomeScreen() {

    const [active, setActive] = useState(1)
    const form = useForm({
        initialValues: {
          email: '',
          Name:'',
          Number:'',
          Message:'',
          Role:''
        },
        validate: {
          email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
        },
      });
    return (
        <>
            <div>
                <CustomHeader setActive={setActive} active={active} />
            </div>


            {active===1 &&
            <Grid pt="lg" m={0} px={0}>

                <Grid.Col xs={6} lg={6} style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItem: 'center', height: '100vh' }} >
                    <Title mb="md">Welcome to our Hospital Management System</Title>
                    <Text>
                        Our system is designed to streamline hospital operations and improve patient care. With our user-friendly interface and comprehensive features, you can easily manage patient information, appointments, medical records, billing, and more.</Text>
                </Grid.Col>

                <Grid.Col xs={6} lg={6} style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItem: 'center', height: '100vh' }}>

                    <Image pb={100} height={700} src={TwoPersonImage} />

                </Grid.Col>

                <Grid.Col xs={6} lg={6} style={{ display: 'flex', justifyContent: 'center', height: '100vh' }}>
                    <Image height={500} src={VaccinationResearch} />
                </Grid.Col>
                <Grid.Col xs={6} lg={6} style={{ height: '100vh' }}>
                    <Text pt={30} size="md" my="sm">Biography</Text>
                    <Text fw={500} size="xl">Who We Are</Text>
                    <Text size="md" my="sm" style={{ width: '80%' }}>Lorem Media is a full-service social media agency. We offer businesses innovative solutions that deliver the right type of audience to you in the most effective strategies possible. We strive to develop a community around your business, polishing your branding, and improving your public relations.
                        Social Media is now one of the most powerful marketing tools with the ability to communicate with a target audience in real time.

                        It's 2019: time to sink or swim.

                        We are your Social Media Marketing Agency.</Text>
                </Grid.Col>
                <Grid.Col xs={12} lg={12}>
                <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <Grid pt="lg" m={0} px={0}>
          <Grid.Col xs={12} lg={12} style={{height:"10vh"}}></Grid.Col>
          <Grid.Col xs={6} lg={6}>
            <Image fit="contain" src={VaccinationResearch}/> 
          </Grid.Col>
          <Grid.Col xs={6} lg={6} style={{height:"100vh"}}>
          <Title style={{fontFamily:"sans-serif",fontSize:"72px",color:"rgba(128, 128, 128, 1)",margin:"30px"}}>
                Ask Your Queries
            </Title>
          <Text style={{fontFamily:"sans-serif",fontSize:"18px",height:"8vh",color:"rgba(128, 128, 128, 1)",margin:"30px"}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since.
            </Text>
          <Container>
          <TextInput my="md" px="120px" style={{height:"6vh"}} placeholder="Enter Your Mail" {...form.getInputProps('email')} />
          <Select my="md" px="120px" style={{height:"6vh"}} placeholder="Pick Your Role" data={[
            { value: 'Patient', label: 'Patient' },
            { value: 'Doctor', label: 'Doctor' },
            { value: 'Staff', label: 'Staff' },
          ]}
          {...form.getInputProps('Role')}/>
          <Textarea my="md" px="120px" style={{height:"10vh"}}  placeholder="Enter Your Queries" minRows={2} {...form.getInputProps('Message')}></Textarea>
          <button style={{padding:"10px 20px",borderRadius:"7px",textDecoration:"none",borderColor:"rgba(139, 127, 194, 1)",color:"white",position:"relative",overflow:"hidden",background:"rgba(139, 127, 194, 1)",cursor:"pointer",left:"43%"}}>Send</button>
          </Container>
          </Grid.Col>
          <Grid.Col xs={12} lg={12}><Divider /></Grid.Col>
        </Grid>
      </form>
                </Grid.Col>
            </Grid>

}
{
    active===6 && <SignUp/>
}

            <div>
                <CustomFooter setActive={setActive} active={active} />
            </div>
            

        </>

    )
}