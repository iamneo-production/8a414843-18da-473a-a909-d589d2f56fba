
import {
    Card,
    Button,
    TextInput,
    Select,
    Grid,
    Col,
    Title,
    Container,
    Modal
  } from "@mantine/core";
  import { useForm } from "@mantine/form";
  import { Textarea } from "@mantine/core";
  import { DatePickerInput } from "@mantine/dates";
  import { useState } from "react";
  
  import { TimeInput } from "@mantine/dates";
  import { IconCalendar, IconClock2 } from "@tabler/icons-react";

export default function AppointmentModal(props) {
    
    const{open, close}=props
    const form = useForm({
        initialValues: {
          name: "",
          mobile: "",
          email: "",
          dob: null,
          gender: "",
          appointmentDate: null,
          time: "",
          dept: "",
          doctor: "",
          address: "",
        },
        validate: {
          name: (value) =>
            value.length < 2 ? "Name should contain atleast two letters" : null,
          mobile: (value) =>
            value.length !== 10 ? "Mobile number should contain 10 digits" : null,
          email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
          dob: (value) => (!value ? "Please select date of birth" : null),
          gender: (value) => (value === "" ? "Choose Gender" : null),
          date: (value) => (!value ? "Please select an appointment date" : null),
          time: (value) => (value === "" ? "Choose Appointment Time" : null),
          dept: (value) => (value === "" ? "Choose Department" : null),
          doctor: (value) => (value === "" ? "Choose Doctor" : null),
          address: (value) => (value.length < 1 ? "Address cannot be blank" : null),
        },
      });
  return (
    <>
 <Modal size="lg" opened={open} onClose={close} >
 <div
    //   style={{
    //     backgroundColor: "#CCCCCC",
    //     paddingLeft: "150px",
    //     paddingTop: "67px",
    //     paddingBottom: "30px",
    //   }}
    >
      {/* <Card bg="white" radius="lg" m={30} px={10}> */}
        <form onSubmit={form.onSubmit(console.log)}>
          <Grid m={0} px={10}>
            <Grid.Col xs={12} lg={12}>
              <div style={{ display: "flex", color: "grey" }}>
                <Title mb="md">Appointment</Title>
              </div>
            </Grid.Col>
          </Grid>
          <Grid pt="xs" m={0} px={40}>
            <Grid.Col xs={6} lg={6}>
              <TextInput
                radius="md"
                placeholder="Full Name"
                {...form.getInputProps("name")}
              />
            </Grid.Col>
            <Grid.Col xs={6} lg={6}>
              <TextInput
                radius="md"
                placeholder="Mobile Number"
                {...form.getInputProps("mobile")}
              />
            </Grid.Col>

            <Grid.Col xs={6} lg={6}>
              <TextInput
                radius="md"
                placeholder="Email"
                {...form.getInputProps("email")}
              />
            </Grid.Col>
            <Grid.Col xs={6} lg={6} style={{}}>
              <DatePickerInput
                placeholder="Date of Birth"
                {...form.getInputProps("dob")}
                icon={<IconCalendar />}
              />
              
            </Grid.Col>

            <Grid.Col xs={4} lg={4}>
              <Select
                placeholder="Gender"
                {...form.getInputProps("gender")}
                radius="md"
                data={[
                  { value: "male", label: "Male" },
                  { value: "female", label: "Female" },
                  { value: "other", label: "Other" },
                ]}
              />
            </Grid.Col>
            <Grid.Col xs={4} lg={4}>
              <DatePickerInput
                radius="md"
                placeholder="Appointment Date"
                {...form.getInputProps("date")}
                icon={<IconCalendar />}
                mx="auto"
              />
            </Grid.Col>
            <Grid.Col xs={4} lg={4}>
              <TimeInput
                radius="md"
                icon={<IconClock2 />}
                placeholder="Appointment Time"
                {...form.getInputProps("time")}
              />
            </Grid.Col>

            <Grid.Col xs={6} lg={6}>
              <Select
                placeholder="Department Name"
                {...form.getInputProps("dept")}
                radius="md"
                data={[
                  { value: "x", label: "X" },
                  { value: "y", label: "Y" },
                  { value: "z", label: "Z" },
                ]}
              />
            </Grid.Col>
            <Grid.Col xs={6} lg={6}>
              <Select
                placeholder="Doctor Name"
                {...form.getInputProps("doctor")}
                radius="md"
                data={[
                  { value: "x", label: "X" },
                  { value: "y", label: "Y" },
                  { value: "z", label: "Z" },
                ]}
              />
            </Grid.Col>

            <Grid.Col xs={12} lg={12}>
              <Textarea
                radius="md"
                placeholder="Address"
                {...form.getInputProps("address")}
              />
            </Grid.Col>
            <Grid.Col
              xs={12}
              lg={12}
              pt="lg"
              m={0}
              px={0}
              style={{ paddingTop: "35px", paddingBottom: "40px" }}
            >
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Button
                  type="submit"
                  radius="md"
                  size="md"
                  style={{ backgroundColor: "#9370DB" }}
                >
                  REGISTER
                </Button>
              </div>
            </Grid.Col>
          </Grid>
        </form>
      {/* </Card> */}
    </div>
      </Modal>
    </>
  )
}
