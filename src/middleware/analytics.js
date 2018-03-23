import { createMiddleware } from "redux-beacon"
import { GoogleTagManager } from "redux-beacon/targets/google-tag-manager"

const pageView = action => {
  return {
    hitType: 'pageview',
    page: action.payload.pathname
  }
}

const ctaClick = action => {
  return {
    hitType: 'event',
    eventCategory: 'cta button',
    eventAction: 'click',
    eventLabel: action.payload.location
  }
}

const appMounted = action => {
  return {
    hitType: 'event',
    eventCategory: 'app',
    eventAction: 'mounted'
  }
}

const eventsMap = {
  "@@router/LOCATION_CHANGE": pageView,
  "ANALYTICS/CTA_CLICK": ctaClick,
  "ANALYTICS/APP_MOUNTED": appMounted
}

const middleware = createMiddleware(eventsMap, GoogleTagManager())

export default middleware
