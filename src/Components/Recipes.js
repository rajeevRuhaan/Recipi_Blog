import React, { Component } from "react";
import RecipeCard from "./RecipeCard";

import "./Recipes.css";

class Recipes extends Component {
  state = [
    {
      getRecipes: [],
      inputData: {
        id: "",
        name: "",
        image: "",
        cookTime: "",
        description: "",
        keyWord: "",
        recipeIngredient: "",
        recipeInstruction: "",
      },
    },
  ];
  componentDidMount() {
    this.setState({ isLoading: true });
    fetch("http://localhost:3001/recipe")
      .then((resp) => resp.json())
      .then((data) =>
        this.setState({
          getRecipes: data,
          isLoading: false,
        })
      );
  }

  render() {
    return (
      <div>
        <div>
          <section id="hero-banner">
            <h2>Welcome to my recipe page</h2>
          </section>
        </div>

        <h1> Recipes</h1>

        <RecipeCard getRecipes={this.state.getRecipes} />
      </div>
    );
  }
}

export default Recipes;
