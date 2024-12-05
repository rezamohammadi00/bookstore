import Card from "../_components/Card";

function Page() {
  return (
    <main className="flex max-w-[1440px] mx-auto px-14 flex-col">
      <div className="mt-[92px]">
        <div className="flex justify-between">
          <h3 className="text-4xl mb-8 text-[#090937] font-bold">اموزشی</h3>
          {/* <p className="text-xl text-[#EF6B4A]">دیدن همه</p> */}
        </div>
        <div className="flex items-center gap-4 flex-wrap">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <Card
              image="/images/f2.jpg"
              title="فیزیک2"
              author="ادامز"
              price={50000}
              key={i}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export default Page;
