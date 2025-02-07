"use client"; // Error boundaries must be Client Components.
//the error.tsx(s) can not catch errors happend in layout.tsx(s) from the same segment.
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function Error({error,reset,}: {error: Error & { digest?: string };reset: () => void;}) {
  const router = useRouter();
  const reload = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error); //tip: for development mode console.error(error) is enough
  }, [error]);


  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-base-100 shadow-lg rounded-lg p-8 text-center">
        <h1 className="text-4xl font-bold text-error mb-4">{error?.message}</h1>
        <p className="text-2xl font-semibold mb-4"> خطایی رخ داده است!!!</p>
        <p className="mb-8 text-base-content/70">
          دوباره تلاش کنید،درصورت حل نشدن خطا با پشتیمان تماس بگیرید.
        </p>
        <button className="btn btn-primary" onClick={reload}>
          تلاش دوباره
        </button>
      </div>
    </div>
  );
}
