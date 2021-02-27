import { Order } from "./Order";
import { Address } from "./Address";

export interface User {
  name: string;
  phone: string;
  email?: string;
  address?: Array<Address>;
  profileImage?: string;
  discription?: string;
  orders?: Array<Order>;
}
