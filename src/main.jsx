import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TerminalPoem from './TerminalPoem';
import SobreMim from './SobreMim';
import MotivacaoStellantis from './Motivacao';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TerminalPoem />} />
        <Route path="/sobre" element={<SobreMim />} />
        <Route path="/stellantis" element={<MotivacaoStellantis />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
