import React from 'react';
import '../Product.css';
import { connect } from 'react-redux';
import { addToCart } from '../redux/actionCreators';

const Product = (props) => {
    return (
        <div className="product">
            <div className="product__info">
                <p>{props.title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{props.price}</strong>
                </p>
                <div className="product__rating">
                    {Array(props.rating)
                        .fill()
                        .map((_, i) => (
                            <p>⭐️</p>
                        ))}
                </div>
            </div>
            <img src={props.image} alt={props.title}/>
            <button onClick={()=> props.addToCart(props)}>Add To Cart</button>
        </div>
    )
}

const mapStateToProps = (state) => ({ cart: state.cart.cart })

export default connect(mapStateToProps, { addToCart })(Product)
