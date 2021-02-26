import 'date-time-format-timezone'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
dayjs.extend(utc)
dayjs.extend(timezone)

// now returns Date object in users timezone returned in session response
export const now = () => {
  // return new Date().toLocaleString('ja', {timeZone: 'Asia/Tokyo'})
  // return format(utcToZonedTime(new Date(), 'Asia/Tokyo'), 'yyyy年M月d日 h:mma')
  console.log('  ** en: ', new dayjs().tz("America/Chicago"))
  console.log('  ** ja: ', new dayjs().tz("Asia/Tokyo"))
  return new dayjs().tz("Asia/Tokyo").format('YYYY年M月D日 h:mma')
}

export const nowEN = () => {
  return new dayjs().tz("America/Chicago").format('MMM D, YYYY h:mma')
}

// Format methods per language code returned in session response
export const formatDateTime = {
  ja (d) {
    // return format(d, 'yyyy年M月d日 h:mma')
    return new dayjs(d).format('YYYY年M月D日 h:mma')
  },
  en (d) {
    // return format(d, 'MMM d, yyyy h:mma')
    return new dayjs(d).format('MMM D, YYYY h:mma')
  }
}

export const formatDate = {
  ja (d) {
    // return format(d, 'yyyy年M月d日')
    return new dayjs(d).format('YYYY年M月D日')
  },
  en (d) {
    // return format(d, 'MMM d, yyyy')
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
