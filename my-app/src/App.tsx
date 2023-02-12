import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import MainRoutes from './pages/MainRoutes';


function App() {
  return (
    <div className="App">
      <Navbar />
      <MainRoutes />
    </div>
  );
}

export default App;
