import { Router } from "express";
import userRoutes from "./userRoutes";
import animalRoutes from "./animalRoutes";

const router = Router();

router.use("/users", userRoutes);
router.use("/animals", animalRoutes);

router.get("/health", (req, res) => {
  res.json({ status: "OK", timestamp: new Date().toISOString() });
});

export default router;
