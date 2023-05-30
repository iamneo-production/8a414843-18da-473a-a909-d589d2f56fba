import logo from './logo.svg';
import './App.css';
import { TextInput } from '@mantine/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CustomHeader from './header';
import HomeScreen from './screens/homeScreen';
import SignUp from './screens/homeScreen/auth/signUp';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      {/* <Route path="/signUp" element={<SignUp />} /> */}
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
