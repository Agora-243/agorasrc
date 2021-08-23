import './homeSearch.css';
import React from 'react';
import Navbar from '../../components/navBar/navbar';
import Footer from '../../components/footer/footer';
import ProductCard from '../../components/product/product-card';
import ProductList from '../productList/productList-test';
import { useState, useEffect } from 'react'
import { Fragment } from 'react';
import '../../components/navBar/navbar.css';
import Logo from '../../img/Logo1.png'
import { GoSearch } from 'react-icons/go';
import { BsWatch, BsPhone } from 'react-icons/bs';
import { GiConverseShoe, GiClothes, GiHamburgerMenu } from 'react-icons/gi';
import { FaUserCircle, FaShoppingCart, FaHeadphonesAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';


function HomeSearch (){
        
        const [ data, setData ] = useState(null);
        const [ searchTerm, setSearchTerm ] = useState ('MacBook');
        const [url,setUrl] = useState(`https://ali-express1.p.rapidapi.com/search?query=Mackbook&page=1`);
        var arrayData = null;
        
//fetchde données depuis l'api dans les codes qui suivent

        useEffect(() => {
      
            fetch(url, {
                method : 'GET',
                headers : {
                    'Accept' : 'application/json',
                    'Content-Type' : 'application/json',
                    'x-rapidapi-key': 'c2d1db1d94msh3794ee68657eb86p1d7f60jsn95359e62701f',
                    'x-rapidapi-host': 'ali-express1.p.rapidapi.com'
                }
            })
            .then(
                result =>
                    {
                        result.json()
                        .then( response =>
                            setData(response.data.searchResult.mods.itemList.content)     
                        )            
                     }  
                )
        console.log(arrayData);
            },
            [url]
        )   

        const updateSearchTerm = (e) => {
            return setSearchTerm(e.target.value)
           
          
        }
// Return
        
        return (
            <Fragment id='HomeSearch'>
               
                <nav>
                    <div id="navbar-container">
                        <Link to = '/'>
                            <img src ={Logo} style ={{marginRight:"100px"}}/>
                        </Link>
                        <select name="trie" id="trie">
                            <option value="prototype">Aliexpress</option>
                        </select>
                        <input id="search-bar" type="text" onChange = {e => updateSearchTerm(e)} />
                     
                        <a href ='#' onClick={() => setUrl(`https://ali-express1.p.rapidapi.com/search?query=${searchTerm}&page=1`)}><div id="search-icon">
                              
                                         <GoSearch  style={{ fontSize: 20 }} />
                        </div>
                        </a>
                        <Link to="/register">
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
                <ProductList data = { data }/>
                <Footer />
                
            </Fragment>

        );
    
    }

export default HomeSearch;
