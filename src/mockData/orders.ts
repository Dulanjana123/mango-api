import { OrderDto } from "../types/interfaces/order/order-dto";


export const orders: OrderDto[] = [
  {
    orderHeaderId: 606,
    pickupName: "testing",
    pickupPhoneNumber: "42525342352",
    pickupEmail: "testing3@gmail.com",
    applicationUserId: "1",
    user: null,
    orderTotal: 38.96,
    orderDate: "2024-11-29T09:19:44.3073487",
    stripePaymentIntentID: "pi_3QQQM0DU3OjDrP4G0g5CmRdO",
    status: "Confirmed",
    totalItems: 4,
  },
  {
    orderHeaderId: 605,
    pickupName: "testing",
    pickupPhoneNumber: "42525342352",
    pickupEmail: "testing3@gmail.com",
    applicationUserId: "2",
    user: null,
    orderTotal: 38.96,
    orderDate: "2024-11-29T09:19:44.3073487",
    stripePaymentIntentID: "pi_3QQQM0DU3OjDrP4G0g5CmRdO",
    status: "Confirmed",
    totalItems: 3,
  },
];
