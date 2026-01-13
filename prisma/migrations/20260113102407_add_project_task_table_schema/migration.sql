-- CreateEnum
CREATE TYPE "ProjectStatus" AS ENUM ('ACTIVE', 'INACTIVE');

-- CreateEnum
CREATE TYPE "TaskStatus" AS ENUM ('PENDING', 'INROGRESS', 'COMPLETED', 'HOLD');

-- CreateTable
CREATE TABLE "Project" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "archived_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "status" "ProjectStatus" NOT NULL DEFAULT 'ACTIVE',

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Task" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(200) NOT NULL,
    "description" TEXT,
    "project_id" INTEGER NOT NULL,
    "status" "TaskStatus" NOT NULL DEFAULT 'PENDING',
    "archived_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Project_name_key" ON "Project"("name");

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;
