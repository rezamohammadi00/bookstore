import blogs from "@/src/app/api/blogs/blogs";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ blogId: string }> }
) {
  const productId = (await params).blogId;
  const product = blogs.find((item) => item.id === productId);

  return Response.json(product);
}
