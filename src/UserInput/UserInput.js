import React from 'react';

const userInput = (props) => {
  return (
    <div>
      <h1>Enter your input</h1>
      <input
        type="text"
        onChange={props.changed}
        value={props.name} />
    </div>
  );
}

export default userInput;
