<script>
export default {
  data() {
    return {
      currentAge: 0,
    }
  },
  mounted() {
    const birthday = new Date(1995, 6, 14) // Month is zero-based, so 6 represents July
    const currentDate = new Date()
    let age = currentDate.getFullYear() - birthday.getFullYear()

    // Adjust age if birthday hasn't occurred yet this year
    if (currentDate.getMonth() < birthday.getMonth()
        // eslint-disable-next-line curly
        || (currentDate.getMonth() === birthday.getMonth() && currentDate.getDate() < birthday.getDate())) {
      age--
    }

    this.currentAge = age
  },
}
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-5 gap-4">
    <div class="md:col-span-3 flex flex-col">
      <!-- Text content -->
      <h1 class="text-6xl font-bold">
        Well Met!
      </h1>
      <p class="text-2xl flex-grow font-medium">
        Hello, I am Kevin, a {{ currentAge }}-year-old System Engineer from Switzerland.
      </p>
      <p class="text-xl flex-grow">
        I write about 3D Printing, Webdev, Home automation, Python, and various other software and hardware projects.
      </p>
    </div>
    <div class="md:col-span-2 flex items-start md:items-center md:flex-col">
      <!-- Image content -->
      <div class="aspect-w-2 aspect-h-1 w-full relative">
        <img src="https://khdev.ch/assets/img/KevinHaeusler400x300.webp?v=ff07eaaf28" alt="Image" class="absolute inset-0 w-full h-full object-contain">
      </div>
    </div>
  </div>
</template>

<style>
/* Adjust the styling as per your needs */
</style>
