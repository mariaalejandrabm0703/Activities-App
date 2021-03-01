import React from 'react'

export const Item = ({item, handleClick, currentAct}) => {    

    return (
        <div>
             <button style={{borderColor:`${currentAct===item? 'red':''}`}} onClick={handleClick} className="btn btn-success m-2">{item}</button>
        </div>
    )
}
//   ``