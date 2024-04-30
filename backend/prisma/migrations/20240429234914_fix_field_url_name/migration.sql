/*
  Warnings:

  - You are about to drop the column `url_name` on the `urls` table. All the data in the column will be lost.
  - Added the required column `urlName` to the `urls` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "urls" DROP COLUMN "url_name",
ADD COLUMN     "urlName" TEXT NOT NULL;
