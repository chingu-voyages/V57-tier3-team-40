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
      vaccine_name: v.vaccine_name,
      vaccination_date: dbVaccinationDate.toISOString(),
      expiration_date: v.expiration_date
        ? v.expiration_date.toISOString()
        : null,
      batch_number: v.batch_number ?? null,
      created_at: v.created_at.toISOString(),
      updated_at: v.updated_at.toISOString(),
      animal_id: v.animal_id,
    };

    return result;
  },
};
