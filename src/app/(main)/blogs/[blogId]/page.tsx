import Image from "next/image";
import { CalendarIcon, ClockIcon } from "@heroicons/react/24/outline";
import Container from "@/src/components/Container";
import { notFound } from "next/navigation";
import Blog from "@/src/types/blog";

type Props = {
  params: Promise<{ blogId: string }>;
};

const getBlog = async (blogId: string) => {
  const res = await fetch("http://localhost:3000/api/blogs/" + blogId);
  if (!res.ok) notFound(); // it is commonly used(notFound())in detail pages(if you not use generateStaticParams).
  return res.json();
};

export default async function BlogPost({ params }: Props) {
  const blogId = (await params).blogId;
  const blog: Blog = await getBlog(blogId);
  return (
    <main className="min-h-screen">
      <Container>
        <div className="bg-base-200">
          <article className="max-w-3xl mx-auto px-4 py-8">
            <Image
              src={"/images/fake2.jpg"}
              alt="Cover image for blog post"
              width={1200}
              height={630}
              className="rounded-lg shadow-md mb-8"
            />

            <h1 className="text-4xl font-bold mb-4 leading-normal">{blog.title}</h1>

            <div className="flex items-center text-gray-600 mb-6">
              <CalendarIcon className="w-5 h-5 mr-2  ml-[2px]" />
              <time dateTime={"2023-08-15"}>2023-08-15</time>
              <ClockIcon className="w-5 h-5 ml-[2px] mr-4" />
              <span>5دقیقه</span>
            </div>

            <div className="prose max-w-none mb-12">
              <p className="leading-loose ">{blog.description}</p>
            </div>

            {/* <div className="flex items-center border-t pt-8">
          <Image
            src={blogPost.author.avatar || "/placeholder.svg"}
            alt={`Avatar of ${blogPost.author.name}`}
            width={64}
            height={64}
            className="rounded-full mr-4"
          />
          <div>
            <h2 className="font-semibold text-lg">{blogPost.author.name}</h2>
            <p className="text-gray-600">{blogPost.author.bio}</p>
          </div>
        </div> */}
          </article>
        </div>
      </Container>
    </main>
  );
}
