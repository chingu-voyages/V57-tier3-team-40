import { Router } from "express";
import { medicalRecordController } from "../controllers";

const router = Router({ mergeParams: true });

router.get("/", medicalRecordController.getAllAnimalMedicalRecord);
router.get("/:id", medicalRecordController.getMedicalRecordById);
router.post("/", medicalRecordController.createMedicalRecord);
router.put("/:id", medicalRecordController.updateMedicalRecord);
router.delete("/:id", medicalRecordController.deleteMedicalRecord);

export default router;
