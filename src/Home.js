import React from 'react';
import { backgroundImage, model1, shirt1, shirt2, shirt3, shirt4, Bomber1, shirt5, shirt6, shirt7, shirt8, kids1, kids2 } from './assets/images';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className='home'>
            <div className="home__container">
                <img className="home__image" src={backgroundImage} alt=""/>            
                    
                <div className="home__row">
                    <Product 
                        id="1"
                        title="Mens Standard-Fit Long-Sleeve Gingham Plaid Poplin Shirt"
                        price={15000.00}
                        image={model1}
                        rating={5}
                    />
                    <Product 
                        id="2"
                        title="Men's Regular-Fit Long-Sleeve Plaid Casual Button-Down Poplin Shirt"
                        price={9000.00}
                        image={shirt1}
                        rating={3}
                    />
                    <Product 
                        id="3"
                        title="Men's Buck Camp Flannel Shirt"
                        price={18000.00}
                        image={shirt2}
                        rating={4}
                    />
                    <Product 
                        id="4"
                        title="Mens Fashion Casual Front Placket Basic Long/Short Sleeve Henley T-Shirts"
                        price={7000.00}
                        image={shirt3}
                        rating={3}
                    />
                    
                </div>

                <div className="home__row">
                    <Product 
                        id="5"
                        title="Urban white and denim combo shirt designed to give you that eye-starring look"
                        price={7000.00}
                        image={shirt4}
                        rating={3}
                    />
                    <Product 
                        id="6"
                        title="We are unique and different in our fashion delivery irrespective of the fabric used"
                        price={7000.00}
                        image={shirt5}
                        rating={3}
                    />
                    <Product 
                        id="7"
                        title="Ankara hooded jacket for a perfect family outing."
                        price={7000.00}
                        image={kids1}
                        rating={3}
                    />
                    <Product 
                        id="8"
                        title="Commydesigns for kids. For the gorgeously cute look"
                        price={7000.00}
                        image={kids2}
                        rating={3}
                    />
                </div>
                
                <div className="home__row">
                    <Product 
                        id="9"
                        title="Mens Fashion Casual Front Placket Basic Long/Short Sleeve Henley T-Shirts"
                        price={7000.00}
                        image={shirt6}
                        rating={3}
                    />
                    <Product 
                        id="10"
                        title="Mens Fashion Casual Front Placket Basic Long/Short Sleeve Henley T-Shirts"
                        price={7000.00}
                        image={shirt7}
                        rating={3}
                    />
                    <Product 
                        id="11"
                        title="Mens Fashion Casual Front Placket Basic Long/Short Sleeve Henley T-Shirts"
                        price={7000.00}
                        image={shirt8}
                        rating={3}
                    />
                    <Product 
                        id="12"
                        title="Mens Fashion Casual Front Placket Basic Long/Short Sleeve Henley T-Shirts"
                        price={7000.00}
                        image={Bomber1}
                        rating={3}
                    />
                </div>
            </div>      
        </div>
    )
}

export default Home
