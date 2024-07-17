import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const PlanetView = props => {
    useContext(Context);
    const [planet, setPlanet] = useState({});
    const params = useParams();
    console.log(params)
    
    useEffect(() => {
        const fetchPlanet = async () => {
            try {
                console.log('Fetching planet with ID:', params.planets_id);
                const response = await fetch("https://www.swapi.tech/api/planets/" + params.planets_id);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                console.log('Planet data:', data);
                setPlanet(data.result.properties);
            } catch (error) {
                console.error('Failed to fetch planet:', error);
            }
        };
        fetchPlanet();
    }, [params.planets_id]);
    
    function onImagenError(event) {
        event.target.src = `https://starwars-visualguide.com/assets/img/placeholder.jpg`
    }
    const imageURL = `https://starwars-visualguide.com/assets/img/planets/${params.planets_id}.jpg`;

    return (
        <div className="card mb-3 bg-dark text-danger p-4 mx-auto" style={{ maxWidth: "750px" }}>
            <h1 className="display-4">{planet.name}</h1>
            <img onError={onImagenError}
                className="card-img-top border border-dark border-4 mt-1"
                src={imageURL}
                alt=""
            />
            <hr className="my-4" />
            <p>Name: <span className="text-white">{planet.name}</span></p>
            <p>Diameter: <span className="text-white">{planet.diameter}</span></p>
            <p>Rotation period: <span className="text-white">{planet.rotation_period}</span></p>
            <p>Climate: <span className="text-white">{planet.climate}</span></p>
            <p>Terrain: <span className="text-white">{planet.terrain}</span></p>
            <p>ID: <span className="text-white">{params.planets_id}</span></p>

            <Link to="/">
                <span className="btn btn-dark border border-3 border-danger btn-lg" role="button">
                    Back home
                </span>
            </Link>
        </div>
    );
};

PlanetView.propTypes = {
    match: PropTypes.object
};
