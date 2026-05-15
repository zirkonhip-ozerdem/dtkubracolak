import Image from "next/image";

type PageHeroProps = {
  title: string;
  lead: string;
  image?: string;
};

export function PageHero({ title, lead, image = "/images/site/clinic-room.png" }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#f7f4ef]">
      <div className="absolute inset-y-0 right-0 hidden w-1/2 lg:block">
        <Image
          src={image}
          alt=""
          fill
          priority
          sizes="50vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#f7f4ef] via-[#f7f4ef]/55 to-transparent" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
        <div className="max-w-2xl">
          <p className="mb-4 h-px w-16 bg-[#c9a36d]" />
          <h1 className="text-4xl font-semibold tracking-[0.02em] text-[#252525] sm:text-5xl">
            {title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-[#5d5751]">{lead}</p>
        </div>
      </div>
    </section>
  );
}
