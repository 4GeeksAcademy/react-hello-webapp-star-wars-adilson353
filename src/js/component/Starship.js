import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Starship = (props) => {
    const { store, actions } = useContext(Context);
    const [isFavorite, setIsFavorite] = useState(false); // Estado para rastrear si el ícono está activado

    const addFavorite = () => {
        actions.changeFavorites(props.title);
        setIsFavorite(!isFavorite); // Cambiar el estado cuando se hace clic en el ícono
    };
    function onImagenError(event) {
        event.target.src = `https://starwars-visualguide.com/assets/img/placeholder.jpg`
    }

    return (
        <div className="card card p-3 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-5 mx-3 mb-2 mx-3 mb-2" style={{ width: "18rem" }}>
           <img onError={onImagenError}
                className="card-img-top border border-dark border-4 mt-1"
                src={`https://starwars-visualguide.com/assets/img/starships/${props.uid}.jpg`}
                alt="Card image cap"
                
            />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">Starship ID: {props.uid}</p>
                <Link className="btn btn-dark border border-danger text-light mx-2" to={"/starships/" + props.uid}>
                    <span>More info</span>
                </Link>
                <i className={"fa-regular fa-thumbs-up fa-2xl fs-4 btn " + (isFavorite ? "text-danger" : "")} onClick={addFavorite}></i> {/* Aplicar la clase text-warning si isFavorite es true */}
            </div>
        </div>
    );
};