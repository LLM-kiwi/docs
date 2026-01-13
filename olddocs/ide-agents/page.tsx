import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "IDEs & Agents - LLM.kiwi API",
  description: "Integrate LLM.kiwi with AI-powered IDEs and autonomous agents.",
};

export default function IdeAgentsPage() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          IDEs & Agents
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          LLM.kiwi provides seamless integration with modern AI-powered IDEs and
          autonomous agent platforms. Our OpenAI-compatible API and MCP Server
          ensure you can bring your own models to any environment.
        </p>
      </div>

      <section>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          AI IDEs
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <DocCard
            href="/docs/ide-agents/cursor"
            title="Cursor"
            description="Configure Cursor to use LLM.kiwi for code generation and chat."
          />
          <DocCard
            href="/docs/ide-agents/windsurf"
            title="Windsurf"
            description="Integrate with Codeium's Windsurf IDE for agentic workflows."
          />
          <DocCard
            href="/docs/ide-agents/vscode"
            title="VS Code"
            description="Use extensions like Roo Code, Cline, and Continue with LLM.kiwi."
          />
          <DocCard
            href="/docs/ide-agents/antigravity"
            title="Google Antigravity"
            description="Power Google's new agentic platform with custom models."
          />
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Agents & Generators
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <DocCard
            href="/docs/ide-agents/claude"
            title="Claude"
            description="Connect Claude Desktop and other clients via MCP."
          />
          <DocCard
            href="/docs/ide-agents/bolt-new"
            title="Bolt.new"
            description="Use LLM.kiwi in Bolt.new generated full-stack applications."
          />
          <DocCard
            href="/docs/ide-agents/lovable"
            title="Lovable"
            description="Power Lovable's GPT-engineer applications with our API."
          />
          <DocCard
            href="/docs/ide-agents/v0-dev"
            title="v0.dev"
            description="Integrate generative UI code from v0 with LLM.kiwi backend."
          />
        </div>
      </section>
    </div>
  );
}

function DocCard({
  href,
  title,
  description,
}: {
  href: string;
  title: string;
  description: string;
}) {
  return (
    <Link
      href={href}
      className="block p-4 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-purple-300 dark:hover:border-purple-700 hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors group"
    >
      <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 mb-1">
        {title}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
    </Link>
  );
}
