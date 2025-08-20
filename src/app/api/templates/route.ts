import { NextResponse } from "next/server";

export async function GET() {
  const templates = [
    {
      id: "summarize",
      name: "Summarize",
      prompt: "Summarize this text:\n\n{{input}}"
    },
    {
      id: "translate",
      name: "Translate",
      prompt: "Translate to English:\n\n{{input}}"
    },
    {
      id: "rewrite",
      name: "Rewrite (Concise)",
      prompt: "Rewrite clearly:\n\n{{input}}"
    }
  ];
  return NextResponse.json(templates);
}
