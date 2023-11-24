<template>
  <div>
    Hello world {{ x }} {{ y }}!
  </div>
  <button @click="toggleDark">{{ color }}</button>
</template>

<script setup lang="ts">
const { x, y } = useMouse()

const color = useColorMode()

const toggleDark = () => color.value = color.value === 'dark' ? 'light' : 'dark';

</script>
