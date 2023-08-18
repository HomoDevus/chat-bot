<script setup lang="ts">
const props = defineProps({
  message: Object,
})
const emit = defineEmits(['sendMessage'])

function sendMessage(text: string) {
  emit('sendMessage', text)
}
</script>

<template>
  <div
    v-if="message"
    class="message-container"
    :class="message.fromUser ? 'message--user' : 'message--bot'"
  >
    <div class="message">
      {{ message.text }}
    </div>
    <div v-if="message.buttons" class="buttons-container">
      <button
        v-for="buttonText in message.buttons"
        @click="() => sendMessage(buttonText)"
      >
        {{ buttonText }}
      </button>
    </div>
  </div>
</template>

<style>
.message-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 80%;
}

.message {
  border-radius: 10px;
  padding: 0.4em 1em;
  word-wrap: break-word;
}

.message--user {
  align-self: flex-end;
}

.message--user > .message {
  background-color: #bbdefb;
  color: black;
}

.message--bot {
  align-self: flex-start;
}

.message--bot > .message {
  background-color: white;
}

.message--user + .message--bot,
.message--bot + .message--user {
  margin-top: 10px;
}

.buttons-container {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.buttons-container > button {
  background-color: aliceblue;
}
</style>
