import Image from "next/image";

export function CompanyLogos() {
  const companies = [
    {
      name: "Google",
      logo: "/images/Google.png",
    },
    {
      name: "Meta",
      logo: "/images/Meta.png",
    },
    {
      name: "Netflix",
      logo: "/images/Netflix.png",
    },
    {
      name: "PayPal",
      logo: "/images/Paypal.png",
    },
    {
      name: "Microsoft",
      logo: "/images/Microsoft.png",
    },
  ];

  return (
    <section className="py-12 md:py-16 px-4 container mx-auto rounded-4xl bg-zinc-50 dark:bg-zinc-900">
      <div className=" ">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
          {companies.map((company) => (
            <div
              key={company.name}
              className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
            >
              <Image
                src={company.logo}
                alt={`${company.name} logo`}
                width={120}
                height={60}
                className="h-8 md:h-10 lg:h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
