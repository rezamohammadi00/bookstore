"use client"
import { useRouter, usePathname } from 'next/navigation'
import { useState } from "react";

const Pagination = () => {
  const router = useRouter()
  const pathname = usePathname();
  const [currentPage, setCurrentPage] = useState("1")

  const sentPageNumber = (page: string) => {
    if (page !== currentPage) {
      setCurrentPage(page)
      router.push(`${pathname}?page=${page}`)
    }
  }

  return (
    <div className="join">
      <input
        className={`font-bold join-item btn btn-square ${currentPage === "1" && "bg-white text-primary"}`}
        type="button"
        value={1}
        onClick={() => sentPageNumber("1")} />
      <input className={`font-bold join-item btn btn-square ${currentPage === "2" && "bg-white text-primary"}`} type="button" value={2} onClick={() => sentPageNumber("2")} />
      <input className={`font-bold join-item btn btn-square ${currentPage === "3" && "bg-white text-primary"}`} type="button" value={3} onClick={() => sentPageNumber("3")} />
      <input className={`font-bold join-item btn btn-square ${currentPage === "4" && "bg-white text-primary"}`} type="button" value={4} onClick={() => sentPageNumber("4")} />
    </div>
  );
};

export default Pagination;