interface Message {
  id: number
  text: string
  fromUser: boolean
  buttons?: string[]
}

export const INITIAL_MESSAGE: Message[] = [
  {
    id: 0,
    text: 'Привет! Что я могу для Вас сделать?',
    fromUser: false,
    buttons: ['Заказать пиццу', 'Установить будильник', 'Вывести погоду'],
  },
]
