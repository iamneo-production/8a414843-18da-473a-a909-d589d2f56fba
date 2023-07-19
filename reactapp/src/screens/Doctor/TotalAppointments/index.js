import { Tabs } from '@mantine/core';
import { IconCalendarTime, IconCheckbox } from '@tabler/icons-react';
import AcceptedAppointments from "../TotalAppointments/acceptedAppointments";
import CompletedAppointments from "../TotalAppointments/completedAppointments";

export default function Demo() {
  return (
    <Tabs radius="xl" defaultValue="appointments">
      <Tabs.List>
        <Tabs.Tab value="pending appointments" icon={<IconCalendarTime size="0.8rem" />}>Pending Appointments</Tabs.Tab>
        <Tabs.Tab value="completed appointments" icon={<IconCheckbox size="0.8rem" />}>Completed Appointments</Tabs.Tab>
        
      </Tabs.List>

      <Tabs.Panel value="pending appointments" pt="xs">
        <AcceptedAppointments/>
      </Tabs.Panel>

      <Tabs.Panel value="completed appointments" pt="xs">
        <CompletedAppointments/>
      </Tabs.Panel>

    </Tabs>
  );
}





