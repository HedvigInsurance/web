import React from 'react'
import { max as createSnippet } from '@segment/snippet'

export const onRenderBody = ({ setPostBodyComponents }, { writeKey }) => {
  // host: the domain name where the analytics.js script is hosted.
  // apiKey: the apiKey to load in the snippet.
  // page: the options to pass to analytics.page.
  //       if page is false, then the page() call will be omitted.
  // load: if set to false the load() call will be omitted.
  //       This is useful for if you want dynamically control the
  //       load process on the client-side for things like GDPR.
  const options = {
    apiKey: writeKey,
    page: false,
    load: true,
  }

  const snippet = createSnippet(options)

  return setPostBodyComponents([
    <script
      key="segment-snippet"
      dangerouslySetInnerHTML={{ __html: snippet }} // eslint-disable-line
    />,
  ])
}
