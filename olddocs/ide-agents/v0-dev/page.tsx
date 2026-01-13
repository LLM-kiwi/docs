import { Metadata } from "next";
import CodeBlock from "@/components/docs/code-block";

export const metadata: Metadata = {
  title: "v0.dev Integration - LLM.kiwi API",
  description: "Use LLM.kiwi with v0.dev generated UI components.",
};

export default function V0DevPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          v0.dev Integration
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          v0 by Vercel generates React UI code using AI. You can easily wire up
          these components to the LLM.kiwi API to make them functional.
        </p>
      </div>

      <section>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Workflow
        </h2>
        <ol className="list-decimal list-inside space-y-4 text-gray-600 dark:text-gray-400">
          <li>
            Generate your UI in v0 (e.g., &quot;A chat interface&quot; or
            &quot;An image generation dashboard&quot;).
          </li>
          <li>Copy the code to your Next.js project.</li>
          <li>
            Create an API route handler in Next.js to proxy requests to LLM.kiwi
            (to keep your API key secure).
          </li>
          <li>Connect the UI component to your route handler.</li>
        </ol>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Example: Next.js Route Handler
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Create <code>app/api/chat/route.ts</code>:
        </p>
        <CodeBlock
          examples={[
            {
              language: "typescript",
              label: "app/api/chat/route.ts",
              code: `import { OpenAI } from 'openai';

const client = new OpenAI({
  apiKey: process.env.LLM_API_KEY,
  baseURL: 'https://api.llm.kiwi/v1',
});

export async function POST(req: Request) {
  const { messages } = await req.json();

  const response = await client.chat.completions.create({
    model: 'gpt-4o',
    messages,
    stream: true,
  });

  // Convert to stream if using AI SDK or similar
  return new Response(response.toReadableStream());
}`,
            },
          ]}
        />
      </section>
    </div>
  );
}
