import React, { useState } from "react";

const SearchBox = () => {
  // Using useState to manage the input state
  const [inputValue, setInputValue] = useState("");
  const [timerId, setTimerId] = useState(null);

  // Handle input change
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Handle button click
  const handleButtonClick = () => {
    if (timerId) {
      clearTimeout(timerId); // Clear previous timer if exists
    }

    const newTimerId = setTimeout(() => {
      console.log("Last clicked input data:", inputValue);
    }, 500); // Set a new timer with a delay of 500ms

    setTimerId(newTimerId); // Store the new timer id
  };

  return (
    <div>
      {/* Input field */}
      <input
        type="text"
        placeholder="Enter text"
        value={inputValue}
        onChange={handleInputChange}
      />
      {/* Button */}
      <button onClick={handleButtonClick}>LastClick</button>
    </div>
  );
};

export default SearchBox;
