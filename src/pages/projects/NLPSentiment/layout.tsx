import type React from "react";
import "./index.css";

// No Next.js font logic, no metadata object, no <html>/<body> tags.

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {children}
    </div>
  );
}
