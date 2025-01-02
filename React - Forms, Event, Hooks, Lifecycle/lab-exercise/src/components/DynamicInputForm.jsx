import React, { useState } from "react";

function DynamicInputForm() {
  // State to hold the input value
  const [inputValue, setInputValue] = useState("");

  // Handle input change
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
        <br /><br /><br />
      <h1>&nbsp;&nbsp;Dynamic Input Display</h1><br /><br /><br />
      <form>&nbsp;&nbsp;&nbsp;&nbsp;
        <label htmlFor="dynamicInput">Enter Text: </label>
        <input
          type="text"
          id="dynamicInput"
          value={inputValue}
          onChange={handleInputChange}
        /><br /><br /><br />
      </form>
      <p>
      &nbsp;&nbsp;&nbsp;&nbsp;<strong>Live Value:</strong> {inputValue}
      </p>
    </div>
  );
}

export default DynamicInputForm;
