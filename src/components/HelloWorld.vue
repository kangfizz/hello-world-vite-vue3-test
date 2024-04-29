<template>
  <div :class="textClass">{{ text }}</div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent ({
  name: "HelloWorldTest",
  props: {
    text: {
      type: String,
      default: 'Hello World ?'
    },
    textClass: {
      type: String,
      default: 'text-3xl font-bold underline'
    }
  }
})
</script>