import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import { rhythm } from "../utils/typography"

const getBLogPostSummary = (data) => {
    const blogPostsSummaryArray = [];
    data.allBlogPostsJson.edges.forEach(element => {
        blogPostsSummaryArray.push(
            <div key={element.node.post_slug}>
                <h3
                    style={{
                        marginBottom: rhythm(1 / 4),
                    }}
                >
                    <Link style={{ boxShadow: `none` }} to={element.node.post_slug}>
                        {element.node.post_title}
                    </Link>
                </h3>
                <small>{element.node.post_date}</small>
            </div>
        )
    });
    return blogPostsSummaryArray;
}

const PostsSummary = ({ children }) => (
    <StaticQuery
        query={graphql`
            query BlogPostsQuery {
                allBlogPostsJson {
                    edges {
                        node {
                            post_title
                            post_date
                            post_author
                            post_thumbnail
                            post_slug
                        }
                    }
                }
            } 
    `}
        render={data => (
            <>
                <ul>{getBLogPostSummary(data)}</ul>
            </>
        )}
    />
)

export default PostsSummary