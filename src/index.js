import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom"
import "./styles/styles.css"
import { InfoContextProvider } from './store/InfoContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <InfoContextProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
   </InfoContextProvider>
);



