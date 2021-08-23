import './homeSearch.css';
import React from 'react';
import Navbar from '../navBar/navbar';
import Footer from '../../components/footer/footer';
import ProductCard from '../../components/product/product-card';
import ProductList from '../productList/productList';
import { Fragment } from 'react';
function HomeSearch (){
    
        return (
            <Fragment id='HomeSearch'>
                <Navbar />
                <div>
                    <ProductList />
                </div>
                <Footer />
                
            </Fragment>

        );
    
}

export default HomeSearch;
