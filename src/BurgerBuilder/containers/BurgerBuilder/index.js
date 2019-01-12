import React, { Component } from 'react';
import BurgerBuilderControls from './../../components/Burger/BurgerBuildControls';
import Burger from '../../components/Burger';
import OrderSummary from '../../components/Burger/OrderSummary'
import Model from '../../components/UI/Modal'
import Layout from './../../components/Layout';
const INGREDIENT_RATES = {
    salad: 27,
    bacon: 23,
    cheese: 14,
    meat: 17
}
const ingredientsData = [
    { label: 'Cheese', type: 'cheese' },
    { label: 'Salad', type: 'salad' },
    { label: 'Meat', type: 'meat' },
    { label: 'Bacon', type: 'bacon' },
];
class BurgerBuilder extends Component {
    constructor() {
        super();
        this.state = {
            ingredients: {
                cheese: 0,
                bacon: 0,
                salad: 0,
                meat: 0,
            },
            totalPrice: 0,
            showOrderModal: false,
            ordering: false
        }

    }
    addIngredient = (type) => {
        this.setState((state) => {
            return {
                ingredients: {
                    ...state.ingredients, 
                    [type]: state.ingredients[type] + 1,
                },
                totalPrice: INGREDIENT_RATES[type] + state.totalPrice,
            }
        })
    }
    removeIngredient = (type) => {
        let ingredients=this.state.ingredients;
        ingredients[type]=ingredients[type]-1;
        this.setState({
            ingredients:ingredients,
            totalPrice:this.state.totalPrice-INGREDIENT_RATES[type],
        })
    }
    initiatePurchase = () => {
        this.setState({ showOrderModal: true })
    }

    cancelPurchase = () => {
        this.setState({ showOrderModal: false })
    }
    checkout =() =>{
        alert('order place');
        this.setState({ 
            showOrderModal: false,
            ingredients: {
                cheese: 0,
                bacon: 0,
                salad: 0,
                meat: 0,
            },
            totalPrice: 0, 
        })
    }
    render() {
        let removeDisabledInfo = {};
        Object.keys(this.state.ingredients).forEach(ingKey => {
            removeDisabledInfo[ingKey] = (this.state.ingredients[ingKey] <= 0)
        });
        let modalContent = (<OrderSummary
            rates={INGREDIENT_RATES}
            ingredients={this.state.ingredients}
            close={this.cancelPurchase}
            checkout={this.checkout}
            totalPrice={this.state.totalPrice}
        />);
        return (
            <>
            <Layout>
                <Model show={this.state.showOrderModal} modalClosed={this.cancelPurchase}>{modalContent}</Model>
                <Burger ingredients={this.state.ingredients} />
                <BurgerBuilderControls ingredients={ingredientsData} totalPrice={this.state.totalPrice} add={this.addIngredient} remove={this.removeIngredient} purchaseable={(this.state.totalPrice > 0)} removeDisabledInfo={removeDisabledInfo}  handleClick={this.initiatePurchase} />
            </Layout>
            </>
        )
    }
}
export default BurgerBuilder;