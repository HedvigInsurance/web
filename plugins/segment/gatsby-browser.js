const { NODE_ENV = 'development' } = process.env

// https://segment.com/docs/sources/website/analytics.js/#page
export const onRouteUpdate = () => {
  if (!window.analytics || typeof window.analytics.page !== 'function') {
    if (NODE_ENV === 'development') {
      throw new Error('Unable to locate analytics.js')
    }
    return
  }

  window.analytics.page()
}
