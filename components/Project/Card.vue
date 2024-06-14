<template>
  <Card class="max-w-sm mx-auto">
    <img :src="imageSrc" alt="Cover image" class="w-full h-48 object-cover" />
    <CardContent>
      <h3 class="text-xl font-semibold">{{ project.project_name }}</h3>
      <p class="text-gray-600">{{ project.project_presentation }}</p>
      <p class="text-gray-500">{{ project.project_date }}</p>
      <a :href="project.project_link" class="text-blue-500 underline">Voir le projet</a>
    </CardContent>
  </Card>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  project: {
    type: Object,
    required: true,
    default: () => ({
      coverImage: '',
      project_name: '',
      project_presentation: '',
      project_inspiration: '',
      project_link: '',
      project_date: '',
    }),
  },
});

const imageSrc = computed(() => {
  return new URL(`../assets/data/${props.project.project_name}/${props.project.coverImage}`, import.meta.url).href;
});
</script>
