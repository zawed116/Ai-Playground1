"use client";
import React, { useState } from "react";

export default function PromptEditor() {
  const [prompt, setPrompt] = useState("");

  return (
    <div className="p-4 border rounded bg-white dark:bg-gray-800">
      <h2 className="text-lg font-bold mb-2">Prompt Editor</h2>
      <textarea
        className="w-full p-2 border rounded h-24"
        placeholder="Type your prompt here..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
    </div>
  );
}
