import './homeSearch.css';
import {React, useState} from 'react';
import Navbar from '../../components/navBar/navbar';
import Footer from '../../components/footer/footer';
import ProductCard from '../../components/Product/product-card';
import ProductList from '../../components/productList/productList';

function HomeSearch (){
    
        return (
            <div id='HomeSearch'>
                <Navbar />
                <ProductList />
                <ProductCard />
                <Footer />
                
            </div>

        );
    
}

export default HomeSearch;
