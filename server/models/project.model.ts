import mongoose from 'mongoose';

const ImageSchema = new mongoose.Schema({
  image_name: String,
  image_url: String,
});

const TechnoSchema = new mongoose.Schema({
  techno_name: String,
  techno_img: String,
});

const SkillSchema = new mongoose.Schema({
  skill_name: String,
});

const ProjectSchema = new mongoose.Schema(
  {
    project_name: String,
    project_presentation: String,
    project_inspiration: String,
    project_link: String,
    project_date: String,
    images: [ImageSchema],
    technos: [TechnoSchema],
    skills: [SkillSchema],
  },
  { collection: 'project' }
);

const Project = mongoose.model('Project', ProjectSchema);

export default Project;
