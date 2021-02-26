import '@formatjs/intl-locale/polyfill'

import '@formatjs/intl-getcanonicallocales/polyfill'

import '@formatjs/intl-numberformat/polyfill'
import '@formatjs/intl-numberformat/locale-data/en'

import '@formatjs/intl-pluralrules/polyfill'
import '@formatjs/intl-pluralrules/locale-data/en'

import '@formatjs/intl-relativetimeformat/polyfill'
import '@formatjs/intl-relativetimeformat/locale-data/en'

import '@formatjs/intl-datetimeformat/polyfill'
import '@formatjs/intl-datetimeformat/locale-data/en'

import '@formatjs/intl-datetimeformat/add-all-tz'

import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
dayjs.extend(utc)
dayjs.extend(timezone)

// now returns Date object in users timezone returned in session response
export const now = () => {
  console.log('  * Using tz("Asia/Tokyo")', new dayjs().tz("Asia/Tokyo"))
  console.log('  * Using tz("America/Chicago")', new dayjs().tz("America/Chicago"))
  console.log('  * No tz()) ', new dayjs())

  return new dayjs().tz("Asia/Tokyo").format('YYYY年M月D日')
}

export const nowEN = () => {
  return new dayjs().tz("America/Chicago").format('MMM D, YYYY')
}

// Format methods per language code returned in session response
export const formatDateTime = {
  ja (d) {
    return new dayjs(d).format('YYYY年M月D日 h:mma')
  },
  en (d) {
    return new dayjs(d).format('MMM D, YYYY h:mma')
  }
}

export const formatDate = {
  ja (d) {
    return new dayjs(d).format('YYYY年M月D日')
  },
  en (d) {
    return new dayjs(d).format('MMM D, YYYY')
  }
}

// Cross-browser consistant way of generating Date object from ISOdatestring
export const getDateFromISOString = (ISOdatestring) => {
  if (!ISOdatestring) return new Date()
  const raw = ISOdatestring.split('.')[0]
  // format: YYYY-MM-DDTHH:mm:ss
  const portions = raw.split('T')
  const datestring = portions.length > 0 ? portions[0] : null
  const timestring = portions.length > 1 ? portions[1] : null
  const datePortions = datestring.split('-')

  if (!timestring && datestring) {
    return new Date(
      parseInt(datePortions[0]),
      parseInt(datePortions[1] - 1),
      parseInt(datePortions[2])
    )
  } else if (timestring && datestring) {
    const timePortions = timestring.split(':')
    return new Date(
      parseInt(datePortions[0]),
      parseInt(datePortions[1]) - 1,
      parseInt(datePortions[2]),
      parseInt(timePortions[0]),
      parseInt(timePortions[1]),
      parseInt(timePortions[2])
    )
  }
  return new Date()
}
