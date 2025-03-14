import Form from "next/form";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const ProductsSearchBox = () => {
  return (
    <Form
      action={"/products"}
      className="flex items-center justify-center lg:gap-4 gap-2 bg-base-200 py-4 "
    >
      <input
        name="search"
        type="text"
        placeholder="نام کتاب مورد نظر خود را وارد کنید"
        className="input input-bordered lg:w-96 w-44 placeholder:text-xs"
        defaultValue={""}
      />
      <select
        className="select select-bordered w-[110px] lg:w-48 text-xs"
        name="filter"
        defaultValue={"all"}
      >
        <option value={"all"}>موضوع</option>
        <option value={"falsafe"}>فلسفه</option>
        <option value={"ravanshnasi"}>روانشناسی</option>
        <option value={"azad"}>ازاد</option>
      </select>
      <button className="btn btn-primary btn-outline btn-circle lg:hidden">
        <MagnifyingGlassIcon className="size-6 " />
      </button>
      <button className="btn btn-primary btn-outline hidden lg:block">
        جستوجو
      </button>
    </Form>
  );
};

export default ProductsSearchBox;
