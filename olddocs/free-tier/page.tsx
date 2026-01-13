import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Tier - LLM.kiwi API",
  description:
    "Try the LLM.kiwi API for free. Sign up in seconds to get your API key and start building with AI.",
};

export default function FreeTierPage() {
  return (
    <div className="space-y-12">
      <div>
        <span className="inline-block px-3 py-1 text-sm font-medium bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full mb-4">
          Free forever
        </span>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Free Tier API
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Sign up free in seconds to get your API key. API key is required for
          all requests.
        </p>
      </div>

      {/* How to Get Started */}
      <section className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6">
        <h2 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">
          🚀 Getting Started
        </h2>
        <ol className="space-y-2 text-blue-800 dark:text-blue-200">
          <li className="flex gap-3">
            <span className="font-bold">1.</span>
            <span>
              Go to{" "}
              <a
                href="/dashboard"
                className="underline font-medium hover:text-blue-600"
              >
                llm.kiwi/dashboard
              </a>{" "}
              and sign up (free)
            </span>
          </li>
          <li className="flex gap-3">
            <span className="font-bold">2.</span>
            <span>Create an API key from your dashboard</span>
          </li>
          <li className="flex gap-3">
            <span className="font-bold">3.</span>
            <span>Start making requests with your key!</span>
          </li>
        </ol>
      </section>

      {/* Free Tier Limits */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Rate Limits
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              8,000
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              chars/request
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              60
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              requests/hour
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              10
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              requests/min
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              1
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              request/sec
            </p>
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Quick Start
        </h2>
        <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
          <p className="text-xs text-gray-400 mb-2">cURL</p>
          <pre className="text-sm text-gray-100">
            <code>{`curl -X POST https://api.llm.kiwi/v1/free/chat/completions \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -d '{
    "messages": [
      {"role": "user", "content": "Tell me a short joke"}
    ]
  }'`}</code>
          </pre>
        </div>
      </section>

      {/* Python Example */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Python Example
        </h2>
        <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
          <pre className="text-sm text-gray-100">
            <code>{`import openai

client = openai.OpenAI(
    base_url="https://api.llm.kiwi/v1/free",
    api_key="YOUR_API_KEY"  # Get from llm.kiwi/dashboard
)

response = client.chat.completions.create(
    model="default",
    messages=[
        {"role": "user", "content": "Tell me a short story about a brave squirrel."}
    ]
)

print(response.choices[0].message.content)`}</code>
          </pre>
        </div>
      </section>

      {/* JavaScript Example */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          JavaScript / Node.js Example
        </h2>
        <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
          <pre className="text-sm text-gray-100">
            <code>{`import OpenAI from 'openai';

const client = new OpenAI({
  baseURL: 'https://api.llm.kiwi/v1/free',
  apiKey: 'YOUR_API_KEY' // Get from llm.kiwi/dashboard
});

const response = await client.chat.completions.create({
  model: 'default',
  messages: [
    { role: 'user', content: 'What is the capital of France?' }
  ]
});

console.log(response.choices[0].message.content);`}</code>
          </pre>
        </div>
      </section>

      {/* Upgrade CTA */}
      <section className="bg-secondary rounded-xl p-6 text-white shadow-lg">
        <h2 className="text-xl font-semibold mb-2">Need More Power?</h2>
        <p className="text-emerald-100 mb-4">
          Upgrade to Pro for <strong>UNLIMITED</strong> tokens. Generous rate
          limits, no character limits, access to leading models. One flat price:
          €20/month.
        </p>
        <a
          href="/dashboard"
          className="inline-block px-6 py-2 bg-white text-emerald-700 font-bold rounded-lg hover:bg-emerald-50 transition shadow-md"
        >
          Get Unlimited Access →
        </a>
      </section>

      {/* Important Notes */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Important Notes
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
          <li>
            Free tier uses the{" "}
            <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-sm">
              default
            </code>{" "}
            model only
          </li>
          <li>Rate limits are enforced per API key</li>
          <li>Streaming is supported</li>
          <li>Perfect for testing, small projects, and getting started</li>
          <li>Upgrade anytime for unlimited access</li>
        </ul>
      </section>
    </div>
  );
}
