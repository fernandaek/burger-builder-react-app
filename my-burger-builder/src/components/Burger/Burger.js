import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './Burgeringredients/BurgerIngredients'



const burger = (props) => {

    let transformedIngredients = Object.keys(props.ingredients).map(ingredientKey => {
        return [...Array(props.ingredients[ingredientKey])].map((_, i) => {
           return <BurgerIngredient key={ingredientKey + i} type={ingredientKey} />;
        });
    })
    .reduce( (arr, el) => {
        return arr.concat(el)
    }, []);
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding your ingredients!</p>
    }
console.log (transformedIngredients)
    
    return (
        <div className = {classes.Burger}>
        <BurgerIngredient type= "bread-top" />
        {transformedIngredients}
    {/* As I used Transformed ingredient it was not necessary 
        the hard code bellow
        <BurgerIngredient type = "cheese" />
        <BurgerIngredient type = "salad" />
        <BurgerIngredient type = "meat" />
   */}
        <BurgerIngredient type = "bread-bottom" />
        </div>
    );
};

export default burger;