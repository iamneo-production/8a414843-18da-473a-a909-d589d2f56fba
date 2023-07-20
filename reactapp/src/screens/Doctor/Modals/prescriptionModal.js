import { useState } from "react";
import {
  Box,
  Card,
  ScrollArea,
  Text,
  Button,
  Modal,
  Grid,
  Container,
  Notification,
  TextInput,
  Select,
  Checkbox,
} from "@mantine/core";
import { useForm } from '@mantine/form';
import { IconPlus ,IconTrash } from '@tabler/icons-react';

export default function PrescriptionModal(props) {
  const { open, close } = props;


  const form = useForm({
    initialValues: {
      medicineLists: [
        { medicineId: null,morning:false,noon:false,night:false },
        { medicineId: null,morning:false,noon:false,night:false },
       
      ],
    },
  });

  return (
    <Modal opened={open} onClose={close} size="lg" title="Add Prescription">
      <Container>
        {form.values.medicineLists.map((d,index)=>{
            return(
               <>
             
      <Box style={{ display: "flex", justifyContent: "space-between" }}>
        <Select
          //   maw={320}
          label="Medicine"
          placeholder="Pick one"
          data={["React", "Angular", "Svelte", "Vue"]}
          transitionProps={{
            transition: "pop-top-left",
            duration: 80,
            timingFunction: "ease",
          }}
          maxDropdownHeight={100}
          clearable
          withinPortal
        />
        <Box style={{ display: "flex", flexDirection: "column" }}>
          <label style={{ fontSize: "0.875rem" }}>Morning</label>
          <Checkbox
            size="md"
            label=""
            style={{ alignSelf: "center", marginTop: 5 }}
          />
        </Box>
        <Box style={{ display: "flex", flexDirection: "column" }}>
          <label style={{ fontSize: "0.875rem" }}>Noon</label>
          <Checkbox
            size="md"
            label=""
            style={{ alignSelf: "center", marginTop: 5 }}
          />
        </Box>
        <Box style={{ display: "flex", flexDirection: "column" }}>
          <label style={{ fontSize: "0.875rem" }}>Night</label>
          <Checkbox
            size="md"
            label=""
            style={{ alignSelf: "center", marginTop: 5 }}
          />
        </Box>
        <Box style={{ alignSelf: "center", marginTop: 5 }}>
         <IconPlus style={{cursor:'pointer'}}  onClick={()=>{
            form.insertListItem('medicineLists', { medicineId: null, morning:false,noon:false,night:false })
         }}/>
        </Box>
        
      </Box>
      </> 
            )
        })}
      <Box style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginTop:15}}>
        <Button>Cancel</Button>
        <Button>Save</Button>
        </Box>
        </Container>
    </Modal>
  );
}
