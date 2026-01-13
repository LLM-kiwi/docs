import { Metadata } from "next";
import Link from "next/link";
import CodeBlock, {
  chatCompletionExamples,
} from "@/components/docs/code-block";

export const metadata: Metadata = {
  title: "Getting Started - LLM.kiwi API",
  description:
    "Get started with LLM.kiwi API in minutes. Create your API key and make your first request.",
};

export default function GettingStartedPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Getting Started
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Get up and running with LLM.kiwi API in just a few minutes.
        </p>
      </div>

      {/* Step 1 */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center text-sm font-bold">
            1
          </span>
          Create an Account
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Sign up with your Google account to get started. No credit card
          required for the free tier.
        </p>
        <Link
          href="/login"
          className="inline-flex px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium hover:opacity-90"
        >
          Sign Up Now →
        </Link>
      </section>

      {/* Step 2 */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center text-sm font-bold">
            2
          </span>
          Get Your API Key
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Go to your{" "}
          <Link
            href="/dashboard/keys"
            className="text-purple-600 dark:text-purple-400 underline"
          >
            Dashboard
          </Link>{" "}
          and create a new API key. Keep this key secure—it provides access to
          the API on your behalf.
        </p>
        <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
          <p className="text-sm text-amber-800 dark:text-amber-200">
            <strong>Security:</strong> Your API key is only shown once when
            created. Store it securely and never expose it in client-side code.
          </p>
        </div>
      </section>

      {/* Step 3 */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center text-sm font-bold">
            3
          </span>
          Install the SDK
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          LLM.kiwi is compatible with the official OpenAI SDK. Install it for
          your preferred language:
        </p>
        <CodeBlock
          examples={[
            { language: "python", label: "Python", code: "pip install openai" },
            {
              language: "javascript",
              label: "Node.js",
              code: "npm install openai",
            },
            {
              language: "php",
              label: "PHP",
              code: "composer require openai-php/client",
            },
          ]}
        />
      </section>

      {/* Step 4 */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center text-sm font-bold">
            4
          </span>
          Make Your First Request
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Configure the SDK with our base URL and your API key, then make a
          request:
        </p>
        <CodeBlock examples={chatCompletionExamples} />
      </section>

      {/* Next Steps */}
      <section className="border-t border-gray-200 dark:border-gray-800 pt-8">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Next Steps
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link
            href="/docs/chat-completions"
            className="p-4 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-purple-300 dark:hover:border-purple-700 transition"
          >
            <h3 className="font-medium text-gray-900 dark:text-white">
              Chat Completions →
            </h3>
            <p className="text-sm text-gray-500">
              Learn about all chat API options
            </p>
          </Link>
          <Link
            href="/docs/models"
            className="p-4 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-purple-300 dark:hover:border-purple-700 transition"
          >
            <h3 className="font-medium text-gray-900 dark:text-white">
              Available Models →
            </h3>
            <p className="text-sm text-gray-500">Explore leading AI models</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
