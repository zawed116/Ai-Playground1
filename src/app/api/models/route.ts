import { NextResponse } from "next/server";

export async function GET() {
  const models = [
    { id: "gpt-3.5", label: "GPT-3.5" },
    { id: "gpt-4", label: "GPT-4" },
    { id: "gpt-4-mini", label: "GPT-4-mini" },
    { id: "local-llama", label: "Local LLaMA (mock)" },
  ];
  return NextResponse.json(models);
}
