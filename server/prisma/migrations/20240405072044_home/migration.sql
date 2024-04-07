-- CreateTable
CREATE TABLE "Info" (
    "id" SERIAL NOT NULL,
    "hero" TEXT NOT NULL,
    "whatWeDoImage" TEXT NOT NULL,
    "welcome" TEXT NOT NULL,
    "whatWeDo" TEXT NOT NULL,
    "whoWeAre" TEXT NOT NULL,

    CONSTRAINT "Info_pkey" PRIMARY KEY ("id")
);
