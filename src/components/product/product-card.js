import { Link } from "react-router-dom";
import { IoPricetagsOutline } from 'react-icons/io5';
import { MdAddShoppingCart } from 'react-icons/md';
import './product-card.css';

function ProductCard({ title, image, price, dimension }) {
    const ImageStyle = {
        borderRadius: "5px 5px 0 0",
        flex: 1,
        width: "100%",
        height: "65%",
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
    }
    return (
        <div id="card-container" >
            <div id="card-image" style={ImageStyle}>
            </div>
            <div id="card-footer">
                <div id="labelle">

                    {title}
                </div>
                <div id="prise">
                    <span><IoPricetagsOutline className="iconsP" /> Prix :{price}</span>
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
export default ProductCard;