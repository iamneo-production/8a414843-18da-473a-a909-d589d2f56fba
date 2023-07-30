import React from "react";
import { useForm } from '@mantine/form';
import { useDisclosure } from "@mantine/hooks";
import { Box,TextInput,Group,Button } from "@mantine/core";
import { PasswordInput } from "@mantine/core";
import { put } from "../../api";
import EndPoints from "../../api/endPoints";
const ResetPassword = () =>{
    const handleSubmit = async() => {
        const data = form.values
        console.log("resetPassword",data)
    
        await put(EndPoints.resetPassword,data).then((response)=>{
          console.log(response.data);
        }).catch(error =>{
          console.log(error);
        })
    
      }
    const form = useForm({
        initialValues: {
          email: '',
          password:'',
          newPassword:''
        },
    
        validate: {
          email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
          password:(value) => value.length < 8 ? "Password should contain length atleast of 8" : null,
          newPassword:(value) => value.length < 8 ? "Password should contain length atleast of 8" : null,
        },
      });
      const [visible, { toggle }] = useDisclosure(false);
      return (
        <Box maw={400} mx="auto">
          <form onSubmit={form.onSubmit((values) => {
                    handleSubmit()
                  })}>
            <TextInput
              withAsterisk
              label="Email"
              placeholder="your@email.com"
              {...form.getInputProps('email')}
            />
             <PasswordInput
                label="Old Password"
                defaultValue="secret"
                visible={visible}
                onVisibilityChange={toggle}
                {...form.getInputProps('password')}
            />
            <PasswordInput
                label="New Password"
                defaultValue="secret"
                visible={visible}
                onVisibilityChange={toggle}
                {...form.getInputProps('newPassword')}
            />
            <Group position="right" mt="md">
              <Button type="submit">Submit</Button>
            </Group>
          </form>
        </Box>
      );
}

export default ResetPassword;