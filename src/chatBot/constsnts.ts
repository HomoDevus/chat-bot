import { Buttons, Messages, type Message } from './types'

export const INITIAL_MESSAGE: Message[] = [
  {
    id: 0,
    text: Messages.greeting,
    fromUser: false,
    buttons: [Buttons.pizza, Buttons.alarm, Buttons.weather],
  },
]
