<template>
    <div class="flex items-center space-x-3">
        <Switch :checked="isDarkMode" @click="toggleDarkMode" />
        <span v-if="isDarkMode">Nuit</span>
        <span v-else>Jour</span>
      </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  
  const isDarkMode = ref(false)
  
  const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value
    if (isDarkMode.value) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }
  
  onMounted(() => {
    if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      isDarkMode.value = true
      document.documentElement.classList.add('dark')
    }
  })
  </script>