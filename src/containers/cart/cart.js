import { connect } from 'react-redux';
import ProductRow from '../../components/productRow/productRow';

const mapStateToProps = state => (
    {
        cart : state.sessionManager.cart,
    }
)   
const mapDispatchToProps = dispatch => (
    {

    }
)
function Cart(props){
    return  (
        <div className = "cart">
            {props.cart
                .map(item => {
                    return (
                        <ProductRow item = {item} />
                    )

                }
                )
            }
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)