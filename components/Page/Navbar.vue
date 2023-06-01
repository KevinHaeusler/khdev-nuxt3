<script>

</script>

<template>
  <nav class="dark:bg-neutral-900 mt-8">
    <div class="max-w-6xl mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <!-- Logo or brand -->

          <NuxtLink to="/" class="text-gray-900 dark:text-white text-lg font-semibold">
            KHDev
          </NuxtLink>
        </div>

        <!-- Navigation links -->
        <div class="md:flex md:items-start md:space-x-4 text-lg dark:text-gray-200 text-gray-900">
          <NuxtLink to="/blog" class=" hover:underline decoration-4 underline-offset-8 decoration-violet-700 hover:text-violet-900  dark:hover:text-white px-3 py-2 rounded-md">
            Blog
          </NuxtLink>
          <NuxtLink to="" class=" hover:underline decoration-4 underline-offset-8 decoration-blue-500 hover:text-violet-900  dark:hover:text-white px-3 py-2 rounded-md">
            Projects
          </NuxtLink>
          <NuxtLink to="" class=" hover:underline decoration-4 underline-offset-8 decoration-green-500 hover:text-violet-900  dark:hover:text-white px-3 py-2 rounded-md">
            About
          </NuxtLink>
          <NuxtLink to="" class=" hover:underline decoration-4 underline-offset-8 decoration-yellow-500 hover:text-violet-900  dark:hover:text-white px-3 py-2 rounded-md">
            Github
          </NuxtLink>
        </div>
        <div>
          <PageThemePicker />
        </div>
      </div>
    </div>
  </nav>
</template>

<style></style>
