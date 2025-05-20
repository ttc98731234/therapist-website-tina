import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "陳莉婷心理師 | 個人網站",
  description: "在關係中迷路，也能找到自己的路。陪你理解情緒，走向自我接納與療癒。",
  manifest: "/manifest.json",
  themeColor: "#a997cf",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  icons: {
    icon: [
      { url: "/icons/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: { url: "/icons/apple-touch-icon.png", sizes: "180x180" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant-TW">
      <body suppressHydrationWarning className="antialiased" style={{cursor: "auto"}}>
        {children}
      </body>
    </html>
  );
}
