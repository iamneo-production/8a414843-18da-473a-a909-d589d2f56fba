import React, { useState } from "react";
// import {
//     IconCalendar,
//     IconInfoCircle,
//     IconTrashFilled,
// } from "@tabler/icons-react"


import {
  Text,
  Image,
  Header,
  Group,
  Button,
  Box,
  TextInput,
  Select,
  Grid,
  Col,
  Title,
  Container,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { Textarea } from "@mantine/core";
// import "dayjs/locale/ru";
import { DatePickerInput } from '@mantine/dates';
import {
  DatesProvider,
  MonthPickerInput,

} from "@mantine/dates";

// import { DatePickerInput } from '@mantine/dates';

import { PasswordInput } from "@mantine/core";
import person from "../../../assests/person.svg"
import EndPoints from "../../../api/endPoints";
import { post } from "../../../api";
import {ISOStringConversion} from "../../../components/utils/index"

export default function SignUp() {

  const [dob,setDob] = useState(null)
 
  const handleSubmit = async() => {
    const data = form.values
    // data.dob=ISOStringConversion(form.values.dob)
    data.roles="ROLE_PATIENT"
    console.log("fromRegister",data)

    await post(EndPoints.register,data).then((response)=>{
      console.log(response.data);
    }).catch(error =>{
      console.log(error);
    })

  }



  const form = useForm({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      gender: "",
      password: "",
      confirmPassword: "",
      age: "",
      address: "",
      dob: null
    },
    validate: {
      firstName: (value) =>
        value.length < 2 ? "First Name must have at least 2 letters" : null,
      lastName: (value) =>
        value.length < 1 ? "Last Name must have at least 1 letter" : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      phone: (value) =>
        value.length !== 10 ? "Mobile number should have 10 digits" : null,
      password: (value) =>
        value.length < 6 ? "Password should contain atleast 6 letters" : null,
      confirmPassword: (value, values) =>
        value !== values.password || value === "" ? "Passwords did not match" : null,
      age: (value) => (value.length < 1 ? "Age cannot be blank" : null),
      address: (value) => (value.length < 1 ? "Address cannot be blank" : null),
      dob: (value) => (value === "" ? "Add date of birth" : null),
      gender: (value) => (value === "" ? "Select gender" : null)
    },
  });
  
  return (
    <Container  size="xl" px="xs">

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


      </Grid>
      <Grid pt="lg" m={0} px={0}>

        <Grid.Col
          xs={6} lg={6} style={{ height: '25vh' }}

        >
          <h1 pt={30} size="lg" mb="md" my="sm">Sign Up</h1>
          <h2 pt={30} size="lg" mb="md" my="sm">Please Sign Up To Continue</h2>
          <Text mb="md" my="sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nemo quasi
            delectus facilis, animi officia laboriosam incidunt qui temporibus
            nobis?
          </Text>


        </Grid.Col>

      </Grid>
      {/* <Grid pt="lg" m={0} px={0}>
        <Grid.Col>
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginLeft: 'auto' }}>

            <Button color="violet" radius="md" size="md" >
              PATIENT
            </Button>
          </div>
        </Grid.Col>
      </Grid> */}

      <Container size="lg" px="xs"  mb="md" my="xl"  >
        <form onSubmit={form.onSubmit((values) => {
                    handleSubmit()
                  })}>
          <Grid pt="lg" m={0} px={0}>
            <Grid.Col xs={6} lg={6}>
              <TextInput radius="md" placeholder="First Name" {...form.getInputProps("firstName")} />
            </Grid.Col>
            <Grid.Col xs={6} g={6}>
              <TextInput radius="md" placeholder="Last Name" {...form.getInputProps("lastName")} />
            </Grid.Col>
            <Grid.Col xs={6} lg={6}>
              <TextInput radius="md" placeholder="Email" {...form.getInputProps("email")} />
            </Grid.Col>
            <Grid.Col xs={6} lg={6}>
              <TextInput radius="md" placeholder="Mobile Number" {...form.getInputProps("phone")}/>
            </Grid.Col>
            <Grid.Col xs={6} lg={6} >
              <TextInput radius="md" placeholder="AGE" {...form.getInputProps("age")}/>
            </Grid.Col>
            <Grid.Col xs={6} lg={6} >
              <DatePickerInput
                // {...form.getInputProps("dob")}
                value={dob}
                onChange={(e)=>{
                  setDob(e)
                  form.setFieldValue("dob",ISOStringConversion(e))
                }}  
                placeholder="Date of Birth"
                radius="md"
                required
              />
            </Grid.Col>
            <Grid.Col xs={4} lg={4}>
              <Select
                placeholder="Gender"
                required
                radius="md"
                data={[
                  { value: 'male', label: 'Male' },
                  { value: 'female', label: 'Female' },
                  { value: 'other', label: 'Other' },
                ]}{ ...form.getInputProps("gender") }
              />
            </Grid.Col>
            <Grid.Col xs={4} lg={4} >
              <PasswordInput radius="md" placeholder="Password" {...form.getInputProps("password")}/>
            </Grid.Col>
            <Grid.Col xs={4} lg={4}>
              <PasswordInput radius="md" placeholder="Confirm password" {...form.getInputProps("confirmPassword")}/>
            </Grid.Col>
            <Grid.Col xs={12} lg={12}>
              <Textarea radius="md" placeholder="Address" {...form.getInputProps("address")}/>
            </Grid.Col>
            <Grid.Col xs={12} lg={12} pt="lg" m={0} px={0} style={{ paddingTop: '35px', paddingBottom: '60px' }} >
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button type="submit" radius="md" size="md" style={{ background: "linear-gradient(#9083D5, #807593)" }}>
                  REGISTER
                </Button>
              </div>
            </Grid.Col>
          </Grid>
        </form>
      </Container>
    </Container>
  );
}
