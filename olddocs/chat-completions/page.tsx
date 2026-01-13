import { Metadata } from "next";
import CodeBlock, {
  chatCompletionExamples,
} from "@/components/docs/code-block";

export const metadata: Metadata = {
  title: "Chat Completions - LLM.kiwi API",
  description:
    "Complete reference for the Chat Completions API endpoint. Generate text with our supported AI models.",
};

export default function ChatCompletionsPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Chat Completions
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Generate text responses from our powerful language models.
        </p>
      </div>

      {/* Endpoint */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Endpoint
        </h2>
        <div className="flex items-center gap-2 bg-gray-50 dark:bg-gray-900 rounded-lg p-4 border border-gray-200 dark:border-gray-800">
          <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded text-sm font-medium">
            POST
          </span>
          <code className="text-gray-800 dark:text-gray-200">
            /v1/chat/completions
          </code>
        </div>
      </section>

      {/* Request Body */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Request Body
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-800">
                <th className="text-left py-3 pr-4 font-medium text-gray-900 dark:text-white">
                  Parameter
                </th>
                <th className="text-left py-3 pr-4 font-medium text-gray-900 dark:text-white">
                  Type
                </th>
                <th className="text-left py-3 pr-4 font-medium text-gray-900 dark:text-white">
                  Required
                </th>
                <th className="text-left py-3 font-medium text-gray-900 dark:text-white">
                  Description
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-600 dark:text-gray-400">
              <tr className="border-b border-gray-100 dark:border-gray-900">
                <td className="py-3 pr-4">
                  <code>model</code>
                </td>
                <td className="py-3 pr-4">string</td>
                <td className="py-3 pr-4">Yes</td>
                <td className="py-3">
                  Model to use: <code>pro</code>, <code>fast</code>, or{" "}
                  <code>default</code>
                </td>
              </tr>
              <tr className="border-b border-gray-100 dark:border-gray-900">
                <td className="py-3 pr-4">
                  <code>messages</code>
                </td>
                <td className="py-3 pr-4">array</td>
                <td className="py-3 pr-4">Yes</td>
                <td className="py-3">
                  Array of message objects with <code>role</code> and{" "}
                  <code>content</code>
                </td>
              </tr>
              <tr className="border-b border-gray-100 dark:border-gray-900">
                <td className="py-3 pr-4">
                  <code>stream</code>
                </td>
                <td className="py-3 pr-4">boolean</td>
                <td className="py-3 pr-4">No</td>
                <td className="py-3">
                  Enable streaming responses. Default: <code>false</code>
                </td>
              </tr>
              <tr className="border-b border-gray-100 dark:border-gray-900">
                <td className="py-3 pr-4">
                  <code>temperature</code>
                </td>
                <td className="py-3 pr-4">number</td>
                <td className="py-3 pr-4">No</td>
                <td className="py-3">Sampling temperature (0-2). Default: 1</td>
              </tr>
              <tr className="border-b border-gray-100 dark:border-gray-900">
                <td className="py-3 pr-4">
                  <code>max_tokens</code>
                </td>
                <td className="py-3 pr-4">integer</td>
                <td className="py-3 pr-4">No</td>
                <td className="py-3">Maximum tokens to generate</td>
              </tr>
              <tr>
                <td className="py-3 pr-4">
                  <code>response_format</code>
                </td>
                <td className="py-3 pr-4">object</td>
                <td className="py-3 pr-4">No</td>
                <td className="py-3">
                  Set to <code>{`{ "type": "json_object" } `}</code> for JSON
                  mode
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Message Format */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Message Format
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Each message in the array must have a <code>role</code> and{" "}
          <code>content</code>:
        </p>
        <CodeBlock
          examples={[
            {
              language: "json",
              label: "Message Structure",
              code: `{
    "messages": [
        {
            "role": "system",
            "content": "You are a helpful assistant."
        },
        {
            "role": "user",
            "content": "What is the capital of France?"
        },
        {
            "role": "assistant",
            "content": "The capital of France is Paris."
        },
        {
            "role": "user",
            "content": "What about Germany?"
        }
    ]
} `,
            },
          ]}
        />
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <RoleCard
            role="system"
            description="Sets the behavior and context for the assistant"
          />
          <RoleCard role="user" description="Messages from the user/human" />
          <RoleCard
            role="assistant"
            description="Previous responses (for conversation context)"
          />
        </div>
      </section>

      {/* Examples */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Code Examples
        </h2>
        <CodeBlock examples={chatCompletionExamples} />
      </section>

      {/* Streaming */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Streaming
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Set <code>stream: true</code> to receive responses as Server-Sent
          Events (SSE):
        </p>
        <CodeBlock
          examples={[
            {
              language: "python",
              label: "Python Streaming",
              code: `from openai import OpenAI

client = OpenAI(base_url = "https://api.llm.kiwi/v1", api_key = "YOUR_KEY")

stream = client.chat.completions.create(
    model = "pro",
    messages = [{ "role": "user", "content": "Write a poem" }],
    stream = True
)

for chunk in stream:
    if chunk.choices[0].delta.content:
        print(chunk.choices[0].delta.content, end = "")`,
            },
            {
              language: "javascript",
              label: "Node.js Streaming",
              code: `const stream = await client.chat.completions.create({
            model: 'pro',
            messages: [{ role: 'user', content: 'Write a poem' }],
            stream: true
        });

for await (const chunk of stream) {
    process.stdout.write(chunk.choices[0]?.delta?.content || '');
} `,
            },
          ]}
        />
      </section>

      {/* Response */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Response
        </h2>
        <CodeBlock
          examples={[
            {
              language: "json",
              label: "Response",
              code: `{
    "id": "chatcmpl-abc123",
        "object": "chat.completion",
            "created": 1703456789,
                "model": "pro",
                    "choices": [
                        {
                            "index": 0,
                            "message": {
                                "role": "assistant",
                                "content": "The capital of France is Paris."
                            },
                            "finish_reason": "stop"
                        }
                    ],
                        "usage": {
        "prompt_tokens": 15,
            "completion_tokens": 8,
                "total_tokens": 23
    }
} `,
            },
          ]}
        />
      </section>
    </div>
  );
}

function RoleCard({
  role,
  description,
}: {
  role: string;
  description: string;
}) {
  return (
    <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800">
      <code className="text-purple-600 dark:text-purple-400">{role}</code>
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
        {description}
      </p>
    </div>
  );
}
