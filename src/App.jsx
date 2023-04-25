import { useState } from "react";


import { NavBar } from "./components/navbar/NavBar";
import Titulo from "./components/titulo/titulo";

import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from "./components/ItemCount/ItemCount";
import Categorias from "./components/Categorias/Categorias";

import Catalogo from "./components/Catalogo/Catalogo";
import ItemDetailContainer from "./components/ItemDetailContainar/ItemDetailContainer";
import JsonPlaceHolder from "./components/Fetch/JsonPlaceHolder";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'
import {Item} from "./components/Item/Item";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <NavBar/>
     <Routes>
      <Route path= "/" element= { <Catalogo/>} />
      <Route path="/categoria/:idCategoria" element={ <Catalogo/>}/>
      <Route path="/item/:idItem" element={<ItemDetailContainer/>}/>
      <Route path="*" element={<NotFound />}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App
