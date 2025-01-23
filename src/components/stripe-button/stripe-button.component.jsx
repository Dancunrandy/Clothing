import React from "react";
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100 ;
    const publishableKey ='pk_test_51Qk9sGCzYWTUwWVw6vYAEXHUllVtrvxYm57Vl90gZvLaHUMSO4lNxE5lGGmm3CDZDVv9FiGHZ8n2SnGcPUCi5T1H00DiZ8XqZv';
    const onToken = token => {
    console.log(token);
    alert('payment successful')
  }  
    
    return (
        <StripeCheckout
            label = 'Pay Now'
            name = 'Jafema Clothing Ltd'
            billingAddress
            shippingAddress
            image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAfpLxry6Puwe4vULNXw7gz9LB9Etz-hgB6A&usqp=CAU' 
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLable='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;