import React from 'react'
import Menu from 'components/Menu/Menu'

import { useTranslation } from 'react-i18next';

import {now, nowEN, formatDateTime, formatDate} from './formatDatestring'

const testFunctions = () => {
  return `${formatDateTime.ja('2021-02-21T12:30:32')} | ${formatDate.ja('2021-02-21')}`
}

const testEn = () => {
  return `${formatDateTime.en('2021-02-21T12:30:32')} | ${formatDate.en('2021-02-21')}`
}

const ContactPage = () => {
  const { t } = useTranslation()

  return (
    <>
      <Menu current="contact" />
      <h2>DATE FORMATTING DEMO</h2>
      <p>This page is using Day.js with Polyfills to format dates and get date in timezone returned during session login.</p>
      <p>No Engligh locales used or imported</p>
      <p>JA | {testFunctions()}</p>
      <p>EN | {testEn()}</p>
      <h5>Current Day:</h5>
      <p>nowEN | {nowEN()}</p>
      <p>now | {now()}</p>

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
