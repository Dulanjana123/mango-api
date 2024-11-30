export interface OrderDto {
    orderHeaderId: number;
    pickupName: string;
    pickupPhoneNumber: string;
    pickupEmail: string;
    applicationUserId: string;
    user: any | null;
    orderTotal: number;
    orderDate: string;
    stripePaymentIntentID: string;
    status: string;
    totalItems: number;
  }
  