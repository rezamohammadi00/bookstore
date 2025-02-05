import db from "@/src/app/api/products/db";




export async function GET(
    _request: Request,
    { params }: { params: Promise<{ productId: string }> }
  ) {
    const productId = (await params).productId
    const product = db.find((item) => item.id === productId);

    return Response.json(product);
    
  }