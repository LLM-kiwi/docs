import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Available Models - LLM.kiwi API",
  description:
    "Complete list of AI models available through LLM.kiwi API - GPT, Gemini, DeepSeek, Mistral, Llama and more.",
};

// All available text/chat models
const chatModels = [
  // Routing selectors
  {
    id: "default",
    owner: "LLM.kiwi",
    description: "Auto-select best model",
    modalities: ["text"],
    tier: "free",
  },
  {
    id: "fast",
    owner: "LLM.kiwi",
    description: "Low latency optimized",
    modalities: ["text"],
    tier: "free",
  },
  {
    id: "pro",
    owner: "LLM.kiwi",
    description: "Highest quality routing",
    modalities: ["text"],
    tier: "pro",
  },
  // OpenAI
  {
    id: "gpt-4.1-nano-2025-04-14",
    owner: "OpenAI",
    description: "GPT-4.1 Nano - Fast & efficient",
    modalities: ["text", "image"],
    tier: "pro",
  },
  {
    id: "gpt-5-mini",
    owner: "OpenAI",
    description: "GPT-5 Mini - Advanced reasoning",
    modalities: ["text", "image"],
    tier: "pro",
  },
  // DeepSeek
  {
    id: "deepseek-v3.1",
    owner: "DeepSeek",
    description: "Excellent for coding & reasoning",
    modalities: ["text", "image"],
    tier: "pro",
  },
  // Mistral
  {
    id: "mistral-small-3.1-24b-instruct-2503",
    owner: "Mistral",
    description: "Mistral Small 24B",
    modalities: ["text", "image"],
    tier: "pro",
  },
  {
    id: "codestral-2405",
    owner: "Mistral",
    description: "Code generation specialist",
    modalities: ["text"],
    tier: "pro",
  },
  {
    id: "codestral-2501",
    owner: "Mistral",
    description: "Latest code model",
    modalities: ["text"],
    tier: "pro",
  },
  {
    id: "ministral-8b-2512",
    owner: "Mistral",
    description: "Compact & fast",
    modalities: ["text", "image"],
    tier: "pro",
  },
  // Meta
  {
    id: "meta-llama/Meta-Llama-3.1-8B-Instruct-Turbo",
    owner: "Meta",
    description: "Llama 3.1 8B Turbo",
    modalities: ["text"],
    tier: "pro",
  },
  // Google
  {
    id: "gemini-2.5-flash-lite",
    owner: "Google",
    description: "Ultra fast Gemini",
    modalities: ["text", "image"],
    tier: "free",
  },
  {
    id: "gemini-search",
    owner: "Google",
    description: "Web-grounded responses",
    modalities: ["text", "image"],
    tier: "pro",
  },
  // Other
  {
    id: "glm-4.5-flash",
    owner: "Zhipu AI",
    description: "Chinese/English bilingual",
    modalities: ["text", "image"],
    tier: "pro",
  },
  {
    id: "bidara",
    owner: "BIDARA",
    description: "Biomimicry design assistant",
    modalities: ["text"],
    tier: "free",
  },
];

// Image generation models
const imageModels = [
  {
    id: "flux",
    owner: "Flux",
    description: "High-quality image generation",
    tier: "pro",
  },
];

// Audio models
const audioModels = [
  {
    id: "whisper",
    owner: "OpenAI",
    description: "Speech-to-text transcription",
    tier: "pro",
  },
];

export default function ModelsPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Available Models
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Access 15+ AI models from leading providers through a single API. Pro
          tier unlocks all models.
        </p>
      </div>

      {/* Quick Start */}
      <section className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-xl p-6 border border-purple-200 dark:border-purple-800">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
          🚀 Quick Start
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          Use model selectors for automatic routing, or specify exact model IDs
          for control:
        </p>
        <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
          <pre className="text-sm text-gray-100">
            {`curl https://api.llm.kiwi/v1/chat/completions \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -d '{
    "model": "deepseek-v3.1",  // or "pro", "fast", "default"
    "messages": [{"role": "user", "content": "Hello!"}]
  }'`}
          </pre>
        </div>
      </section>

      {/* Model Selectors */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Recommended Selectors
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
            <code className="text-green-700 dark:text-green-300 font-mono font-bold">
              default
            </code>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              Auto-select best available model. Great for general use.
            </p>
            <span className="inline-block mt-2 text-xs px-2 py-0.5 bg-green-200 dark:bg-green-800 text-green-800 dark:text-green-200 rounded-full">
              free
            </span>
          </div>
          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <code className="text-blue-700 dark:text-blue-300 font-mono font-bold">
              fast
            </code>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              Lowest latency option for real-time applications.
            </p>
            <span className="inline-block mt-2 text-xs px-2 py-0.5 bg-blue-200 dark:bg-blue-800 text-blue-800 dark:text-blue-200 rounded-full">
              free
            </span>
          </div>
          <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
            <code className="text-purple-700 dark:text-purple-300 font-mono font-bold">
              pro
            </code>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              Highest quality with advanced reasoning capabilities.
            </p>
            <span className="inline-block mt-2 text-xs px-2 py-0.5 bg-purple-200 dark:bg-purple-800 text-purple-800 dark:text-purple-200 rounded-full">
              pro
            </span>
          </div>
        </div>
      </section>

      {/* Chat/Text Models */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Chat & Text Generation Models
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-800">
                <th className="text-left py-3 pr-4 font-medium text-gray-900 dark:text-white">
                  Model ID
                </th>
                <th className="text-left py-3 pr-4 font-medium text-gray-900 dark:text-white">
                  Provider
                </th>
                <th className="text-left py-3 pr-4 font-medium text-gray-900 dark:text-white">
                  Description
                </th>
                <th className="text-left py-3 pr-4 font-medium text-gray-900 dark:text-white">
                  Input
                </th>
                <th className="text-left py-3 font-medium text-gray-900 dark:text-white">
                  Tier
                </th>
              </tr>
            </thead>
            <tbody>
              {chatModels.map((m) => (
                <tr
                  key={m.id}
                  className="border-b border-gray-100 dark:border-gray-900 hover:bg-gray-50 dark:hover:bg-gray-900/50"
                >
                  <td className="py-3 pr-4">
                    <code className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded font-mono">
                      {m.id}
                    </code>
                  </td>
                  <td className="py-3 pr-4 text-gray-600 dark:text-gray-400">
                    {m.owner}
                  </td>
                  <td className="py-3 pr-4 text-gray-600 dark:text-gray-400">
                    {m.description}
                  </td>
                  <td className="py-3 pr-4">
                    <div className="flex gap-1">
                      {m.modalities.map((mod) => (
                        <span
                          key={mod}
                          className="text-xs px-1.5 py-0.5 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded"
                        >
                          {mod}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="py-3">
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full ${
                        m.tier === "pro"
                          ? "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300"
                          : "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300"
                      }`}
                    >
                      {m.tier}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Image Models */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Image Generation
        </h2>
        <div className="space-y-2">
          {imageModels.map((m) => (
            <div
              key={m.id}
              className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-lg"
            >
              <div className="flex items-center gap-4">
                <code className="text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-1 rounded">
                  {m.id}
                </code>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {m.description}
                </span>
              </div>
              <span className="text-xs px-2 py-0.5 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300">
                {m.tier}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Audio Models */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Audio Transcription
        </h2>
        <div className="space-y-2">
          {audioModels.map((m) => (
            <div
              key={m.id}
              className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-lg"
            >
              <div className="flex items-center gap-4">
                <code className="text-sm bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-2 py-1 rounded">
                  {m.id}
                </code>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {m.description}
                </span>
              </div>
              <span className="text-xs px-2 py-0.5 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300">
                {m.tier}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* API Endpoint */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          List Models API
        </h2>
        <div className="bg-gray-900 rounded-lg p-4">
          <code className="text-green-400">GET</code>
          <code className="text-gray-100 ml-2">
            https://api.llm.kiwi/v1/models
          </code>
        </div>
      </section>
    </div>
  );
}
