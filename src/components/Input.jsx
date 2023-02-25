import React from "react";
import "./Input.css";

function Input() {
  return (
    <div class="custom-search">
      <input type="text" class="custom-search-input" placeholder="Email" />
      <button class="custom-search-botton" type="submit">
        Join
      </button>
    </div>
  );
}

export default Input;
