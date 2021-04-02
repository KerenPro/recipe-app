import React from 'react';
import style from './recipe.module.css';

function Recipe(props) {
    return(
        <div className={style.recipe}>
            <h1 >{props.title}</h1>
            <h2>Ingredients:</h2>
            <ul>
                {props.ingredients.map(ingredient =>(
                <li>{ingredient.text}</li>
                ))}
            </ul>
            <p>Calories: {props.calories.toFixed(2)}</p>
            <img className={style.image} src={props.image} alt={props.title}></img>
        </div>
    )

}

export default Recipe;