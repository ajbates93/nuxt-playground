<template>
  <div class="grid grid-cols-[1fr_2fr] h-full">
    <div class="border-r dark:border-gray-700 border-gray-200 p-2">
      Content
      <div>
        Hello world {{ x }} {{ y }}!
        <button @click="toggleDark">{{ color.value }}</button>
      </div>
    </div>
    <div class="p-2">
      Playground
    </div>
  </div>
</template>

<script setup lang="ts">
const { x, y } = useMouse()

const color = useColorMode()

const toggleDark = () => color.value = color.value === 'dark' ? 'light' : 'dark';

</script>
