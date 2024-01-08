import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <header>
        <Header></Header>
      </header>
      <Footer></Footer>
    </div>
  );
}

export default App;
