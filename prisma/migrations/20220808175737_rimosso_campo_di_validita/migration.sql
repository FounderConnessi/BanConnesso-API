/*
  Warnings:

  - You are about to drop the column `valid` on the `bans` table. All the data in the column will be lost.
  - Made the column `nickname` on table `bans` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "bans" DROP COLUMN "valid",
ALTER COLUMN "nickname" SET NOT NULL;
