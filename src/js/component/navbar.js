import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
    const { store, actions } = useContext(Context);

    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Estado para controlar si el dropdown está abierto o cerrado

    return (
//         
<nav className="navbar navbar-danger mb-3 d-flex justify-content-between">
  <Link to="/">
    <img src="https://static.wikia.nocookie.net/starwars/images/2/28/Taika_Waititi_film_temporary_logo.png/revision/latest?cb=20220524131619" style={{ width: "150px", marginLeft: "35px", marginTop: "10px" }} className="logoStarWars navbar-brand mb-0 px-0" />
  </Link>

  <div className="ml-auto">
    <div className="dropdown">
      <button
        className="btn btn-danger dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        style={{ marginRight: 200 }} 
      >
        Favorites {store.myFavorites.length}
      </button>
      <ul className={"dropdown-menu dropdown-menu-dark" + (isDropdownOpen? " show" : "")}>
        {store.myFavorites.map((item, index) => (
          <li key={index} className="dropdown-item">
            {item}
            <button
              className="btn"
              onClick={() => actions.deleteFavorite(item)}
            >
              <i className="fa-solid fa-delete-left fa-2xl delete-icon"></i>
            </button>
          </li>
        ))}
        <li><hr className="dropdown-divider" /></li>
        <li><a className="dropdown-item" href="#">Total Favorites: {store.myFavorites.length}</a></li>
      </ul>
    </div>
  </div>
</nav>
    )
}
