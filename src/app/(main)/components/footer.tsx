import Image from "next/image";

const config = [
  {
    title: "Developer",
    info: [
      {
        name: "About us",
      },
      {
        name: "Contact us",
      },
    ],
  },
  {
    title: "Policy",
    info: [
      {
        name: "Privacy policy",
      },
      {
        name: "Term of use",
      },
    ],
  },
  {
    title: "Support",
    info: [
      {
        name: "Copyright",
      },
      {
        name: "Procedure",
      },
      {
        name: "Infringement Notice",
      },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="h-[200px] w-full bg-[#09090b] flex flex-row text-white px-2 pt-4 relative !z-10 border-solid border-t-[1px] border-t-[#d3d1d1]">
      <div className="basis-2/5 flex items-start gap-4 justify-center">
        <Image
          src="/images/logo-puzzle.png"
          alt="Logo"
          width={120}
          height={100}
          className="object-contain"
        />
        <div className="flex flex-col gap-2 pt-2">
          <h4 className="font-semibold text-2xl">Game Stack</h4>
          <p className="text-[#d3d1d1] ">
            Disclaimer: Block Blast is an independent website and is not
            affiliated with any organizations.
          </p>
        </div>
      </div>
      {config.map((e) => (
        <div
          className="basis-1/5 flex justify-center items-start"
          key={e.title}
        >
          <section className="flex flex-col gap-4">
            <h4 className="text-xl font-semibold">{e.title}</h4>
            <div className="text-[#d3d1d1] space-y-2 flex flex-col">
              {e.info.map((e, i) => (
                <span className="cursor-pointer" key={i}>
                  {e.name}
                </span>
              ))}
            </div>
          </section>
        </div>
      ))}
    </footer>
  );
};

export default Footer;
