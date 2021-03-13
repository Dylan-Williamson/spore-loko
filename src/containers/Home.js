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
                        title='Rasta Imposta Ultimate Banana Fruit Costume Adult Unisex One Size Yellow'
                        price={24.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/71fILawxg5L._AC_UY741_.jpg"
                        rating={4}
                    />
                    <Product
                        id="2"
                        title='Yesito Chicken Harness Hen Size with 6ft Matching Leash'
                        price={15.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/71Q26wBEIeL._AC_SX425_.jpg"
                        rating={2}
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="3"
                        title='Thanos Swimsuit Male One Piece Swimwear for Men'
                        price={2449.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/61jFyhk5WfL._AC_UX679_.jpg"
                        rating={4}
                    />
                    <Product
                        id="4"
                        title='Rubber Chicken Purse - The Hen Bag Handbag'
                        price={37.95}
                        image="https://images-na.ssl-images-amazon.com/images/I/61eiIozbjeL._AC_SL1200_.jpg"
                        rating={3}
                    />
                    <Product
                        id="5"
                        title='Nicolas Cage Pillow Case 18" x 18" Inches Covers for Bedroom Safa Gifts, Double-Sided Printed'
                        price={9.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/81K%2Bo6n85WL._AC_SL1500_.jpg"
                        rating={5}
                    />
                </div>
                <div className="home__row">
                    <Product
                        key={(1 + Math.random() * (100-1))}
                        id="6"
                        title='Elon Musk Air Freshener'
                        price={5.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/51ateCgRV1L._AC_SL1000_.jpg"
                        rating={4}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
