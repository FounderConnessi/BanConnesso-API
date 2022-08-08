-- CreateEnum
CREATE TYPE "Gravity" AS ENUM ('LOW', 'MEDIUM', 'HIGH');

-- AlterTable
ALTER TABLE "bans" ADD COLUMN     "gravity" "Gravity" NOT NULL;
