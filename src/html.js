import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
        {/* <!-- Start of Bibblio RCM includes --> */}
        <link rel="stylesheet" type="text/css" href="https://cdn.bibblio.org/rcm/4.5/bib-related-content.min.css" />
        <script id="bib--rcm-src" src="https://cdn.bibblio.org/rcm/4.5/bib-related-content.min.js" data-auto-ingestion="true" data-recommendation-key="4fd205e0-f2df-4a59-ad9a-770cac111ab2" />
        {/* <!-- End of Bibblio RCM includes --> */}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
