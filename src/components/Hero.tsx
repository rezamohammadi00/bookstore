import Image from "next/image";
import Link from "next/link";

import HERO from "@/public/images/hero.jpg";

const Hero = () => {
  return (
    <div className="hero min-h-screen relative w-full">
      <Image
        alt="Hero"
        src={HERO}
        priority
        placeholder="blur"
        fill
        quality={100}
        sizes="100vw"
        className="-z-10 object-cover"
      />
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">سلام دوست جدید</h1>
          <p className="py-6">به سایت کتابان خوش اومدی❤️</p>
          <Link href="/products">
            <button className="btn btn-primary text-white">دیدن کتاب‌ها</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
