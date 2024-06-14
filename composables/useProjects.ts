import { ref } from 'vue';

export function useProjects() {
  const projects = ref([]);

  const fetchProjects = async () => {
    try {
      const response = await fetch('/api/project');
      const data = await response.json();
      projects.value = data.projects;
    } catch (error) {
      console.error('Erreur lors de la récupération des projets:', error);
    }
  };

  return { projects, fetchProjects };
}