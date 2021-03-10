import React from 'react';
import '../Checkout.css';
import Subtotal from '../components/Subtotal';
import CheckoutProduct from '../components/CheckoutProduct'
import { connect } from 'react-redux';

const Checkout = (props) => {    
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img
                    className="checkout__ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                    alt=""    
                />

                <div>
                    <h3>
                        Hello {props.user?.email}
                    </h3>
                    <h2
                        className="checkout__title">Your Shopping Cart
                    </h2>
                    <div>
                        {props.cart.map(item => <CheckoutProduct {...item} />)}
                    </div>
                </div>
            </div>

            <div className="checkout__right">
                <Subtotal />
            </div>


        </div>
    )
}

const mapStateToProps = (state) => ({
    cart: state.cart.cart,
    user: state.user.user
})
export default connect(mapStateToProps)(Checkout)
