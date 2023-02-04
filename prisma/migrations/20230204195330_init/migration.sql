-- DropForeignKey
ALTER TABLE `business` DROP FOREIGN KEY `Business_userId_fkey`;

-- DropForeignKey
ALTER TABLE `customer` DROP FOREIGN KEY `Customer_userId_fkey`;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `businessId` VARCHAR(191) NULL,
    ADD COLUMN `customerId` VARCHAR(191) NULL,
    ADD COLUMN `role` ENUM('business', 'customer') NOT NULL DEFAULT 'business';

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_businessId_fkey` FOREIGN KEY (`businessId`) REFERENCES `Business`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_customerId_fkey` FOREIGN KEY (`customerId`) REFERENCES `Customer`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
