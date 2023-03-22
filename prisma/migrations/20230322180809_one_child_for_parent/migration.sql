/*
  Warnings:

  - A unique constraint covering the columns `[parentId]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "User_parentId_key" ON "User"("parentId");
