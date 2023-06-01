<script setup>
import { onMounted, ref } from 'vue'

const currentAge = ref(0)

function calculateAge() {
  const birthday = new Date(1995, 6, 14) // Month is zero-based, so 6 represents July
  const currentDate = new Date()
  let age = currentDate.getFullYear() - birthday.getFullYear()

  // Adjust age if birthday hasn't occurred yet this year
  if (
    currentDate.getMonth() < birthday.getMonth()
    || (currentDate.getMonth() === birthday.getMonth() && currentDate.getDate() < birthday.getDate())
  )
    age--

  currentAge.value = age
}

onMounted(() => {
  const storedAge = localStorage.getItem('currentAge')
  if (storedAge)
    currentAge.value = parseInt(storedAge)

  else
    calculateAge()
})

// Watch for changes in currentAge and store the updated value in localStorage
watch(currentAge, (value) => {
  localStorage.setItem('currentAge', value.toString())
})
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4 md:mb-12">
    <div class="md:col-span-3 flex flex-col">
      <!-- Text content -->
      <h1 class="text-6xl font-bold mb-2">
        Well Met!
      </h1>
      <p class="text-2xl font-medium mb-4">
        Hello, I am Kevin, a {{ currentAge }}-year-old System Engineer from Switzerland.
      </p>
      <p class="text-xl  mb-4">
        I write about 3D Printing, Webdev, Home automation, Python, and various other software and hardware projects.
      </p>
      <p class="text-xl ">
        In my free time I like to create things and try out new technologies.
      </p>
    </div>
    <div class="md:col-span-2 flex items-start md:items-end md:flex-col">
      <!-- Image content -->
      <div class="w-full ">
        <img src="https://khdev.ch/assets/img/KevinHaeusler400x300.webp?v=ff07eaaf28" alt="Image" class=" inset-0 w-full h-72 md:object-right object-contain">
      </div>
    </div>
  </div>
</template>

<style>
/* Adjust the styling as per your needs */
</style>
