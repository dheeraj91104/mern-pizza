import React from 'react';
import {useDispatch} from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { placeOrder } from '../actions/orderAction';

export default function Checkout({subtotal}) {
  const dispatch = useDispatch()
    function tokenHander(token){
        console.log(token);
        dispatch(placeOrder(token , subtotal))
    }

  return (
    <div>

       <StripeCheckout
       amount={subtotal*100}
       shippingAddress
       token={tokenHander}
       stripeKey='pk_test_51LeDOvSCjS6ArcoSZyvlIDGSKoxyPt5MzpJaEEzAoSXLYigsudHnRYePe7L6pfFLPGSxnyybr7hEeqbXl6NJxyx900iOo05GaK'
       currency='INR'
       >

        <button className='btn'>Pay Now</button>

       </StripeCheckout>

    </div>
  )
}
