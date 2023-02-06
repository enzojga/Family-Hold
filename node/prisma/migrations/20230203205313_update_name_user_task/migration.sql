/*
  Warnings:

  - You are about to drop the column `board_id` on the `UserTask` table. All the data in the column will be lost.
  - You are about to drop the column `categories_id` on the `UserTask` table. All the data in the column will be lost.
  - Added the required column `task_id` to the `UserTask` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `UserTask` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "UserTask" DROP CONSTRAINT "UserTask_fk0";

-- DropForeignKey
ALTER TABLE "UserTask" DROP CONSTRAINT "UserTask_fk1";

-- AlterTable
ALTER TABLE "UserTask" DROP COLUMN "board_id",
DROP COLUMN "categories_id",
ADD COLUMN     "task_id" INTEGER NOT NULL,
ADD COLUMN     "user_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "UserTask" ADD CONSTRAINT "UserTask_fk0" FOREIGN KEY ("task_id") REFERENCES "Tasks"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "UserTask" ADD CONSTRAINT "UserTask_fk1" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
