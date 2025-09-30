import { Router } from "express";
import { vaccinationController } from "../controllers";

const router = Router();

router.get("/", vaccinationController.getAll);
router.get("/:id", vaccinationController.getById);
router.post("/", vaccinationController.create);
router.put("/:id", vaccinationController.update);
router.delete("/:id", vaccinationController.remove);

export default router;
