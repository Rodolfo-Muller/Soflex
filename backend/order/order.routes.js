const Order = require("./order.controlle");
module.exports = (router) => {
  //-----------Order Create------------------
  router.post("/order/create", Order.createOrder);
  //------------ Bring Order-----------------
  router.get("/order/all", Order.getOrders);
  //------------ Update Order-----------------
  router.put("/order/:orderId", Order.updateOrders);
  //------------ Delete Order-----------------
  router.delete("/order/:orderId", Order.deleteOrder);
};
