import { initAnalytics } from './initAnalytics';
import { trackPageViewAnalytics } from './trackPageViewAnalytics';

export const AnalyticsTracker = () => {
  const getPathName = () =>
    window.location.pathname.replaceAll('/', '|').replace('.html', '');
  const init = () => initAnalytics(getPathName());
  const trackPage = (env: string) => trackPageViewAnalytics(getPathName(), env);
  return { init, trackPage };
};

export default AnalyticsTracker;
