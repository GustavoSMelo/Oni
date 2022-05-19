-- CreateTable
CREATE TABLE "StarWars" (
    "id" SERIAL NOT NULL,
    "faction" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "StarWars_pkey" PRIMARY KEY ("id")
);
