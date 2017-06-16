import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'
import { rhythm } from '../utils/typography'

export default class Template extends React.Component {
  static propTypes = {
    children: PropTypes.any
  }

  render() {
    return (
      <div style={{ position: 'absolute', top: '0px', bottom: '0px', width: '100%' }}>
        <Helmet
          title={config.siteTitle}
          meta={[
            { name: "description", content: "Sample" },
            { name: "keywords", content: "sample, something" },
          ]}
        />
        <main style={{
          width: '100%',
          margin: '0 auto',
          padding: '20px',
          overflow: 'auto'
        }}>
          {this.props.children}
        </main>
      </div>
    )
  }
}
