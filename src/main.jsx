import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import TerminalPoem from './TerminalPoem';
import SobreMim from './SobreMim';
import MotivacaoStellantis from './Motivacao';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/poema" element={<TerminalPoem />} />
        <Route path="/sobre" element={<SobreMim />} />
        <Route path="/stellantis" element={<MotivacaoStellantis />} />
        <Route path="/trajetoria" element={<MinhaTrajetoria />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
