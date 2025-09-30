export type VaccinationPublic = {
  id: string;
  vaccineName: string;
  vaccinationDate: string;
  expirationDate?: string | null;
  batchNumber?: string | null;
  createdAt: string;
  updatedAt: string;
  animalId: string;
};

export type CreateVaccinationDto = {
  vaccineName: string;
  vaccinationDate: string;
  expirationDate?: string;
  batchNumber?: string;
  animalId: string;
};
export type UpdateVaccinationDto = Partial<CreateVaccinationDto>;
