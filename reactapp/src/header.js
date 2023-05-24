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
import Logo from './assests/hospitalLogo.svg'

export default function CustomHeader() {
    return (
        <Box p="md"  sx={{position:'fixed',width:'100%',
        // backgroundColor:'#ADD8E6',
        zIndex:2}}>
            {/* <Header height={60} px="md"> */}
            <Flex direction="row" justify="space-between">
                <div style={{ display: 'flex', }}>
                    <Image width={20} height={20} src={Logo} />
                    <Text pl="xs" fw={500}>MediLab Hospital</Text>
                </div>
                <div style={{ display: 'flex', }}>
                    <Text px="sm" fw={500} style={{ cursor: 'pointer' }}>Home</Text>
                    <Text px="sm" fw={500} style={{ cursor: 'pointer' }}>Services</Text>
                    <Text px="sm" fw={500} style={{ cursor: 'pointer' }}>About us</Text>
                    <Text px="sm" fw={500} style={{ cursor: 'pointer' }}>Contact us</Text>
                </div>
                <div style={{ display: 'flex', }}>
                    <Button mr="md" size="xs" radius="10px" sx={{ background: "linear-gradient(#9083D5, #807593)" }} >SignIn</Button>
                    <Button size="xs" radius="10px" style={{ background: "linear-gradient(#9083D5, #807593)" }}>SignUp</Button>
                </div>

            </Flex>

            {/* </Header> */}

        </Box>
    )
}