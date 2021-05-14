import './navbar.css'
import { GoSearch } from 'react-icons/go'
import { BsWatch, BsPhone } from 'react-icons/bs'
import { GiConverseShoe, GiClothes, GiHamburgerMenu } from 'react-icons/gi'
import { FaUserCircle, FaShoppingCart, FaHeadphonesAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import {useState, useEffect } from 'react'
import Logo from '../../img/Logo1.png';

function Navbar() {
    const [state, setstate] = useState([]);
    return (
        <nav>
            <div id="navbar-container">
                <img src={Logo}/>
                <select name="trie" id="trie">
                    <option value="Tout">Tout</option>
                    <option value="prototype">prototype</option>
                </select>
                <input id="search-bar" type="text" />
                <div id="search-icon">
                    <GoSearch style={{ fontSize: 20 }} />
                </div>
                <Link to="/inscription">
                    <button id="inscrire">S'inscrire</button>
                </Link>
                <Link to="/login">
                    <button id="connexion">Se connecter</button>
                </Link>
                <div id="user-icon">
                    <a href="#">
                        <FaUserCircle style={{ fontSize: 30 }} />
                    </a>
                    <a href="#">
                        <FaShoppingCart style={{ fontSize: 30, marginLeft: 40 }} />
                    </a>
                </div>

            </div>
            <div id="subnav-container" >
                <div id="hamburger-menu">
                    <GiHamburgerMenu class="icons" style={{ fontSize: 20 }} />
                    Voir tous nos produits
                </div>
                <div id="subnav">
                    <Link className="link" to="">
                        <BsPhone class="icons" style={{ fontSize: 20 }} />
                        Smartphones
                    </Link>

                    <Link className="link" to="">
                        <BsWatch class="icons" style={{ fontSize: 20 }} />
                        Montres
                    </Link>


                    <Link className="link" to="">
                        <GiConverseShoe class="icons" style={{ fontSize: 20 }} />
                        Chaussures
                    </Link>

                    <Link className="link" to="">
                        <GiClothes class="icons" style={{ fontSize: 20 }} />
                        Vetements
                    </Link>

                    <Link className="link" to="">
                        <FaHeadphonesAlt class="icons" style={{ fontSize: 20 }} />
                        Gadgets
                    </Link>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;