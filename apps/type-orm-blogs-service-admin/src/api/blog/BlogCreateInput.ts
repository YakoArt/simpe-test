import { PostCreateNestedManyWithoutBlogsInput } from "./PostCreateNestedManyWithoutBlogsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BlogCreateInput = {
  description?: string | null;
  posts?: PostCreateNestedManyWithoutBlogsInput;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
