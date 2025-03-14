import BackButton from "@/src/components/BackButton";
import Container from "@/src/components/Container";

type Props = {
    params: Promise<{ orderId: string }>;
};

const OrderPage = async ({ params }: Props) => {
    const blogId = (await params).orderId;
    console.log(blogId)
    return (
        <main className="w-full min-h-screen bg-base-200">
            <Container>
                <div className="px-4 pt-8 ">
                    <BackButton text="لیست خرید‌ها" href="/dashboard/orders" />
                </div>
                <div className="flex flex-col gap-2 px-4 pt-8">
                    <h1 className="text-2xl">کد خرید: <span className="font-bold">1531351</span></h1>
                    <p>وضعیت خرید: <span className="text-success">ارسال شده</span></p>
                </div>
                <div className="overflow-x-auto pt-8">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="bg-base-300">
                                {/* --------------------- */}
                                {/* <th>شناسه</th> */}
                                <th></th>
                                {/* ----------------------*/}
                                <th>کد کتاب</th>
                                <th>نام کتاب</th>
                                <th>نویسنده</th>
                                <th>مترجم</th>
                                <th>قیمت</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr className="">
                                <th>1</th>
                                <td>1235468</td>
                                <td>شازاده کوچولو</td>
                                <td>رضامحمدی</td>
                                <td>رضامحمدی</td>
                                <td>30000</td>
                            </tr>
                            {/* row 2 */}
                            <tr>
                                <th>2</th>
                                <td>1235468</td>
                                <td>شازاده کوچولو</td>
                                <td>رضامحمدی</td>
                                <td>رضامحمدی</td>
                                <td>30000</td>
                            </tr>
                            {/* row 3 */}
                            <tr>
                                <th>3</th>
                                <td>1235468</td>
                                <td>شازاده کوچولو</td>
                                <td>رضامحمدی</td>
                                <td>رضامحمدی</td>
                                <td>30000</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Container>
        </main>
    );
};

export default OrderPage;
