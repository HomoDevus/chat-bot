<script setup lang="ts">
const emit = defineEmits(['toggleChat'])

function handleClick() {
  emit('toggleChat', true)
}
</script>

<template>
  <button @click="handleClick" class="chat-open-button" data-chat-open-button>
    🤖
  </button>
</template>

<style scoped>
.chat-open-button {
  padding: 0.6em;
  font-size: 2rem;
  border-radius: 50%;
  background-color: transparent;
  backdrop-filter: blur(10px);
  transition: background-color 0.3s ease-out;
  background-color: #00000010;
  filter: none;
}

.chat-open-button:hover {
  background-color: #00000020;
}
</style>
