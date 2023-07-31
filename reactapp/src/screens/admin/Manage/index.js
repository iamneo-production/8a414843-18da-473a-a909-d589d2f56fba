import { useState } from 'react';
import { Tabs } from '@mantine/core';
import ManageStaffDoctorsUser from './staffDoctors';
import ManagePatientUser from './patients';
export default function DemoStaff() {
    const [activeTab, setActiveTab] = useState('first');
        return(
            <>
            <Tabs value={activeTab} onTabChange={setActiveTab}>
          <Tabs.List>
            <Tabs.Tab value="first">Staff & Doctor</Tabs.Tab>
            <Tabs.Tab value="second">Patient</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="first"><ManageStaffDoctorsUser/></Tabs.Panel>
          <Tabs.Panel value="second"><ManagePatientUser/></Tabs.Panel>
            </Tabs>
            </>
    );
}
