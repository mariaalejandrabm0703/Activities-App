import React from 'react'

export const Item = ({item, handleClick}) => {    

    return (
        <div>
             <button onClick={handleClick} className="btn btn-success m-2">{item}</button>
        </div>
    )
}
