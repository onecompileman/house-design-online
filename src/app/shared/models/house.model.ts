import { HouseItem } from './house-item.model';
import { User } from './user.model';

export interface House {
  id?: string;
  uid?: string;
  name: string;
  description: string;
  createdAt?: string;
  thumbnailURL: string;
  items: HouseItem[];
  owner?: User;
}
