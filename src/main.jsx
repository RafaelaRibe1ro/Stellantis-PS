import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import TerminalPoem from './TerminalPoem';
import MotivacaoStellantis from './Motivacao';
import MinhaTrajetoria from './Tragetoria';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/poema" element={<TerminalPoem />} />
        <Route path="/stellantis" element={<MotivacaoStellantis />} />
        <Route path="/trajetoria" element={<MinhaTrajetoria />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
