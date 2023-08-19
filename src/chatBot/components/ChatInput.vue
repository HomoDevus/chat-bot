<script setup lang="ts">
import { ref } from 'vue'

const inputText = ref('')
const emit = defineEmits(['sendMessage'])

function handleSendMessage() {
  emit('sendMessage', inputText.value)
  inputText.value = ''
}
</script>

<template>
  <div class="input-container">
    <input
      type="text"
      v-model="inputText"
      placeholder="Введите сообщение..."
      @keyup.enter="handleSendMessage"
    />
    <button class="button send-button" @click="handleSendMessage">📪</button>
  </div>
</template>

<style scoped>
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
  min-width: 100px;
}

.send-button {
  background-color: black;
  font-size: 1.2em;
  padding: 0.4em;
}
</style>
