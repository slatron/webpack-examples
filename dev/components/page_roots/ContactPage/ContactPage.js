import React from 'react'
import Menu from 'components/Menu/Menu'

import { useTranslation } from 'react-i18next';

const ContactPage = () => {
  const { t, i18n } = useTranslation()

  return (
    // <> is shorthand for a container to keep multiple root JSX nodes
    <>
      <Menu current="contact" />
      <h2>Contact</h2>
      <p>ONLY THE CONTACT PAGE SHOULD BE RED TEXT Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, provident, ex! Iure autem quos eos in expedita repellat, molestiae omnis voluptatibus! At, asperiores expedita laboriosam inventore eaque est odio ab.</p>
      <ul>
        <li>{t('one')}</li>
        <li>{t('two')}</li>
        <li>three</li>
      </ul>
    </>
  )
}

export default ContactPage
