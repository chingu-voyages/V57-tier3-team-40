import { Request, Response } from "express";
import { vaccinationService } from "../services";

export const vaccinationController = {
  async index(req: Request, res: Response) {
    const { animal_id } = req.params;
    const vaccines = await vaccinationService.getAllVaccinations(animal_id);
    res.json(vaccines);
  },

  async show(req: Request, res: Response) {
    const { id } = req.params;
    const vaccine = await vaccinationService.getVaccinationById(id);
    if (!vaccine)
      return res.status(404).json({ message: "Vaccination not found" });
    return res.json(vaccine);
  },

  async create(req: Request, res: Response) {
    try {
      const payload = req.body;
      const { animal_id } = req.params;
      const created = await vaccinationService.createVaccination({
        ...payload,
        animal_id: animal_id,
      });
      return res.status(201).json(created);
    } catch (err: any) {
      if (err.message === "Animal not found") {
        return res.status(422).json({ message: "Related animal not found" });
      }
      return res
        .status(500)
        .json({ message: "Server error", detail: err.message });
    }
  },
  async update(req: Request, res: Response) {
    const { id } = req.params;
    const payload = req.body;
    try {
      const updated = await vaccinationService.updateVaccination(id, payload);
      if (!updated)
        return res
          .status(404)
          .json({ message: "Vaccination not found or update failed" });
      return res.json(updated);
    } catch (err: any) {
      if (err.message === "Animal not found") {
        return res.status(422).json({ message: "Related animal not found" });
      }
      return res
        .status(500)
        .json({ message: "Server error", detail: err.message });
    }
  },
  async delete(req: Request, res: Response) {
    const { id } = req.params;
    const ok = await vaccinationService.deleteVaccination(id);
    if (!ok)
      return res
        .status(404)
        .json({ message: "Vaccination not found or delete failed" });
    return res.status(204).send();
  },
};
