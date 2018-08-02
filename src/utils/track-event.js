export const trackEvent = (eventName, properties, options, callback) => {
  if (window && window.analytics) {
    console.log(process.env);
    window.analytics.track(
      eventName,
      {
        ...properties,
        branch: process.env.BRANCH,
      },
      options,
      callback,
    );
  }
};
