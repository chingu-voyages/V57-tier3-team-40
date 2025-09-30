import { prisma } from "../config";
import { VaccinationMapper } from "../mappers/vaccinationMapper";
import {
  VaccinationPublic,
  CreateVaccinationDto,
  UpdateVaccinationDto,
} from "../types";

export const vaccinationService = {
  async getAllVaccinations(): Promise<VaccinationPublic[]> {
    const vaccs = await prisma.vaccination.findMany({
      orderBy: { created_at: "desc" },
    });
    return vaccs.map((v: any) => VaccinationMapper.prismaToPublic(v));
  },

  async getVaccinationById(id: string): Promise<VaccinationPublic | null> {
    const v = await prisma.vaccination.findUnique({ where: { id } });
    return v ? VaccinationMapper.prismaToPublic(v) : null;
  },

  async createVaccination(
    data: CreateVaccinationDto
  ): Promise<VaccinationPublic> {
    const animal = await prisma.animal.findUnique({
      where: { id: data.animalId },
    });
    if (!animal) throw new Error("Animal not found");

    const created = await prisma.vaccination.create({
      data: {
        vaccine_name: data.vaccineName,
        vaccination_date: new Date(data.vaccinationDate),
        expiration_date: data.expirationDate
          ? new Date(data.expirationDate)
          : undefined,
        batch_number: data.batchNumber,
        animal_id: data.animalId,
      },
    });

    return VaccinationMapper.prismaToPublic(created);
  },

  async updateVaccination(
    id: string,
    data: UpdateVaccinationDto
  ): Promise<VaccinationPublic | null> {
    try {
      const updateData: any = {};
      if (data.vaccineName !== undefined)
        updateData.vaccine_name = data.vaccineName;
      if (data.vaccinationDate !== undefined)
        updateData.vaccination_date = new Date(data.vaccinationDate);
      if (data.expirationDate !== undefined)
        updateData.expiration_date = data.expirationDate
          ? new Date(data.expirationDate)
          : null;
      if (data.batchNumber !== undefined)
        updateData.batch_number = data.batchNumber;
      if (data.animalId !== undefined) {
        const animal = await prisma.animal.findUnique({
          where: { id: data.animalId },
        });
        if (!animal) throw new Error("Animal not found");
        updateData.animal_id = data.animalId;
      }

      const updated = await prisma.vaccination.update({
        where: { id },
        data: updateData,
      });

      return VaccinationMapper.prismaToPublic(updated);
    } catch (err) {
      return null;
    }
  },

  async deleteVaccination(id: string): Promise<boolean> {
    try {
      await prisma.vaccination.delete({ where: { id } });
      return true;
    } catch (error) {
      return false;
    }
  },
};
