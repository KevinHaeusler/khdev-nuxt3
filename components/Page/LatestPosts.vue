<script setup>
function formatDate(date) {
  if (!date)
    return '' // Return an empty string if the date is not available

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return formattedDate
}
</script>

<template>
  <div>
    <div class="flex justify-between w-full mb-8">
      <h2 class="text-4xl font-bold dark:text-white">
        Latest Posts
      </h2>
      <button class="bg-purple-800 rounded-lg px-3 text-white">
        View All
      </button>
    </div>

    <ContentList v-slot="{ list }" :query="{ limit: 7, sort: [{ createdAt: -1 }] }">
      <div v-for="article in list" :key="article._path" class="flex flex-col">
        <NuxtLink :to="article._path" class="flex items-center">
          <div class="flex-grow font-semibold">
            {{ article.title }}
          </div>
          <div class="ml-4 text-purple-800">
            {{ formatDate(article.createdAt) }}
          </div>
        </NuxtLink>
        <div class="w-full border-b border-gray-600 opacity-25 mt-2" />
      </div>
    </ContentList>
  </div>
</template>
