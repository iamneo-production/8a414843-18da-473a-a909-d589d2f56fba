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
    { link: '/patient/home', label: 'Dashboard', icon: IconBellRinging },
    { link: '/patient/appointment', label: 'Appointments', icon: IconReceipt2 },
    { link: '/patient/medicalrecord', label: 'Medical Records', icon: IconFingerprint },
    // { link: '', label: 'SSH Keys', icon: IconKey },
    // { link: '', label: 'Databases', icon: IconDatabaseImport },
    // { link: '', label: 'Authentication', icon: Icon2fa },
    // { link: '', label: 'Other Settings', icon: IconSettings },
];


export default function PatientLayout() {
    return (
        <Routes>
            <Route path='' element={<Navigate to='/patient/home' />} />
            <Route path='home' element={<LatestAppshell navData={data}><h1>Patient Dashboard</h1> </LatestAppshell>} />
            <Route path='appointment' element={<LatestAppshell navData={data}><h1>Appointments</h1></LatestAppshell>} />
            <Route path='medicalrecord' element={<LatestAppshell navData={data}><h1>Medical Records</h1></LatestAppshell>} />
        </Routes>
    )
}