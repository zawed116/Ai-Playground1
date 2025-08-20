import ModelSelector from "@/components/ModelSelector";
import PromptEditor from "@/components/PromptEditor";
import ParametersPanel from "@/components/ParametersPanel";
import ChatOutput from "@/components/ChatOutput";
import ThemeSwitcher from "@/components/ThemeSwitcher";

export default function Home() {
  return (
    <main className="min-h-screen p-6 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">AI Playground</h1>
        <ThemeSwitcher />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <ModelSelector />
          <PromptEditor />
          <ParametersPanel />
        </div>
        <ChatOutput />
      </div>
    </main>
  );
}
