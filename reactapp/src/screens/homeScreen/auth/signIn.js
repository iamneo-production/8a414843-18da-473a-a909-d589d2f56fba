import { TextInput, PasswordInput, Image, Container, Select, Box, Button } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useState } from 'react';
import { Grid, Title } from '@mantine/core';
import { Text } from '@mantine/core';
import SignInimage from "../../../assests/signIniamge.svg"
import person from "../../../assests/person.svg"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logins } from '../../../provider/features/userSlice';
import { post } from '../../../api';
import EndPoints from '../../../api/endPoints';
import {setRole} from '../../../provider/features/roleSlice';
import { Modal} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import ResetPasswordWithOtp from '../../../components/password/ResetpasswordWithotp';
import ResetPassword from '../../../components/password/ResetPassword';
import ForgetPassword from '../../../components/password/ForgetPassword';
const forgotPasswordButton = { marginTop:"20px", padding: "10px 20px", 
                    borderRadius: "7px",border:"none",color: "white",   
                    position: "relative", background: "rgba(139, 127, 194, 1)", 
                    cursor: "pointer",
                    }
function SignIn() {

    const navigate=useNavigate()
    const dispatch=useDispatch()

    const handleSubmit= async() =>{
        await post(EndPoints.login,form.values).then(response=>{
            console.log(response)
            dispatch(logins(response.data))
            if(response?.data?.roles==="ROLE_PATIENT"){
                dispatch(setRole('patient'))
                // localStorage.setItem('Role','patient')
                navigate('/patient/home')
            }else if(response?.data?.roles==="ROLE_DOCTOR"){
                dispatch(setRole('doctor'))
                // localStorage.setItem('Role','doctor')
                navigate('/doctor/home')
            }else if(response?.data?.roles==="ROLE_STAFF"){
                dispatch(setRole('staff'))
                // localStorage.setItem('Role','staff')
                navigate('/staff/home')
            }else if(response?.data?.roles==="ROLE_ADMIN"){
                dispatch(setRole('admin'))
                // localStorage.setItem('Role','admin')
                navigate('/admin/home')
            } 
        }).catch(error =>{
            console.log(error);
          })
    }
    const [forgetPasswordOpened, { open: openForgetPassword, close: closeForgetPassword }] = useDisclosure(false);
    const [resetPasswordWithOtpOpened, { open: openResetPasswordWithOtp, close: closeResetPasswordWithOtp }] = useDisclosure(false);

  // Function to handle ForgetPassword 
  const handleForgetPasswordSubmit = () => {
    openResetPasswordWithOtp(); // Open ResetPassword modal
    closeForgetPassword(); // Close ForgetPassword modal
  };

  // Function to handle ResetPassword
  const handleResetPasswordWithOtpSubmit = () => {
    closeResetPasswordWithOtp(); // Close the reset Password modal
  };
    const form = useForm({
        initialValues: {
            email: '',
            password: '',
            //Role: '',
        },
        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
        },
    });
    return (
            <>
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
                    <form onSubmit={form.onSubmit((values) => { console.log(values); handleSubmit()})}>
                        {/* <Select style={{ height: "6vh" }} placeholder="Pick Your Role" px="140px" data={[
                            { value: 'Patient', label: 'Patient' },
                            { value: 'Doctor', label: 'Doctor' },
                            { value: 'Staff', label: 'Staff' },
                            { value: 'Admin', label: 'Admin' },]}{...form.getInputProps('Role')} /> */}
                        <TextInput mt="md" px="140px" style={{ height: "6vh" }}
                            placeholder="Email"
                            {...form.getInputProps('email')}
                        />
                        <PasswordInput my="md" px="140px" style={{ height: "7vh" }}
                            placeholder="Password"
                            {...form.getInputProps('password')}
                        />
                        {/* marginTop:"20px", padding: "10px 20px", position:"relative",overflow:"hidden",
                       borderRadius: "7px",border:"none",color: "white",   
                       position: "relative", background: "rgba(139, 127, 194, 1)", 
                       cursor: "pointer",left:"20%",bottom:"15%"
                        */}
                        <button type='submit' style={{ padding: "10px 20px",
                            textDecoration: "none",color: "white", borderRadius:"7px",border:"none", 
                            position: "relative", overflow: "hidden", background: "rgba(139, 127, 194, 1)", 
                            cursor: "pointer",left:"45%",bottom:"7.8%"}}>Sign In</button>
                        </form>
                        <button style={{ padding: "10px 10px",
                            textDecoration: "none",color: "white", borderRadius:"7px",border:"none", 
                            position: "relative", overflow: "hidden", background: "rgba(139, 127, 194, 1)", 
                            cursor: "pointer",left:"60%",bottom:"7.4%"}} onClick={() => {closeResetPasswordWithOtp(); // Close reset password modal if it's open
                                                openForgetPassword(); // Open forget password modal
                        }}>Forgot Password</button>
                </Grid.Col>
                <Grid.Col xs={6} lg={6}>
                    <Image fit="contain" src={SignInimage} />
                </Grid.Col>
                <Modal opened={forgetPasswordOpened} onClose={closeForgetPassword} centered>
                    <ForgetPassword onSubmit={handleForgetPasswordSubmit} />
                </Modal>

                <Modal opened={resetPasswordWithOtpOpened} onClose={closeResetPasswordWithOtp} centered>
                    <ResetPasswordWithOtp onSubmit={handleResetPasswordWithOtpSubmit} />
                </Modal>
            </Grid>
            </>
    );
}
/* style={{ padding: "10px 5px", borderRadius: "7px", 
                            textDecoration: "none", borderColor: "rgba(139, 127, 194, 1)", color: "white", 
                            position: "relative", overflow: "hidden", background: "rgba(139, 127, 194, 1)", 
                            cursor: "pointer",left:"60%",bottom:"7.8%"}} */
export default SignIn;