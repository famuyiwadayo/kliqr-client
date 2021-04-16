import { gql, useQuery } from "@apollo/client";
import { useContext } from "react";
import { KliqrContext } from "../../context/KliqrContext";
import { UserRo } from "../../interfaces";

export const GET_USERS_WITH_TX_COUNT = gql`
  {
    getUsersWithTxCount {
      id
      total_transactions
      first_name
      last_name
      avatar
      created_at
    }
  }
`;

const useGetUsersWithTxCount = () => {
  const { setSelectedId } = useContext(KliqrContext);
  let result: UserRo[] = [];
  const { data, loading } = useQuery(GET_USERS_WITH_TX_COUNT, {
    onCompleted: (data) => setSelectedId(data?.getUsersWithTxCount[0]?.id),
  });
  if (data) result = data.getUsersWithTxCount;
  return { result, loading };
};

export default useGetUsersWithTxCount;
