import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-base-100 shadow-lg rounded-lg p-8 text-center">
        <h1 className="text-5xl font-bold text-error mb-4">404</h1>
        <p className="text-2xl font-semibold mb-4">
          متاسفانه صفحه موردنظر شما پیدا نشد
        </p>
        <p className="mb-8 text-base-content/70">
          صفحه ای که به دنبال آن هستید ممکن است حذف شده باشد، نام آن تغییر کرده
          باشد یا به طور موقت در دسترس نباشد.
        </p>
        <Link href="/" className="btn btn-primary text-white">
          رفتن به صفحه خانه
        </Link>
      </div>
    </div>
  );
}
