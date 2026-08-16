import React, { useState } from "react";

function ColorChanger() {
  const [color, setColor] = useState("lightblue");

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <div
      style={{
        backgroundColor: color,
        minHeight: "100vh",
      }}
      className="flex items-center justify-center"
    >
      <div className="bg-white p-8 rounded-lg shadow-md text-center">

        <h1 className="text-3xl font-bold text-blue-600">
          Background Color Changer
        </h1>

        <p className="mt-4 text-gray-600">
          Select a color to change the background:
        </p>

        <input
          type="color"
          value={color}
          onChange={handleColorChange}
          className="mt-4 w-16 h-10"
        />

        <p className="mt-4 font-semibold">
          Selected Color: {color}
        </p>

      </div>
    </div>
  );
}

export default ColorChanger;