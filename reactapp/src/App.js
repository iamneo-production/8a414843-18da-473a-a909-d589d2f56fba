import logo from './logo.svg';
import './App.css';
import { TextInput } from '@mantine/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CustomHeader from './header';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<CustomHeader />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
