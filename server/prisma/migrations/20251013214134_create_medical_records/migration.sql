-- CreateEnum
CREATE TYPE "AnimalType" AS ENUM ('cat', 'dog', 'other');

-- AlterTable
ALTER TABLE "animals" ADD COLUMN     "type" "AnimalType" NOT NULL DEFAULT 'other';

-- CreateTable
CREATE TABLE "medical_records" (
    "id" TEXT NOT NULL,
    "visit_date" TIMESTAMP(3) NOT NULL,
    "visit_type" TEXT NOT NULL,
    "diagnosis" TEXT,
    "treatment" TEXT,
    "medications" TEXT,
    "note" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "animal_id" TEXT NOT NULL,

    CONSTRAINT "medical_records_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "medical_records" ADD CONSTRAINT "medical_records_animal_id_fkey" FOREIGN KEY ("animal_id") REFERENCES "animals"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
