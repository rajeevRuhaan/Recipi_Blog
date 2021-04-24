import React from "react";
import "./Popup.css";

const closeHandler = () => {
  window.location.reload();
};

const Popup = ({
  name,
  image,
  cookTime,
  description,
  keyWord,
  recipeIngredient,
  recipeInstruction,
}) => {
  return (
    <div className="overlay">
      <div className="popup">
        <h1>Your note:</h1>
        <div>
          <p>
            Name of recipe: <span>{name}</span>
          </p>
          <p>
            Image: <span>{image}</span>
          </p>
          <p>
            Cook Time: <span>{cookTime}</span>
          </p>
          <p>
            Description: <span>{description}</span>
          </p>
          <p>
            Key Words: <span>{keyWord}</span>
          </p>
          <p>
            Recipe Ingredients: <span>{recipeIngredient}</span>
          </p>
          <p>
            recipe Instruction: <span>{recipeInstruction}</span>
          </p>
          <button onClick={submit}>Yes, I am sure</button>
          <button className="secondary" onClick={closeHandler}>
            Nope, don't want to post it
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
