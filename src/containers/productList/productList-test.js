import React, { useState, useEffect } from 'react';
import './productList.css'
import {Fragment} from 'react';

function ProductList(props){
  

    
 const data = props.data ;
   
      
    if (data===null){
        return (<Fragment><br/><br/><br/><br/><br/><h1>Chargement...</h1> </Fragment>)
    }
   
    return(
       
            <Fragment>
               <div className='productListView'>
                    {console.log(data)} }
                    <br/>
                    <br/>
                    <br/>
                    <div>
                        {data.map(i=>
                            (
                                <div className = 'productListItem'>
                                    <img className='productListItemImg' src={i.image.imageUrl}/>
                                        <div className="productListItemLabels">
                                        <p className = 'productListItemTitle'>{i.title.displayTitle}</p>
                                            <p className = 'productListItemPrice'>{i.prices.sale_price.formattedPrice}</p>
                                        </div>
                                </div>  
                            )
                        )
                    }
                    </div>

                </div> 
                {//setSearchTerm(props.searchTerm)}
                }
            </Fragment>
        )
        
}

export default ProductList;