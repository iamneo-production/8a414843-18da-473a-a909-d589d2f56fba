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

export default function CustomHeader(props) {
    const { active, setActive } = props
    console.log('active', active);
    return (
        <Box p="md" sx={{
            position: 'fixed', width: '100%',
            backgroundColor:'#ADD8E6',
            zIndex: 2
        }}>
            {/* <Header height={60} px="md"> */}
            <Flex direction="row" justify="space-between">
                <div style={{ display: 'flex', }}>
                    <Image width={20} height={20} src={Logo} />
                    <Text pl="xs" fw={500} style={{ dropShadow: "0px 4px 4px 0px #000000 25%" }}>MediLab Hospital</Text>
                </div>
                <div style={{ display: 'flex', }}>
                    <Text px="sm" fw={500} onClick={() => {
                        setActive(1)
                    }} style={{ background: active === 1 ? "linear-gradient(#C5DCFF 100%,#C5DCFF 50%,#C4C4C4 0%)" : "", cursor: 'pointer', borderRadius: '5px' }}>Home</Text>
                    <Text px="sm" fw={500} onClick={() => {
                        setActive(2)
                    }} style={{ background: active === 2 ? "linear-gradient(#C5DCFF 100%,#C5DCFF 50%,#C4C4C4 0%)" : "", cursor: 'pointer', borderRadius: '5px' }}>Services</Text>
                    <Text px="sm" fw={500} onClick={() => {
                        setActive(3)
                    }} style={{ background: active === 3 ? "linear-gradient(#C5DCFF 100%,#C5DCFF 50%,#C4C4C4 0%)" : "", cursor: 'pointer', borderRadius: '5px' }}>About us</Text>
                    <Text px="sm" fw={500} onClick={() => {
                        setActive(4)
                    }} style={{ background: active === 4 ? "linear-gradient(#C5DCFF 100%,#C5DCFF 50%,#C4C4C4 0%)" : "", cursor: 'pointer', borderRadius: '5px' }}>Contact us</Text>
                </div>
                <div style={{ display: 'flex', }}
                >
                    <Button mr="md" size="xs" radius="10px"
                        sx={{
                            backgroundColor: "#ffffff", color: "#000000",
                            "&:hover": {
                                backgroundColor: "#ffffff", color: "#000000",
                            }
                        }}
                    
                        onClick={()=>{
                            setActive(5)
                        }}
                    >SignIn</Button>
                    <Button size="xs" radius="10px" style={{ background: "linear-gradient(#9083D5, #807593)" }}
                    onClick={()=>{
                        setActive(6)
                    }}
                    >SignUp</Button>
                </div>

            </Flex>

            {/* </Header> */}

        </Box>
    )
}