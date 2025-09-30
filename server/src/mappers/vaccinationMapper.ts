import { VaccinationPublic } from "../types";

export const VaccinationMapper = {
  prismaToPublic(v: any): VaccinationPublic {
    if (!v) throw new Error("Invalid vaccination record");

    const dbVaccinationDate = v.vaccination_date;
    if (!dbVaccinationDate) {
      throw new Error("vaccination_date missing in DB record");
    }

    const result: VaccinationPublic = {
      id: v.id,
      vaccineName: v.vaccine_name,
      vaccinationDate: dbVaccinationDate.toISOString(),
      expirationDate: v.expiration_date
        ? v.expiration_date.toISOString()
        : null,
      batchNumber: v.batch_number ?? null,
      createdAt: v.created_at.toISOString(),
      updatedAt: v.updated_at.toISOString(),
      animalId: v.animal_id,
    };

    return result;
  },
};
