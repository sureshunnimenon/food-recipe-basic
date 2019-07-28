import React from 'react'

const Recipe = ({title,calories,img, ingredients}) => {
  return (
    <div>
        <h1>Title: {title}</h1>
        <p> Calories: {calories} </p>
        <img src={img} alt="recipe"/>
        <h4> Ingredients:</h4>
        <ul>
            {ingredients.map((ingredient) => (
                <li> {ingredient.text}</li>
            ))}
        </ul>
        < hr/> 
    </div>
  )
}

export default Recipe
