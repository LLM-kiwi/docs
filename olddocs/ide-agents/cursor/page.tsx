import { Metadata } from "next";
import CodeBlock from "@/components/docs/code-block";

export const metadata: Metadata = {
  title: "Cursor Integration - LLM.kiwi API",
  description:
    "Learn how to configure Cursor IDE to use LLM.kiwi for code generation and chat.",
};

export default function CursorPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Cursor Integration
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Cursor is an AI-first code editor. You can configure it to use
          LLM.kiwi as your model provider, enabling access to premium models at
          a lower cost.
        </p>
      </div>

      <section>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Configuration Steps
        </h2>
        <ol className="list-decimal list-inside space-y-4 text-gray-600 dark:text-gray-400">
          <li>
            Open Cursor Settings (<code>Ctrl+Shift+J</code> or{" "}
            <code>Cmd+Shift+J</code>).
          </li>
          <li>
            Navigate to the <strong>Models</strong> section.
          </li>
          <li>Toggle off the default model providers if desired.</li>
          <li>
            Look for the <strong>OpenAI API Key</strong> section (or
            &quot;Override OpenAI Base URL&quot;).
          </li>
          <li>
            Enter your LLM.kiwi API key.
            <div className="mt-2 text-sm text-gray-500">
              You can generate one in your{" "}
              <a
                href="/dashboard/keys"
                className="text-purple-600 hover:underline"
              >
                Dashboard
              </a>
              .
            </div>
          </li>
          <li>
            Set the <strong>Base URL</strong> (sometimes called &quot;Override
            OpenAI Base URL&quot;) to:
            <div className="mt-2">
              <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-purple-600 dark:text-purple-400">
                https://api.llm.kiwi/v1
              </code>
            </div>
          </li>
          <li>
            Click <strong>Save</strong> or <strong>Verify</strong>.
          </li>
        </ol>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Adding Custom Models
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Cursor allows you to add custom model names. LLM.kiwi supports
          standard OpenAI model names. We recommend adding these models in
          Cursor settings:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
          <li>
            <code>gpt-4o</code> (for high intelligence tasks)
          </li>
          <li>
            <code>gpt-4o-mini</code> (for fast, routine tasks)
          </li>
          <li>
            <code>o1-mini</code> (for complex reasoning)
          </li>
        </ul>
        <p className="mt-4 text-gray-600 dark:text-gray-400">
          Simply type the model name in the &quot;Add Model&quot; input field in
          Cursor settings.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Using MCP with Cursor
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Cursor also supports the Model Context Protocol (MCP). You can add
          LLM.kiwi as an MCP server to give Cursor tools to perform actions
          directly via our API.
        </p>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Edit your <code>.cursor/mcp.json</code> (or use the UI in{" "}
          <strong>Features &gt; MCP</strong>):
        </p>
        <CodeBlock
          examples={[
            {
              language: "json",
              label: "mcp.json",
              code: `{
  "mcpServers": {
    "llm-kiwi": {
      "url": "https://api.llm.kiwi/mcp",
      "headers": {
        "Authorization": "Bearer sk-..."
      }
    }
  }
}`,
            },
          ]}
        />
      </section>
    </div>
  );
}
