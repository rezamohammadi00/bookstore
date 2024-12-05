// 


import Card from "../_components/Card";

function Page() {
  return (
    <main className="flex max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-14 flex-col">
      <div className="mt-8 sm:mt-12">
        <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl mb-4 sm:mb-8 text-[#090937] font-bold">
            آموزشی
          </h3>
          {/* Uncomment if needed */}
          {/* <p className="text-base sm:text-lg lg:text-xl text-[#EF6B4A] cursor-pointer">
            دیدن همه
          </p> */}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center">
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
