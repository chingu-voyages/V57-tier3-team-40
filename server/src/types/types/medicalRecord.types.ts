export interface MedicalRecordPublic {
  id: string;
  visit_date: string;
  visit_type: string;
  diagnosis?: string | null;
  treatment?: string | null;
  medications?: string | null;
  note?: string | null;
  created_at: string;
  updated_at: string;
  animal_id: string;
}

export interface CreateMedicalRecordDto {
  visit_date: string;
  visit_type: string;
  diagnosis?: string;
  treatment?: string;
  medications?: string;
  note?: string;
  animal_id: string;
}
export type UpdateMedicalRecordDto = Partial<CreateMedicalRecordDto>;
