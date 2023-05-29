<script setup>
const colorMode = useColorMode()
const toggleDarkMode = () => (colorMode.preference = (colorMode.value === 'light' ? 'dark' : 'light'))
</script>

<template>
  <div>
    <UButton size="md" variant="solid" square @click="toggleDarkMode($colorMode.preference === 'dark' ? 'light' : 'dark')">
      <UIcon v-if="$colorMode.preference === 'dark'" name="i-heroicons-moon-solid" />
      <UIcon v-else name="i-heroicons-sun-solid" />
    </UButton>
  </div>
</template>

<style></style>
