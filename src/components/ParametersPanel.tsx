"use client";
import React, { useState } from "react";

export default function ParametersPanel() {
  const [temperature, setTemperature] = useState(0.7);

  return (
    <div className="p-4 border rounded bg-white dark:bg-gray-800">
      <h2 className="text-lg font-bold mb-2">Parameters</h2>
      <label className="block mb-2">
        Temperature: {temperature.toFixed(1)}
      </label>
      <input
        type="range"
        min="0"
        max="1"
        step="0.1"
        value={temperature}
        onChange={(e) => setTemperature(parseFloat(e.target.value))}
        className="w-full"
      />
    </div>
  );
}
