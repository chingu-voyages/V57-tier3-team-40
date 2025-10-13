import { Router } from "express";
import { animalController } from "../controllers";
import vaccinationRoutes from "./vaccinationRoutes";
import medicalRecordRoutes from "./medicalRecordRoutes";

const router = Router({ mergeParams: true });

router.get("/", animalController.getAllAnimals);
router.get("/:id", animalController.getAnimalById);
router.post("/", animalController.createAnimal);
router.put("/:id", animalController.updateAnimal);
router.delete("/:id", animalController.deleteAnimal);
router.use("/:animal_id/vaccinations", vaccinationRoutes);
router.use("/:animal_id/medical_records", medicalRecordRoutes);

export default router;
