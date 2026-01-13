import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rate Limits - LLM.kiwi API",
  description: "Understand rate limits and quotas for the LLM.kiwi API.",
};

export default function RateLimitsPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Rate Limits
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Understand API usage limits and quotas.
        </p>
      </div>

      <section>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Tier Comparison
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-800">
                <th className="text-left py-3 pr-4 font-medium text-gray-900 dark:text-white">
                  Tier
                </th>
                <th className="text-left py-3 pr-4 font-medium text-gray-900 dark:text-white">
                  Requests/sec
                </th>
                <th className="text-left py-3 pr-4 font-medium text-gray-900 dark:text-white">
                  Requests/min
                </th>
                <th className="text-left py-3 pr-4 font-medium text-gray-900 dark:text-white">
                  Requests/hour
                </th>
                <th className="text-left py-3 font-medium text-gray-900 dark:text-white">
                  Chars/request
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-600 dark:text-gray-400">
              <tr className="border-b border-gray-100 dark:border-gray-900">
                <td className="py-3 pr-4">
                  <span className="font-medium text-gray-900 dark:text-white">
                    Free
                  </span>
                  <span className="ml-2 text-xs text-gray-500">
                    (Anonymous)
                  </span>
                </td>
                <td className="py-3 pr-4">1</td>
                <td className="py-3 pr-4">10</td>
                <td className="py-3 pr-4">60</td>
                <td className="py-3">8,000</td>
              </tr>
              <tr className="border-b border-gray-100 dark:border-gray-900 bg-green-50/50 dark:bg-green-900/10">
                <td className="py-3 pr-4">
                  <span className="font-medium text-gray-900 dark:text-white">
                    Pro
                  </span>
                  <span className="ml-2 text-xs bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-400 px-2 py-0.5 rounded-full">
                    €20/mo
                  </span>
                </td>
                <td className="py-3 pr-4 text-green-600 dark:text-green-400 font-medium">
                  Unlimited
                </td>
                <td className="py-3 pr-4 text-green-600 dark:text-green-400 font-medium">
                  Unlimited
                </td>
                <td className="py-3 pr-4 text-green-600 dark:text-green-400 font-medium">
                  Unlimited
                </td>
                <td className="py-3 text-green-600 dark:text-green-400 font-medium">
                  Unlimited
                </td>
              </tr>
              <tr>
                <td className="py-3 pr-4">
                  <span className="font-medium text-gray-900 dark:text-white">
                    Enterprise
                  </span>
                </td>
                <td className="py-3 pr-4">Custom</td>
                <td className="py-3 pr-4">Custom</td>
                <td className="py-3 pr-4">Custom</td>
                <td className="py-3">Custom</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Pro Unlimited Box */}
      <section className="bg-gradient-to-r from-secondary/10 to-emerald-500/10 border border-secondary/20 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-2xl">🚀</span>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Pro = Truly Unlimited
          </h3>
        </div>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          With LLM.kiwi Pro, you get <strong>UNLIMITED</strong> tokens. Generous
          rate limits, no character limits, no surprise bills. Pay once, use all
          month with complete peace of mind.
        </p>
        <a
          href="/dashboard"
          className="inline-block px-4 py-2 bg-secondary text-white rounded-lg font-medium hover:bg-secondary/90 transition"
        >
          Get Unlimited Access →
        </a>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Rate Limit Headers
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Every API response includes rate limit information:
        </p>
        <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 font-mono text-sm space-y-1">
          <p>
            <code className="text-purple-600 dark:text-purple-400">
              X-RateLimit-Remaining-Minute
            </code>
            : 58
          </p>
          <p>
            <code className="text-purple-600 dark:text-purple-400">
              X-RateLimit-Remaining-Hour
            </code>
            : 48
          </p>
          <p>
            <code className="text-purple-600 dark:text-purple-400">
              X-Response-Time
            </code>
            : 234ms
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Handling 429 Errors
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          When rate limited, wait and retry with exponential backoff:
        </p>
        <div className="bg-gray-900 rounded-lg p-4">
          <pre className="text-sm text-gray-100">
            <code>{`import time

def call_api_with_retry(func, max_retries=3):
    for i in range(max_retries):
        try:
            return func()
        except RateLimitError:
            time.sleep(2 ** i)  # 1s, 2s, 4s
    raise Exception("Max retries exceeded")`}</code>
          </pre>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Free vs Pro Endpoints
        </h2>
        <div className="space-y-4">
          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
            <p className="font-medium text-gray-900 dark:text-white mb-2">
              Free Endpoint (API Key Required):
            </p>
            <code className="text-sm text-purple-600 dark:text-purple-400">
              POST /v1/free/chat/completions
            </code>
          </div>
          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
            <p className="font-medium text-gray-900 dark:text-white mb-2">
              Pro Endpoint (API key required):
            </p>
            <code className="text-sm text-purple-600 dark:text-purple-400">
              POST /v1/chat/completions
            </code>
          </div>
        </div>
      </section>
    </div>
  );
}
