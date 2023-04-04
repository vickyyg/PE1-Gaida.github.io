import { useState } from "react";
//import './App.css'

import { NavBar } from "./components/navbar/navbar";
import Titulo from "./components/titulo/titulo";

import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Titulo />
      <ItemListContainer greeting={'Bienvenidos a Green GrowShop!'}/>
    </div>
  );
}

export default App;
