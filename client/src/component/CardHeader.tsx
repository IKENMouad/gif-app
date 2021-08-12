 import React, { useState } from 'react'
 import { BsFillArchiveFill } from "react-icons/bs";

const  CardHeader = ()  =>{

    const [modules, setModules] = useState([
      { id: 1, label: "Text", icon: "" },
      { id: 2, label: "Photo", icon: "" },
      { id: 3, label: "Quote", icon: "" },
      { id: 4, label: "lINK", icon: "" },
      { id: 5, label: "Chat", icon: "" },
      { id: 6, label: "Audio", icon: "" },
      { id: 7, label: "Vedio", icon: "" },
    ]);


    return (
      <div
        className="card-header mx-auto"
        style={{
          backgroundColor: "white",
          textAlign: "center",
          width: "50%",
          padding: "30px",
        }}
      >
        <div className="d-flex justify-content-between align-items-center">
          {modules.map((module) => (
            <div key={module.id} className="">
              <div className="text-center" >
                <BsFillArchiveFill />
                <br />
                {module.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
}

export default CardHeader
