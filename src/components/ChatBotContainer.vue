<script setup lang="ts">
import { ref } from 'vue'

import ChatBotToggler from './ChatBotToggler.vue'
import ChatBotWindow from './ChatBotWindow.vue'

const isChatOpen = ref(false)

function handleToggleChat(value: boolean) {
  isChatOpen.value = value
}
</script>

<template>
  <div class="container">
    <ChatBotWindow v-if="isChatOpen" @toggle-chat="handleToggleChat" />
    <ChatBotToggler v-else @toggle-chat="handleToggleChat" />
  </div>
</template>

<style scoped>
.container {
  position: absolute;
  right: 5vw;
  bottom: 5vw;
}
</style>
