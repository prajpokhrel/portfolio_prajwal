import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import MainBody from "./components/body/MainBody";
import Brand from "./components/body/Brand";

function App() {

    return (
      <BrowserRouter>
          <div className="App">
              {/*<Brand />*/}
              <MainBody />
          </div>
      </BrowserRouter>
  );
}

export default App;
