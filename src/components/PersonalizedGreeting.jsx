import React, { useState } from "react";

const PersonalizedGreeting = () => {
  const [name, setName] = useState("");

  return (
    <div>
      <label htmlFor="name">Enter your name : </label>
      <br />
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      {name && <h2>Hello, {name}!</h2>}
    </div>
  );
};

export default PersonalizedGreeting;
