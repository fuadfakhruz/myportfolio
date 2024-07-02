import Image from "next/image";

export default function Hero() {
  return (
    <div className="hero" id="home">
      <div className="container mx-auto -mt-2">
        <div className="flex flex-col md:flex-row items-center">
          <div className="">
            <div className="hero-content text-grey-900">
              <p className="text-3xl font-semibold">I&apos;m</p>
              <h1 className="text-6xl font-bold">Muhammad Fuad Fakhruzzaki</h1>
              <h2 className="text-2xl font-semibold">
                Web Designer, Web Developer, Front End Developer, Mobile Apps
                Developer, UI/UX Designer
              </h2>
              <div className="typed-text hidden">
                Web Designer, Web Developer, Front End Developer, Apps Designer,
                Apps Developer
              </div>
            </div>
          </div>
          <div className="md:w-1/2 hidden md:block">
            <div className="hero-image text-right">
              <Image
                src="/assets/pasfoto.png"
                alt="Hero Image"
                width={600}
                height={600}
                className="max-w-full max-h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
