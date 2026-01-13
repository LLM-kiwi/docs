import { Metadata } from "next";
import CodeBlock from "@/components/docs/code-block";

export const metadata: Metadata = {
  title: "Windsurf Integration - LLM.kiwi API",
  description: "Configure Codeium Windsurf IDE to use LLM.kiwi models.",
};

export default function WindsurfPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Windsurf Integration
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Windsurf is an agentic IDE by Codeium that emphasizes flow. You can
          connect it to LLM.kiwi to leverage your own model tier.
        </p>
      </div>

      <section>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Configuration
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Windsurf is rapidly evolving. Currently, the most reliable way to use
          custom LLM providers is via its{" "}
          <strong>OpenAI Compatibility Mode</strong> or via MCP for agentic
          capabilities.
        </p>

        <h3 className="font-medium text-gray-900 dark:text-white mt-6 mb-3">
          Option 1: Custom Model Provider
        </h3>
        <ol className="list-decimal list-inside space-y-4 text-gray-600 dark:text-gray-400">
          <li>Open Windsurf Settings.</li>
          <li>
            Search for <strong>&quot;Provider&quot;</strong> or{" "}
            <strong>&quot;LLM&quot;</strong>.
          </li>
          <li>
            Select <strong>OpenAI</strong> or <strong>Custom OpenAI</strong>.
          </li>
          <li>
            Enter your Base URL:
            <code className="ml-2 px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-purple-600 dark:text-purple-400 text-sm">
              https://api.llm.kiwi/v1
            </code>
          </li>
          <li>Enter your LLM.kiwi API Key.</li>
        </ol>

        <h3 className="font-medium text-gray-900 dark:text-white mt-8 mb-3">
          Option 2: MCP Integration
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Windsurf has excellent support for MCP. This allows the IDE
          &quot;agent&quot; to call LLM.kiwi tools (like image generation or
          transcription) directly.
        </p>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          To add LLM.kiwi as an MCP server:
        </p>
        <CodeBlock
          examples={[
            {
              language: "json",
              label: "Windsurf MCP Config",
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
