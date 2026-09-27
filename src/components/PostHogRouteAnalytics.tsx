import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { capturePostHogPageview, initPostHog } from "@/lib/posthog";

const PostHogRouteAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    initPostHog();
  }, []);

  useEffect(() => {
    capturePostHogPageview();
  }, [location.pathname, location.search]);

  return null;
};

export default PostHogRouteAnalytics;
