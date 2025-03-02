import blogs from "@/src/app/api/blogs/blogs";

export async function GET() {
  return Response.json(blogs);
}
