import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema(
  {
    project_name: String,
    project_presentation: String,
    project_inspiration: String,
    project_link: String,
    project_date: String,
  },
  { collection: "project" }
);

const Project = mongoose.model("Project", ProjectSchema);

export default Project;