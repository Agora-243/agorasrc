import React from 'react';
import './navbar.css';
import { connect } from 'react-redux';
import { BsWatch, BsPhone } from 'react-icons/bs';
import { GiConverseShoe, GiClothes, GiHamburgerMenu } from 'react-icons/gi';
import { FaUserCircle, FaShoppingCart, FaHeadphonesAlt } from 'react-icons/fa';
import SearchField from '../../components/searchField/searchField';
import { Link } from 'react-router-dom';
import Logo from '../../img/Logo1.png';
import { setProviderFilter, setSearchField,  requestProducts } from '../../actions.js'; 
import formatUrl from '../../services/formatUrl';

const mapStateToProps = state => { 
  return {
   keyword : state.searchTerms.keyword,
   providerFilter : state.searchTerms.providerFilter,
   indexOfProductsPage : state.searchTerms.indexOfProductsPage,
   cart : state.sessionManager.cart, 
}
} 

const mapDispatchToProps = (dispatch) => { 
    return {
        onSearchFieldChange : e => dispatch(setSearchField(e.target.value)), 
        onProviderFilterChange : e => dispatch (setProviderFilter(e.target.value)),
        onRequestProducts : url => dispatch(requestProducts(url)),
    }
}

 function Navbar(props) {
    const { providerFilter, keyword, indexOfProductsPage, onSearchFieldChange, onProviderFilterChange, onRequestProducts } = props;
    const onRequest = (e) => { 
        e.preventDefault();
        onRequestProducts(formatUrl(providerFilter, keyword, indexOfProductsPage));
    };
    return (
        <nav>
            <div id="navbar-container">
                <Link to = '/'>
                    <img src ={Logo}  alt='Agora24_Logo' style ={{marginRight:"100px"}}/>
                </Link>
               
                <SearchField onSearchFieldChange = {onSearchFieldChange} 
                onProviderFilterChange = {onProviderFilterChange}
               // onRequestProducts = {onRequestProducts}  />
               onRequestProducts = {onRequest} />
                <Link to="/register">
                    <button id="inscrire">S'inscrire</button>
                </Link>
                <Link to="/login">
                    <button id="connexion">Se connecter</button>
                </Link>
                <div id="user-icon">
                    <Link>
                            <FaUserCircle style={{ fontSize: 30 }} />
                         
                    </Link>
                    <Link to='/cart'>
                        <span className='cartZone'>
                            <FaShoppingCart style={{ fontSize: 30, marginLeft: 40 }} />
                            <span className='cartLength'>{props.cart.length}</span>
                        </span>
                    </Link>
                </div>

            </div>
            <div id="subnav-container" >
                <div id="hamburger-menu">
                    <GiHamburgerMenu class="icons" style={{ fontSize: 20 }} />
                    Voir tous nos produits
                </div>
                <div id="subnav">
                    <Link className="link" to="">
                        <BsPhone className="icons" style={{ fontSize: 20 }} />
                        Smartphones
                    </Link>

                    <Link className="link" to="">
                        <BsWatch class="icons" style={{ fontSize: 20 }} />
                        Montres
                    </Link>


                    <Link className="link" to="">
                        <GiConverseShoe className="icons" style={{ fontSize: 20 }} />
                        Chaussures
                    </Link>

                    <Link className="link" to="">
                        <GiClothes className="icons" style={{ fontSize: 20 }} />
                        Vetements
                    </Link>

                    <Link className="link" to="">
                        <FaHeadphonesAlt className="icons" style={{ fontSize: 20 }} />
                        Gadgets
                    </Link>
                </div>
            </div>
        </nav>
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);