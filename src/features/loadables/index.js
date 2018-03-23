import React from "react"
import Loadable from "react-loadable"

const Loading = () => (
  <div></div>
)

const LoadableLanding = Loadable({
  loader: () => import("../landing"),
  loading: Loading
})

const LoadableAboutUs = Loadable({
  loader: () => import("../static/AboutUs"),
  loading: Loading
})

const LoadableFAQ = Loadable({
  loader: () => import("../static/FAQ"),
  loading: Loading
})

const LoadableLegal = Loadable({
  loader: () => import("../static/Legal"),
  loading: Loading
})

const LoadableContact = Loadable({
  loader: () => import("../static/Contact"),
  loading: Loading
})

const LoadableTerms = Loadable({
  loader: () => import("../static/Terms"),
  loading: Loading
})

const LoadableDownload = Loadable({
  loader: () => import("../static/Download"),
  loading: Loading
})

const LoadableNotFound = Loadable({
  loader: () => import("../../components/NotFound"),
  loading: Loading
})

const Landing = () => (
  <LoadableLanding />
)

const AboutUs = () => (
  <LoadableAboutUs />
)

const FAQ = () => (
  <LoadableFAQ />
)

const Legal = () => (
  <LoadableLegal />
)

const Contact = () => (
  <LoadableContact />
)

const Terms = () => (
  <LoadableTerms />
)

const Download = () => (
  <LoadableDownload />
)

const NotFound = () => (
  <LoadableNotFound />
)

export { Landing, AboutUs, FAQ, Legal, Contact, Terms, Download, NotFound }
