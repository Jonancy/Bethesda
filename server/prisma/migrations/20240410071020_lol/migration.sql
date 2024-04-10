/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `CompanyDetails` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `logo` to the `CompanyDetails` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "CompanyDetails_phone_number_key";

-- AlterTable
ALTER TABLE "CompanyDetails" ADD COLUMN     "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "id" INTEGER NOT NULL DEFAULT 1,
ADD COLUMN     "logo" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3),
ADD CONSTRAINT "CompanyDetails_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Page1" ALTER COLUMN "id" SET DEFAULT 1,
ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "Page1_id_seq";

-- CreateIndex
CREATE UNIQUE INDEX "CompanyDetails_id_key" ON "CompanyDetails"("id");
