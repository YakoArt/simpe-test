import { PostUpdateManyWithoutBlogsInput } from "./PostUpdateManyWithoutBlogsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BlogUpdateInput = {
  description?: string | null;
  posts?: PostUpdateManyWithoutBlogsInput;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
