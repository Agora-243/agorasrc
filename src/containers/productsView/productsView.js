import React, { useState, useEffect } from 'react';
import './productsView.css'
import {Fragment} from 'react';
import ProductRow from '../../components/productRow/productRow';

function ProductsView(props){

    const [url,setUrl] = useState(`https://ali-express1.p.rapidapi.com/search?query=Mackbook&page=1`);
    var arrayData = null;
    
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
                { result.json()
                    .then( response =>
                        setData(response.data.searchResult.mods.itemList.content)     
                    )
                               
                 }  
            )
            console.log(arrayData);
        },
        [url]
    )   

  
 const { data } = props;
       
    if (data===null){
        return(
            <Fragment> 
                <h1>Chargement...</h1>
            </Fragment>
        )
    }
   
    return(
               <div className='productListView'>
                  
                    <ProductRow data = {data}/>  

                </div> 
        )
        
}

export default ProductsView;