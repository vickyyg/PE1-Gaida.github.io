import Item from "../Item/Item"
import './ItemList.css'
import React from 'react'
const ItemList = ({productos}) => {
  return (
    <div className="container">
        {productos.map(prod => <Item key={prod.id} {...prod} />
        )}
    </div>
  )
}

export default ItemList