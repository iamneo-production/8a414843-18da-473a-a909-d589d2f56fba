import { useState } from "react";
import CustomHeader from "../../header";
import BannerCarousel from "../../components/carousel/temp";
import CustomCarousel from "../../components/carousel";
import {
    Text,
    Image,
    Rating,
    TextInput,
    Select,
    Grid,
    Title,
    Divider,
    Container,
    Textarea,
    Card,
    Avatar
} from '@mantine/core';
import { useForm } from '@mantine/form';
import VaccinationResearch from "../../assests/VaccinationResearch .svg"
import CustomFooter from '../../components/footer/index'
import SignUp from "./auth/signUp";
import SignIn from "./auth/signIn";
import SampleTable from "../../components/customTable/sampleTable"
// import PatientLayout from "../patient/layout";
import CustomLottie from '../../components/lottieFiles/customLottie'
import DoctorLottie from '../../assests/Lottiefiles/doctor.json'
import HomeLottie from '../../assests/Lottiefiles/Home.json'


export default function HomeScreen() {

    const [active, setActive] = useState(1)
    const form = useForm({
        initialValues: {
            email: '',
            Name: '',
            Number: '',
            Message: '',
            Role: ''
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
            
            {active === 1 &&
            <div>
                <div style={{paddingTop:'63px',marginBottom:"80px"}}>
                <BannerCarousel />                
                </div>
                <Container size="98%">
                <Grid>
                    <Grid.Col xs={2} lg={2}>
                        {/* <CustomLottie width="250px" height='150px' animationData={HomeLottie} /> */}
                    </Grid.Col>
                    <Grid.Col xs={8} lg={8} align="center">
                        <Container>
                            <Title fz={25} mb="xl">Welcome to our Hospital Management System</Title>
                            <Text size="lg" lineClamp={3} mt="md">
                                Our system is designed to streamline hospital operations and improve patient care. With our user-friendly
                                interface and comprehensive features, you can easily manage patient information, appointments, medical
                                records, billing, and more.
                            </Text>
                        </Container>
                    </Grid.Col>
                    <Grid.Col xs={2} lg={2}>
                    {/* <CustomLottie width="250px" height='150px' animationData={HomeLottie} /> */}
                    </Grid.Col>


                    <Grid.Col xs={1} lg={1}>
                    {/* <CustomLottie width="250px" height='150px' animationData={HomeLottie} /> */}
                    </Grid.Col>
                    <Grid.Col xs={10} lg={10}>
                        <Divider color="gray" style={{marginTop:"40px"}} />
                        <Text size={'30px'} style={{
                            textAlign: 'center',
                            textTransform: 'uppercase',
                            paddingBottom: '25px',
                            display: 'block',
                            content: "",
                            position: 'relative',
                            marginTop: '25px',
                        }}
                        >Our Specialities</Text>
                        <CustomCarousel records={record} />
                        <Divider color="gray" style={{marginTop:"10px"}} />
                    </Grid.Col>
                    <Grid.Col xs={1} lg={1}>
                    {/* <CustomLottie width="250px" height='150px' animationData={HomeLottie} /> */}
                    </Grid.Col>

                    <Grid.Col xs={12} lg={12} >
                    <Text size={'30px'} style={{
                            textAlign: 'center',
                            textTransform: 'uppercase',
                            paddingBottom: '25px',
                            display: 'block',
                            content: "",
                            position: 'relative',
                            marginTop: '20px',
                        }}
                        >What Our Patients Say</Text>
                    </Grid.Col>
                    
                    <Grid.Col xs={12} lg={12} style={{ ...containerStyle, width: '100%' }}>
                        {data.map((item, index) => (
                            <Card key={index} style={cardStyle}>
                            <Avatar size="xl" />
                            <Rating value={item.rating} max={5} style={{ marginTop: '10px' }} />
                            <p>{item.review}</p>
                            <p>{item.name}</p>
                            </Card>
                        ))}
                    </Grid.Col>

                    <Grid.Col xs={1} lg={1}>
                    {/* <CustomLottie width="250px" height='150px' animationData={HomeLottie} /> */}
                    </Grid.Col>
                    <Grid.Col xs={10} lg={10}>
                        <Divider color="gray" style={{marginTop:"30px"}} />
                        <Text size={'30px'} style={{
                            textAlign: 'center',
                            textTransform: 'uppercase',
                            paddingBottom: '25px',
                            display: 'block',
                            content: "",
                            position: 'relative',
                            marginTop: '25px',
                        }}
                        >Our Doctors</Text>
                        <CustomCarousel records={record} />
                        <Divider color="gray" style={{marginTop:"10px"}} />
                    </Grid.Col>
                    <Grid.Col xs={1} lg={1}>
                    {/* <CustomLottie width="250px" height='150px' animationData={HomeLottie} /> */}
                    </Grid.Col>

                    <Grid.Col xs={1} lg={1}/>
                    <Grid.Col xs={10} lg={10} >
                        <form onSubmit={form.onSubmit((values) => console.log(values))}>
                            <Grid>
                                <Grid.Col xs={6} lg={6}>
                                    <Image  src={VaccinationResearch} />
                                </Grid.Col>
                                <Grid.Col xs={6} lg={6}>
                                    <Title style={{ fontFamily: "sans-serif", fontSize: "56px", color: "rgba(128, 128, 128, 1)", margin: "20px" }}>
                                        Ask Your Queries
                                    </Title>
                                    <Text style={{ fontFamily: "sans-serif", fontSize: "18px", height: "8vh", color: "rgba(128, 128, 128, 1)", margin: "30px" }}>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text ever since.
                                    </Text>
                                    <Container>
                                        <TextInput my="md" px="120px" style={{ height: "6vh" }} placeholder="Enter Your Mail" {...form.getInputProps('email')} />
                                        <Select my="md" px="120px" style={{ height: "6vh" }} placeholder="Pick Your Role" data={[
                                            { value: 'Patient', label: 'Patient' },
                                            { value: 'Doctor', label: 'Doctor' },
                                            { value: 'Staff', label: 'Staff' },
                                        ]}
                                            {...form.getInputProps('Role')} />
                                        <Textarea my="md" px="120px" style={{ height: "10vh" }} placeholder="Enter Your Queries" minRows={2} {...form.getInputProps('Message')}></Textarea>
                                        <button style={{ padding: "10px 20px", borderRadius: "7px", textDecoration: "none", borderColor: "rgba(139, 127, 194, 1)", color: "white", position: "relative", overflow: "hidden", background: "rgba(139, 127, 194, 1)", cursor: "pointer", left: "43%" }}>Send</button>
                                    </Container>
                                </Grid.Col>
                                {/* <Grid.Col xs={12} lg={12}><Divider /></Grid.Col> */}
                            </Grid>
                        </form>
                    </Grid.Col>
                    <Grid.Col xs={1} lg={1}/>
                </Grid>
            </Container>
            </div>
            }
            {
                active === 6 && <SignUp />
            }
            {
                active === 5 && <SignIn />
            }
            <Divider mt="md" />
            <div>
                <CustomFooter setActive={setActive} active={active} />
            </div>
            <div>
                <FooterSocial/>
            </div>


        </>

    )
}