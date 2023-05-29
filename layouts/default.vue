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
</style>
