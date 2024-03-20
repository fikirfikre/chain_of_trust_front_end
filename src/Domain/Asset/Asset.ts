import { User } from "../User/User";

export interface Asset{
  id: string;
  title:string;
  type: string;
  addDateTime: Date;
  owner?: User;
  active: boolean; 
  reason?:string;
  assignDateTime?: Date;
}