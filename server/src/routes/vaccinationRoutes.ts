import { Router } from "express";
import { vaccinationController } from "../controllers";

const router = Router({ mergeParams: true });

router.get("/", vaccinationController.getAllAnimalVaccination);
router.get("/:id", vaccinationController.getVaccinationById);
router.post("/", vaccinationController.createVaccination);
router.put("/:id", vaccinationController.updateVaccination);
router.delete("/:id", vaccinationController.deleteVaccination);

export default router;
