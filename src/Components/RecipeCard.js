import React from "react";

const RecipeCard = ({ getRecipes }) => {
  let recipeToReturn;
  if (getRecipes) {
    recipeToReturn = getRecipes.map((getrecipe) => {
      return (
        <div key={getrecipe.id} className="recipecard">
          <ul>
            <li>{getrecipe.image}</li>
            <li>{getrecipe.name}</li>
            <li> {getrecipe.cookTime}</li>
            {/* <li>{getrecipe.description}</li> */}
          </ul>

          {/* <li> {getrecipe.recipeIngredient}</li> */}
        </div>
      );
    });
  }
  return <div className="recipelist">{recipeToReturn}</div>;
};

export default RecipeCard;
