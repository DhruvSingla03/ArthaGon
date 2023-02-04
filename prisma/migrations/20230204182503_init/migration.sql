/*
  Warnings:

  - You are about to drop the column `categoryName` on the `item` table. All the data in the column will be lost.
  - You are about to drop the column `country` on the `item` table. All the data in the column will be lost.
  - You are about to drop the column `exportType` on the `item` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `item` table. All the data in the column will be lost.
  - You are about to drop the column `warehouseid` on the `item` table. All the data in the column will be lost.
  - You are about to alter the column `quantity` on the `item` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.
  - You are about to drop the `category` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `warehouse` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `businessId` to the `Item` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Item` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `item` DROP FOREIGN KEY `Item_categoryName_fkey`;

-- DropForeignKey
ALTER TABLE `item` DROP FOREIGN KEY `Item_userId_fkey`;

-- DropForeignKey
ALTER TABLE `item` DROP FOREIGN KEY `Item_warehouseid_fkey`;

-- DropForeignKey
ALTER TABLE `warehouse` DROP FOREIGN KEY `Warehouse_userId_fkey`;

-- DropIndex
DROP INDEX `Item_id_key` ON `item`;

-- AlterTable
ALTER TABLE `item` DROP COLUMN `categoryName`,
    DROP COLUMN `country`,
    DROP COLUMN `exportType`,
    DROP COLUMN `userId`,
    DROP COLUMN `warehouseid`,
    ADD COLUMN `businessId` VARCHAR(191) NOT NULL,
    ADD COLUMN `price` DOUBLE NOT NULL,
    ADD COLUMN `type` VARCHAR(191) NOT NULL DEFAULT 'NA',
    MODIFY `quantity` DOUBLE NOT NULL DEFAULT 0.0;

-- DropTable
DROP TABLE `category`;

-- DropTable
DROP TABLE `warehouse`;

-- CreateTable
CREATE TABLE `Business` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `rating` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Customer` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `rating` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Item_Rating` (
    `id` VARCHAR(191) NOT NULL,
    `rated_item_id` VARCHAR(191) NOT NULL,
    `custId` VARCHAR(191) NOT NULL,
    `rating` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Business_Rating` (
    `id` VARCHAR(191) NOT NULL,
    `rated_business_id` VARCHAR(191) NOT NULL,
    `custId` VARCHAR(191) NOT NULL,
    `rating` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Transaction` (
    `id` VARCHAR(191) NOT NULL,
    `businessId` VARCHAR(191) NOT NULL,
    `item_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Item` ADD CONSTRAINT `Item_businessId_fkey` FOREIGN KEY (`businessId`) REFERENCES `Business`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Business` ADD CONSTRAINT `Business_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Customer` ADD CONSTRAINT `Customer_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Item_Rating` ADD CONSTRAINT `Item_Rating_rated_item_id_fkey` FOREIGN KEY (`rated_item_id`) REFERENCES `Item`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Item_Rating` ADD CONSTRAINT `Item_Rating_custId_fkey` FOREIGN KEY (`custId`) REFERENCES `Customer`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Business_Rating` ADD CONSTRAINT `Business_Rating_rated_business_id_fkey` FOREIGN KEY (`rated_business_id`) REFERENCES `Business`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Business_Rating` ADD CONSTRAINT `Business_Rating_custId_fkey` FOREIGN KEY (`custId`) REFERENCES `Customer`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Transaction` ADD CONSTRAINT `Transaction_businessId_fkey` FOREIGN KEY (`businessId`) REFERENCES `Business`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Transaction` ADD CONSTRAINT `Transaction_item_id_fkey` FOREIGN KEY (`item_id`) REFERENCES `Item`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
