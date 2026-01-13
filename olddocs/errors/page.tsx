import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Error Codes - LLM.kiwi API",
  description: "Complete reference of error codes and how to handle them.",
};

const errors = [
  { code: 400, type: "bad_request", description: "Invalid request parameters" },
  {
    code: 401,
    type: "invalid_api_key",
    description: "Missing or invalid API key",
  },
  {
    code: 403,
    type: "forbidden",
    description: "API key lacks required permissions",
  },
  { code: 404, type: "not_found", description: "Requested resource not found" },
  { code: 429, type: "rate_limit_exceeded", description: "Too many requests" },
  {
    code: 500,
    type: "internal_error",
    description: "Server error (retry with backoff)",
  },
  { code: 502, type: "upstream_error", description: "Upstream provider error" },
  {
    code: 503,
    type: "service_unavailable",
    description: "Service temporarily unavailable",
  },
];

export default function ErrorsPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Error Handling
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Reference for API error codes and responses.
        </p>
      </div>

      <section>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Error Response Format
        </h2>
        <div className="bg-gray-900 rounded-lg p-4">
          <pre className="text-sm text-gray-100">
            <code>{`{
  "error": {
    "message": "Invalid API key provided",
    "type": "invalid_api_key",
    "code": 401
  }
}`}</code>
          </pre>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Error Codes
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-800">
                <th className="text-left py-3 pr-4 font-medium text-gray-900 dark:text-white">
                  Code
                </th>
                <th className="text-left py-3 pr-4 font-medium text-gray-900 dark:text-white">
                  Type
                </th>
                <th className="text-left py-3 font-medium text-gray-900 dark:text-white">
                  Description
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-600 dark:text-gray-400">
              {errors.map((e) => (
                <tr
                  key={e.code}
                  className="border-b border-gray-100 dark:border-gray-900"
                >
                  <td className="py-3 pr-4">
                    <code>{e.code}</code>
                  </td>
                  <td className="py-3 pr-4">
                    <code>{e.type}</code>
                  </td>
                  <td className="py-3">{e.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Best Practices
        </h2>
        <ul className="space-y-2 text-gray-600 dark:text-gray-400">
          <li>• Always check the response status code</li>
          <li>• Implement exponential backoff for 429/5xx errors</li>
          <li>• Log error responses for debugging</li>
          <li>• Handle network timeouts gracefully</li>
        </ul>
      </section>
    </div>
  );
}
