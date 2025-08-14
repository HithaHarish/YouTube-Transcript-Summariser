"use client";

import { useState } from "react";
import { PlayCircle } from "lucide-react";

export default function Home() {
  const [url, setUrl] = useState("");
  const [error, setError] = useState(null);

  function isValidUrl(maybeUrl) {
    try {
      const u = new URL(maybeUrl);
      return ["http:", "https:"].includes(u.protocol);
    } catch {
      return false;
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);
    if (!isValidUrl(url)) {
      setError("Please enter a valid URL (including http/https).");
      return;
    }
    alert("Submitted");
  };

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-10">
          <div className="flex flex-col items-center text-center gap-3">
            <PlayCircle className="w-12 h-12" aria-hidden />
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">
              YouTube Transcript Summariser
            </h1>
            <p className="text-sm sm:text-base text-gray-600 max-w-prose">
              Paste a YouTube video link below and hit submit. (Frontend only for now.)
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 grid gap-3 sm:grid-cols-[1fr_auto]">
            <label htmlFor="yt-url" className="sr-only">
              YouTube URL
            </label>
            <input
              id="yt-url"
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://www.youtube.com/watch?v=..."
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-base outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-200"
              required
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-medium shadow-sm border border-gray-900 hover:shadow-md active:shadow-none transition focus:outline-none"
              disabled={!url}
            >
              Submit
            </button>
          </form>

          {error && (
            <p className="mt-3 text-sm text-red-600" role="alert">
              {error}
            </p>
          )}
        </div>

        <p className="mt-6 text-center text-xs text-gray-500">
          Built with Next.js & Tailwind CSS
        </p>
      </div>
    </main>
  );
}
