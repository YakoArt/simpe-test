import { Blog } from "../blog/Blog";
import { Comment } from "../comment/Comment";
import { User } from "../user/User";

export type Post = {
  blog?: Blog | null;
  comments?: Array<Comment>;
  content: string | null;
  createdAt: Date;
  id: string;
  title: string | null;
  updatedAt: Date;
  user?: User | null;
};
