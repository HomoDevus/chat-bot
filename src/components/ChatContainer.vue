<script setup lang="ts">
import { ref } from 'vue'

import ChatBotToggler from './ChatToggler.vue'
import ChatBotWindow from './ChatWindow.vue'

const isChatOpen = ref(false)

function handleToggleChat(value: boolean) {
  isChatOpen.value = value
}
</script>

<template>
  <div class="chat-container">
    <ChatBotWindow v-if="isChatOpen" @toggle-chat="handleToggleChat" />
    <ChatBotToggler v-else @toggle-chat="handleToggleChat" />
  </div>
</template>

<style>
.chat-container {
  position: absolute;
  right: 5vw;
  bottom: 5vw;
}

button {
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  padding: 0.8em 1em;
  transition: filter 0.3s ease-out;
}

button:hover {
  filter: brightness(96%);
}
</style>
