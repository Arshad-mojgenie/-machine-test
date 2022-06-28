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
import NotFound from './CommonComponents/NotFound'
import { Provider } from "react-redux";
import store from './Redux/store';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
          <Route path='/character-details/:id' element={<CharacterDetails />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
