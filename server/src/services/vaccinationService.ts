import { prisma } from "../config";
import { VaccinationMapper } from "../mappers/vaccinationMapper";
import {
  VaccinationPublic,
  CreateVaccinationDto,
  UpdateVaccinationDto,
} from "../types";

export const vaccinationService = {
  async getAllVaccinations(animal_id: string): Promise<VaccinationPublic[]> {
    const vaccs = await prisma.vaccination.findMany({
      where: { animal_id },
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
      where: { id: data.animal_id },
    });
    if (!animal) throw new Error("Animal not found");

    const created = await prisma.vaccination.create({
      data,
    });

    return VaccinationMapper.prismaToPublic(created);
  },

  async updateVaccination(
    id: string,
    data: UpdateVaccinationDto
  ): Promise<VaccinationPublic | null> {
    const updateData: any = {};
    if (data.vaccine_name !== undefined)
      updateData.vaccine_name = data.vaccine_name;
    if (data.vaccination_date !== undefined)
      updateData.vaccination_date = new Date(data.vaccination_date);
    if (data.expiration_date !== undefined)
      updateData.expiration_date = data.expiration_date
        ? new Date(data.expiration_date)
        : null;
    if (data.batch_number !== undefined)
      updateData.batch_number = data.batch_number;
    if (data.animal_id !== undefined) {
      const animal = await prisma.animal.findUnique({
        where: { id: data.animal_id },
      });
      if (!animal) throw new Error("Animal not found");
      updateData.animal_id = data.animal_id;
    }

    const updated = await prisma.vaccination.update({
      where: { id },
      data: updateData,
    });

    return VaccinationMapper.prismaToPublic(updated);
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
