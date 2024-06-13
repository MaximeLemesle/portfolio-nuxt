<template>
  <header class="flex justify-between items-center py-4 px-12 bg-background dark:bg-gray-800">
    <div class="logo text-3xl font-bold">
      <NuxtLink 
        to="/" 
        class="text-primary dark:text-primary-foreground no-underline hover:text-primary-foreground transition-colors duration-300"
      >
        /maxime
      </NuxtLink>
    </div>

    <nav class="navbar flex space-x-8">
      <NuxtLink 
        to="/project" 
        class="nav-link bg-muted dark:bg-gray-700 border-2 border-muted text-foreground dark:text-gray-300 hover:border-accent transition-colors duration-300 rounded-lg py-3 px-8" 
        exact-active-class="router-link-active"
      >
        /project
      </NuxtLink>
      <NuxtLink 
        to="/techno" 
        class="nav-link bg-muted dark:bg-gray-700 border-2 border-muted text-foreground dark:text-gray-300 hover:border-accent transition-colors duration-300 rounded-lg py-3 px-8"
        exact-active-class="router-link-active"
      >
        /techno
      </NuxtLink>
      <NuxtLink 
        to="/readme" 
        class="nav-link bg-muted dark:bg-gray-700 border-2 border-muted text-foreground dark:text-gray-300 hover:border-accent transition-colors duration-300 rounded-lg py-3 px-8"
        exact-active-class="router-link-active"
      >
        /readme
      </NuxtLink>
      <NuxtLink 
        to="/contact" 
        class="btn bg-accent text-white border-2 border-muted hover:bg-accent-foreground hover:border-accent hover:text-accent transition-colors duration-300 rounded-lg py-3 px-8"
      >
        /contact
      </NuxtLink>
    </nav>

    <div class="flex items-center space-x-4">
      <DarkModeToggle />
    </div>
  </header>
</template>

<script setup>
import DarkModeToggle from '~/components/DarkModeToggle.vue'
</script>

<style scoped>
.logo .router-link-active {
  border: none;
  color: hsl(var(--text-foreground));
}

.btn.router-link-active {
  @apply text-white dark:text-foreground;
}

.router-link-active {
  border: solid 2px hsl(var(--accent));
  color: hsl(var(--accent));
}
</style>