import React from 'react'

export const Item = ({item, setCurrentAct}) => {

    const handleClick = (e) =>{
        e.preventDefault();
        setCurrentAct(e.target.textContent)
    }

    return (
        <div>
             <button onClick={handleClick} className="btn btn-success m-2">{item}</button>
        </div>
    )
}
