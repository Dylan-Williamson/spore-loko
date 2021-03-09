import React from 'react';
import '../CheckoutProduct.css';
import { connect } from 'react-redux';
import { removeFromCart } from '../redux/actionCreators';

const CheckoutProduct = (props) => {
    const {title, image, price, rating} = props;
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt="" />

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">
                { title }
                </p>
                <p className="checkoutProduct__price">
                <small>
                    $
                </small>
                <strong>
                    { price }
                </strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>⭐️</p>
                        ))}
                </div>
                <button onClick={()=> props.removeFromCart(props)}>
                    Remove From Cart
                </button>
            </div>
        </div>
    )   
}

const mapStateToProps = (state) => ({ cart: state.cart.cart })

export default connect(mapStateToProps, { removeFromCart })(CheckoutProduct);

// export default CheckoutProduct;