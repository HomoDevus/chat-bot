import { Buttons, Messages } from './constsnts'

export function getResponseMessage(incomingMessage: string) {
  if (incomingMessage === Buttons.pizza) {
    return Messages.pizza
  } else if (incomingMessage === Buttons.alarm) {
    return Messages.alarm
  } else if (incomingMessage === Buttons.weather) {
    return Messages.weather
  } else {
    return Messages.unknown
  }
}
