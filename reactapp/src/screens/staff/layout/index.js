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
    { link: '/staff/home', label: 'Dashboard', icon: IconBellRinging },
    { link: '/staff/billing', label: 'Billing', icon: IconReceipt2 },
    { link: '/staff/pharmacy', label: 'Pharmacy', icon: IconFingerprint },
    { link: '/staff/inventory', label: 'Inventory', icon: IconKey },
    // { link: '', label: 'Databases', icon: IconDatabaseImport },
    // { link: '', label: 'Authentication', icon: Icon2fa },
    // { link: '', label: 'Other Settings', icon: IconSettings },
];


export default function StaffLayout() {
    return (
        <Routes>
            <Route path='' element={<Navigate to='/staff/home' />} />
            <Route path='home' element={<LatestAppshell navData={data}><h1>Staff Dashboard</h1> </LatestAppshell>} />
            <Route path='billing' element={<LatestAppshell navData={data}><h1>Billing</h1></LatestAppshell>} />
            <Route path='pharmacy' element={<LatestAppshell navData={data}><h1>Pharmacy</h1></LatestAppshell>} />
            <Route path='inventory' element={<LatestAppshell navData={data}><h1>Inventory</h1></LatestAppshell>} />

        </Routes>
    )
}