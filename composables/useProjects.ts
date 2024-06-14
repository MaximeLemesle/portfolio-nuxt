import { ref } from 'vue';
import projectsData from '@/data/db.json';

export function useProjects() {
  const projects = ref([]);

  const fetchProjects = async () => {
    try {
      projects.value = projectsData.projects as any;
    } catch (error) {
      console.error('Erreur lors de la récupération des projets:', error);
    }
  };

  return { projects, fetchProjects };
}
