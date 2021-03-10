import React from 'react';
import '../Payment.css';
import { connect } from 'react-redux';
import CheckoutProduct from './CheckoutProduct';
import { Link } from 'react-router-dom';

const Payment = (props) => {

    const {user, cart} = props;

    return (
        <div className="payment">
            <div className="payment__container">
                <h1>
                    Checkout (
                        <Link to="/checkout">{cart?.length} items</Link>
                    )
                </h1>


                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{ user?.email }</p>
                        <p>123 React Lane.</p>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review Items & Delivery</h3>
                    </div>
                    <div className="payment__items">
                    {cart.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating} 
                        />
                    ))}
                    </div>
                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        
                    </div>
                </div>

            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    cart: state.cart.cart,
    user: state.user.user
})
export default connect(mapStateToProps)(Payment)
