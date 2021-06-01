import { Link } from "react-router-dom";
import { IoPricetagsOutline } from 'react-icons/io5';
import { MdAddShoppingCart } from 'react-icons/md';
import { Component } from 'react';
import './product-card.css';

class ProductCard extends Component {
    state = {
        post: {}
    }
    componentDidMount() {
        fetch('https://api.themoviedb.org/3/movie/76341?api_key=8ac08babdeee2ea12786ed2473626e5b')
            .then((response) => {
                return response.json();
            })
            .then((result) => {
                this.setState({post: result});
                console.log(this.post);
            })
    }
    render() {
        return (
            <div id="card-container">
                <div id="card-image">
                </div>
                <div id="card-footer">
                    <div id="labelle">
                        Produit X
                </div>
                    <div id="prise">
                        <span><IoPricetagsOutline className="iconsP" /> Prix : 790$</span>
                        <Link >
                            <button>
                                Ajouter <MdAddShoppingCart className="iconsP" />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}
export default ProductCard;