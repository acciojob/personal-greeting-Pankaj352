import React, { useState } from "react";

const PersonalizedGreeting = () => {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name..."
        value={name}
        onChange={(e) => setName(e.target.value)}
     
      />
      {name && <h2>Hello, {name}!</h2>}
    </div>
  );
};

export default PersonalizedGreeting;
