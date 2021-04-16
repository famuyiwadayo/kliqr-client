import { gql, useQuery } from "@apollo/client";
import { UserRo } from "../../interfaces";

export const GET_SIMILAR_USERS = gql`
  query getSimilarUsersById($id: Int!) {
    getSimilarUsers(id: $id) {
      id
      total_transactions
      first_name
      last_name
      avatar
      created_at
    }
  }
`;

const useSimilarUsers = (userId: number) => {
  let result: UserRo[] = [];
  const { data, loading } = useQuery(GET_SIMILAR_USERS, {
    variables: { id: userId },
  });
  if (data) result = data.getSimilarUsers;
  return { result, loading };
};

export default useSimilarUsers;
