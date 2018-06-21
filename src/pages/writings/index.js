import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";

export default class ArticleIndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <section className="section">
        <Helmet title="Heather's Articles" />
        <span className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <h1 className="has-text-weight-bold is-size-2">
                  Heather's Writing
                </h1>
              </div>
              <div className="content">
                <p>Welcome.</p>
                <p>
                  I have had chronic fatigue syndrome (CFS) since the afternoon of
                  February 25, 2003. Since 2004 I have been writing about my
                  experiences living with this disease. Many of these articles were
                  published first in Meeting Place, the magazine produced by the New
                  Zealand support organisation for people with CFS,
                  <a href="http://www.anzmes.org.nz/">ANZMES</a>.
                </p>
                <p>
                  I hope that these articles and stories will help you to understand
                  what effects CFS has had on my life. If you have CFS or another
                  debilitating illness, I pray that they will give you hope that you
                  can live a full life even with your limitations and that they will
                  give you some practical pointers on how to do so.
                </p>
                <p>
                  You are welcome to store these articles on your computer, but
                  please contact me before distributing them further.
                </p>
                <p>In reverse chronological order of writing:</p>
              </div>
              {_(posts)
              .groupBy("node.frontmatter.pub_year")
              .toPairs()
              .sortBy(x=>-x[0]) // x is [key, values]
              .map(x => x[1])  // sort by key, then take only values
              .map(articles => (
                <span className="content" key={articles[0].node.frontmatter.pub_year}>
                  <dl>
                    <dt className="has-text-weight-semibold">{articles[0].node.frontmatter.pub_year}</dt>
                    {articles.map(({node: article}) => ( 
                      <dd className="container article-list-item">
                        <Link
                          xclassName="has-text-primary"
                          to={article.fields.slug}
                        >
                          {article.frontmatter.title}
                        </Link>
                        <span> &bull; </span>
                        <small>{article.frontmatter.pub_month}</small>
                        {article.frontmatter.description && (<div>
                        <span className="content is-small is-italic">
                          ({article.frontmatter.description})
                        </span></div>
                        )}
                      </dd>
                    ))}
                  </dl>
                  &nbsp; {/* lazy bottom padding */}
                </span>
              ))
              .value()}
            </div>
          </div>
        </span>
      </section>
    );
  }
}

ArticleIndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export const pageQuery = graphql`
  query ArticleListQuery {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "article" } } }
      sort: { order: DESC, fields: [frontmatter___published] }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            pub_year: published(formatString: "YYYY")
            pub_month: published(formatString: "MMMM")
            description
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
