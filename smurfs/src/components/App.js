import React, { useState, useEffect, Component } from "react";
import "./App.css";
import { Route } from 'react-router-dom';
import { SmurfContext } from '../Contexts/SmurfContext';
import axios from 'axios';

import Smurfs from './Smurfs';
import SmurfForm from './SmurfForm';





function App() {
  const [smurf, setSmurf] = useState([])

  useEffect( () => {
    axios.get('http://localhost:3333/smurfs')
    .then(response => {
        setSmurf(response.data)
    })
    .catch((err) => {console.log("error in smurf axios")})

  }, [])

  return (
    <div className="App">
      <SmurfContext.Provider value= {{ smurf }} >
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <div>Welcome to your state management version of Smurfs!</div>
      <div>Start inside of your `src/index.js` file!</div>
      <div>Have fun!</div>
      <Smurfs />
      <SmurfForm />
      </SmurfContext.Provider>
    </div>
  );
}

export default App;
