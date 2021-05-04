import React from "react";

const RecipeCard = ({ getRecipes }) => {
  let recipeToReturn;
  if (getRecipes) {
    recipeToReturn = getRecipes.map((getrecipe) => {
      return (
        <div key={getrecipe.id} className="recipecard">
          <img src={getrecipe.image} />
          <ul>
            <li>{getrecipe.name}</li>
            <li> {getrecipe.cookTime}</li>
            <li>{getrecipe.description}</li>
          </ul>

          <ul>
            {" "}
            {getrecipe.recipeIngredient.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </div>
      );
    });
  }
  return <div className="recipelist">{recipeToReturn}</div>;
};

export default RecipeCard;
