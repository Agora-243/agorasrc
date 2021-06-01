import React, { useState, useEffect } from 'react';
import './productList.css'

function ProductList(props){
  
    
    const [ data, setData ] = useState([]);

    useEffect(() => {
       
        let url ="https://ali-express1.p.rapidapi.com/search?query=Iphone12&page=1";
        let url2 = 'http://46.101.131.38:8000/products/search';
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
            (result)=>
                {result.json()
                    .then((response)=>
                        setData(response.data.searchResult.mods.itemList.content)     
                    )
                               
                 }  
            )
        console.log(props.store);
        },
        []
    )   
           
    return(
                
        <div className='productListView'>
            {console.log(data)}
            <h1>Fetch Test </h1>
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
    )
}

export default ProductList;