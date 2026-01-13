import { Metadata } from "next";
import CodeBlock, {
  imageGenerationExamples,
} from "@/components/docs/code-block";

export const metadata: Metadata = {
  title: "Image Generation - LLM.kiwi API",
  description: "Generate images from text descriptions using the Flux model.",
};

export default function ImageGenerationPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Image Generation
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Generate images from text descriptions using our high-quality image
          models.
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
            /v1/images/generations
          </code>
        </div>
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
                <code>prompt</code>
              </td>
              <td className="py-3 pr-4">string</td>
              <td className="py-3">
                Text description of the image to generate
              </td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-900">
              <td className="py-3 pr-4">
                <code>model</code>
              </td>
              <td className="py-3 pr-4">string</td>
              <td className="py-3">
                Model to use. Default: <code>flux</code>
              </td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-900">
              <td className="py-3 pr-4">
                <code>size</code>
              </td>
              <td className="py-3 pr-4">string</td>
              <td className="py-3">
                <code>1024x1024</code>, <code>1792x1024</code>,{" "}
                <code>1024x1792</code>
              </td>
            </tr>
            <tr>
              <td className="py-3 pr-4">
                <code>n</code>
              </td>
              <td className="py-3 pr-4">integer</td>
              <td className="py-3">Number of images to generate. Default: 1</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Examples
        </h2>
        <CodeBlock examples={imageGenerationExamples} />
      </section>

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
  "created": 1703456789,
  "data": [
    {
      "url": "https://api.llm.kiwi/i/abc123.png",
      "revised_prompt": "A stunning futuristic city..."
    }
  ]
}`,
            },
          ]}
        />
      </section>
    </div>
  );
}
