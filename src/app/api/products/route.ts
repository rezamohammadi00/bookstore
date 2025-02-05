import db from "@/src/app/api/products/db";

export async function GET() {
  return Response.json(db);
}
