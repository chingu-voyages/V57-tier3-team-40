import { Request, Response } from "express";
import { vaccinationService } from "../services";

export const vaccinationController = {
  async getAll(req: Request, res: Response) {
    const vaccs = await vaccinationService.getAllVaccinations();
    res.json(vaccs);
  },

  async getById(req: Request, res: Response) {
    const { id } = req.params;
    const v = await vaccinationService.getVaccinationById(id);
    if (!v) return res.status(404).json({ message: "Vaccination not found" });
    return res.json(v);
  },

  async create(req: Request, res: Response) {
    try {
      const payload = req.body;
      const created = await vaccinationService.createVaccination(payload);
      return res.status(201).json(created);
    } catch (err: any) {
      if (err.message === "Animal not found") {
        return res.status(404).json({ message: "Related animal not found" });
      }
      return res
        .status(500)
        .json({ message: "Server error", detail: err.message });
    }
  },
  async update(req: Request, res: Response) {
    const { id } = req.params;
    const payload = req.body;
    const updated = await vaccinationService.updateVaccination(id, payload);
    if (!updated)
      return res
        .status(404)
        .json({ message: "Vaccination not found or update failed" });
    return res.json(updated);
  },
  async remove(req: Request, res: Response) {
    const { id } = req.params;
    const ok = await vaccinationService.deleteVaccination(id);
    if (!ok)
      return res
        .status(404)
        .json({ message: "Vaccination not found or delete failed" });
    return res.status(204).send();
  },
};
