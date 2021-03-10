import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../Login.css';
import { connect } from 'react-redux'
import { handleLoginFormChange } from '../redux/actionCreators';
import { auth } from '../firebase'


const Login = (props) => {

    const history = useHistory();
    const { form, handleLoginFormChange } = props
    const { email, password } = form

    const signIn = (e) => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    const signUp = (e) => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                if (auth) {
                    history.push('/');
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className="login">
            <Link to="/">
                <img 
                    className="login__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon-logo.svg.png"
                    alt=""
                    />
            </Link>

            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>
                        E-mail
                    </h5>
                    <input type="text" name="email" value={email} onChange={handleLoginFormChange} />
                    <h5>
                        Password
                    </h5>
                    <input type="password" name="password" onChange={handleLoginFormChange} value={password}/>
                    <button className="login__signInButton" onClick={signIn} type="submit">
                        Sign In
                    </button>
                    <p>
                        By signing in, you agree to the Spore Loko conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice & our Interest-Based Ads Notice.
                    </p>
                    <button className="login__signUpButton" onClick={signUp}>
                        Create Amazon Account
                    </button>
                </form>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    signup: state.user.signup,
    form: state.user.loginForm
})

export default connect(mapStateToProps, { handleLoginFormChange })(Login)