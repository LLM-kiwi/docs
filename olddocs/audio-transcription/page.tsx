import { Metadata } from "next";
import CodeBlock from "@/components/docs/code-block";

export const metadata: Metadata = {
  title: "Audio Transcription - LLM.kiwi API",
  description: "Convert speech to text using the Whisper model.",
};

export default function AudioTranscriptionPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Audio Transcription
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Convert speech to text using Whisper.
        </p>
      </div>

      <section>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Endpoint
        </h2>
        <div className="flex items-center gap-2 bg-gray-50 dark:bg-gray-900 rounded-lg p-4 border border-gray-200 dark:border-gray-800">
          <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded text-sm font-medium">
            POST
          </span>
          <code className="text-gray-800 dark:text-gray-200">
            /v1/audio/transcriptions
          </code>
        </div>
        <p className="text-sm text-gray-500 mt-2">
          Content-Type: multipart/form-data
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Parameters
        </h2>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-800">
              <th className="text-left py-3 pr-4 font-medium text-gray-900 dark:text-white">
                Parameter
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
            <tr className="border-b border-gray-100 dark:border-gray-900">
              <td className="py-3 pr-4">
                <code>file</code>
              </td>
              <td className="py-3 pr-4">file</td>
              <td className="py-3">Audio file (mp3, wav, m4a, webm, mp4)</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-900">
              <td className="py-3 pr-4">
                <code>model</code>
              </td>
              <td className="py-3 pr-4">string</td>
              <td className="py-3">
                Model to use. Default: <code>whisper</code>
              </td>
            </tr>
            <tr>
              <td className="py-3 pr-4">
                <code>language</code>
              </td>
              <td className="py-3 pr-4">string</td>
              <td className="py-3">
                Language code (e.g., <code>en</code>, <code>es</code>)
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Examples
        </h2>
        <CodeBlock
          examples={[
            {
              language: "curl",
              label: "cURL",
              code: `curl https://api.llm.kiwi/v1/audio/transcriptions \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -F file=@audio.mp3 \\
  -F model=whisper`,
            },
            {
              language: "python",
              label: "Python",
              code: `from openai import OpenAI

client = OpenAI(base_url="https://api.llm.kiwi/v1", api_key="YOUR_KEY")

with open("audio.mp3", "rb") as f:
    transcript = client.audio.transcriptions.create(
        model="whisper",
        file=f
    )
    
print(transcript.text)`,
            },
          ]}
        />
      </section>
    </div>
  );
}
