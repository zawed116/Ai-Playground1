"use client";
import { useAppStore } from "@/lib/store";

export default function ModelSelector() {
  const { model, setModel } = useAppStore();

  return (
    <div className="p-4 border rounded bg-white dark:bg-gray-800">
      <label className="font-medium">Select Model: </label>
      <select
        value={model}
        onChange={(e) => setModel(e.target.value)}
        className="ml-2 p-2 border rounded bg-gray-100 dark:bg-gray-700"
      >
        <option>GPT-3.5</option>
        <option>GPT-4</option>
        <option>Claude</option>
        <option>Mistral</option>
      </select>
    </div>
  );
}
