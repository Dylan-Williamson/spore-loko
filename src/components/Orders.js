import React, { useState, useEffect } from 'react';
import '../Orders.css';
import { db } from '../firebase';
import Order from './Order';
import { connect } from 'react-redux';

const Orders = (props) => {
    const {cart, user} = props;
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        if (user) {
            
            db
            .collection('users')
            .doc(user?.uid)
            .collection('orders')
            .orderBy('created', 'desc')
            .onSnapshot(snapshot => (
                setOrders(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                })))
            ))
        } else {
            setOrders([])
        }
    }, [user]);

    return (
        <div className="orders">
            <h1>your orders</h1>
            <div className="orders__order">
                {orders?.map( order => (
                    <Order order={order} />
                ))}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    cart: state.cart.cart,
    user: state.user.user
})
export default connect(mapStateToProps)(Orders)

