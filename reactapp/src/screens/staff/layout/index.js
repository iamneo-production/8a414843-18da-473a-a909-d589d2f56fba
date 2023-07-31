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
import Inventory from '../inventory';
import DashBoard from '../Dashboard';
import Pharmacy from '../pharmacyManagement/Pharmacy'
import Billing from '../billing';

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
            <Route path='home' element={<LatestAppshell navData={data}><DashBoard /></LatestAppshell>} />
            <Route path='billing' element={<LatestAppshell navData={data}><Billing/></LatestAppshell>} />
            <Route path='pharmacy' element={<LatestAppshell navData={data}><Pharmacy /></LatestAppshell>} />
            <Route path='inventory' element={<LatestAppshell navData={data}><Inventory/></LatestAppshell>} />

        </Routes>
    )
}