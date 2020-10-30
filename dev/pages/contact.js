import React from 'react'
import ReactDOM from 'react-dom'

// Grab the root entry page component
import ContactPage from 'components/page_roots/ContactPage/ContactPage'

// Each page should import global and page-level styles
import 'scss/main-react.scss'
import 'scss/modules/contact.scss'

// Render react entry component for this page
ReactDOM.render(<ContactPage/>, document.getElementById('contact'))
