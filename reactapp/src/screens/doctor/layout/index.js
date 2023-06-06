import { Routes, Route, Navigate } from 'react-router-dom'
import {
    IconBellRinging,
    IconFingerprint,
    IconKey,
    IconSettings,
    Icon2fa,
    IconDatabaseImport,
    IconReceipt2,
    IconSwitchHorizontal,
    IconLogout,
} from '@tabler/icons-react';

import LatestAppshell from '../../../components/appShell/latestAppshell'


const data = [
    { link: '/doctor/home', label: 'Dashboard', icon: IconBellRinging },
    { link: '/doctor/viewappointment', label: 'Manage Appointments', icon: IconReceipt2 },
    { link: '/doctor/viewpharmacyinventory', label: 'Pharmacy Inventory', icon: IconFingerprint },
    // { link: '', label: 'SSH Keys', icon: IconKey },
    // { link: '', label: 'Databases', icon: IconDatabaseImport },
    // { link: '', label: 'Authentication', icon: Icon2fa },
    // { link: '', label: 'Other Settings', icon: IconSettings },
];


export default function DoctorLayout() {
    return (
        <Routes>
            <Route path='' element={<Navigate to='/doctor/home' />} />
            <Route path='home' element={<LatestAppshell navData={data}><h1>Doctor Dashboard</h1> </LatestAppshell>} />
            <Route path='viewappointment' element={<LatestAppshell navData={data}><h1>View Appointments</h1></LatestAppshell>} />
            <Route path='viewpharmacyinventory' element={<LatestAppshell navData={data}><h1>View Pharmacy and Inventory</h1></LatestAppshell>} />
        </Routes>
    )
}