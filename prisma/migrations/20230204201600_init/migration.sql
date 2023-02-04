-- DropIndex
DROP INDEX `Business_userId_fkey` ON `business`;

-- DropIndex
DROP INDEX `Customer_userId_fkey` ON `customer`;

-- AlterTable
ALTER TABLE `business` MODIFY `rating` INTEGER NULL;

-- AlterTable
ALTER TABLE `customer` MODIFY `rating` INTEGER NULL;
