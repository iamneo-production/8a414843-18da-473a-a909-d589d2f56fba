import { TextInput,PasswordInput,Image, Container ,Select } from '@mantine/core';
import { useForm } from '@mantine/form';
import { Grid, Title } from '@mantine/core';
import { Text } from '@mantine/core';
import SignInimage from "../../../assests/signIniamge.svg"
import person from "../../../assests/person.svg"

function SignIn(){
    const form = useForm({
        initialValues: {
          email: '',
          password: '',
          Role:'',
        },    
        validate: {
          email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
        },
      });
    return(
<form onSubmit={form.onSubmit((values) => console.log(values))}>
<Grid>
<Grid.Col xs={6} lg={6} mt="md" style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItem: 'center', height: '60vh'}}>
    <Title style={{fontFamily:"sans-serif",fontSize:"60px",margin:"30px"}}>
    We help people to get appointment in online
    </Title>
    <Text my="md" style={{fontFamily:"sans-serif",fontSize:"20px",margin:"30px"}}>
    Lorem Media is a full-service social media agency. We offer businesses innovative solutions that deliver the right type of audience to you in the most effective strategies possible. We strive to develop a community around your business, polishing your branding, and improving your public relations.
    </Text>
</Grid.Col>
<Grid.Col xs={6} lg={6} style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItem: 'center', height: '60vh'}}>
<Image fit='contain' src={person}/>
</Grid.Col>
<Grid.Col xs={12} lg={12} style={{height:'30vh'}}></Grid.Col>
        <Grid.Col xs={6} lg={6} style={{justifyContent:"center",alignItems:"center"}}>
            <Title style={{fontFamily:"sans-serif",fontSize:"72px",color:"rgba(128, 128, 128, 1)",margin:"30px"}}>
                Sign In
            </Title>
            <Text my="md" style={{fontFamily:"sans-serif",fontSize:"36px",color:"rgba(128, 128, 128, 1)",margin:"30px"}}>
                Please Login To Continue
            </Text>
            <Text style={{fontFamily:"sans-serif",fontSize:"18px",height:"8vh",color:"rgba(128, 128, 128, 1)",margin:"30px"}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since.
            </Text>
            <Container>
                    <Select style={{height:"6vh"}} placeholder="Pick Your Role" px="140px" data={[
                    { value: 'Patient', label: 'Patient' },
                    { value: 'Doctor', label: 'Doctor' },
                    { value: 'Staff', label: 'Staff' },
                    { value: 'Admin', label: 'Admin' },]}{...form.getInputProps('Role')}/>
                    <TextInput mt="md" px="140px" style={{height:"6vh"}}
                    placeholder="Email"
                    {...form.getInputProps('email')}
                    />
                    <PasswordInput my="md" px="140px" style={{height:"7vh"}}
                    placeholder="Password"
                    {...form.getInputProps('password')}
                    />
                    <button style={{padding:"10px 20px",borderRadius:"7px",textDecoration:"none",borderColor:"rgba(139, 127, 194, 1)",color:"white",position:"relative",overflow:"hidden",background:"rgba(139, 127, 194, 1)",cursor:"pointer",left:"42%"}}>Sign In</button>
            </Container>
        </Grid.Col>
        <Grid.Col xs={6} lg={6}>
            <Image fit ="contain" src={SignInimage}/>
        </Grid.Col>
    </Grid>
    </form>
    );
}
export default SignIn;