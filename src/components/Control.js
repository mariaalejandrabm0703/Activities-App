import React from "react";

export const Control = ({ currentAct,activities, setActivities }) => {


    const handleLeft = (e) =>{
        e.preventDefault();
        let list = []
        let pos = 0
        console.log(currentAct)
        for(let i=0; i < activities.length; i++){
            for(let j=0; j < activities[i].length; j++){                
                if(currentAct === activities[i][j]){
                    console.log(i,j, activities[i][j])
                }
            }
        }
    }

    const handleRight = (e) =>{
        e.preventDefault();   
     }

  return (
    <div className="container mt-2">
      <input defaultValue={currentAct} type="text" />
      <button onClick={handleLeft}  className="btn btn-primary ms-3">{"<"}</button>
      <button onClick={handleRight} className="btn btn-primary ms-1">{">"}</button>
    </div>
  );
};
