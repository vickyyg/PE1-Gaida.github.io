import { useState } from "react";
//import './App.css'

import { NavBar } from "./components/navbar/navbar";
import Titulo from "./components/titulo/titulo";

import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from "./components/ItemCount/ItemCount";
import Categorias from "./components/Categorias/Categorias";

import Catalogo from "./components/Catalogo/Catalogo";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Titulo />
      <ItemListContainer greeting={'Bienvenidos a Green GrowShop!'}/>
      <ItemCount />
      <Categorias />
      <Catalogo />
    
    </div>
  );
}

export default App;
