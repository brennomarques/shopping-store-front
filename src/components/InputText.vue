<template>
  <div>
    <input
      :type="type"
      class="form-control"
      id="inputText"
      :placeholder="placeholder"
      v-model="userInput"
    />
    <label for="inputText">{{ label }}</label>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  label: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    default: ''
  },
  value: {
    type: String,
    default: ''
  }
})

const userInput = ref(props.value)

watch(
  () => props.value,
  (newValue) => {
    userInput.value = newValue
  }
)

watch(userInput, (newValue) => {
  emit('update:modelValue', newValue)
})
</script>
