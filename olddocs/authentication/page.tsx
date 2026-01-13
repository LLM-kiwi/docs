import { Metadata } from "next";
import CodeBlock from "@/components/docs/code-block";

export const metadata: Metadata = {
  title: "Authentication - LLM.kiwi API",
  description:
    "Learn how to authenticate with the LLM.kiwi API using API keys.",
};

export default function AuthenticationPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Authentication
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          All API requests require authentication using an API key.
        </p>
      </div>

      {/* API Key */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          API Keys
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          API keys are created in your{" "}
          <a
            href="/dashboard/keys"
            className="text-purple-600 dark:text-purple-400 underline"
          >
            dashboard
          </a>
          . Each key starts with{" "}
          <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-sm">
            sk-
          </code>{" "}
          and should be kept secret.
        </p>

        <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4 border border-gray-200 dark:border-gray-800">
          <p className="text-sm font-mono text-gray-700 dark:text-gray-300">
            sk-a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0...
          </p>
        </div>
      </section>

      {/* Using the Key */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Using Your API Key
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Include your API key in the{" "}
          <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-sm">
            Authorization
          </code>{" "}
          header:
        </p>

        <CodeBlock
          examples={[
            {
              language: "http",
              label: "HTTP Header",
              code: `Authorization: Bearer YOUR_API_KEY`,
            },
            {
              language: "curl",
              label: "cURL",
              code: `curl https://api.llm.kiwi/v1/chat/completions \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"model": "pro", "messages": [...]}'`,
            },
            {
              language: "python",
              label: "Python",
              code: `from openai import OpenAI

client = OpenAI(
    base_url="https://api.llm.kiwi/v1",
    api_key="YOUR_API_KEY"  # Or use OPENAI_API_KEY env var
)`,
            },
            {
              language: "javascript",
              label: "Node.js",
              code: `import OpenAI from 'openai';

const client = new OpenAI({
  baseURL: 'https://api.llm.kiwi/v1',
  apiKey: process.env.LLM_API_KEY
});`,
            },
          ]}
        />
      </section>

      {/* Security */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Security Best Practices
        </h2>
        <div className="space-y-4">
          <SecurityTip
            title="Keep keys secret"
            description="Never commit API keys to version control or expose them in client-side code."
          />
          <SecurityTip
            title="Use environment variables"
            description="Store API keys in environment variables, not in your source code."
          />
          <SecurityTip
            title="Rotate keys regularly"
            description="Create new keys and revoke old ones periodically for better security."
          />
          <SecurityTip
            title="Use separate keys"
            description="Create different keys for development, staging, and production environments."
          />
        </div>
      </section>

      {/* Error Responses */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Authentication Errors
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-800">
                <th className="text-left py-3 pr-4 font-medium text-gray-900 dark:text-white">
                  Code
                </th>
                <th className="text-left py-3 pr-4 font-medium text-gray-900 dark:text-white">
                  Error
                </th>
                <th className="text-left py-3 font-medium text-gray-900 dark:text-white">
                  Description
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-600 dark:text-gray-400">
              <tr className="border-b border-gray-100 dark:border-gray-900">
                <td className="py-3 pr-4">
                  <code>401</code>
                </td>
                <td className="py-3 pr-4">invalid_api_key</td>
                <td className="py-3">API key is missing or invalid</td>
              </tr>
              <tr className="border-b border-gray-100 dark:border-gray-900">
                <td className="py-3 pr-4">
                  <code>401</code>
                </td>
                <td className="py-3 pr-4">expired_api_key</td>
                <td className="py-3">API key has expired</td>
              </tr>
              <tr>
                <td className="py-3 pr-4">
                  <code>429</code>
                </td>
                <td className="py-3 pr-4">rate_limit_exceeded</td>
                <td className="py-3">Too many requests. See rate limits.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

function SecurityTip({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-3 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800">
      <span className="text-green-500">✓</span>
      <div>
        <h4 className="font-medium text-gray-900 dark:text-white">{title}</h4>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {description}
        </p>
      </div>
    </div>
  );
}
