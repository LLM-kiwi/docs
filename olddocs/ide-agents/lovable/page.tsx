import { Metadata } from "next";
import CodeBlock from "@/components/docs/code-block";

export const metadata: Metadata = {
  title: "Lovable Integration - LLM.kiwi API",
  description: "Integrate Lovable GPT-engineer apps with LLM.kiwi.",
};

export default function LovablePage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Lovable Integration
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Lovable allows you to build software just by describing it. You can
          power the AI features of your Lovable-built apps with LLM.kiwi.
        </p>
      </div>

      <section>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Integration Guide
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Since Lovable applications are often exported as React/Supabase
          projects, integrating LLM.kiwi follows the standard OpenAI SDK
          pattern.
        </p>

        <h3 className="font-medium text-gray-900 dark:text-white mt-6 mb-3">
          1. Add Environment Variables
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-3">
          In your project settings or <code>.env</code> file:
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-md font-mono text-sm text-gray-800 dark:text-gray-200">
          VITE_OPENAI_BASE_URL=https://api.llm.kiwi/v1
          <br />
          VITE_OPENAI_API_KEY=sk-...
        </div>

        <h3 className="font-medium text-gray-900 dark:text-white mt-8 mb-3">
          2. API Call Implementation
        </h3>
        <CodeBlock
          examples={[
            {
              language: "typescript",
              label: "src/utils/ai.ts",
              code: `// Example function to call LLM.kiwi
export async function generateText(prompt: string) {
  const response = await fetch('https://api.llm.kiwi/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': \`Bearer \${import.meta.env.VITE_OPENAI_API_KEY}\`
    },
    body: JSON.stringify({
      model: 'gpt-4o',
      messages: [{ role: 'user', content: prompt }]
    })
  });

  return response.json();
}`,
            },
          ]}
        />
      </section>
    </div>
  );
}
