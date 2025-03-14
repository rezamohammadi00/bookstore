import Form from "next/form";

const BlogsSearchBox = () => {
  return (
    <Form action={"/blogs"} className="join w-full lg:w-[500px] px-4 lg:px-0 ">
      <input
        className="input input-bordered join-item lg:w-[500px] w-full"
        placeholder="نام بلاگ را وارد کنید"
        type="text"
        name="search"
      />
      <button className="btn btn-primary join-item rounded-r-full text-white" type="submit">
        جستوجو
      </button>
    </Form>

  );
};

export default BlogsSearchBox;
