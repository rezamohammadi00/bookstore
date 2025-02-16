import Container from "@/src/components/Container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "درباره‌ما",
};

export default function AboutPage() {
  return (
    <Container>
      <div className="min-h-screen flex flex-col bg-base-200">
        <main className="flex-grow container mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-3xl mx-auto text-gray-700">
            <h1 className="text-5xl font-extrabold text-gray-900  mb-8">
              درباره <span className="text-primary">کتابان</span>
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed">
              به کتابان خوش آمدید، مقصد نهایی شما برای کاوش و کشف ادبیات.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-4">
              داستان ما
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              کتابان در سال ۲۰۲۳ تأسیس شد و از علاقه‌ای عمیق برای ارتباط دادن
              خوانندگان با کتاب بعدی مورد علاقه‌شان متولد شد. تیم ما متشکل از
              کتاب‌دوستان مشتاق و علاقه‌مندان به فناوری، با هم گرد آمدند تا یک
              تجربه منحصر به فرد از کتابفروشی آنلاین ایجاد کنند که لذت گشتن در
              قفسه‌های کتاب را با راحتی فناوری مدرن ترکیب می‌کند.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-4">
              ماموریت ما
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              در کتابان، ماموریت ما این است که عشق به مطالعه را در افراد در هر
              سن و پیشینه‌ای شعله‌ور کنیم. ما معتقدیم که کتاب‌ها قدرت آموزش،
              الهام‌بخشی و تغییر زندگی‌ها را دارند. مجموعه‌ی با دقت انتخاب شده‌ی
              ما از میان ژانرهای مختلف، تضمین می‌کند که چیزی برای هر خواننده‌ای
              وجود دارد.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-4">
              چه چیزی ما را متمایز می‌کند
            </h2>
            <ul className="list-disc list-inside space-y-3 text-lg text-gray-600">
              <li>
                <span className="font-semibold">توصیه‌های شخصی‌سازی شده:</span>{" "}
                الگوریتم پیشرفته‌ی ما کتاب‌ها را بر اساس تاریخچه و ترجیحات
                خواندن شما پیشنهاد می‌دهد.
              </li>
              <li>
                <span className="font-semibold">مشارکت جامعه:</span> به
                باشگاه‌های کتاب بپیوندید، در بحث‌ها شرکت کنید و با سایر
                علاقه‌مندان به کتاب ارتباط برقرار کنید.
              </li>
              <li>
                <span className="font-semibold">حمایت از نویسندگان مستقل:</span>{" "}
                ما با افتخار آثار نویسندگان نوظهور را در کنار پرفروش‌ترین‌ها
                ارائه می‌دهیم.
              </li>
              <li>
                <span className="font-semibold">
                  ابتکارات دوستدار محیط زیست:
                </span>{" "}
                به ازای هر کتاب فروخته شده، یک درخت می‌کاریم تا به پایداری محیط
                زیست کمک کنیم.
              </li>
            </ul>

            <p className="text-lg text-gray-600 mt-10 leading-relaxed">
              از اینکه بخشی از سفر ما هستید متشکریم. مطالعه‌ی لذت‌بخشی داشته
              باشید!
            </p>
          </div>
        </main>
      </div>
    </Container>
  );
}
