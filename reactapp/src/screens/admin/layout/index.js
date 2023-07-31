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
import Payroll from '../payroll/index'
import AdminDashboard from '../dashboard/index';
import ManageUserForm from '../ManageUsers';
import Pharmacy from '../../staff/pharmacyManagement/Pharmacy';
import Inventory from '../../staff/inventory/index';
const data = [
    { link: '/admin/home', label: 'Dashboard', icon: IconBellRinging },
    { link: '/admin/users', label: 'Users', icon: IconReceipt2 },
    { link: '/admin/pharmacy', label: 'Pharmacy', icon: IconKey },
    { link: '/admin/inventory', label: 'Inventory', icon: IconDatabaseImport },
    { link: '/admin/payroll', label: 'Payroll', icon: Icon2fa },
    // { link: '', label: 'Other Settings', icon: IconSettings },
];


export default function AdminLayout() {
    return (
        <Routes>
            <Route path='' element={<Navigate to='/admin/home' />} />
            <Route path='home' element={<LatestAppshell navData={data}><AdminDashboard/></LatestAppshell>} />
            <Route path='users' element={<LatestAppshell navData={data}><ManageUserForm/></LatestAppshell>} />
            <Route path='pharmacy' element={<LatestAppshell navData={data}><Pharmacy/></LatestAppshell>} />
            <Route path='inventory' element={<LatestAppshell navData={data}><Inventory /></LatestAppshell>} />
            <Route path='payroll' element={<LatestAppshell navData={data}><Payroll /></LatestAppshell>} />
        </Routes>
    )
}