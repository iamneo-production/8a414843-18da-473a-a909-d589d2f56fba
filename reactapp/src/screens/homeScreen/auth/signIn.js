import { TextInput, PasswordInput, Image, Container, Select } from '@mantine/core';
import { useForm } from '@mantine/form';
import { Grid, Title } from '@mantine/core';
import { Text } from '@mantine/core';
import SignInimage from "../../../assests/signIniamge.svg"
import person from "../../../assests/person.svg"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logins } from '../../../provider/features/userSlice';

function SignIn() {

    const navigate=useNavigate()
    const dispatch=useDispatch()

    const form = useForm({
        initialValues: {
            email: '',
            password: '',
            Role: '',
        },
        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
        },
    });
    return (
        <form onSubmit={form.onSubmit((values) => {
            console.log(values)
            if(values?.Role==="Patient"){
                dispatch(logins('patient'))
                // localStorage.setItem('Role','patient')
                navigate('/patient/home')
            }else if(values?.Role==="Doctor"){
                dispatch(logins('doctor'))
                // localStorage.setItem('Role','doctor')
                navigate('/doctor/home')
            }else if(values?.Role==="Staff"){
                dispatch(logins('staff'))
                // localStorage.setItem('Role','staff')
                navigate('/staff/home')
            }else if(values?.Role==="Admin"){
                dispatch(logins('admin'))
                // localStorage.setItem('Role','admin')
                navigate('/admin/home')
            }
            
            })}>
             <Grid pt="lg" m={0} px={0}>
    <Grid.Col xs={6} lg={6} style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItem: 'center', height: '100vh' }} >
                    <Title mb="md">We Help People to get Appointment in Online</Title>
                    <Text>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus delectus nihil consequatur? Temporibus enim, vel id dolor minus nulla cum quod ipsa dicta quibusdam accusamus voluptatem dignissimos quos odit. Adipisci nisi neque repellat reiciendis vero expedita! Ratione tempora quia repellendus!
              
                        </Text>
                </Grid.Col>

                <Grid.Col xs={6} lg={6} style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItem: 'center', height: '100vh' }}>

                    <Image pb={100} height={710} src={person} />

                </Grid.Col>
                <Grid.Col xs={12} lg={12} style={{ height: '30vh' }}></Grid.Col>
                <Grid.Col xs={6} lg={6} style={{ justifyContent: "center", alignItems: "center" }}>
                    <Title style={{ fontFamily: "sans-serif", fontSize: "72px", color: "rgba(128, 128, 128, 1)", margin: "30px" }}>
                        Sign In
                    </Title>
                    <Text my="md" style={{ fontFamily: "sans-serif", fontSize: "36px", color: "rgba(128, 128, 128, 1)", margin: "30px" }}>
                        Please Login To Continue
                    </Text>
                    <Text style={{ fontFamily: "sans-serif", fontSize: "18px", height: "8vh", color: "rgba(128, 128, 128, 1)", margin: "30px" }}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since.
                    </Text>
                    <Container>
                        <Select style={{ height: "6vh" }} placeholder="Pick Your Role" px="140px" data={[
                            { value: 'Patient', label: 'Patient' },
                            { value: 'Doctor', label: 'Doctor' },
                            { value: 'Staff', label: 'Staff' },
                            { value: 'Admin', label: 'Admin' },]}{...form.getInputProps('Role')} />
                        <TextInput mt="md" px="140px" style={{ height: "6vh" }}
                            placeholder="Email"
                            {...form.getInputProps('email')}
                        />
                        <PasswordInput my="md" px="140px" style={{ height: "7vh" }}
                            placeholder="Password"
                            {...form.getInputProps('password')}
                        />
                        <button type='submit' style={{ padding: "10px 20px", borderRadius: "7px", textDecoration: "none", borderColor: "rgba(139, 127, 194, 1)", color: "white", position: "relative", overflow: "hidden", background: "rgba(139, 127, 194, 1)", cursor: "pointer", left: "42%" }}>Sign In</button>
                    </Container>
                </Grid.Col>
                <Grid.Col xs={6} lg={6}>
                    <Image fit="contain" src={SignInimage} />
                </Grid.Col>
            </Grid>
        </form>
    );
}
export default SignIn;