/*
  Warnings:

  - A unique constraint covering the columns `[path]` on the table `ShortLink` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `path` to the `ShortLink` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ShortLink" ADD COLUMN     "path" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "ShortLink_path_key" ON "ShortLink"("path");
