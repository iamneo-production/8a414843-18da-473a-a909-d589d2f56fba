import { TextInput, Checkbox, Button, Group, Box } from '@mantine/core';
import { useForm } from '@mantine/form';
import { post } from '../../api';
import EndPoints from '../../api/endPoints';

const ForgetPassword = ({onSubmit}) => {
    const handleSubmit = async() => {
        const data = form.values
        console.log("fromRegister",data)
    
        await post(EndPoints.forgetPassword,data).then((response)=>{
          console.log(response.data);
        }).catch(error =>{
          console.log(error);
        })
        onSubmit();    
      }
    const form = useForm({
    initialValues: {
      email: '',
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });
  

  return (
    <Box maw={400} mx="auto">
       <form onSubmit={form.onSubmit((values) => { handleSubmit() })}>
        <TextInput
          withAsterisk
          label="Email"
          placeholder="your@email.com"
          {...form.getInputProps('email')}
        />

        <Checkbox
          mt="md"
          label="I Confirm to Send Otp"
          {...form.getInputProps('termsOfService', { type: 'checkbox' })}
        />

        <Group position="right" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
}
export default ForgetPassword;