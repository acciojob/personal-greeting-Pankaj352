import React, { useState } from "react";

const PersonalizedGreeting = () => {
  const [name, setName] = useState("");

  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <input
        type="text"
        placeholder="Enter your name..."
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="px-4 py-2 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {name && <h2 className="text-2xl font-semibold">Hello, {name}!</h2>}
    </div>
  );
};

export default PersonalizedGreeting;
