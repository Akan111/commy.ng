import React, { forwardRef } from 'react'
import './Checkout.css';
import {banner1} from './assets/images';
import Subtotal from './Subtotal';
import {useStateValue} from './StateProvider';
import CheckoutProducts from './CheckoutProducts';
import { backgroundImage, model1, shirt1, shirt2, shirt3, shirt4, Bomber1, shirt5, shirt6, shirt7, shirt8, kids1, kids2 } from './assets/images';

function Checkout() {
    const [{basket, user}, dispatch] = useStateValue();
    console.log(user);

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src={banner1} alt=""/>
                <div>
                    <h3>Hello, {user?.email}</h3>
                    <h2 className="checkout__title">
                        Your shopping basket
                    </h2>
                    
                            {basket.map(item => (
                                <CheckoutProducts 
                                    key={item.id}
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />
                                
                            ))}
                        
                        
                    
                    
                </div>
            </div>
            
            <div className="checkout__right">
                <Subtotal />
                <h2>Subtotal goes here</h2>
            </div>
        </div>
    )
}

export default Checkout
