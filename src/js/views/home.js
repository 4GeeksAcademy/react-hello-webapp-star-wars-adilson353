import React, { useContext, useState, useEffect } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Character } from "../component/Character";
import { Planet } from "../component/Planet"; // Cambiado de `Planets` a `Planet`
import { Starship } from "../component/Starship";

export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.loadSomeData();
	}, []);

	return (
		<div>
			<div className="text-center mt-5">
				<h1 className="text-danger">People</h1>
				<div className="row flex-row flex-nowrap overflow-auto">
					{store.character.map((item) => (
						<Character key={item.uid} uid={item.uid} title={item.name} />
					))}
				</div>
			</div>

			<div className="text-center mt-5">
				<h1 className="text-danger">Planets</h1>
				<div className="row flex-row flex-nowrap overflow-auto">
					{store.planets.map((planets) => (
						<Planet key={planets.uid} uid={planets.uid} title={planets.name} /> 
					))}
				</div>
			</div>

			<div className="text-center mt-5">
				<h1 className="text-danger">Starships</h1>
				<div className="row flex-row flex-nowrap overflow-auto">
					{store.starships.map((item) => (
						<Starship key={item.uid} uid={item.uid} title={item.name} />
					))}
				</div>
			</div>
		</div>
	);
};


