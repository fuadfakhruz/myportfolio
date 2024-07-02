import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Muhammad Fuad Fakhruzzaki",
  description: "Personal website of Muhammad Fuad Fakhruzzaki",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/assets/favicon.png" />
        <link rel="stylesheet" href={inter.url} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
