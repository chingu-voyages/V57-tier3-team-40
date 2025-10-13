import { MedicalRecordPublic, CreateMedicalRecordDto } from "../types";

export const MedicalRecordMapper = {
  prismaToPublic(v: any): MedicalRecordPublic {
    if (!v) throw new Error("Invalid Medical Record");

    const dbVisitDate = v.visit_date;
    if (!dbVisitDate) {
      throw new Error("visit_date missing in DB record");
    }

    const result: MedicalRecordPublic = {
      id: v.id,
      visit_date: dbVisitDate.toISOString(),
      visit_type: v.visit_type,
      diagnosis: v.diagnosis ?? null,
      treatment: v.treatment ?? null,
      medications: v.medications ?? null,
      note: v.note ?? null,
      created_at: v.created_at.toISOString(),
      updated_at: v.updated_at.toISOString(),
      animal_id: v.animal_id,
    };

    return result;
  },

  dtoToPrisma(dto: CreateMedicalRecordDto) {
    return {
      ...dto,
      visit_date: new Date(dto.visit_date),
    };
  },
};
