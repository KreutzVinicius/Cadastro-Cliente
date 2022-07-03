-- CreateTable
CREATE TABLE "client" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "client_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "personal" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "CPF" TEXT NOT NULL,
    "promotions" BOOLEAN NOT NULL,
    "news" BOOLEAN NOT NULL,
    "clientId" INTEGER NOT NULL,

    CONSTRAINT "personal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "address" (
    "id" SERIAL NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "CEP" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "houseNumber" INTEGER NOT NULL,
    "complement" TEXT NOT NULL,
    "clientId" INTEGER NOT NULL,

    CONSTRAINT "address_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "personal_CPF_key" ON "personal"("CPF");

-- AddForeignKey
ALTER TABLE "personal" ADD CONSTRAINT "personal_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "address" ADD CONSTRAINT "address_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
