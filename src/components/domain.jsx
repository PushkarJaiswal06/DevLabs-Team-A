import React from "react";

const Domain=({image, title})=>{
    return (
        <div className="domain-card">
            <img className="domain-image" src={image} alt={title}/>
            <h2>{title}</h2>
        </div>
    );
};

export default Domain;