<script setup lang="ts">
import { nextTick, onMounted, ref, type Ref } from 'vue'

import { INITIAL_MESSAGE } from '../constsnts'

let id = INITIAL_MESSAGE.length

const emit = defineEmits(['toggleChat'])
const messages = ref(INITIAL_MESSAGE)
const inputText = ref('')
const chatElement: Ref<HTMLElement | null> = ref(null)

function handleCloseClick() {
  emit('toggleChat', false)
}

function handleSendMessage() {
  if (inputText.value) {
    messages.value.push({ id: id++, text: inputText.value, fromUser: true })

    nextTick(() => {
      scrollToBottom()
    })
  }
}

function scrollToBottom() {
  if (chatElement.value !== null) {
    chatElement.value.scrollTop = chatElement.value.scrollHeight
  }
}

onMounted(scrollToBottom)
</script>

<template>
  <div class="window-container">
    <button @click="handleCloseClick" class="button close-button">❌</button>
    <hr />
    <div class="chat" ref="chatElement">
      <div
        v-for="message in messages"
        :key="message.id"
        class="message"
        :class="message.fromUser ? 'message--user' : 'message--bot'"
      >
        {{ message.text }}
      </div>
    </div>
    <div class="input-container">
      <input
        type="text"
        v-model="inputText"
        placeholder="Введите сообщение..."
      />
      <button class="button send-button" @click="handleSendMessage">📪</button>
    </div>
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
  height: 40vh;
  width: 340px;
}

.close-button {
  align-self: flex-end;
  margin-bottom: 10px;
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

.message {
  border-radius: 10px;
  padding: 0.4em 1em;
  max-width: 80%;
  word-wrap: break-word;
}

.message--user {
  align-self: flex-end;
  background-color: #bbdefb;
  color: black;
}

.message--bot {
  align-self: flex-start;
  background-color: white;
}

.message--user + .message--bot,
.message--bot + .message--user {
  margin-top: 10px;
}

.input-container {
  display: flex;
  gap: 10px;
}

.input-container > input {
  flex: 1;
  padding: 0.6em 0.6em 0.4em;
  border: 0;
  border-radius: 8px;
  font-size: 1em;
}

.send-button {
  background-color: black;
  font-size: 1.2em;
  transition: background-color 0.3s ease-out;
}

.send-button:hover {
  background-color: #1f1f1f;
}

.button {
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 8px;
}
</style>
