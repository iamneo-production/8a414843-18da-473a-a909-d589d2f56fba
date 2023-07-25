import React,{ useState } from "react";
import { Tabs } from '@mantine/core';
import DoctorUser from "./Doctor";
import StaffUser from "./staff";
import PatientUser from "./patient";
import { IconDatabase } from "@tabler/icons-react";
export default function ManageUserForm(){
    const [activeTab, setActiveTab] = useState('first');
    return (
      <Tabs color="violet" variant="pills" radius="lg" defaultValue="first">
        <Tabs.List>
          <Tabs.Tab value="first" icon={<IconDatabase size="0.8rem" />}>Doctors</Tabs.Tab>
          <Tabs.Tab value="second" icon={<IconDatabase size="0.8rem" />}>Staffs</Tabs.Tab>
          <Tabs.Tab value="third" icon={<IconDatabase size="0.8rem" />}>Patients</Tabs.Tab>
        </Tabs.List>
  
        <Tabs.Panel value="first" pt="xs">
          <DoctorUser/>
        </Tabs.Panel>
  
        <Tabs.Panel value="second" pt="xs">
          <StaffUser/>
        </Tabs.Panel>
  
        <Tabs.Panel value="third" pt="xs">
          <PatientUser/>
        </Tabs.Panel>
      </Tabs>
    );
}

/* return(
  <>
  <Tabs value={activeTab} onTabChange={setActiveTab}>
<Tabs.List>
  <Tabs.Tab value="first">Doctor</Tabs.Tab>
  <Tabs.Tab value="second">Staff</Tabs.Tab>
  <Tabs.Tab value="third">Patients</Tabs.Tab>
</Tabs.List>
<Tabs.Panel value="first"><DoctorUser/></Tabs.Panel>
<Tabs.Panel value="second"><StaffUser/></Tabs.Panel>
<Tabs.Panel value="third"><PatientUser/></Tabs.Panel>
  </Tabs>
  </>
) */