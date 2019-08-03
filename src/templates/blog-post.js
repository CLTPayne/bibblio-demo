import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

const BlogPostTemplate = ({ data, pageContext, path }) => (
  <Layout location={path} title={data.site.siteMetadata.title} >
    <SEO
      title={data.blogPostsJson.post_title}
    />
    <h1
      style={{
        marginTop: rhythm(1),
        marginBottom: 0,
      }}
    >
      {data.blogPostsJson.post_title}
    </h1>
    <p
      style={{
        ...scale(-1 / 5),
        display: `block`,
        marginBottom: rhythm(1),
      }}
    >
      {data.blogPostsJson.post_date}
    </p>
    <div dangerouslySetInnerHTML={{ __html: data.blogPostsJson.post_content }} />
    <hr
      style={{
        marginBottom: rhythm(1),
      }}
    />
    <Bio />
    <div className="bib--rcm-init"
      data-recommendation-key="4fd205e0-f2df-4a59-ad9a-770cac111ab2"
      data-style-classes="bib--row-3 bib--hover bib--recency-show"
    >
    </div>
    <ul
      style={{
        display: `flex`,
        flexWrap: `wrap`,
        justifyContent: `space-between`,
        listStyle: `none`,
        padding: 0,
      }}
    >
      <li>
        {pageContext.previous && (
          <Link to={`post/${pageContext.previous.post_slug}`} rel="prev">
            ← {pageContext.previous.post_title}
          </Link>
        )}
      </li>
      <li>
        {pageContext.next && (
          <Link to={`post/${pageContext.next.post_slug}`} rel="next">
            {pageContext.next.post_title} →
              </Link>
        )}
      </li>
    </ul>
  </Layout >
)

export default BlogPostTemplate

export const pageQuery = graphql`
    query BlogPostBySlug($post_slug: String!) {
      blogPostsJson(post_slug: {eq: $post_slug}) {
      post_author
      post_category
      post_content
      post_date
      post_slug
      post_thumbnail
      post_title
    }
    site {
      siteMetadata {
        title
        author
      }
    }
  }
`
