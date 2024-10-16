import React from "react";
//import { ImportsNotUsedAsValues } from "typescript";
import Input from "./Input.jsx";

function Form(props) {
  return (
    <form className="form">
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      {props.IsRegistered === false && (
        <Input type="password" placeholder="Confirm Password" />
      )}
      {/* <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
  <input type="password" placeholder="Confirm Password" />*/}

      <button type="submit">{props.IsRegistered ? "Login" : "Register"}</button>
    </form>
  );
}

export default Form;
