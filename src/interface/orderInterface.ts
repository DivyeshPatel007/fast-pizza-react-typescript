import CartIterface from "./cartInterface";
import Menu from "./menuInterface";

export default interface Order {
  cart:Menu[];
  id: string;
  status: string;
  priority:boolean;
  priorityPrice:number;
  orderPrice:number;
  estimatedDelivery:string;
}

export interface NewOrder {
  cart: Menu[];
  address: string;
  customer: string;
  phone: string;
  position?: string;
  priority: boolean;
}


export interface OrderBackend{
  customer:string;
  estimatedDelivery:string;
  id:string;
  orderPrice:number;
  priority:boolean;
  priorityPrice:number;
  status:string;
  cart:CartIterface[]
}
