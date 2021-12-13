import React from "react";

function Welcome({ name }) {
  return (
    <div data-testid="welcome">
      <h1>Welcome {name}</h1>
    </div>
  );
}

export default Welcome;
