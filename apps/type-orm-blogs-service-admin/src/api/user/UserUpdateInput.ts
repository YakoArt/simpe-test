import { BlogUpdateManyWithoutUsersInput } from "./BlogUpdateManyWithoutUsersInput";
import { CommentUpdateManyWithoutUsersInput } from "./CommentUpdateManyWithoutUsersInput";
import { PostUpdateManyWithoutUsersInput } from "./PostUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  blogs?: BlogUpdateManyWithoutUsersInput;
  comments?: CommentUpdateManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  posts?: PostUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  username?: string;
};
