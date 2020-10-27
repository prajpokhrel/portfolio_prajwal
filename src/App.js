import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import MainBody from "./components/body/MainBody";

function App() {
  return (
      <BrowserRouter>
          <div className="App">

              <MainBody />

          </div>
      </BrowserRouter>
  );
}

export default App;
