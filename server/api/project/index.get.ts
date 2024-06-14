import Project from '~/server/models/project.model';

export default defineEventHandler(async () => {
  try {
    const projects = await Project.find({});
    return {
      projects,
    };
  } catch (error) {
    return {
      error: 'Erreur lors de la requête des projets',
    };
  }
});
