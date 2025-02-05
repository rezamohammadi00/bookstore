import Form from "next/form";

const FilterBox = () => {
  return (
    <Form action={""} className="flex items-center justify-center lg:gap-4 gap-2 bg-base-200 py-4 ">
      <input
        name="bookname"
        type="text"
        placeholder="نام کتاب مورد نظر خود را وارد کنید"
        className="input input-bordered lg:w-96 w-44 placeholder:text-xs"
      />
      <select className="select select-bordered w-[110px] lg:w-48 text-xs" name="booktopic">
        <option disabled selected>
          موضوع
        </option>
        <option>فلسفه</option>
        <option>روانشناسی</option>
        <option>ازاد</option>
      </select>
      <button className="btn btn-primary btn-outline">جستوجو</button>
    </Form>
  );
};

export default FilterBox;
