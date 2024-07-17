// import React, {useEffect,useContext,useState} from "react";
// import { Link } from "react-router-dom";
// import { Context } from "../store/appContext";

// export const Character = (props) => {
//     const {store, actions} = useContext(Context);
//     const[isFavorite, setIsFavorite] = useState(false); //icono de favorito si esta activo o no.

//     const addFavorite = () => {
//         actions.changeFavorites(props.title);
//         setIsFavorite(!isFavorite); //cambiar el estado y lo pasa a favorito
//     } 
    

// return(
//     <div className="card p-3 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-5 mx-3 mb-2" style={{ width: "18rem" }}>
//             <img className="card-img-top border border-dark border-4 mt-1" src="https://starwars-visualguide.com/assets/img/characters/${params.character_id}.jpg" alt="Card image cap" />
//             <div className="card-body">
//                 <h5 className="card-title">{props.title}</h5>
//                 <p className="card-text">Character ID: {props.uid}</p>
//                 <Link className="btn btn-dark border border-danger text-light mx-2" to={"/character/" + props.uid}>
//                     <span>More info</span>
//                 </Link>
//                 <i className={"fa-regular fa-thumbs-up fa-2xl fs-4 btn " + (isFavorite ? "text-danger" : "")} onClick={addFavorite}></i> {/* se aplica  el color danger si el state del favorito es true*/}
//             </div>
//         </div>
// )      
// };import React, { useEffect, useContext, useState } from "react";
import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Character = (props) => {
   
    
    const { store, actions } = useContext(Context);
    const [isFavorite, setIsFavorite] = useState(false);

    const addFavorite = () => {
        actions.changeFavorites(props.title);
        setIsFavorite(!isFavorite);
    }

    return (
        <div className="card p-3 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-5 mx-3 mb-2" style={{ width: "18rem" }}>
            
            <img src={`https://starwars-visualguide.com/assets/img/characters/${props.uid}.jpg`}
                alt="Card image cap"
                
                
            />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">Character ID: {props.uid}</p>
                <Link className="btn btn-dark border border-danger text-light mx-2" to={"/character/" + props.uid}>
                    <span>More info</span>
                </Link>
                <i
                    className={"fa-regular fa-thumbs-up fa-2xl fs-4 btn " + (isFavorite ? "text-danger" : "")}
                    onClick={addFavorite}
                ></i>
            </div>
        </div>
    )
};
