import React from 'react';
import BurgerIngredient from './BurgerIngredient';
import './Burger.css';

const Burger=(props)=>{
    let burgerFilling = Object.keys(props.ingredients).map(ingKey =>
        ([...Array(props.ingredients[ingKey])]).map((_, index) =>
            (<BurgerIngredient key={ingKey + index} type={ingKey} />)
        )
    ).reduce((preVal, curVal) => [...preVal, ...curVal], []);
    console.log(burgerFilling);
    if(!burgerFilling.length>0)
        burgerFilling=<h4>Please start adding the filling</h4>
    return (
        <div className='Burger'>
            <BurgerIngredient type='bread-top' />
            {burgerFilling}
            <BurgerIngredient type='bread-bottom' />
        </div>
    )
}
export default Burger;