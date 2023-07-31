import {
    Box,
    Button,
    Grid,
    Group,
    TextInput,
    Text,
    Menu,
    Title,
    Card,
    Badge,
    Image
} from "@mantine/core";
import CustomLottie from '../../components/lottieFiles/customLottie';

export default function AboutLottie(){
    return(
     

        <Grid>
            <Grid.Col xs={6} lg={6}>
                <Title style={{ fontSize: "40px",}}>Welcome to our Hospital Management System</Title>
                <Text size="sm">Our system is designed to streamline hospital operations and improve patient care. With our user-friendly interface and comprehensive features, you can easily manage patient information, appointments, medical records, billing, and more.</Text>

            </Grid.Col>
            <Grid.Col xs={6} lg={6}>

            <CustomLottie width="250px" height='150px' animationData={HomeLottie} />
            </Grid.Col>

        </Grid>



    );
}