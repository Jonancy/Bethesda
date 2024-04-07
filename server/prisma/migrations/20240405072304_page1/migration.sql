/*
  Warnings:

  - You are about to drop the `Info` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Info";

-- CreateTable
CREATE TABLE "Page1" (
    "id" SERIAL NOT NULL,
    "hero" TEXT NOT NULL,
    "whatWeDoImage" TEXT NOT NULL,
    "welcome" TEXT NOT NULL,
    "whatWeDo" TEXT NOT NULL,
    "whoWeAre" TEXT NOT NULL,

    CONSTRAINT "Page1_pkey" PRIMARY KEY ("id")
);
