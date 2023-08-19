<script setup lang="ts">
import { nextTick, onMounted, onUnmounted, ref } from 'vue'

import { INITIAL_MESSAGE } from '../constsnts'
import { type ElementRef } from '../types'
import { getResponseMessage } from '../uitls'
import ChatInput from './ChatInput.vue'
import ChatMessage from './ChatMessage.vue'

let id = INITIAL_MESSAGE.length

const emit = defineEmits(['toggleChat'])
const messages = ref(INITIAL_MESSAGE)
const chatElement: ElementRef = ref(null)
const windowElement: ElementRef = ref(null)

function handleCloseClick() {
  emit('toggleChat', false)
}

function handleSendMessage(messageText: string) {
  if (messageText) {
    messages.value.push({ id: id++, text: messageText, fromUser: true })
    messages.value.push({
      id: id++,
      text: getResponseMessage(messageText),
      fromUser: false,
    })

    nextTick(scrollToBottom)
  }
}

function scrollToBottom() {
  if (chatElement.value !== null) {
    chatElement.value.scrollTop = chatElement.value.scrollHeight
  }
}

function handleKeyupEvent(e: KeyboardEvent) {
  if (e.key === 'Escape') {
    handleCloseClick()
  }
}

function handleClick(e: MouseEvent) {
  const target = e.target as Element

  if (
    windowElement.value !== null &&
    !target.hasAttribute('data-chat-open-button') &&
    !windowElement.value.contains(target)
  ) {
    handleCloseClick()
  }
}

onMounted(() => {
  scrollToBottom()
  // Close window on Escape key press and click outside the window
  document.addEventListener('keyup', handleKeyupEvent)
  document.addEventListener('click', handleClick)
})

onUnmounted(() => {
  document.removeEventListener('keyup', handleKeyupEvent)
  document.removeEventListener('click', handleClick)
})
</script>

<template>
  <div class="window-container" ref="windowElement">
    <button @click="handleCloseClick" class="button close-button">❌</button>
    <hr class="top-divider" />
    <div class="chat" ref="chatElement">
      <ChatMessage
        v-for="message in messages"
        :key="message.id"
        :message="message"
        @send-message="handleSendMessage"
      />
    </div>
    <ChatInput @send-message="handleSendMessage" />
  </div>
</template>

<style scoped>
.window-container {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 1em;
  backdrop-filter: blur(10px);
  border-radius: 10px;
  background-color: #00000010;
  aspect-ratio: 1 / 1.5;
  min-height: 40vh;
  width: 340px;
  max-width: calc(100vw - 60px);
  box-sizing: border-box;
}

.close-button {
  align-self: flex-end;
  margin-bottom: 0.8em;
  background-color: transparent;
  padding: 0.4em;
}

.chat {
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
  overflow-x: auto;
  margin-bottom: 20px;
  padding-top: 10px;
}

.chat::-webkit-scrollbar {
  width: 10px;
}

.chat::-webkit-scrollbar-track,
.chat::-webkit-scrollbar-thumb {
  border: solid 3px transparent;
  border-radius: 10px;
}

.chat::-webkit-scrollbar-track {
  box-shadow: inset 0 0 10px 10px #f1f1f1;
}

.chat::-webkit-scrollbar-thumb {
  box-shadow: inset 0 0 10px 10px #c1c1c1;
}

.top-divider {
  border-color: lightgrey;
}
</style>
