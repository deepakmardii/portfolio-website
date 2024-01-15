import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Deepak Mardi | Skilled Frontend Developer in India",
  description:
    "Deepak Mardi, a skilled frontend web developer in India. Experience expertly crafted, responsive websites using cutting-edge technology for a stunning online presence.",
  publisher: "Deepak Mardi",
  authors: [{ name: "Deepak Mardi", url: "https://github.com/deepakmardii" }],
  metadataBase: new URL("https://github.com/deepakmardii"),
  openGraph: {
    title: "Deepak Mardi | Skilled Frontend Developer in India",
    description:
      "Deepak Mardi, a skilled frontend web developer in India. Experience expertly crafted, responsive websites using cutting-edge technology for a stunning online presence.",
    url: "https://github.com/deepakmardii",
    siteName: "Deepak Mardi",
    images: [
      {
        url: "/thumbnail.jpg",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deepak Mardi | Skilled Frontend Developer in India",
    description:
      "Deepak Mardi, a skilled frontend web developer in India. Experience expertly crafted, responsive websites using cutting-edge technology for a stunning online presence.",
    creator: "@deepakmardii",
    images: ["/thumbnail.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
