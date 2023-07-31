import {
    Text,
    Image,
    Header,
    Group,
    Button,
    Box,
    TextInput,
    Select,
    Flex
} from '@mantine/core';
import Logo from "../../assests/hospitalLogo.svg"
import Phone from "../../assests/phone.svg"
import Email from "../../assests/mail.svg"
import Location from "../../assests/location.svg"
import { FooterSocial } from './footerSocial';


export default function CustomFooter(props) {
    const { active, setActive } = props
    return (
        <>

            <Box p="md" sx={{
                // position: 'fixed', width: '100%',
                backgroundColor:'#ADD8E6',
                zIndex: 2,
                
            }}>
                {/* <Header height={60} px="md"> */}
                <Flex direction="row" justify="space-between">
                    <div style={{ display: 'flex', }}>
                        <Image width={20} height={20} src={Logo} />
                        <Text pl="xs" fw={500} style={{ dropShadow: "0px 4px 4px 0px #000000 25%" }}>MediLab Hospital</Text>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>

                        <Text pb="md" px="sm" fw={700} >Top Features</Text>
                        <Text px="sm" fw={500} >OPD & IPD Management</Text>
                        <Text px="sm" fw={500} >Appointments</Text>
                        <Text px="sm" fw={500} >Online Payments</Text>
                        <Text px="sm" fw={500} >Website for Hospital</Text>
                        <Text px="sm" fw={500} >Doctor Portal</Text>
                        <Text px="sm" fw={500} >Patient Portal</Text>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>

                        <Text pb="md" px="sm" fw={700} >Solutions</Text>
                        <Text px="sm" fw={500} >Hospital Software</Text>
                        <Text px="sm" fw={500} >Clinic Software </Text>
                        <Text px="sm" fw={500} >EHR EMR Software </Text>
                        <Text px="sm" fw={500} >Practice Management Software </Text>
                        <Text px="sm" fw={500} >Dental Clinic Software</Text>
                        <Text px="sm" fw={500} >Aesthetics Clinic Software</Text>

                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <Text pb="md" px="sm" fw={700} >Get in Touch</Text>
                        <div style={{ display: 'flex', }}>
                            <Image height={15} width={15} src={Phone} />
                            <Text pb="md" px="sm" fw={500} >8870226563</Text>
                        </div>

                        <div style={{ display: 'flex', }}>
                            <Image height={15} width={15} src={Email} />
                            <Text pb="md" px="sm" fw={500} >info@gmail.com</Text>
                        </div>
                        <div style={{ display: 'flex', }}>
                            <Image height={15} width={15} src={Location} />
                            <Text pb="md" px="sm" fw={500} >Chennai</Text>
                        </div>
                    </div>
                    {/* <div style={{ display: 'flex', }}>
                        <Button mr="md" size="xs" radius="10px"
                            sx={{
                                backgroundColor: "#ffffff", color: "#000000",
                                "&:hover": {
                                    backgroundColor: "#ffffff", color: "#000000",
                                }
                            }}
                        >SignIn</Button>
                        <Button size="xs" radius="10px" style={{ background: "linear-gradient(#9083D5, #807593)" }}>SignUp</Button>
                    </div> */}
                 
                </Flex>
                <FooterSocial/>

                {/* </Header> */}

            </Box>
        </>
    )
}