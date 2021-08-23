import { useState, useEffect } from 'react';
import ProductCard from '../product-card';
import { Bones } from 'react-bones/lib';
import './products.css'
function Products({datas}) {
   
    return (
        <div id="accueil">
            <ProductCard title={datas[0].title.seoTitle}
                price={datas[0].prices.sale_price.formattedPrice}
                image={datas[0].image.imageUrl} />
            <ProductCard title={datas[1].title.seoTitle}
                price={datas[1].prices.sale_price.formattedPrice}
                image={datas[1].image.imageUrl}/>
            <ProductCard title={datas[2].title.seoTitle}
                price={datas[2].prices.sale_price.formattedPrice}
                image={datas[2].image.imageUrl} />
        </div>
    )
}
export default Products;