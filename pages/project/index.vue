<template>
  <section class="mx-32 my-20 flex flex-col items-center">
    <h1 class="text-6xl font-karla font-bold">Project page</h1>

    <div class="content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-4/5 m-12">
      <ProjectCard
        v-for="project in projects"
        :key="project.name"
        :project="project"
      />
    </div>
  </section>
</template>
<script setup>
import { onMounted } from 'vue';
import { useProjects } from '@/composables/useProjects';

const { projects, fetchProjects } = useProjects();

onMounted(() => {
  fetchProjects();
});
</script>