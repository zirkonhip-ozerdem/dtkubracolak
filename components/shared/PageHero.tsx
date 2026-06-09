import Image from "next/image";

type PageHeroProps = {
  title: string;
  lead?: string;
  image?: string;
};

export function PageHero({ title, image = "/images/site/header.png" }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#f7f4ef]">
      {/* Mobil: tüm genişlik, masaüstü: sağ yarı */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-1/2" style={{ position: 'absolute' }}>
        <Image
          src={image}
          alt=""
          fill
          priority
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
        {/* Mobil: soldan sağa daha güçlü gradient (yazı okunabilsin) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#f7f4ef] via-[#f7f4ef]/80 to-[#f7f4ef]/20 lg:from-[#f7f4ef] lg:via-[#f7f4ef]/55 lg:to-transparent" />
      </div>
      <div className="relative mx-auto flex min-h-[100px] max-w-7xl items-center px-6 py-7 lg:px-8">
        <div>
          <h1 className="text-4xl font-semibold tracking-[0.02em] text-[#252525] sm:text-5xl">
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
}
