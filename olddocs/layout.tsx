import { Metadata } from "next";
import Navbar from "@/components/navbar";
import DocsSidebar from "@/components/docs/sidebar";

export const metadata: Metadata = {
  title: "API Documentation",
  description:
    "Comprehensive API documentation for LLM.kiwi - Access AI models through a single API.",
  openGraph: {
    title: "LLM.kiwi API Documentation",
    description:
      "Comprehensive API documentation with examples for Python, JavaScript, React, Angular, PHP, and more.",
  },
};

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Site Navbar */}
      <Navbar />

      {/* Sidebar */}
      <DocsSidebar />

      {/* Main Content */}
      <main className="pt-24 lg:pl-64">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <article
            className="prose prose-gray dark:prose-invert max-w-none
            prose-headings:font-semibold prose-headings:tracking-tight
            prose-h1:text-3xl prose-h1:mb-4
            prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:pb-2 prose-h2:border-b prose-h2:border-gray-200 dark:prose-h2:border-gray-800
            prose-h3:text-lg prose-h3:mt-6 prose-h3:mb-3
            prose-p:text-gray-600 dark:prose-p:text-gray-400 prose-p:leading-relaxed
            prose-a:text-purple-600 dark:prose-a:text-purple-400 prose-a:no-underline hover:prose-a:underline
            prose-code:text-purple-600 dark:prose-code:text-purple-400 prose-code:bg-gray-100 dark:prose-code:bg-gray-800 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:before:content-none prose-code:after:content-none
            prose-pre:bg-gray-900 dark:prose-pre:bg-gray-800 prose-pre:rounded-xl prose-pre:border prose-pre:border-gray-800
            prose-table:text-sm prose-th:text-left prose-th:font-medium prose-th:text-gray-900 dark:prose-th:text-white
            prose-td:text-gray-600 dark:prose-td:text-gray-400
            prose-li:text-gray-600 dark:prose-li:text-gray-400
            prose-strong:text-gray-900 dark:prose-strong:text-white
          "
          >
            {children}
          </article>
        </div>
      </main>
    </div>
  );
}
