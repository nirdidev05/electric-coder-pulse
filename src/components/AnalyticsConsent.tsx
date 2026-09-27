import { useEffect, useState } from "react";
import { hasPostHogConsent, setPostHogConsent } from "@/lib/posthog";

const AnalyticsConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(!hasPostHogConsent() && window.localStorage.getItem("analytics-consent") !== "declined");
  }, []);

  if (!visible) return null;

  return (
    <aside className="fixed bottom-4 left-4 right-4 z-[100] mx-auto max-w-2xl rounded-xl border border-border bg-background/95 p-4 shadow-2xl backdrop-blur-xl">
      <p className="text-sm text-muted-foreground">
        J'utilise des statistiques anonymisées pour comprendre les pages consultées et améliorer ce portfolio. Aucune adresse IP brute n'est collectée.
      </p>
      <div className="mt-3 flex flex-wrap justify-end gap-2">
        <button
          type="button"
          onClick={() => {
            setPostHogConsent(false);
            setVisible(false);
          }}
          className="rounded-lg border border-border px-3 py-2 text-sm text-muted-foreground hover:text-foreground"
        >
          Refuser
        </button>
        <button
          type="button"
          onClick={() => {
            setPostHogConsent(true);
            setVisible(false);
          }}
          className="rounded-lg bg-primary px-3 py-2 text-sm font-medium text-primary-foreground"
        >
          Accepter
        </button>
      </div>
    </aside>
  );
};

export default AnalyticsConsent;