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
    Divider
} from '@mantine/core';
import VaccinationResearch from "../../assests/VaccinationResearch .svg"
import TwoPersonImage from "../../assests/Twoperson.png"
import CustomFooter from '../../components/footer/index'


export default function HomeScreen() {

    const [active, setActive] = useState(1)
    return (
        <>
            <div>
                <CustomHeader setActive={setActive} active={active} />
            </div>


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
                <Grid.Col xs={12} lg={12}><Divider /></Grid.Col>
            </Grid>

            <div>
                <CustomFooter setActive={setActive} active={active} />
            </div>

        </>

    )
}