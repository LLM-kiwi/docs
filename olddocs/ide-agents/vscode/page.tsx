import { Metadata } from "next";
import CodeBlock from "@/components/docs/code-block";

export const metadata: Metadata = {
  title: "VS Code Integration - LLM.kiwi API",
  description:
    "Use LLM.kiwi with VS Code extensions like Roo Code, Cline, and Continue.",
};

export default function VSCodePage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          VS Code Integration
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Visual Studio Code has a rich ecosystem of AI extensions. Most support
          OpenAI-compatible endpoints, making them perfect for LLM.kiwi.
        </p>
      </div>

      <section>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Recommended Extensions
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
            <h3 className="font-medium text-gray-900 dark:text-white">
              Roo Code / Cline
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Autonomous coding agent.
            </p>
          </div>
          <div className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
            <h3 className="font-medium text-gray-900 dark:text-white">
              Continue
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Open-source AI autopilot.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Configuring Roo Code / Cline
        </h2>
        <ol className="list-decimal list-inside space-y-4 text-gray-600 dark:text-gray-400">
          <li>
            Open the extension settings (usually a gear icon in the chat view).
          </li>
          <li>
            Select <strong>API Provider</strong> as &quot;OpenAI
            Compatible&quot; or &quot;OpenAI&quot;.
          </li>
          <li>
            Set <strong>Base URL</strong> to:
            <code className="ml-2 px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-purple-600 dark:text-purple-400 text-sm">
              https://api.llm.kiwi/v1
            </code>
          </li>
          <li>Enter your API Key.</li>
          <li>
            <strong>Model ID:</strong> Enter <code>gpt-4o</code> or your
            preferred model.
          </li>
        </ol>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Configuring Continue
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Modify your <code>config.json</code> in{" "}
          <code>~/.continue/config.json</code>:
        </p>
        <CodeBlock
          examples={[
            {
              language: "json",
              label: "config.json",
              code: `{
  "models": [
    {
      "title": "LLM.kiwi GPT-4o",
      "provider": "openai",
      "model": "gpt-4o",
      "apiKey": "sk-...",
      "apiBase": "https://api.llm.kiwi/v1"
    }
  ],
  "tabAutocompleteModel": {
    "title": "LLM.kiwi Mini",
    "provider": "openai",
    "model": "gpt-4o-mini",
    "apiKey": "sk-...",
    "apiBase": "https://api.llm.kiwi/v1"
  }
}`,
            },
          ]}
        />
      </section>
    </div>
  );
}
