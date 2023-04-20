import {useState, useEffect} from 'react'
import { obtenerProductos } from '../../asyncmock'
import { ItemList } from '../ItemList/ItemList'


const Catalogo = () => {
  const [productos, setProductos] = useState([]);

    useEffect( () => {
      obtenerProductos()
          .then(response => setProductos(response))
          .catch(error => console.error(error))
    }, [])


  return (
    <div>
      <h2>Productos</h2>
      <ItemList productos= {productos}/>
    </div>
    
  )
}

export default Catalogo