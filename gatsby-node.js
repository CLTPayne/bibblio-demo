const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const result = await graphql(
    `
      {
        allBlogPostsJson(sort: {fields: [post_date], order: DESC}, limit: 50) {
          edges {
            node {
              post_author
              post_category
              post_content
              post_date
              post_slug
              post_thumbnail
              post_title
            }
          }
        }
      }
    `
  )


  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  const posts = result.data.allBlogPostsJson.edges

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: `/post/${post.node.post_slug}`,
      component: blogPost,
      context: {
        slug: post.node.post_slug,
        previous,
        next,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
