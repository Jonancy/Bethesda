/*
  Warnings:

  - You are about to drop the `Main` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Main";

-- CreateTable
CREATE TABLE "CompanyDetails" (
    "company_name" TEXT NOT NULL,
    "phone_number" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "about" TEXT NOT NULL,
    "copyRights" TEXT NOT NULL,
    "location" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "CompanyDetails_phone_number_key" ON "CompanyDetails"("phone_number");
