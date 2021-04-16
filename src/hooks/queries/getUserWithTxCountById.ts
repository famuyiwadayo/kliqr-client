import { gql, useQuery } from "@apollo/client";
import { UserRo } from "../../interfaces";

export const GET_USERS_WITH_TX_COUNT = gql`
  query getUserDetail($id: Int!) {
    getUserWithTxCountById(id: $id) {
      id
      total_transactions
      first_name
      last_name
      avatar
      created_at
    }
  }
`;

const useGetUserWithTxCountById = (userId: number) => {
  //   const { setDetailLoading } = useContext(KliqrContext);
  let result: UserRo = {} as any;
  const { data, loading } = useQuery(GET_USERS_WITH_TX_COUNT, {
    variables: { id: userId },
  });
  if (data) result = data.getUserWithTxCountById;
  return { result, loading };
};

export default useGetUserWithTxCountById;
