import React from 'react';
import Button from './../../UI/Button';

const OrderSummary = (props) => {
    const items = Object.keys(props.ingredients).map(ingKey => (
        (props.ingredients[ingKey]>0) ?
        <li key={ingKey}>{ingKey}: {props.ingredients[ingKey]} -- $ {props.rates[ingKey]}</li> : null
            
    ));

    return(
        <>
            <p>You have selected the following items for the burger filling</p>
            <ul>{items}</ul>
            <p><strong>Total Price: ${props.totalPrice.toFixed(2)}</strong></p>
            <Button btnType='Success' clicked={props.checkout}>Checkout</Button>
            <Button btnType='Danger' clicked={props.close}>Cancel</Button>
        </>
    )
}

export default OrderSummary;
