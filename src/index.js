import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import CharacterDetails from './Components/CharacterDetails'


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/character-listing" element={<CharacterListing />} />
        <Route path="/character-details" element={<CharacterDetails />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
