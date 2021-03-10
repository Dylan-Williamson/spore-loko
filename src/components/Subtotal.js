import React from 'react';
import '../Subtotal.css';
import CurrencyFormat from "react-currency-format";
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Subtotal = (props) => {

        const history = useHistory();

        const calculateSubtotal = () => {
            let cart = props.cart;
            let subtotal = 0;
            cart.map(item => subtotal+=item.price);
            return subtotal;
        };
        
        return (
            <div className="subtotal">
                <CurrencyFormat
                    renderText={(value) => (
                        <>
                            <p>
                                Subtotal ({props.cart.length} items):
                                <strong>{value}</strong>
                            </p>
                            <small className="subtotal__gift">
                                <input type="checkbox"/>
                                This order contains a gift
                            </small>
                        </>
                    )}
                    decimalScale={2}
                    value={calculateSubtotal()}
                    displayType={"text"}
                    thousandSeperator={true}
                    prefix={"$"}
                />

                <button onClick={e => history.push('/payment')}>Proceed to Checkout</button>
            </div>
        )
}

const mapStateToProps = (state) => ({ cart: state.cart.cart });

export default connect(mapStateToProps)(Subtotal);
