<template>
  <Card class="max-w-sm mx-auto flex flex-col w-full">
    <div v-if="project.images && project.images.length">
      <!-- Pour le dev en local, ne pas mettre la base de l'url -->
      <!-- Pour le dev en prod, mettre le chemin complet -->
      <img
        :src="`../../public/project/${project.project_name}/${project.images[0].image_url}`"
        alt="Background image"
        class="w-full h-48 object-cover mb-2 rounded-t-md"
      />
    </div>
    <CardContent class="flex flex-col justify-between gap-1 h-full">
      <h2 class="text-xl font-semibold">{{ project.project_name }}</h2>
      <p class="text-gray-500">{{ project.project_date }}</p>
      <div v-if="project.skills && project.skills.length">
        <h3 class="text-lg font-semibold text-gray-500">Skills</h3>
        <p>{{ skillsList }}</p>
      </div>
      <div v-if="project.technos && project.technos.length">
        <h3 class="text-lg font-semibold text-gray-500">Stack</h3>
        <ul class="flex gap-4">
          <li v-for="techno in project.technos" :key="techno.techno_name">
            <img :src="techno.techno_img" :alt="techno.techno_name" class="h-8" />
          </li>
        </ul>
      </div>
      <Button class="mt-2"><a :href="project.project_link" class="h-full w-full">Voir le projet</a></Button>
    </CardContent>
  </Card>
</template>

<script setup>

const props = defineProps({
  project: {
    type: Object,
    required: true,
    default: () => ({
      project_name: '',
      project_presentation: '',
      project_inspiration: '',
      project_link: '',
      project_date: '',
      images: [],
      technos: [],
      skills: [],
    }),
  },
});

const skillsList = computed(() => {
  return props.project.skills.map(skill => skill.skill_name).join(', ');
});
</script>
