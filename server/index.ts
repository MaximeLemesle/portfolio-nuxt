import { Nitro } from "nitropack";
import mongoose from "mongoose";

// Ne fonctionne pas avec .env
const uri="mongodb+srv://maximelemesle2:azerty12345@portfolio.lperhgh.mongodb.net/Portfolio";

export default async (_nitroApp: Nitro) => {
  try {
    await mongoose.connect(uri);
    console.log("MongoDB connecté");
  } catch (error) {
    console.error("Erreur de connexion à MongoDB:", error);
  }
};