import React from "react";
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

import { useState } from "react";
import { PasswordInput } from "@mantine/core";
import person from "../../../assests/person.svg"

export default function SignUp() {
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [value, setValue] = useState(null);

  const form = useForm({
    initialValues: {
      fname: "",
      lname: "",
      email: "",
      mobile: "",
      gender: "",
      password: "",
      confirmPassword: "",
      nic: "",
      address: "",
      dob: ""
    },
    validate: {
      fname: (value) =>
        value.length < 2 ? "First Name must have at least 2 letters" : null,
      lname: (value) =>
        value.length < 1 ? "Last Name must have at least 1 letter" : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      mobile: (value) =>
        value.length !== 10 ? "Mobile number should have 10 digits" : null,
      password: (value) =>
        value.length < 6 ? "Password should contain atleast 6 letters" : null,
      confirmPassword: (value, values) =>
        value !== values.password||value==="" ? "Passwords did not match" : null,
      nic: (value) => (value.length < 1 ? "NIC field cannot be blank" : null),
      address: (value) => (value.length < 1 ? "Address cannot be blank" : null),
      dob: (value) => (value==="" ? "Add date of birth" : null),
      gender: (value) =>(value===""? "Select gender":null)
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

      
    </Grid>
    <Grid pt="lg" m={0} px={0}>
    
      <Grid.Col
         xs={6} lg={6} style={{ height: '25vh' }}
        
      >
        <h1 pt={30} size="lg" mb="md" my="sm">Sign Up</h1>
        <h2 pt={30} size="lg" mb="md" my="sm">Please Sign Up To Continue</h2>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nemo quasi
          delectus facilis, animi officia laboriosam incidunt qui temporibus
          nobis?
        </Text>
            
      
      </Grid.Col>

    </Grid>
    <Grid pt="lg" m={0} px={0}>
      <Grid.Col>
      <div style={{ display: 'flex', justifyContent: 'flex-end',  marginLeft: 'auto' }}>
        
        <Button color="violet" radius="md" size="md" >
      PATIENT
    </Button>
    </div>
      </Grid.Col>
    </Grid>

    {/* <Container size="lg" px="xs"  > */}
    <form onSubmit={form.onSubmit(console.log)}>
    <Grid  pt="lg" m={0} px={0}>
      <Grid.Col
       
        xs={6}
        lg={6}
        style={{
         
        }}
      >
        <TextInput radius="md" placeholder="First Name" {...form.getInputProps("fname")} />
      </Grid.Col>
      <Grid.Col
       
        xs={6}
        lg={6}
        style={{
          
        }}
      >
        <TextInput radius="md" placeholder="Last Name" {...form.getInputProps("lname")} />
      </Grid.Col>
      <Grid.Col
        
        xs={6}
        lg={6}
        style={{
          
        }}
      >
        <TextInput radius="md"
          
          placeholder="Email"
          {...form.getInputProps("email")}
        />
      </Grid.Col>
      <Grid.Col
        
        xs={6}
        lg={6}
        style={{
          
        }}
      >
        <TextInput radius="md"
         
          placeholder="Mobile Number"
          {...form.getInputProps("mobile")}
        />
      </Grid.Col>
      <Grid.Col
        
        xs={6}
        lg={6}
        style={{
         
        }}
      >
        <TextInput
          radius="md"
          placeholder="NIC"
          {...form.getInputProps("nic")}
        />
      </Grid.Col>
      <Grid.Col
        
        xs={6}
        lg={6}
        style={{
          
        }}
      >
        <DatePickerInput
        {...form.getInputProps("dob")}  
      
      placeholder="Date of Birth"
      radius="md"
      value={value}
      onChange={setValue}
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
        {...form.getInputProps("gender")}
        
      ]}
    />
      </Grid.Col>
      <Grid.Col xs={4} lg={4} >
        <PasswordInput
        radius="md"
          placeholder="Password"
          {...form.getInputProps("password")}
        />
      </Grid.Col>
      <Grid.Col xs={4} lg={4}>
        <PasswordInput
        radius="md"
          
          placeholder="Confirm password"
          {...form.getInputProps("confirmPassword")}
        />
      </Grid.Col>
      <Grid.Col xs={12} lg={12}>
        <Textarea
         radius="md"
          placeholder="Address"
          {...form.getInputProps("address")}
        />
      </Grid.Col>
      <Grid.Col xs={12} lg={12} pt="lg" m={0} px={0} style={{ paddingTop: '35px', paddingBottom: '60px' }} >
      <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Button type="submit" color="violet" radius="md" size="md"  >
      REGISTER
    </Button>
    </div>
      </Grid.Col>
    </Grid>
    </form>
    {/* </Container> */}
    </>
  );
}
