/*
  Warnings:

  - You are about to drop the column `designation` on the `Team` table. All the data in the column will be lost.
  - Added the required column `designationId` to the `Team` table without a default value. This is not possible if the table is not empty.
  - Added the required column `postId` to the `Team` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Team" DROP COLUMN "designation",
ADD COLUMN     "designationId" INTEGER NOT NULL,
ADD COLUMN     "postId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Designation" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "Designation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Designation_id_key" ON "Designation"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Designation_type_key" ON "Designation"("type");

-- CreateIndex
CREATE UNIQUE INDEX "Post_id_key" ON "Post"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Post_type_key" ON "Post"("type");

-- AddForeignKey
ALTER TABLE "Team" ADD CONSTRAINT "Team_designationId_fkey" FOREIGN KEY ("designationId") REFERENCES "Designation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Team" ADD CONSTRAINT "Team_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
