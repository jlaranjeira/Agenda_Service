import { EventInput } from '@fullcalendar/core'


let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

export const INITIAL_EVENTS: EventInput[] = [
  {
    id: createEventId(),
    title: 'Lavagem de Tapete',
    start: todayStr + 'T14:00:00'
  },
  {
    id: createEventId(),
    title: 'Higienização de colchão solteiro',
    start: todayStr + 'T12:00:00'
  },
  {
    id: createEventId(),
    name: 'José Laranjeira',
    title: 'Higienização de sofá',
    start: todayStr + 'T20:00:00'
  }
 
]

export function createEventId() {
  return String(eventGuid++)
}