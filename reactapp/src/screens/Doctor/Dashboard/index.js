import React, { useState, useEffect } from "react";
import {
  Card,
  Text,
  Avatar,
  Container,
  Grid,
  Divider,
  TextInput,
  Button,
  Box,
  ScrollArea,
  Group,
  Loader
} from "@mantine/core";
import { notifications } from "@mantine/notifications";
import Calendar from "./calendar";
import appointmentLogo from "../Dashboard/appointment-icon.png";
import patientLogo from "../Dashboard/Pateint-icon.png";
import DoctorCard from "./onlinestatus";
import PatientCard from "./patientdetails";
import AppointmentRequest from "./appointmentrequest";
import TodayAppointments from "./todaysappointments";
import { useDispatch, useSelector } from "react-redux";
import EndPoints from "../../../api/endPoints";
import { get, post, put } from "../../../api/index";
// import { UserIcon } from '@modulz/radix-icons';

export default function DoctorDashboard() {
  /*  const dispatch = useDispatch()
  const user = useSelector((s) => s?.user?.value)
  console.log("userdate",user); */

  const [selectedNotification, setSelectedNotification] = useState(null);
  const[loading,setLoading]=useState(false)
  const [records, setRecords] = useState([]);
  //const [records, setRecords] = useState([]);

  const user = useSelector((s) => s?.user?.value);
  

 

  async function handleSubmit(type, id) {
    setLoading(true)
    if (type === "accept") {
      await put(`${EndPoints.updateAppointment}/${id}`, {
        appointmentStatus: "accepted",
      })
        .then((response) => {
          notifications.show({
            // title: "Success",
            title:
              "Appointment Accepted",
            color: "teal",
          });
          getUsers()
        })
        .catch((error) => {
          console.log(error);
        });
    }
    if (type === "reject") {
      await put(`${EndPoints.updateAppointment}/${id}`, {
        appointmentStatus: "rejected",
      })
        .then((response) => {
          notifications.show({
            // title: "Success",
            title:
              "Appointment Rejected",
            color: "red",
          });
          getUsers()
        })
        .catch((error) => {
          console.log(error);
        });
    }
    setLoading(false)
  }

  const getUsers = async () => {
    setLoading(true)
    await get(
      `${EndPoints.doctorAppointment}/${user?.id}?appointmentStatus=pending`
    )
      .then((response) => {
        setRecords(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
      setLoading(false)
  };

  const [patientCount,setPatientCount] = useState(null);


  const count = async() => {
    await post(EndPoints.getRolesCount,{roles:'ROLE_PATIENT'}).then((response)=>{
      setPatientCount(response.data);
      console.log(response);
  }).catch(error =>{
      console.log(error);
  })
  }


  useEffect(() => {
    count();
    getUsers();
  }, []);
  const fullName = `${user?.firstName} ${user?.lastName}`;

  return (
    <div>
      <Grid grow gutter="sm">
        <Grid.Col style={{ fontWeight: "bold" }} span={12}>
          Welcome {user?.firstName} {user?.lastName},
        </Grid.Col>
        <Grid.Col span={4}>
          <Card shadow="sm" padding="md" radius="lg">
            <Container>
              <Grid gutter="md" align="center">
                <Grid.Col span={10}>
                  <Text size="lg" weight={500} style={{ marginBottom: "8px" }}>
                    Total Patients
                  </Text>
                  <Text size="xl" weight={500}>
                    {patientCount}
                  </Text>
                </Grid.Col>
                <Grid.Col span={1} style={{ textAlign: "right" }}>
                  <img
                    src={patientLogo}
                    alt="Image"
                    style={{ maxWidth: "50px", height: "50px" }}
                  />
                </Grid.Col>
              </Grid>
            </Container>
          </Card>
        </Grid.Col>
        <Grid.Col span={4}>
          <Card shadow="sm" padding="md" radius="lg">
            <Container>
              <Grid gutter="md" align="center">
                <Grid.Col span={10}>
                  <Text size="lg" weight={500} style={{ marginBottom: "8px" }}>
                    Appointments Today
                  </Text>
                  <Text size="xl" weight={500}>
                    5{/* {totalAppointments} */}
                  </Text>
                </Grid.Col>
                <Grid.Col span={1} style={{ textAlign: "right" }}>
                  <img
                    src={appointmentLogo}
                    alt="Image"
                    style={{ maxWidth: "50px", height: "50px" }}
                  />
                </Grid.Col>
              </Grid>
            </Container>
          </Card>
        </Grid.Col>
        <Grid.Col span={4}>
          <DoctorCard doctorName={fullName} />
        </Grid.Col>
        <Grid.Col span={6}>
          {/* <Calendar/> */}
          <Card shadow="sm" padding="md" radius="lg">
            <text style={{ fontWeight: "bold" }}>Appointment Requests</text>
            <Box m="md" style={{ display: "flex", flexWrap: "wrap" }}>
              {loading?<Loader />:
              records.map((data) => (
                <Card
                  key={data.id}
                  shadow="md"
                  style={{
                    marginBottom: "16px",
                    marginRight: "16px",
                    width: "300px",
                  }}
                >
                  <Box padding="md">
                    <Text
                      weight={500}
                      style={{ marginBottom: "8px", fontSize: "18px" }}
                    >
                      {data.patient?.firstName} {data.patient?.lastName}
                    </Text>
                    <Group position="center">
                      <Text weight={500} style={{ marginRight: "8px" }}>
                        Date: {data.date}
                      </Text>
                      <Text weight={500} style={{ marginRight: "8px" }}>
                        Time: {data.time}
                      </Text>
                    </Group>
                    <Group position="center">
                      <Button
                        radius="md"
                        variant="subtle"
                        onClick={()=>{
                          handleSubmit("accept",data?.id)
                        }}
                      >
                        Accept
                      </Button>
                      <Button
                        style={{ color: "red" }}
                        radius="md"
                        variant="subtle"
                        onClick={()=>{
                          handleSubmit("reject",data?.id)
                        }}
                      >
                        Reject
                      </Button>
                    </Group>
                  </Box>
                </Card>
              ))
                      }
            </Box>

            {/* <AppointmentRequest/> */}
          </Card>
        </Grid.Col>

        {/* <Grid.Col span={4}>
        <Card shadow="sm" padding="md" radius='lg'>
            <text style={{fontWeight:'bold'}}>Today's Appointment</text>
                <TodayAppointments/>
        </Card>
      </Grid.Col> */}
        {/* <Grid.Col span={4}>
        <PatientCard/>
        
      </Grid.Col>
      <Grid.Col span={4}>6</Grid.Col> */}
      </Grid>
    </div>
  );
}
