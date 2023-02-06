/*
  Warnings:

  - A unique constraint covering the columns `[invite]` on the table `Boards` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `icon` to the `Boards` table without a default value. This is not possible if the table is not empty.
  - Added the required column `invite` to the `Boards` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Boards" ADD COLUMN     "icon" INTEGER NOT NULL,
ADD COLUMN     "invite" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Boards_invite_key" ON "Boards"("invite");
