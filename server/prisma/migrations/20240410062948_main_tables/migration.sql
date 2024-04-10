/*
  Warnings:

  - You are about to drop the `NewsAtricles` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "NewsAtricles";

-- CreateTable
CREATE TABLE "Main" (
    "company_name" TEXT NOT NULL,
    "phone_number" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "about" TEXT NOT NULL,
    "copyRights" TEXT NOT NULL,
    "location" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "NewsArticles" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "picture" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "NewsArticles_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Main_phone_number_key" ON "Main"("phone_number");

-- CreateIndex
CREATE UNIQUE INDEX "NewsArticles_id_key" ON "NewsArticles"("id");
