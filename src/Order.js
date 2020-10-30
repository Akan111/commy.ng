import React from 'react'
import './Order.css';
import moment from 'moment'
import CheckoutProducts from './CheckoutProducts'
import CurrencyFormat from 'react-currency-format'

function Order({order}) {
    return (
        <div className="order">
            <h2>Order</h2>
            <p>{moment.unix(order.data.created).format('MMMM Do YYYY, a:mma')}</p>
            <p className="order__id">
                <small>{order.id}</small>
            </p>
            {order.data.basket?.map(item => (
                <CheckoutProducts 
                    id={item.title}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    hideButton
                />
            ))}
            <CurrencyFormat 
                renderText={(value) => (
              
                    <h3 className="order__total">Order Total: {value}</h3>
                
                )}
                decimalScale={2}
                value={order.data.amount / 100}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'N'}
            />

        </div>
    )
}

export default Order
