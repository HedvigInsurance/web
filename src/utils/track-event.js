export const trackEvent = (eventName, properties, options, callback) => {
  if (window && window.analytics) {
    window.analytics.track(
      eventName,
      {
        ...properties,
        branch: NETLIFY_BRANCH,
      },
      options,
      callback,
    )
  }
}
