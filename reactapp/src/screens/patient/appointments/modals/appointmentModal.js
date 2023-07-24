// import {
//   Card,
//   Button,
//   TextInput,
//   Select,
//   Grid,
//   Col,
//   Title,
//   Container,
//   Modal,
// } from "@mantine/core";
// import { useState } from "react";
// import { DatePickerInput } from "@mantine/dates";
// import { TimeInput } from "@mantine/dates";
// import { IconCalendar, IconClock2 } from "@tabler/icons-react";
// import {useForm} from "@mantine/form";
// import axios from "axios";
// import {post} from "../../../../api"
// import EndPoints from "../../../../api/endPoints";
// import { useSelector } from 'react-redux';

// export default function ModalForm({ onCloseModal, patientId }) {
//   const user = useSelector((s) => s?.user?.value)
//   const [patient, setPatient] = useState({
//     issue: "",
//     doctorId: "",
//     date: null,
//     time: null,
//     patientId: "",
//   });

//   const form = useForm({
//     initialValues: {
//       issue: "",
//     doctorId: "",
//     date: null,
//     time: null,
//     patientId: "",
//     },
// });

//   const { doctorId, date, time, issue } = patient;

//   const onInputChange = (e) => {
//     const { name, value } = e.target;
//     setPatient((prevPatient) => ({
//       ...prevPatient,
//       [name]: value,
//     }));
//   };

//   // const onSubmit = async (e) => {
//   //   e.preventDefault();
//   //   await axios.post("http://localhost:8080/api/appointment", patient);
//   //   onCloseModal();
//   // };

//   const handleSubmit = async() => {
//     const data = form.values
//     data.patientId=user?.id
//     data.date=data.date.toLocaleString();

//     // data.dob=ISOStringConversion(form.values.dob)
//     // data.roles="ROLE_PATIENT"
//     data.status="pending"
//     console.log("fromRegister",data)

//     await post(EndPoints.postAppointment,data).then((response)=>{
//       console.log(response.data);
//     }).catch(error =>{
//       console.log(error);
//     })

//   }


//   return (
//     <>
//       <Grid m={0} px={10} pb="xl" pt="xl">
//         <Grid.Col xs={12} lg={12}>
//           <div style={{ display: "flex", color: "grey" }}>
//             <Title mb="md">Appointment</Title>
//           </div>
//         </Grid.Col>
//       </Grid>

//       <form onSubmit={form.onSubmit((values) => {
//                     handleSubmit()
//                   })}>
//         <Grid pt="xl" pb="xl" m={0} px={40}>
//           <Grid.Col xs={12} lg={12} pb="xl">
//             <TextInput
//               value={issue}
//               name="issue"
//               onChange={onInputChange}
//               radius="md"
//               placeholder="Issue"
//               {...form.getInputProps("issue")}
//             />
//           </Grid.Col>

//           <Grid.Col xs={6} lg={6} pb="xl">
//             <TextInput
//               value={patientId}
//               name="patientId"
//               disabled
//               radius="md"
//               placeholder="Patient Id"
//               {...form.getInputProps("patientId")}
//             />
//           </Grid.Col>

//           <Grid.Col xs={6} lg={6} pb="xl">
            
            
//             <Select
//               value={doctorId}
//               name="doctorId"
//               onChange={(value) =>
//                 onInputChange({ target: { name: "doctorId", value } })
//               }
//               placeholder="Doctor Id"
//               radius="md"
//               data={[
//                 { value: "1", label: "1" },
//                 { value: "2", label: "2" },
//                 { value: "3", label: "3" },
//               ]}
//               {...form.getInputProps("doctorId")}
//             />
//           </Grid.Col>
//           <Grid.Col xs={6} lg={6} pt="xl" pb="xl">
//             <TextInput
//               value={date}
//               name="date"
//               onChange={(value) =>
//                 onInputChange({ target: { name: "date", value } })
//               }
//               radius="md"
//               placeholder="Date"
//               icon={<IconCalendar />}
//               mx="auto"
//               {...form.getInputProps("date")}
//             />
//           </Grid.Col>
         
//           <Grid.Col xs={6} lg={6} pt="xl" pb="xl">
//              <TimeInput
//                value={time}
//                name="time"
//                onChange={(e) => onInputChange(e)}
//                radius="md"
//                icon={<IconClock2 />}
//                placeholder="Time"
//                {...form.getInputProps("time")}
//              />
//            </Grid.Col>

          

//           <Grid.Col
//             xs={12}
//             lg={12}
//             pt="lg"
//             m={0}
//             px={0}
//             style={{ paddingTop: "35px", paddingBottom: "40px" }}
//           >
//             <div style={{ display: "flex", justifyContent: "center" }}>
//               <Button
//                 type="submit"
//                 radius="md"
//                 size="md"
//                 style={{ backgroundColor: "#9370DB" }}
//               >
//                 REGISTER
//               </Button>
//             </div>
//           </Grid.Col>
//         </Grid>
//       </form>
//     </>
//   );
// }

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
import { useState,useEffect } from "react";
import { DateInput, DatePickerInput } from "@mantine/dates";
import { TimeInput } from "@mantine/dates";
import { IconCalendar, IconClock2 } from "@tabler/icons-react";
import {useForm} from "@mantine/form";
import {post, get} from "../../../../api"
import EndPoints from "../../../../api/endPoints";
import { useSelector } from 'react-redux';

export default function ModalForm({ onCloseModal, patientId }) {
  const user = useSelector((s) => s?.user?.value)
  const[doctors,setDoctors] = useState([]);
  const [selectedDoctorId, setSelectedDoctorId] = useState('');
  
  const form = useForm({
    initialValues: {
      issue: "",
    doctorId: "",
    date: null,
    time: null,
    patientId: "",
    },
});

  
  const getDoctors =async() =>{
    await post(EndPoints.getDoctor,{role:'ROLE_DOCTOR'}).then((response)=>{
      setDoctors(response.data);
      console.log(response);
  }).catch(error =>{
      console.log(error);
  })
  console.log("sssss",doctors);
  }
  useEffect(()=>{
    getDoctors();
  },[])


  const handleSubmit = async() => {
    const data = form.values
    data.patientId=user?.id;
    data.appointmentStatus="pending"
    console.log("fromRegister",data)

    await post(EndPoints.postAppointment,data).then((response)=>{
      console.log(response.data);
    }).catch(error =>{
      console.log(error);
    })
    onCloseModal();
    
  }


  return (
    <>
      <Grid m={0} px={10} pb="xl" pt="xl">
        <Grid.Col xs={12} lg={12}>
          <div style={{ display: "flex", color: "grey" }}>
            <Title mb="md">Appointment</Title>
          </div>
        </Grid.Col>
      </Grid>

      <form onSubmit={form.onSubmit((values) => {handleSubmit()})}>
        <Grid pt="xl" pb="xl" m={0} px={40}>
          <Grid.Col xs={12} lg={12} pb="xl">
            <TextInput
              name="issue"
              radius="md"
              placeholder="Issue"
              {...form.getInputProps("issue")}
            />
          </Grid.Col>

          <Grid.Col xs={6} lg={6} pb="xl">
            <TextInput
              value={patientId}
              name="patientId"
              disabled
              radius="md"
              placeholder="Patient Id"
              {...form.getInputProps("patientId")}
            />
          </Grid.Col>

          <Grid.Col xs={6} lg={6} pb="xl">
            <Select
              value={selectedDoctorId}
              name="doctorId"
              placeholder="Doctor Id"
              radius="md"
              data={doctors.map(doctor => ({ value: doctor?.id, label: `${doctor?.firstName} ${doctor?.lastName} ( ${doctor?.specialist} )` }))}
              {...form.getInputProps("doctorId")}
            />
          </Grid.Col>
          <Grid.Col xs={6} lg={6} pt="xl" pb="xl">
            <DateInput
              name="date"
              radius="md"
              placeholder="Date"
              icon={<IconCalendar />}
              mx="auto"
              {...form.getInputProps("date")}
            />
          </Grid.Col>
         
          <Grid.Col xs={6} lg={6} pt="xl" pb="xl">
             <TimeInput
               name="time"
               radius="md"
               icon={<IconClock2 />}
               placeholder="Time"
               {...form.getInputProps("time")}
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
























// import {
//   Card,
//   Button,
//   TextInput,
//   Select,
//   Grid,
//   Col,
//   Title,
//   Container,
//   Modal,
// } from "@mantine/core";
// import { useForm } from "@mantine/form";
// import { Textarea } from "@mantine/core";
// import { DatePickerInput } from "@mantine/dates";
// import { useState } from "react";
// import _ from 'lodash';

// import { TimeInput } from "@mantine/dates";
// import { IconCalendar, IconClock2 } from "@tabler/icons-react";

// export default function AppointmentModal(props) {
//   const { open, close, rowData, setRowData, editData } = props;
 
//   const form = useForm({
    
//     initialValues: {
//       name: !_.isEmpty(editData)?editData?.name:"",
//       mobile:  _.isEmpty(editData)?"":editData?.mobile,
//       email:  _.isEmpty(editData)?"":editData?.email,
//       dob:  _.isEmpty(editData)?null:editData?.dob,
//       gender:  _.isEmpty(editData)?"":editData?.gender,
//       date:  _.isEmpty(editData)?null:editData?.date,
//       time:  _.isEmpty(editData)?"":editData?.time,
//       dept:  _.isEmpty(editData)?"":editData?.dept,
//       doctor:  _.isEmpty(editData)?"":editData?.doctor,
//       address:  _.isEmpty(editData)?"":editData?.address,
//     },
//     validate: {
//       name: (value) =>
//         value.length < 2 ? "Name should contain atleast two letters" : null,
//       mobile: (value) =>
//         value.length !== 10 ? "Mobile number should contain 10 digits" : null,
//       email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
//       dob: (value) => (!value ? "Please select date of birth" : null),
//       gender: (value) => (value === "" ? "Choose Gender" : null),
//       date: (value) => (!value ? "Please select an appointment date" : null),
//       time: (value) => (value === "" ? "Choose Appointment Time" : null),
//       dept: (value) => (value === "" ? "Choose Department" : null),
//       doctor: (value) => (value === "" ? "Choose Doctor" : null),
//       address: (value) => (value.length < 1 ? "Address cannot be blank" : null),
//     },
    
//   });
//   console.log("edit",form.values, editData);



//   // console.log("val", form.values)
//   return (
//     <>
//       <Modal size="lg" opened={open} onClose={close}>
//         <div>
//           <form onSubmit={form.onSubmit((values) => {
//             let prevData=[...rowData];
//             let data=prevData[prevData.length-1];
//           values.id=data?.id+1;
//             console.log("data", data);
//             prevData.push(values);
//             setRowData(prevData);
//             form.reset();
//             close();
            
//             })}>
//             <Grid m={0} px={10}>
//               <Grid.Col xs={12} lg={12}>
//                 <div style={{ display: "flex", color: "grey" }}>
//                   <Title mb="md">Appointment</Title>
//                 </div>
//               </Grid.Col>
//             </Grid>
//             <Grid pt="xs" m={0} px={40}>
//               <Grid.Col xs={6} lg={6}>
//                 <TextInput
//                   radius="md"
//                   placeholder="Full Name"
//                   {...form.getInputProps("name")}
//                 />
//               </Grid.Col>
//               <Grid.Col xs={6} lg={6}>
//                 <TextInput
//                   radius="md"
//                   placeholder="Mobile Number"
//                   {...form.getInputProps("mobile")}
//                 />
//               </Grid.Col>

//               <Grid.Col xs={6} lg={6}>
//                 <TextInput
//                   radius="md"
//                   placeholder="Email"
//                   {...form.getInputProps("email")}
//                 />
//               </Grid.Col>
//               <Grid.Col xs={6} lg={6} style={{}}>
//                 <DatePickerInput
//                   placeholder="Date of Birth"
//                   {...form.getInputProps("dob")}
//                   icon={<IconCalendar />}
//                 />
//               </Grid.Col>

//               <Grid.Col xs={4} lg={4}>
//                 <Select
//                   placeholder="Gender"
//                   {...form.getInputProps("gender")}
//                   radius="md"
//                   data={[
//                     { value: "male", label: "Male" },
//                     { value: "female", label: "Female" },
//                     { value: "other", label: "Other" },
//                   ]}
//                 />
//               </Grid.Col>
//               <Grid.Col xs={4} lg={4}>
//                 <DatePickerInput
//                   radius="md"
//                   placeholder="Appointment Date"
//                   {...form.getInputProps("date")}
//                   icon={<IconCalendar />}
//                   mx="auto"
//                 />
//               </Grid.Col>
//               <Grid.Col xs={4} lg={4}>
//                 <TimeInput
//                   radius="md"
//                   icon={<IconClock2 />}
//                   placeholder="Appointment Time"
//                   {...form.getInputProps("time")}
//                 />
//               </Grid.Col>

//               <Grid.Col xs={6} lg={6}>
//                 <Select
//                   placeholder="Department Name"
//                   {...form.getInputProps("dept")}
//                   radius="md"
//                   data={[
//                     { value: "x", label: "X" },
//                     { value: "y", label: "Y" },
//                     { value: "z", label: "Z" },
//                   ]}
//                 />
//               </Grid.Col>
//               <Grid.Col xs={6} lg={6}>
//                 <Select
//                   placeholder="Doctor Name"
//                   {...form.getInputProps("doctor")}
//                   radius="md"
//                   data={[
//                     { value: "x", label: "X" },
//                     { value: "y", label: "Y" },
//                     { value: "z", label: "Z" },
//                   ]}
//                 />
//               </Grid.Col>

//               <Grid.Col xs={12} lg={12}>
//                 <Textarea
//                   radius="md"
//                   placeholder="Address"
//                   {...form.getInputProps("address")}
//                 />
//               </Grid.Col>
//               <Grid.Col
//                 xs={12}
//                 lg={12}
//                 pt="lg"
//                 m={0}
//                 px={0}
//                 style={{ paddingTop: "35px", paddingBottom: "40px" }}
//               >
//                 <div style={{ display: "flex", justifyContent: "center" }}>
//                   <Button
//                     type="submit"
//                     radius="md"
//                     size="md"
//                     style={{ backgroundColor: "#9370DB" }}
//                   >
//                     REGISTER
//                   </Button>
//                 </div>
//               </Grid.Col>
//             </Grid>
//           </form>
//         </div>
//       </Modal>
//     </>
//   );
// }