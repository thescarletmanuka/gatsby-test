import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Content, { HTMLContent } from '../components/Content'
import Navbar from '../components/Navbar';

export const ArticleTemplate = ({
  content,
  contentComponent,
  title,
  published,
  edited,
}) => {
  const PostContent = contentComponent || Content

  return (
    <div>
      <Navbar />
      <section className="section is-outer-section">
        <Helmet title={`${title}`} />
        <div className="container content">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
                {title}
              </h1>
              <div className="subtitle is-size-6 has-text-right">{published}</div>
              <PostContent content={content} />
              <footer>
                <br />
                <div>
                  Arohanui,<br />
                  Heather<br />
                  <div className="has-text-right is-size-7" hidden={!edited}>Last updated: {edited}</div>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

ArticleTemplate.propTypes = {
  content: PropTypes.string.isRequired,
  contentComponent: PropTypes.func,
  title: PropTypes.string,
}

const Article = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <ArticleTemplate
      content={post.html}
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      published={post.frontmatter.published}
      edited={post.frontmatter.edited}
    />
  )
}

Article.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default Article

export const pageQuery = graphql`
  query ArticleByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        published(formatString: "MMMM, YYYY")
        edited(formatString: "dddd, MMMM DD, YYYY")
        title
      }
    }
  }
`
