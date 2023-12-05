import { Address } from "cluster";
import { User } from "./user.object";

export interface Property {
  id: string;
  name: string;
  inviteeCount: number;
  image: string;
  address: Address;
  attachments: any[];
  user: User
}