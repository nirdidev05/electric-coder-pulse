import type React from "react";
import "./index.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen relative">
      {/* Global Background System */}
      <div className="fixed inset-0 -z-50">
        {/* Primary background - sophisticated dark theme */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1E1E2F] via-[#2A2D47] to-[#1A1B2E]" />
        
        {/* Subtle texture overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, #646cff20 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, #61dafb20 0%, transparent 50%)
            `,
            backgroundSize: '400px 400px',
          }}
        />
        
        {/* Fine grid pattern for technical feel */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(#646cff20 0.5px, transparent 0.5px),
              linear-gradient(90deg, #646cff20 0.5px, transparent 0.5px)
            `,
            backgroundSize: '20px 20px',
          }}
        />
        
        {/* Dynamic gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E2F]/80 via-transparent to-[#1E1E2F]/40" />
      </div>

      {/* Content wrapper with proper theming */}
      <div className="relative z-0 text-foreground font-sans antialiased">
        {/* Additional content background for better readability */}
        <div className="absolute inset-0 bg-[#1E1E2F]/10 backdrop-blur-[0.5px]" />
        
        {/* Main content */}
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </div>
  );
}