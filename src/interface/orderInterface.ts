import Menu from "./menuInterface";

export default interface Order {
  id: number;
  status: string;
  priority:boolean;
  priorityPrice:number;
  orderPrice:number;
  estimatedDelivery:string;
  cart:Menu[];
}


