import Image from "next/image";
import BNNER from "@/public/images/Banner.png";

const Slider = () => {
  return (
    <div className="flex max-w-[1440px] mx-auto mt-10 items-center justify-center px-14 relative">
      <Image
        src={BNNER}
        alt="banner"
        className="rounded-xl"
        quality={100}
        placeholder="blur"
      />
      <div className="flex gap-1 absolute -bottom-4">
        <div className="w-3 h-3 rounded-full bg-[#090937]"/>
        <div className="w-3 h-3 rounded-full bg-[#EF6B4A]"/>
        <div className="w-3 h-3 rounded-full bg-[#090937]"/>
      </div>
    </div>
  );
};

export default Slider;
