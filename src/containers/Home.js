import React from 'react';
import '../Home.css';
import Product from '../components/Product'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img
                    className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt="background"
                />
                <div className="home__row">
                    <Product
                        id="1"
                        title='The Lean Startup'
                        price={29.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
                        rating={4}
                    />
                    <Product
                        id="2"
                        title='The Lean Startup'
                        price={29.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
                        rating={4}
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="3"
                        title='The Lean Startup'
                        price={29.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
                        rating={3}
                    />
                    <Product
                        id="4"
                        title='The Lean Startup'
                        price={29.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
                        rating={4}
                    />
                    <Product
                        id="5"
                        title='The Lean Startup'
                        price={29.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
                        rating={4}
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="6"
                        title='The Lean Startup'
                        price={29.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
                        rating={4}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
