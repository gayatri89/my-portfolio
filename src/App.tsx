import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
function App() {
  const [darkMode, setDarkMode] = useState("light")
  const themeHandler = () => {
     
     darkMode == 'light' ? setDarkMode('dark') : setDarkMode('light')
  }
  return (
    <main data-bs-theme={darkMode}>
      <Header></Header>
      <Portfolio/>
      <Footer></Footer>
    </main>
  );
}

export default App;
