import {
    Text,
    Image,
    Header,
    Group,
    Button,
    Box,
} from '@mantine/core';

export default function CustomHeader() {
    return (
        <Box>
        <Header height={60} px="md">
            <Group position="apart">
                <Text fw={500}>Hospital</Text>
                <div style={{display:'flex',}}>
                <Text px="sm" fw={500}>Home</Text>
                <Text px="sm" fw={500}>Services</Text>
                <Text px="sm" fw={500}>About us</Text>
                <Text px="sm" fw={500}>Contact us</Text>
                    </div>
                <Button>SignUp</Button>

            </Group>
        </Header>
        </Box>
    )
}