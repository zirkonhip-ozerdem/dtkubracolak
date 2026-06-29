import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import bcrypt from "bcryptjs";

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error("DATABASE_URL is required for prisma seed.");
}

const prisma = new PrismaClient({
  adapter: new PrismaPg(databaseUrl),
});

async function main() {
  const email = process.env.ADMIN_EMAIL || "admin@dtkubracolak.com";
  const password = process.env.ADMIN_PASSWORD || "ChangeMe123!";
  const passwordHash = await bcrypt.hash(password, 12);

  await prisma.adminUser.upsert({
    where: { email },
    update: { passwordHash, isActive: true },
    create: {
      email,
      name: "Site Admin",
      passwordHash,
      role: "OWNER",
    },
  });

  await prisma.siteSetting.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      email: "info@dtkubracolak.com",
      phone: "+90 530 000 00 00",
      addressTr: "İzmir, Türkiye",
      addressEn: "Izmir, Turkey",
      addressDe: "Izmir, Türkei",
      whatsappPhone: "905300000000",
    },
  });

  await prisma.faqSetting.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      leadTr: "Tedaviler ve klinik süreçler hakkında sık sorulan sorular.",
      leadEn: "Frequently asked questions about treatments and clinic processes.",
      leadDe: "Häufig gestellte Fragen zu Behandlungen und Praxisabläufen.",
      seoTitleTr: "Sıkça Sorulan Sorular",
      seoTitleEn: "Frequently Asked Questions",
      seoTitleDe: "Häufig gestellte Fragen",
      seoDescTr: "Dt. Kübra Çolak kliniği hakkında sık sorulan sorular.",
      seoDescEn: "Frequently asked questions about Dt. Kübra Çolak clinic.",
      seoDescDe: "Häufig gestellte Fragen zur Praxis Dt. Kübra Çolak.",
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
