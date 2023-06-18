import logo from './logo.svg';
import './App.css';
import { TextInput } from '@mantine/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CustomHeader from './header';
import HomeScreen from './screens/homeScreen';
import SignUp from './screens/homeScreen/auth/signUp';
import ProtectedRoutes from './protectedRoutes';
import PatientLayout from './screens/patient/layout';
import StaffLayout from './screens/staff/layout';
import AdminLayout from './screens/admin/layout';
import DoctorLayout from './screens/doctor/layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route element={<ProtectedRoutes element={{ data: 'patient' }} />}>
          <Route path="/patient/*" element={<PatientLayout />} />
        </Route>
        <Route element={<ProtectedRoutes element={{ data: 'doctor' }} />}>
          <Route path="/doctor/*" element={<DoctorLayout />} />
        </Route>
        <Route element={<ProtectedRoutes element={{ data: 'staff' }} />}>
          <Route path="/staff/*" element={<StaffLayout />} />
        </Route>
        <Route element={<ProtectedRoutes element={{ data: 'admin' }} />}>
          <Route path="/admin/*" element={<AdminLayout />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;

// function App(){
//   return(
//     <div style={{ backgroundColor: 'lightgrey' }}>
//       <DoctorDashbaord/>
//     </div>
//   )
// }
// export default App;

