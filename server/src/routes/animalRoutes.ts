import { Router } from "express";
import { animalController } from "../controllers";
import vaccinationRoutes from "./vaccinationRoutes";

const router = Router({ mergeParams: true });

router.get("/", animalController.getAllAnimals);
router.get("/:id", animalController.getAnimalById);
router.post("/", animalController.createAnimal);
router.put("/:id", animalController.updateAnimal);
router.delete("/:id", animalController.deleteAnimal);
router.use("/:animal_id/vaccinations", vaccinationRoutes);

export default router;
