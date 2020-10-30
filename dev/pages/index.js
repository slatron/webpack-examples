import React from 'react'
import ReactDOM from 'react-dom'

// Grab the root entry page component
import IndexPage from 'components/page_roots/IndexPage/IndexPage'

// Each page should import global and page-level styles

import 'scss/main-react.scss'

ReactDOM.render(<IndexPage/>, document.getElementById('index'))
