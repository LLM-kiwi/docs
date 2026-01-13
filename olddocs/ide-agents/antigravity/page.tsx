import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Google Antigravity - LLM.kiwi API",
  description: "Using LLM.kiwi with Google Antigravity agentic platform.",
};

export default function AntigravityPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Google Antigravity
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Google Antigravity is a new agent-first development platform. While it
          natively integrates deeply with Gemini, you can leverage LLM.kiwi for
          specific agent tasks or as a backend for applications built within
          Antigravity.
        </p>
      </div>

      <section className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
        <div className="flex items-start">
          <span className="text-xl mr-3">🚧</span>
          <div>
            <h3 className="font-medium text-yellow-800 dark:text-yellow-200">
              Preview Status
            </h3>
            <p className="text-sm text-yellow-700 dark:text-yellow-300 mt-1">
              Google Antigravity is currently in preview. Features and
              configuration options for third-party models may change rapidly.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Integration Strategies
        </h2>

        <h3 className="font-medium text-gray-900 dark:text-white mt-6 mb-3">
          1. Application Backend
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-3">
          When building applications <em>inside</em> Antigravity, use LLM.kiwi
          as your standardized model provider. This ensures your app is not
          locked into a specific vendor&apos;s SDK.
        </p>
        <p className="text-gray-600 dark:text-gray-400 mb-3">
          Add your API key to your project&apos;s <code>.env</code> file:
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-md font-mono text-sm text-gray-800 dark:text-gray-200">
          LLM_API_KEY=sk-...
          <br />
          LLM_BASE_URL=https://api.llm.kiwi/v1
        </div>

        <h3 className="font-medium text-gray-900 dark:text-white mt-8 mb-3">
          2. Agent Tools (Proposed)
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-3">
          Antigravity agents can use tools. You can define a tool that calls the
          LLM.kiwi API for specialized tasks (like Image Generation via our Flux
          model) that might not be native to the Gemini coding agent.
        </p>
      </section>
    </div>
  );
}
