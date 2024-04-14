/*
  Warnings:

  - You are about to drop the column `designationId` on the `Team` table. All the data in the column will be lost.
  - You are about to drop the column `postId` on the `Team` table. All the data in the column will be lost.
  - You are about to drop the `Designation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `designation` to the `Team` table without a default value. This is not possible if the table is not empty.
  - Added the required column `post` to the `Team` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Team" DROP CONSTRAINT "Team_designationId_fkey";

-- DropForeignKey
ALTER TABLE "Team" DROP CONSTRAINT "Team_postId_fkey";

-- AlterTable
ALTER TABLE "Team" DROP COLUMN "designationId",
DROP COLUMN "postId",
ADD COLUMN     "designation" TEXT NOT NULL,
ADD COLUMN     "post" TEXT NOT NULL;

-- DropTable
DROP TABLE "Designation";

-- DropTable
DROP TABLE "Post";
