import Project from '~/server/models/project.model'

export default defineEventHandler(async () => {
  try {
    const project = await Project.find({});
    return {
      project,
    };
  } catch (error) {
    console.log("Erreur lors de la requete des projects :", error); 
  }
});
