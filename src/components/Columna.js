import React from 'react'
import { Item } from './Item'

export const Columna = ({items}) => {
    return (
        <div className="col">
            {items.map((item, i)=>(
               <Item item={item}/>
            ))}
        </div>
    )
}
