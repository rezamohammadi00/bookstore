import discounts from "@/src/app/api/discount/discounts";

export async function POST(request: Request) {
  try {
    const { code } = await request.json(); // Extract code from request body

    if (!code) {
      return Response.json(
        { error: "کد تخفیف خود را وارد کنید." },
        { status: 400 }
      );
    }

    // Find the discount by code
    const discount = discounts.find((d) => d.code === code);

    if (!discount) {
      return Response.json({ error: "کد تخفیف نامعتبر است." }, { status: 404 });
    }

    return Response.json({ success: true, percentage: discount.percentage });
  } catch (error) {
    return Response.json({ error: "Invalid request" }, { status: 400 });
  }
}
