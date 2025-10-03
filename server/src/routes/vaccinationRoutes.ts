import { Router } from "express";
import { vaccinationController } from "../controllers";

const router = Router({ mergeParams: true });

router.get("/", vaccinationController.index);
router.get("/:id", vaccinationController.show);
router.post("/", vaccinationController.create);
router.put("/:id", vaccinationController.update);
router.delete("/:id", vaccinationController.delete);

export default router;
