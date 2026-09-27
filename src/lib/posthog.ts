import posthog from "posthog-js";

const posthogKey = import.meta.env.VITE_PUBLIC_POSTHOG_KEY;
const posthogHost = import.meta.env.VITE_PUBLIC_POSTHOG_HOST || "https://eu.i.posthog.com";
let initialized = false;

export const initPostHog = () => {
  if (typeof window === "undefined" || !posthogKey || initialized) {
    return Boolean(posthogKey && initialized);
  }

  posthog.init(posthogKey, {
    api_host: posthogHost,
    person_profiles: "identified_only",
    capture_pageview: false,
    capture_pageleave: true,
    autocapture: false,
    respect_dnt: true,
    opt_out_capturing_by_default: true,
    persistence: "localStorage+cookie",
  });

  initialized = true;
  return true;
};

export const hasPostHogConsent = () => {
  return typeof window !== "undefined" && window.localStorage.getItem("analytics-consent") === "accepted";
};

export const setPostHogConsent = (accepted: boolean) => {
  if (typeof window === "undefined") return;

  window.localStorage.setItem("analytics-consent", accepted ? "accepted" : "declined");
  if (!initialized) initPostHog();

  if (accepted) {
    posthog.opt_in_capturing();
    capturePostHogPageview();
  } else {
    posthog.opt_out_capturing();
  }
};

const getUtmProperties = () => {
  const params = new URLSearchParams(window.location.search);
  const properties: Record<string, string> = {};

  ["source", "medium", "campaign", "term", "content"].forEach((name) => {
    const value = params.get(`utm_${name}`);
    if (value) properties[`utm_${name}`] = value;
  });

  if (document.referrer) {
    try {
      properties.referrer_domain = new URL(document.referrer).hostname;
    } catch {
      properties.referrer_domain = "external";
    }
  } else {
    properties.referrer_domain = "direct";
  }

  return properties;
};

export const capturePostHogPageview = () => {
  if (!initialized || !hasPostHogConsent()) return;

  posthog.capture("$pageview", {
    $current_url: window.location.href,
    route: `${window.location.pathname}${window.location.search}`,
    ...getUtmProperties(),
  });
};

export const capturePostHogEvent = (event: string, properties: Record<string, unknown> = {}) => {
  if (!initialized || !hasPostHogConsent()) return;
  posthog.capture(event, properties);
};

export default posthog;
