import { gql, useQuery } from "@apollo/client";
import { UserRo, UserTopFiveCategories } from "../../interfaces";

export const GET_USER_TOP_FIVE_CATEGORIES = gql`
  query getUserTopFiveCategoriesById($id: Int!) {
    getUserTopFiveCategories(userId: $id) {
      category
      icon_url
      count
    }
  }
`;

const useGetTopFiveCategories = (userId: number) => {
  let result: UserTopFiveCategories[] = [];
  const { data, loading } = useQuery(GET_USER_TOP_FIVE_CATEGORIES, {
    variables: { id: userId },
  });
  if (data) result = data.getUserTopFiveCategories;
  return { result, loading };
};

export default useGetTopFiveCategories;
