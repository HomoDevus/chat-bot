interface Message {
  id: number
  text: string
  fromUser: boolean
  buttons?: Buttons[]
}

export enum Messages {
  greeting = 'Привет! Что я могу для Вас сделать?',
  pizza = 'Пицца на пути! Ожидайте доставку данных в течение нескольких миллисекунд.',
  alarm = "Настройка будильника... Будильник успешно установлен на 'никогда'. Приятных снов!",
  weather = 'Секундочку... Сейчас подтяну облака и проверю, как одеться!',
  unknown = 'Простите, я вас не понял',
}

export enum Buttons {
  pizza = 'Заказать пиццу',
  alarm = 'Установить будильник',
  weather = 'Вывести погоду',
}

export const INITIAL_MESSAGE: Message[] = [
  {
    id: 0,
    text: Messages.greeting,
    fromUser: false,
    buttons: [Buttons.pizza, Buttons.alarm, Buttons.weather],
  },
]
