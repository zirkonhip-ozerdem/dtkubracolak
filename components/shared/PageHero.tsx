import Image from "next/image";

type PageHeroProps = {
  title: string;
  lead: string;
  image?: string;
};

const sectionHeadingImage = "/images/dtkubrasectionheading1.png";

export function PageHero({ title, lead }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#f7f4ef]">
      <div className="absolute inset-0">
        <Image
          src={sectionHeadingImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#f7f4ef]/92 via-[#f7f4ef]/74 to-[#f7f4ef]/18" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-10 lg:px-8">
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
