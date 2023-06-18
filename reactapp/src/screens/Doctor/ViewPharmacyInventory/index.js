import React, { useState } from 'react';
import { Table, Button ,Tabs} from '@mantine/core';
import { AiFillCheckCircle, AiFillMinusCircle, AiOutlineSearch } from 'react-icons/ai';
import './index.css';
import {  IconEye } from '@tabler/icons-react';
import Viewpharmacy from './inventory/viewPharmacy';
import ViewInventory from './inventory/viewInventory';
export default function DoctorPharmacyInvt() {


  return (
    <>
    <Tabs  color="violet"  variant="pills" radius="md" defaultValue="pharmacy">
      <Tabs.List>
        <Tabs.Tab value="pharmacy" icon={<IconEye size="0.8rem" />}>View Pharmacy</Tabs.Tab>
        <Tabs.Tab value="inventory" icon={<IconEye size="0.8rem" />}>View Inventory</Tabs.Tab>
       
      </Tabs.List>

      <Tabs.Panel value="pharmacy" pt="xs">
        <Viewpharmacy/>
      </Tabs.Panel>

      <Tabs.Panel value="inventory" pt="xs">
        <ViewInventory/>
      </Tabs.Panel>

     
    </Tabs>
    </>
  );
}
