import './homeSearch.css';
import React from 'react';
import Navbar from '../../components/navBar/navbar';
import Footer from '../../components/footer/footer';
import ProductCard from '../../components/Product/product-card';
import ProductList from '../../components/productList/productList-test';
import { Fragment } from 'react';
function HomeSearch (){
    
        return (
            <Fragment id='HomeSearch'>
                <Navbar />
                <ProductList />
                <ProductCard />
                <Footer />
                
            </Fragment>

        );
    
}

export default HomeSearch;
