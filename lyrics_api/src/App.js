import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './components/layout/Index';
import './App.css';
import Navbar from './components/layout/Navbar';
import Lyrics from './components/tracks/Lyrics';
import { Provider } from './context';

function App() {
  return (
    <Provider>
      <Router>
        <Navbar />
        <div className='container'>
          <Routes>
            <Route path='/' element={<Index />} />
            <Route path='/lyrics/track/:id' element={<Lyrics />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;

