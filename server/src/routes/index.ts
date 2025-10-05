import { Router } from "express";
import userRoutes from "./userRoutes";
import animalRoutes from "./animalRoutes";
import cloudinaryRoutes from "./cloudinaryRoutes";

const router = Router();

router.use("/users", userRoutes);
router.use("/animals", animalRoutes);
router.use("/upload", cloudinaryRoutes);

router.get("/health", (req, res) => {
  res.json({ status: "OK", timestamp: new Date().toISOString() });
});

export default router;
