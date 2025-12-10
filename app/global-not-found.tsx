import Link from "next/link";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "Sorry, the page you are looking for does not exist.",
};

export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen">
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">404</h1>
              <p className="text-gray-600 mb-4">
                Sorry, the page you are looking for does not exist.
              </p>
              {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
              <a href="/" className="text-blue-600 hover:underline">
                {/*temporary fix*/}
                Go back to the home page
              </a>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
