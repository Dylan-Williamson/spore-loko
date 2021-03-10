import React from 'react';
import '../Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { auth } from '../firebase'

const Header = (props) => {
    
    const handleAuth = () => {
        if (props.user) {
            auth.signOut();
        }
    }

        return (
            <div className="header">
                <Link to="/">
                <img
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt="logo"
                    className="header__logo"/>
                </Link>
                <div className="header__search">
                    <input
                        className="header__searchInput"
                        type="text"/>
                    <SearchIcon className="header__searchIcon" />
                </div>
                <div className="header__nav">
                    <Link to={!props.user && '/login'}>
                        <div className="header__option" onClick={handleAuth}>
                            <span className="header__optionLineOne">
                                Hello {props.user ? props.user.email : 'Guest'}
                            </span>
                            <span className="header__optionLineTwo">
                                {props.user ? 'Sign Out' : 'Sign In'}
                            </span>
                        </div> 
                    </Link>
                    <div className="header__option">
                        <span className="header__optionLineOne">
                            Returns
                        </span>
                        <span className="header__optionLineTwo">
                            & Orders
                        </span>
                    </div>
                    <div className="header__option">
                        <span className="header__optionLineOne">
                            Your
                        </span>
                        <span className="header__optionLineTwo">
                            Prime
                        </span>
                    </div>
                    <Link to="/checkout">
                        <div className="header__optionBasket">
                            <ShoppingBasketIcon />
                            <span className="header__optionLineTwo header__basketCount">
                                {props.cart?.length}
                            </span>
                        </div>
                    </Link>
                </div>
            </div>
        );
};

const mapStateToProps = (state) => ({
    cart: state.cart.cart,
    user: state.user.user
});

export default connect(mapStateToProps)(Header);