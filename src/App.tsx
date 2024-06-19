import React, { useState } from 'react';
import './App.css';
import { Card } from './components/Card_comp';
import { Sidebar } from './components/Sidebar_comp';
import { Topbar } from './components/Topbar_comp'





function App() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <Topbar/>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <h4>Place List</h4>
      <div className="main-content">
        <Card name="Cantina Wine Bar & Italian Kitchen" />
        <Card name="Joe Mama Cafe" />
        <Card name="3rd Cafe" />
        <Card name="4th Item" />
        <Card name="5th Item" />
        <Card name="6th Item" />
        <Card name="7th Item" />
        <Card name="8th Item" />
        <Card name="9th Item" />
      </div>
    </div>
  );
}

export default App;