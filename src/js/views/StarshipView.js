import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const StarshipView = (props) => {
   
    const { store, actions } = useContext(Context);
    const [starship, setStarship] = useState({});
    const params = useParams();

    useEffect(() => {
        const fetchStarship = async () => {
            try {
                const response = await fetch("https://www.swapi.tech/api/starships/" + params.starship_id);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setStarship(data.result.properties);
            } catch (error) {
                console.error('Failed to fetch starship:', error);
            }
        };
        fetchStarship();
    }, [ params.starship_id]);

    function onImagenError(event) {
        event.target.src = `https://starwars-visualguide.com/assets/img/placeholder.jpg`
    }
        const imageURL = `https://starwars-visualguide.com/assets/img/starships/${params.starships_id}.jpg`;

    return (
        <div className="card mb-3 bg-dark text-danger p-4 mx-auto" style={{ maxWidth: "750px" }}>
            <h1 className="display-4">{starship.name}</h1>
            <img onError={onImagenError}
                className="card-img-top border border-dark border-4 mt-1"
                src={imageURL}
                alt=""
                />
            <hr className="my-4" />
            <p>Name: <span className="text-white">{starship.name}</span></p>
            <p>Model: <span className="text-white">{starship.model}</span></p>
            <p>Manufacturer: <span className="text-white">{starship.manufacturer}</span></p>
            <p>Cost in credits: <span className="text-white">{starship.cost_in_credits}</span></p>
            <p>Length: <span className="text-white">{starship.length}</span></p>
            <p>Max atmosphering speed: <span className="text-white">{starship.max_atmosphering_speed}</span></p>
            <p>Crew: <span className="text-white">{starship.crew}</span></p>
            <p>Passengers: <span className="text-white">{starship.passengers}</span></p>
            <p>ID: <span className="text-white">{params.uid}</span></p> {/* Asegúrate de que params.uid coincida con el nombre de tu parámetro en la URL */}

            <Link to="/">
                <span className="btn btn-dark border border-3 border-danger btn-lg" role="button">
                    Back home
                </span>
            </Link>
        </div>
    );
};

StarshipView.propTypes = {
    match: PropTypes.object
};
