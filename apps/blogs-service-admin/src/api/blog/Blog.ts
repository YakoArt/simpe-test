import { Post } from "../post/Post";
import { User } from "../user/User";

export type Blog = {
  createdAt: Date;
  description: string | null;
  id: string;
  posts?: Array<Post>;
  title: string | null;
  updatedAt: Date;
  user?: User | null;
};
