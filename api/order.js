// api/order.js
export default function handler(request, response) {
  if (request.method === 'POST') {
    const { items, total } = request.body;
    return response.status(200).json({
      message: "Order received at Abbie's Coffee House!",
      orderId: Math.floor(Math.random() * 10000)
    });
  }
}