<template>
  <div class="flex items-center space-x-3">
    <Switch :checked="isDarkMode" @click="handleToggle" />
    <span v-if="isDarkMode">Nuit</span>
    <span v-else>Jour</span>

    <AlertDialog :open="isDialogOpen" @close="handleCloseDialog">
      <AlertDialogContent>
        <AlertDialogDescription>
          <video controls autoplay loop class="w-full h-full">
            <source src="@/assets/img/jour-nuit.mp4" type="video/mp4" />
          </video>
        </AlertDialogDescription>
        <AlertDialogAction @click="handleCloseDialog" class="bg-muted">Fermer</AlertDialogAction>
      </AlertDialogContent>
    </AlertDialog>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";

const isDarkMode = ref(false);
const toggleCount = ref(0);
const isDialogOpen = ref(false);

const emit = defineEmits(['close']);

const handleToggle = () => {
  toggleDarkMode();
  toggleCount.value++;
  if (toggleCount.value === 4) {
    isDialogOpen.value = true;
    toggleCount.value = 0;
  }
};

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  if (isDarkMode.value) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
};

const handleCloseDialog = () => {
  isDialogOpen.value = false;
  emit('close');
};

onMounted(() => {
  if (
    localStorage.getItem("theme") === "dark" ||
    (!localStorage.getItem("theme") &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    isDarkMode.value = true;
    document.documentElement.classList.add("dark");
  }
});
</script>