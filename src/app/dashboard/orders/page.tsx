import Container from "@/src/components/Container";

const OrdersPage = () => {
  return (
    <main className="w-full min-h-screen bg-base-200">
      <Container>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                {/* --------------------- */}
                {/* <th>شناسه</th> */}
                <th></th>
                {/* ----------------------*/}
                <th>کدسفارش</th>
                <th>جزئیات سبد</th>
                <th>وضیعت</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr className="bg-warning">
                <th>1</th>
                <td>1235468</td>
                <td>شازاده کوچولو</td>
                <td>در انتظار ارسال</td>
              </tr>
              {/* row 2 */}
              <tr className="bg-success">
                <th>2</th>
                <td>1555fdsdfd</td>
                <td>ارامش , شازاده کوچولو , بینوایان</td>
                <td>ارسال شده</td>
              </tr>
              {/* row 3 */}
              <tr className="bg-success">
                <th>3</th>
                <td>12355dasd</td>
                <td>درباب تنهایی</td>
                <td>ارسال شده</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Container>
    </main>
  );
};

export default OrdersPage;
