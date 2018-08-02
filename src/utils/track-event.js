export const trackEvent = (eventName, options) => {
  if (window && window.analytics) {
    window.analytics.track(eventName, {
      ...options,
      branch: process.env.BRANCH,
    });
  }
};
