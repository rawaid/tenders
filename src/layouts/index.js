import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import './index.css'

const TemplateWrapper = ({ children }) => (
  
  <div>
    <Helmet
      title="The Tenders"
      meta={[
        { name: 'description', content: 'The Tenders' },
        { name: 'keywords', content: 'The Tenders' },
      ]}
    />
    <div>
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
