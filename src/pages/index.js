import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

export default class IndexPage extends React.Component {
  render() {
    return (
      <section className="section is-outer-section">
        <div className="container has-text-centered">
          <div className="columns">
            <div className="column is-6 is-offset-3">
              <div className="content">
                <h1 className="has-text-weight-bold is-size-2">Welcome</h1>
              </div>
              <img src="/img/m&h_nov_2016.jpg" />
              <div className="tile is-ancestor is-vertical is-size-4">
                <div className="tile is-parent">
                  <div className="tile is-child">
                    <Link to="https://blog.puriri.nz/">
                      Our Joint Blog
                    </Link>
                  </div>
                  <div className="tile is-child">
                    <Link to="/recipes/">
                      Favourite Recipes
                    </Link>
                  </div>
                </div>
                <div className="tile is-parent">
                  <div className="tile is-child">
                    <Link to="/writings/">
                      Heather's Writings
                    </Link>
                  </div>
                  <div className="tile is-child">
                    <Link to="/">
                      Carbon Auditing
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

