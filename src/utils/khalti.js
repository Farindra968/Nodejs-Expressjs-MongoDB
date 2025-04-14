import axios from "axios";

const payViaKhalti = async (data) => {
  const { return_url, website_url, amount, orderId, orderName, customerInfo } =
    data;

    if (!return_url) throw { message: "Return URL is required" };
    if (!website_url) throw { message: "Website URL is required" };
    if (!amount) throw { message: "Amount is required" };
    if (!orderId) throw { message: "Order ID URL is required" };
    if (!orderName) throw { message: "Purchase Order Name is required" };
    if (!customerInfo) throw { message: "Customer Details is required" };

  const reqBody = {
    return_url: return_url,
    website_url: website_url,
    amount: amount,
    purchase_order_id: orderId,
    purchase_order_name: orderName,
    customer_info: customerInfo,
  };

  const response = await axios.post(
    `${process.env.KHALTI_API_ENDPOINT}`,
    reqBody,
    {
      headers: {
        Authorization: `Key ${process.env.KHALTI_LIVE_SECRET_KEY}`,
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
};

export default payViaKhalti;
