import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PostListRelationFilter } from "../post/PostListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BlogWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  posts?: PostListRelationFilter;
  title?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
