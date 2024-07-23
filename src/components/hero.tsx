import type { StaticImageData } from "next/image";
import Image from "next/image";

interface HeroProps {
  imgData: StaticImageData;
  imgAlt: string;
  title: string;
}

export default function Hero(props: HeroProps) {
  return (
    <section className="relative h-screen">
      <section className="absolute -z-10 inset-0">
        <Image
          src={props.imgData}
          alt={props.imgAlt}
          fill
          style={{ objectFit: "cover" }}
        />
        <section className="absolute inset-0 bg-gradient-to-r from-slate-900"></section>
      </section>
      <section className="pt-48 flex justify-center items-center">
        <h1 className="text-6xl text-white">{props.title}</h1>
      </section>
    </section>
  );
}
