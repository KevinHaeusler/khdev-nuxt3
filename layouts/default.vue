<script lang="ts" setup></script>

<template>
  <div>
    <PageNavbar />
    <slot />
    <PageFooter />
  </div>
</template>

<style>
body {
  @apply dark:bg-neutral-900 bg-slate-200;
}

.clipboard-button {
  background-color: #e2e8f0;
  border: none;
  border-radius: 4px;
  color: #4a5568;
  cursor: pointer;
  padding: 0.5rem 1rem;
  transition: background-color 0.2s ease-in-out;
}

.clipboard-button:hover {
  background-color: #cbd5e0;
}
</style>
