import { prisma } from "../config";
import { MedicalRecordMapper } from "../mappers/medicalRecordMapper";
import {
  MedicalRecordPublic,
  CreateMedicalRecordDto,
  UpdateMedicalRecordDto,
} from "../types";

export const medicalRecordService = {
  async getAllMedicalRecords(
    animal_id: string
  ): Promise<MedicalRecordPublic[]> {
    const records = await prisma.medicalRecord.findMany({
      where: { animal_id },
      orderBy: { visit_date: "desc" },
    });
    return records.map((r: any) => MedicalRecordMapper.prismaToPublic(r));
  },

  async getMedicalRecordById(id: string): Promise<MedicalRecordPublic | null> {
    const record = await prisma.medicalRecord.findUnique({ where: { id } });
    return record ? MedicalRecordMapper.prismaToPublic(record) : null;
  },

  async createMedicalRecord(
    data: CreateMedicalRecordDto
  ): Promise<MedicalRecordPublic> {
    const animal = await prisma.animal.findUnique({
      where: { id: data.animal_id },
    });
    if (!animal) throw new Error("Animal not found");

    const created = await prisma.medicalRecord.create({
      data: MedicalRecordMapper.dtoToPrisma(data),
    });

    return MedicalRecordMapper.prismaToPublic(created);
  },

  async updateMedicalRecord(
    id: string,
    data: UpdateMedicalRecordDto
  ): Promise<MedicalRecordPublic | null> {
    const updateData: any = {};

    if (data.visit_date !== undefined)
      updateData.visit_date = new Date(data.visit_date);
    if (data.visit_type !== undefined) updateData.visit_type = data.visit_type;
    if (data.diagnosis !== undefined) updateData.diagnosis = data.diagnosis;
    if (data.treatment !== undefined) updateData.treatment = data.treatment;
    if (data.medications !== undefined)
      updateData.medications = data.medications;
    if (data.note !== undefined) updateData.note = data.note;

    if (data.animal_id !== undefined) {
      const animal = await prisma.animal.findUnique({
        where: { id: data.animal_id },
      });
      if (!animal) throw new Error("Animal not found");
      updateData.animal_id = data.animal_id;
    }

    const updated = await prisma.medicalRecord.update({
      where: { id },
      data: updateData,
    });

    return MedicalRecordMapper.prismaToPublic(updated);
  },

  async deleteMedicalRecord(id: string): Promise<boolean> {
    try {
      await prisma.medicalRecord.delete({ where: { id } });
      return true;
    } catch (error) {
      return false;
    }
  },
};
