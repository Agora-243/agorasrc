import { Component } from 'react';
import ProductCard from '../product-card';
import './products.css'
class Products extends Component {
    render() {
        return(
            <div id="accueil">
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        )
    }
}
export default Products;