import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Introduction - LLM.kiwi API",
  description:
    "Start building with LLM.kiwi for text, images, and audio. Access AI models through a single API.",
};

export default function DocsPage() {
  return (
    <div className="space-y-12">
      {/* Hero */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Introduction
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Start building with LLM.kiwi for text, images, and audio.
        </p>
      </div>

      {/* Start Here */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Start here
        </h2>
        <div className="grid gap-4">
          <DocCard
            href="/docs/getting-started"
            title="Quickstart"
            description="Install the SDK, configure the client, and make your first requests."
          />
        </div>
      </section>

      {/* Text Generation */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Text generation
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <DocCard
            href="/docs/chat-completions#streaming"
            title="Streaming"
            description="Stream tokens for low-latency UIs."
          />
          <DocCard
            href="/docs/models"
            title="Available models"
            description="See model options: default, fast, and pro."
          />
        </div>
      </section>

      {/* Image Generation */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Image generation
        </h2>
        <div className="grid gap-4">
          <DocCard
            href="/docs/image-generation"
            title="Images"
            description="Generate images from prompts with the flux model."
          />
        </div>
      </section>

      {/* Audio */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Audio
        </h2>
        <div className="grid gap-4">
          <DocCard
            href="/docs/audio-transcription"
            title="Transcription"
            description="Send an audio file (mp3/wav) and get back text."
          />
        </div>
      </section>
    </div>
  );
}

function DocCard({
  href,
  title,
  description,
}: {
  href: string;
  title: string;
  description: string;
}) {
  return (
    <Link
      href={href}
      className="block p-4 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-purple-300 dark:hover:border-purple-700 hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors group"
    >
      <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 mb-1">
        {title}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
    </Link>
  );
}
