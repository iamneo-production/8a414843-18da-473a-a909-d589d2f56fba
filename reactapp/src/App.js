import logo from './logo.svg';
import './App.css';
import { TextInput } from '@mantine/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CustomHeader from './header';
import HomeScreen from './screens/homeScreen';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
