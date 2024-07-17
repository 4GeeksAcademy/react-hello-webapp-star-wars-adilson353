// // src/js/views/charactersView.js
// import React, { useState, useEffect, useContext } from "react";
// import PropTypes from "prop-types";
// import { Link, useParams } from "react-router-dom";
// import { Context } from "../store/appContext";

// export const CharacterView = props => {
//     useContext(Context);
//     const [character, setCharacter] = useState({});
//     const params = useParams();
//     console.log(params)
    
//      useEffect(() => {
        
//         const fetchCharacter = async () => {
//             try {
//                 const response = await fetch("https://www.swapi.tech/api/people/" + params.character_id);
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 const data = await response.json();
//                 setCharacter(data.result.properties);
//             } catch (error) {
//                 console.error('Failed to fetch character:', error);
//             }
//         };

//         fetchCharacter();
//     }, [params.character_id]);
//     useEffect(() => {
//         const checkImageURL = async () => {
//           const imageURL = `https://starwars-visualguide.com/assets/img/characters/${params.character_id}.jpg`;
//           try {
//             const response = await fetch(imageURL);
//             if (response.ok) {
//               console.log(`Image URL is valid: ${imageURL}`);
//             } else {
//               console.log(`Image URL is invalid: ${imageURL}`);
//             }
//           } catch (error) {
//             console.log(`Error fetching image: ${error}`);
//           }
//         };
//         checkImageURL();
//       }, [params.character_id]);

//     return (
//         <div className="jumbotron bg-dark text-danger p-4">
//             <h1 className="display-4">{character.name}</h1>
//             <img
//   className="card-img-top border border-dark border-4 mt-1"
//   src={`https://starwars-visualguide.com/assets/img/characters/${params.character_id}.jpg`}
//   alt=""
//   onError={(e) => {
//     e.target.src = 'fallback-image.jpg';
//   }}
// />
//             <hr className="my-4" />
//             <p>Name: <span className="text-white">{character.name}</span></p>
//             <p>Height: <span className="text-white">{character.height}</span></p>
//             <p>Mass: <span className="text-white">{character.mass}</span></p>
//             <p>Hair Color: <span className="text-white">{character.hair_color}</span></p>
//             <p>Skin Color: <span className="text-white">{character.skin_color}</span></p>
//             <p>ID: <span className="text-white">{params.character_id}</span></p>
//             <Link to="/">
//                 <span className="btn btn-dark border border-3 border-danger btn-lg" href="#" role="button">
//                     Back home
//                 </span>
//             </Link>
//         </div>
//     );
// };

// CharacterView.propTypes = {
//     match: PropTypes.object
// };
import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const CharacterView = props => {
    const { store, actions } = useContext(Context);
    const [character, setCharacter] = useState({});
    const params = useParams();

    useEffect(() => {
        const fetchCharacter = async () => {
            try {
                const response = await fetch(`https://www.swapi.tech/api/people/${params.character_id}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setCharacter(data.result.properties);
            } catch (error) {
                console.error('Failed to fetch character:', error);
            }
        };

        fetchCharacter();
    }, [params.character_id]);

    const imageURL = `https://starwars-visualguide.com/assets/img/characters/${params.character_id}.jpg`;

    return (
        <div className="card mb-3 bg-dark text-danger p-4 mx-auto" style={{ maxWidth: "750px" }}>
            <h1 className="display-4">{character.name}</h1>
            <img
                className="card-img-top mx-auto d-block rounded-5 w-50 border border-dark border-4 mt-1"
                src={imageURL}
                alt=""/>
            <hr className="my-4" />
            <p>Name: <span className="text-white">{character.name}</span></p>
            <p>Height: <span className="text-white">{character.height}</span></p>
            <p>Mass: <span className="text-white">{character.mass}</span></p>
            <p>Hair Color: <span className="text-white">{character.hair_color}</span></p>
            <p>Skin Color: <span className="text-white">{character.skin_color}</span></p>
            <p>ID: <span className="text-white">{params.character_id}</span></p>
            <Link to="/">
                <span className="btn btn-dark border border-3 border-danger btn-lg" role="button">
                    Back home
                </span>
            </Link>
        </div>
    );
};

CharacterView.propTypes = {
    match: PropTypes.object
};
