import React, { useState, useEffect } from 'react';
import './productList.css'
import {Fragment} from 'react';
import ProductRow from '../../components/productRow/productRow';
import { connect } from 'react-redux';
import { addCartItem } from '../../actions';

const mapStateToProps = state => {
    return {
            productsData : state.requestProducts.productsData,
            isPending : state.requestProducts.isPending,
        }
}

const mapDispatchToProps = dispatch => {
    return  {
        addCartItem : id => dispatch(addCartItem(id)),
    }
}

function ProductList(props){
    
    const { addCartItem } = props;

    if(props.productsData === null && !props.isPending  ){
        return (<div><br/><br/><br/><br/><h1>Welcome</h1> </div>)
    }
    else if (props.productsData===null && props.isPending === true){
        return (<div><br/><br/><br/><br/><h1>Chargement...</h1> </div>)
    }
   
    return(
        <Fragment>
            <br/><br/><br/><br/><br/><br/> 
            <div className='productsRowView'>
                { 
                    props.productsData.searchResult.mods
                    .itemList.content
                    .map(item => {
                        return <ProductRow addCartItem={addCartItem} item = {item}/>
                        }
                    ) 
                }
            </div> 
        </Fragment>
    )
       
        
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);