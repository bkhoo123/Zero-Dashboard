/*
  Warnings:

  - You are about to drop the column `reoderAmount` on the `Product` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "cost" REAL,
    "reorderAmount" INTEGER,
    "listed" TEXT,
    "supplier" TEXT,
    "userId" INTEGER NOT NULL,
    "status" TEXT DEFAULT 'active',
    "description" TEXT,
    CONSTRAINT "Product_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Product" ("cost", "description", "id", "listed", "name", "status", "supplier", "userId") SELECT "cost", "description", "id", "listed", "name", "status", "supplier", "userId" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
