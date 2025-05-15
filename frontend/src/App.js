import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MedicineList from './pages/MedicineList';
import logo from './logo.svg';
import './App.css';




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MedicineList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
