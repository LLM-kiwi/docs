import { Metadata } from "next";
import CodeBlock from "@/components/docs/code-block";

export const metadata: Metadata = {
  title: "MCP Server - LLM.kiwi API",
  description:
    "Integrate LLM.kiwi with AI-powered IDEs like Cursor, Windsurf, and VS Code using the Model Context Protocol.",
};

export default function MCPServerPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          MCP Server
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Integrate LLM.kiwi with AI-powered IDEs using the Model Context
          Protocol (MCP).
        </p>
      </div>

      <section className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
        <h3 className="font-medium text-purple-800 dark:text-purple-200 mb-2">
          What is MCP?
        </h3>
        <p className="text-sm text-purple-700 dark:text-purple-300">
          The Model Context Protocol (MCP) is a standard for connecting AI
          assistants to external tools and data sources. LLM.kiwi provides an
          MCP server that enables IDEs like Cursor, Windsurf, and VS Code to use
          our API directly.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          MCP Endpoint
        </h2>
        <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 border border-gray-200 dark:border-gray-800">
          <code className="text-purple-600 dark:text-purple-400">
            https://api.llm.kiwi/mcp
          </code>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Available Tools
        </h2>
        <div className="space-y-4">
          <ToolCard
            name="chat_completion"
            description="Generate text using LLM.kiwi chat models"
            parameters={[
              "messages: array",
              "model?: string",
              "temperature?: number",
            ]}
          />
          <ToolCard
            name="image_generation"
            description="Generate images from text descriptions"
            parameters={["prompt: string", "size?: string"]}
          />
          <ToolCard
            name="audio_transcription"
            description="Transcribe audio files to text"
            parameters={["file_url: string", "language?: string"]}
          />
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          IDE Configuration
        </h2>

        <h3 className="font-medium text-gray-900 dark:text-white mt-6 mb-3">
          Cursor
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-3">
          Add to your <code>.cursor/mcp.json</code>:
        </p>
        <CodeBlock
          examples={[
            {
              language: "json",
              label: "Cursor Config",
              code: `{
  "mcpServers": {
    "llm-kiwi": {
      "url": "https://api.llm.kiwi/mcp",
      "headers": {
        "Authorization": "Bearer YOUR_API_KEY"
      }
    }
  }
}`,
            },
          ]}
        />

        <h3 className="font-medium text-gray-900 dark:text-white mt-6 mb-3">
          VS Code (with MCP Extensions)
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-3">
          Add to your VS Code settings:
        </p>
        <CodeBlock
          examples={[
            {
              language: "json",
              label: "VS Code Settings",
              code: `{
  "mcpServers": {
    "llm-kiwi": {
      "url": "https://api.llm.kiwi/mcp",
      "apiKey": "YOUR_API_KEY"
    }
  }
}`,
            },
          ]}
        />
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Resources
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          The MCP server also exposes resources for AI agents to read:
        </p>
        <ul className="space-y-2 text-gray-600 dark:text-gray-400">
          <li>
            • <code>models://list</code> - Available models and capabilities
          </li>
          <li>
            • <code>docs://api</code> - Full API documentation as markdown
          </li>
          <li>
            • <code>usage://current</code> - Current usage statistics
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Example Usage
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Once configured, you can use natural language in your IDE:
        </p>
        <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 border border-gray-200 dark:border-gray-800 font-mono text-sm">
          <p className="text-gray-500"># In Cursor or MCP-enabled IDE chat:</p>
          <p className="text-gray-800 dark:text-gray-200 mt-2">
            &quot;Use the llm-kiwi chat_completion tool to write a haiku about
            coding&quot;
          </p>
        </div>
      </section>
    </div>
  );
}

function ToolCard({
  name,
  description,
  parameters,
}: {
  name: string;
  description: string;
  parameters: string[];
}) {
  return (
    <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800">
      <code className="text-purple-600 dark:text-purple-400 font-medium">
        {name}
      </code>
      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
        {description}
      </p>
      <div className="mt-3">
        <p className="text-xs text-gray-500 mb-1">Parameters:</p>
        <div className="flex flex-wrap gap-2">
          {parameters.map((p) => (
            <code
              key={p}
              className="text-xs px-2 py-0.5 bg-gray-200 dark:bg-gray-800 rounded"
            >
              {p}
            </code>
          ))}
        </div>
      </div>
    </div>
  );
}
