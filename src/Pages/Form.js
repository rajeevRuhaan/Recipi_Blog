import React from "react";
import "./Form.css";

const Form = ({ submit, change }) => {
  return (
    <div>
      <div className="form">
        <form onSubmit={submit}>
          <div className="">
            <label htmlFor="name">Name of Recipe</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={change}
              required
            />
          </div>
          <div className="">
            <label htmlFor="image">
              Image
              <input type="text" name="image" id="image" onChange={change} />
            </label>
          </div>
          <div className="">
            <label htmlFor="cookTime">
              Cook - Time
              <input
                type="text"
                name="cookTime"
                id="cookTime"
                onChange={change}
                required
              />
            </label>
          </div>
          <div className="">
            <label htmlFor="description">
              Description
              <textarea
                type="text"
                name="description"
                rows="4"
                cols="30"
                id="message"
                onChange={change}
                required
              />
            </label>
          </div>
          <div className="">
            <label htmlFor="keyWord">Key Words</label>
            <input
              type="text"
              name="keyWord"
              onChange={change}
              required
            ></input>
          </div>

          <div className="">
            <label htmlFor="recipiIngredient">
              Recipe Ingredients
              <textarea
                type="text"
                name="recipiIngredient"
                rows="4"
                cols="30"
                onChange={change}
                required
              />
            </label>
          </div>
          <div className="">
            <label htmlFor="recipiInstruction">
              Recipe Instruction
              <textarea
                type="text"
                name="recipiInstruction"
                rows="4"
                cols="30"
                onChange={change}
                required
              />
            </label>
          </div>

          <div className="">
            <input type="submit" value="Send" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
