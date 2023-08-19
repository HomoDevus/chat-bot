import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import ChatContainer from './chatBot/components/ChatContainer.vue'

createApp(App).mount('#app')
createApp(ChatContainer).mount('#chat-bot')
