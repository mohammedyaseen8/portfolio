import React from 'react';
import Header from './Header';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <About />
        <Portfolio />
        <Contact />
      </main>
    </div>
  );
}

export default App;
