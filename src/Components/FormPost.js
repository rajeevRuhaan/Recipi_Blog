import React, { Component } from "react";
import Form from "../Pages/Form";
import Popup from "../Pages/Popup";

class FormPost extends Component {
  state = {
    showPopup: false,
    inputData: {
      name: "",
      image: "",
      cookTime: "",
      description: "",
      keyWords: "",
      recipeIngredient: "",
      recipeInstruction: [
        {
          name: "",
          text: "",
        },
      ],
    },
  };

  changehandler = (e) => {
    this.setState({
      inputData: { ...this.state.inputData, [e.target.name]: e.target.value },
    });
  };

  popupHandler = (e) => {
    this.setState({ showPopup: true });
    e.preventDefault();
  };

  sendDataHandler = () => {
    const requestOptions = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(this.state.inputData),
    };
    fetch("http://localhost:3001/recipe", requestOptions);
    alert("Note is posted", window.location.reload());
  };

  render() {
    return (
      <div>
        <Form change={this.changeHandler} submit={this.popupHandler} />
        {this.state.showPopup && (
          <Popup {...this.state.inputData} submit={this.sendDataHandler} />
        )}
      </div>
    );
  }
}

export default FormPost;
