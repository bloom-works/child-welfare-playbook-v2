import { DateTime } from 'luxon'

const humanDate = (date) => {
    const d = DateTime.fromISO(date.toISOString())
    return `${d.toFormat(`LLLL`)} ${d.toFormat(`d`)}, ${d.toFormat(`yyyy`)}`
}

const yearMonthDay = (date) => {
    const d = DateTime.fromISO(date.toISOString())
    return `${d.toISODate()}`
}

export default { humanDate, yearMonthDay };