<template>
  <Card class="max-w-sm mx-auto">
    <!-- Affichage de l'image de fond -->
    <div v-if="project.images && project.images.length">
      <img
        :src="`${project.project_name}/${project.images[0].image_url}`"
        alt="Background image"
        class="w-full h-48 object-cover mb-2"
      />
    </div>
    <CardContent>
      <h3 class="text-xl font-semibold">{{ project.project_name }}</h3>
      <p class="text-gray-500">{{ project.project_date }}</p>
      <Button><a :href="project.project_link" class="h-full w-full">Voir le projet</a></Button>
      <div v-if="project.technos && project.technos.length">
        <ul class="flex flex-wrap">
          <li v-for="techno in project.technos" :key="techno.techno_name" class="mr-2">
            <img :src="techno.techno_img" :alt="techno.techno_name" class="inline-block h-6 w-6 mr-1" />
            {{ techno.techno_name }}
          </li>
        </ul>
      </div>
      <div v-if="project.skills && project.skills.length">
        <h4 class="text-lg font-semibold mt-4">Compétences</h4>
        <ul>
          <li v-for="skill in project.skills" :key="skill.skill_name">{{ skill.skill_name }}</li>
        </ul>
      </div>
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
</script>
