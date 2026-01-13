import { Metadata } from "next";
import CodeBlock from "@/components/docs/code-block";

export const metadata: Metadata = {
  title: "Claude Integration - LLM.kiwi API",
  description:
    "Use LLM.kiwi with Claude Desktop and other Anthropic-powered tools via MCP.",
};

export default function ClaudePage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Claude Integration
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Integrate LLM.kiwi directly into Claude Desktop or other
          Claude-powered environments using the Model Context Protocol (MCP).
        </p>
      </div>

      <section>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Claude Desktop App
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Claude Desktop allows you to connect local or remote MCP servers. By
          connecting LLM.kiwi, you can ask Claude to generate images, transcribe
          audio, or use other models available on our platform.
        </p>

        <h3 className="font-medium text-gray-900 dark:text-white mt-6 mb-3">
          Configuration
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-3">
          Locate your Claude Desktop config file:
        </p>
        <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400 mb-4 text-sm">
          <li>
            macOS:{" "}
            <code>
              ~/Library/Application Support/Claude/claude_desktop_config.json
            </code>
          </li>
          <li>
            Windows: <code>%APPDATA%\Claude\claude_desktop_config.json</code>
          </li>
        </ul>

        <CodeBlock
          examples={[
            {
              language: "json",
              label: "claude_desktop_config.json",
              code: `{
  "mcpServers": {
    "llm-kiwi": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-sse",
        "--url",
        "https://api.llm.kiwi/mcp",
        "--headers",
        "Authorization=Bearer sk-..."
      ]
    }
  }
}`,
            },
          ]}
        />
        <p className="text-sm text-gray-500 mt-2">
          Note: The above configuration is for SSE-based MCP servers. If using a
          direct connection, follow the specific client instructions. For now,
          we recommend checking our{" "}
          <a
            href="/docs/mcp-server"
            className="text-purple-600 hover:underline"
          >
            MCP Server Documentation
          </a>{" "}
          for the latest connection string formats.
        </p>
      </section>
    </div>
  );
}
