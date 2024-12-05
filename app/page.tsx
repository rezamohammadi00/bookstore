import Link from "next/link";

import Slider from "./_components/Slider";
import Card from "./_components/Card";

const HomePage = () => {
  return (
    <div>
      <Slider />
      <main className="flex max-w-[1440px] mx-auto px-14 flex-col">
        <div className="mt-[92px]">
          <div className="flex justify-between">
            <h3 className="text-4xl mb-8 text-[#090937] font-bold">اموزشی</h3>
            <Link href={"/textbooks"}>
              <p className="text-xl text-[#EF6B4A]">دیدن همه</p>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Card
              image="/images/f2.jpg"
              title="فیزیک2"
              author="ادامز"
              price={50000}
            />
            <Card
              image="/images/f2.jpg"
              title="فیزیک2"
              author="ادامز"
              price={50000}
            />
            <Card
              image="/images/f2.jpg"
              title="فیزیک2"
              author="ادامز"
              price={50000}
            />
            <Card
              image="/images/f2.jpg"
              title="فیزیک2"
              author="ادامز"
              price={50000}
            />
          </div>
        </div>
        {/* ------------------------------- */}
        <div className="mt-[92px]">
          <div className="flex justify-between">
            <h3 className="text-4xl mb-8 text-[#090937] font-bold">ازاد</h3>
            <Link href={"/non-textbooks"}>
              <p className="text-xl text-[#EF6B4A]">دیدن همه</p>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Card
              title="سیر عشق"
              author="آلن دوباتن"
              price={48000}
              image="/images/a1.jpg"
            />
            <Card
              title="سیر عشق"
              author="آلن دوباتن"
              price={48000}
              image="/images/a1.jpg"
            />
            <Card
              title="سیر عشق"
              author="آلن دوباتن"
              price={48000}
              image="/images/a1.jpg"
            />
            <Card
              title="سیر عشق"
              author="آلن دوباتن"
              price={48000}
              image="/images/a1.jpg"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
