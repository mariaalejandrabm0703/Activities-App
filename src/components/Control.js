import React from 'react'

export const Control = () => {
    return (
        <div className="container mt-2">
            <input type="text"/>
            <button className="btn btn-primary ms-3">{"<"}</button>
            <button className="btn btn-primary ms-1">{">"}</button>
        </div>
    )
}
