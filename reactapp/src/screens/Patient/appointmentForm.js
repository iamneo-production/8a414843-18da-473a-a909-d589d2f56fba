import {
  Card,
  Button,
  TextInput,
  Select,
  Grid,
  Col,
  Title,
  Container,
  Modal,
} from "@mantine/core";
import { useState } from "react";
import { DatePickerInput } from "@mantine/dates";
import { TimeInput } from "@mantine/dates";
import { IconCalendar, IconClock2 } from "@tabler/icons-react";
import axios from "axios";

export default function ModalForm({ onCloseModal, patientId }) {
  const [patient, setPatient] = useState({
    issue: "",
    doctorId: "",
    date: null,
    time: null,
    patientId: patientId, // Set the patientId as the default value
  });

  const { doctorId, date, time, issue } = patient;

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setPatient((prevPatient) => ({
      ...prevPatient,
      [name]: value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/api/appointment", patient);
    onCloseModal();
  };

  return (
    <>
      <Grid m={0} px={10} pb="xl" pt="xl">
        <Grid.Col xs={12} lg={12}>
          <div style={{ display: "flex", color: "grey" }}>
            <Title mb="md">Appointment</Title>
          </div>
        </Grid.Col>
      </Grid>

      <form onSubmit={(e) => onSubmit(e)}>
        <Grid pt="xl" pb="xl" m={0} px={40}>
          <Grid.Col xs={12} lg={12} pb="xl">
            <TextInput
              value={issue}
              name="issue"
              onChange={onInputChange}
              radius="md"
              placeholder="Issue"
            />
          </Grid.Col>

          <Grid.Col xs={6} lg={6} pb="xl">
            <TextInput
              value={patientId}
              name="patientId"
              disabled
              radius="md"
              placeholder="Patient Id"
            />
          </Grid.Col>

          <Grid.Col xs={6} lg={6} pb="xl">
            
            
            <Select
              value={doctorId}
              name="doctorId"
              onChange={(value) =>
                onInputChange({ target: { name: "doctorId", value } })
              }
              placeholder="Doctor Id"
              radius="md"
              data={[
                { value: "1", label: "1" },
                { value: "2", label: "2" },
                { value: "3", label: "3" },
              ]}
            />
          </Grid.Col>
          <Grid.Col xs={6} lg={6} pt="xl" pb="xl">
            <DatePickerInput
              value={date}
              name="date"
              onChange={(value) =>
                onInputChange({ target: { name: "date", value } })
              }
              radius="md"
              placeholder="Date"
              icon={<IconCalendar />}
              mx="auto"
            />
          </Grid.Col>
          {/* <Grid.Col xs={6} lg={6} pt="xl" pb="xl">
            <TimeInput
              value={time}
              name="time"
              onChange={(value) =>
                onInputChange({ target: { name: "time", value } })
              }
              radius="md"
              icon={<IconClock2 />}
              placeholder="Time"
            />
          </Grid.Col> */}
          <Grid.Col xs={6} lg={6} pt="xl" pb="xl">
             <TimeInput
               value={time}
               name="time"
               onChange={(e) => onInputChange(e)}
               radius="md"
               icon={<IconClock2 />}
               placeholder="Time"
               // {...form.getInputProps("time")}
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
    </>
  );
}