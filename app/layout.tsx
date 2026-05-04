import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Deadstock Detector — Find Products That Will Never Sell Again",
  description: "Analyzes Shopify sales data to identify slow-moving inventory that should be liquidated or discontinued. Built for store owners with 500+ SKUs."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="e78dbc18-9d9d-41b9-8d28-47d7b2e99fdd"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
