import React from "react";

interface ReportLayoutProps {
  title: string;
  children: React.ReactNode;
  subtitle?: string;
}

const ReportLayout: React.FC<ReportLayoutProps> = ({ title, subtitle, children }) => (
  <section className="glass-card hover-lift animate-slide-up mb-12 p-8 rounded-xl">
    <div className="mb-8">
      <h2 className="text-4xl font-extrabold gradient-text mb-3">{title}</h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground font-light">{subtitle}</p>
      )}
      <div className="h-px bg-gradient-to-r from-primary/30 via-secondary/30 to-accent/30 mt-4"></div>
    </div>
    <div className="space-y-6 text-foreground leading-relaxed">
      {children}
    </div>
  </section>
);

export default ReportLayout;