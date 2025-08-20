"use client";
import React, { useState } from "react";

export default function ChatOutput() {
  const [messages, setMessages] = useState<string[]>([]);

  const handleSend = () => {
    setMessages([...messages, "AI Response (dummy for now)..."]);
  };

  return (
    <div className="p-4 border rounded bg-white dark:bg-gray-800 flex flex-col h-full">
      <h2 className="text-lg font-bold mb-2">Chat Output</h2>
      <div className="flex-1 overflow-y-auto mb-2 border p-2 rounded bg-gray-50 dark:bg-gray-700">
        {messages.length === 0 ? (
          <p className="text-gray-500">No messages yet.</p>
        ) : (
          messages.map((msg, i) => (
            <div key={i} className="mb-2 p-2 bg-gray-200 dark:bg-gray-600 rounded">
              {msg}
            </div>
          ))
        )}
      </div>
      <button
        onClick={handleSend}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Send Prompt
      </button>
    </div>
  );
}
