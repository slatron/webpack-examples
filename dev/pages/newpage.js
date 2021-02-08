import React from 'react'
import ReactDOM from 'react-dom'

// Grab the root entry page component
import NewPage from 'components/page_roots/NewPage/NewPage'

// Each page should import global and page-level styles
import 'scss/main-react.scss'

ReactDOM.render(<NewPage />, document.getElementById('newpage'))
