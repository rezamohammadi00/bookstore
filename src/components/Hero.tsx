import Link from "next/link";

const Hero = () => {
  return (
    <div
      className="hero md:min-h-[83vh] min-h-[89vh]"
      style={{
        backgroundImage:
          // "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
          "url(/images/hero.jpg)",
          objectFit:"cover"
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">سلام دوست جدید</h1>
          <p className="py-6">به سایت کتابان خوش اومدی❤️</p>
          <Link href="/products">
            <button className="btn btn-primary text-white">دیدن محصولات</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
