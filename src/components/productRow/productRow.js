import React from 'react';
import './productRow.css';

function ProductRow (props){
    
    const { item } = props;
    const addingCartItem = (e) => {
        e.preventDefault();
        props.addCartItem(item)
    }

    return(
        <div className = 'Item' >
            <img className='ItemImg' src={item.image.imageUrl} alt='Poduct Img'/>
            <div className="ItemLabels">
                <p className = 'ItemTitle'>{item.title.displayTitle}</p>
                <p className = 'ItemPrice'>{item.prices.sale_price.formattedPrice}</p>
                <button className = 'addCartButton' onClick = {addingCartItem}>
                    Ajouter au panier
                </button>
            </div>
        </div>  
             
    )
}

export default ProductRow ;