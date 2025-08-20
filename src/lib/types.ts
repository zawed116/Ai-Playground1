export type Model = { id: string; label: string };
export type Template = { id: string; name: string; prompt: string };

export type Message = {
  id: string;
  role: "user" | "assistant" | "system";
  content: string;
  ts: number;
};
