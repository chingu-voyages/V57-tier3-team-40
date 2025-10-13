import { Request, Response } from "express";
import { medicalRecordService } from "../services";

export const medicalRecordController = {
  async getAllAnimalMedicalRecord(req: Request, res: Response) {
    const { animal_id } = req.params;
    const medicalRecords = await medicalRecordService.getAllMedicalRecords(
      animal_id
    );
    res.json(medicalRecords);
  },

  async getMedicalRecordById(req: Request, res: Response) {
    const { id } = req.params;
    const medicalRecord = await medicalRecordService.getMedicalRecordById(id);
    if (!medicalRecord)
      return res.status(404).json({ message: "Medical Record not found" });
    return res.json(medicalRecord);
  },

  async createMedicalRecord(req: Request, res: Response) {
    try {
      const payload = req.body;
      const { animal_id } = req.params;
      const created = await medicalRecordService.createMedicalRecord({
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
  async updateMedicalRecord(req: Request, res: Response) {
    const { id } = req.params;
    const payload = req.body;
    try {
      const updated = await medicalRecordService.updateMedicalRecord(
        id,
        payload
      );
      if (!updated)
        return res
          .status(404)
          .json({ message: "Medical Record not found or update failed" });
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
  async deleteMedicalRecord(req: Request, res: Response) {
    const { id } = req.params;
    const ok = await medicalRecordService.deleteMedicalRecord(id);
    if (!ok)
      return res
        .status(404)
        .json({ message: "Medical Record not found or delete failed" });
    return res.status(204).send();
  },
};
