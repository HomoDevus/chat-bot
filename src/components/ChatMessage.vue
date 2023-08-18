<script setup lang="ts">
const props = defineProps({
  message: Object,
})
</script>

<template>
  <div
    v-if="message"
    class="message"
    :class="message.fromUser ? 'message--user' : 'message--bot'"
  >
    {{ message.text }}
  </div>
</template>

<style>
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
</style>
