-- CreateTable
CREATE TABLE "Boards" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "owner" INTEGER NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Boards_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Categories" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "color" VARCHAR NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Categories_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Messages" (
    "id" SERIAL NOT NULL,
    "message" VARCHAR(255) NOT NULL,
    "board_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Messages_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Savings" (
    "id" SERIAL NOT NULL,
    "value" INTEGER NOT NULL,
    "type" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_id" INTEGER NOT NULL,
    "board_id" INTEGER NOT NULL,

    CONSTRAINT "Savings_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TaskCategories" (
    "id" SERIAL NOT NULL,
    "task_id" INTEGER NOT NULL,
    "categories_id" INTEGER NOT NULL,

    CONSTRAINT "TaskCategories_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tasks" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "creator" INTEGER NOT NULL,
    "board_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Tasks_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserBoard" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "board_id" INTEGER NOT NULL,

    CONSTRAINT "UserBoard_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserTask" (
    "id" SERIAL NOT NULL,
    "categories_id" INTEGER NOT NULL,
    "board_id" INTEGER NOT NULL,

    CONSTRAINT "UserTask_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "username" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Users_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UsersInfo" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "board_id" INTEGER NOT NULL,
    "picture" TEXT NOT NULL,
    "nickname" VARCHAR(255) NOT NULL,
    "status" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UsersInfo_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Warnings" (
    "id" SERIAL NOT NULL,
    "text" VARCHAR(255) NOT NULL,
    "board_id" INTEGER NOT NULL,
    "creator" INTEGER NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Warnings_pk" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_username_key" ON "Users"("username");

-- AddForeignKey
ALTER TABLE "Boards" ADD CONSTRAINT "Boards_fk0" FOREIGN KEY ("owner") REFERENCES "Users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Messages" ADD CONSTRAINT "Messages_fk0" FOREIGN KEY ("board_id") REFERENCES "Boards"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Messages" ADD CONSTRAINT "Messages_fk1" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Savings" ADD CONSTRAINT "Savings_fk0" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Savings" ADD CONSTRAINT "Savings_fk1" FOREIGN KEY ("board_id") REFERENCES "Boards"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "TaskCategories" ADD CONSTRAINT "TaskCategories_fk0" FOREIGN KEY ("task_id") REFERENCES "Tasks"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "TaskCategories" ADD CONSTRAINT "TaskCategories_fk1" FOREIGN KEY ("categories_id") REFERENCES "Categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Tasks" ADD CONSTRAINT "Tasks_fk0" FOREIGN KEY ("creator") REFERENCES "Users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Tasks" ADD CONSTRAINT "Tasks_fk1" FOREIGN KEY ("board_id") REFERENCES "Boards"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "UserBoard" ADD CONSTRAINT "UserBoard_fk0" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "UserBoard" ADD CONSTRAINT "UserBoard_fk1" FOREIGN KEY ("board_id") REFERENCES "Boards"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "UserTask" ADD CONSTRAINT "UserTask_fk0" FOREIGN KEY ("categories_id") REFERENCES "Tasks"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "UserTask" ADD CONSTRAINT "UserTask_fk1" FOREIGN KEY ("board_id") REFERENCES "Users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "UsersInfo" ADD CONSTRAINT "UsersInfo_fk0" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "UsersInfo" ADD CONSTRAINT "UsersInfo_fk1" FOREIGN KEY ("board_id") REFERENCES "Boards"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Warnings" ADD CONSTRAINT "Warnings_fk0" FOREIGN KEY ("board_id") REFERENCES "Boards"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Warnings" ADD CONSTRAINT "Warnings_fk1" FOREIGN KEY ("creator") REFERENCES "Users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
