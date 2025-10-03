export type VaccinationPublic = {
  id: string;
  vaccine_name: string;
  vaccination_date: string;
  expiration_date?: string | null;
  batch_number?: string | null;
  created_at: string;
  updated_at: string;
  animal_id: string;
};

export type CreateVaccinationDto = {
  vaccine_name: string;
  vaccination_date: string;
  expiration_date?: string;
  batch_number?: string;
  animal_id: string;
};
export type UpdateVaccinationDto = Partial<CreateVaccinationDto>;
