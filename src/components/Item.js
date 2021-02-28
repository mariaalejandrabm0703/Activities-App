import React from 'react'

export const Item = ({item}) => {
    return (
        <div>
             <button className="btn btn-success m-2">{item}</button>
        </div>
    )
}
