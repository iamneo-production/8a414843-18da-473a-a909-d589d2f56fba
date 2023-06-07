import React,{ useState } from "react";
import { Tabs } from '@mantine/core';
import ManageStaffDoctor from "./staffdoctor";
import Managepatient from "./patient";



export default function ManageUserForm(){
    const [activeTab, setActiveTab] = useState('first');
    return(
        <>
        <Tabs value={activeTab} onTabChange={setActiveTab}>
      <Tabs.List>
        <Tabs.Tab value="first">Staff & Doctor</Tabs.Tab>
        <Tabs.Tab value="second">Patient</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="first"><ManageStaffDoctor/></Tabs.Panel>
      <Tabs.Panel value="second"><Managepatient/></Tabs.Panel>
        </Tabs>
        </>
    );
}