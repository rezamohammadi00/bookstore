import BlogCard from "@/src/components/BlogCard";
import BlogsSearchBox from "@/src/components/BlogsSearchBox";
import Container from "@/src/components/Container";
import Pagination from "@/src/components/Pagination";
import Blog from "@/src/types/blog";
import React from "react";

const getBlogs = async () => {
  const res = await fetch("http://localhost:3000/api/blogs");
  return res.json();
};

type Props = { searchParams: Promise<{ page: string, search: string }> }

const BlogsPage = async ({ searchParams }: Props) => {

  //TODO: sent params to the API 
  const page = (await searchParams).page ?? 0
  const search = (await searchParams).search ?? ""
  console.log(page, search)
  console.log("searchParams of blogs page", {
    params: {
      page,
      search,
    }
  })

  const blogs: Blog[] = await getBlogs();

  return (
    <main className="min-h-screen">
      <Container>
        <div className="bg-base-200 flex flex-col items-center pt-8">
          <BlogsSearchBox />
          <div className="flex flex-wrap gap-6 justify-center py-8 bg-base-200">
            {blogs.map((blog) => (
              <BlogCard {...blog} key={blog.id} />
            ))}
          </div>
          <div className="mb-8 mt-2">
            <Pagination />
          </div>
        </div>
      </Container>
    </main>
  );
};

export default BlogsPage;
