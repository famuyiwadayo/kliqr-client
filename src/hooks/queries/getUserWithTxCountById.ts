import { gql, useQuery } from "@apollo/client";
// import { useContext } from "react";
// import { KliqrContext } from "../../context/KliqrContext";
// import { debounce } from "lodash";

interface IGetUsersWithTxCount {
  id: number;
  total_transactions: number;
  first_name: string;
  last_name: string;
  avatar: string;
  created_at: string;
}

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
  let result: IGetUsersWithTxCount = {} as any;
  const { data, loading } = useQuery(GET_USERS_WITH_TX_COUNT, {
    variables: { id: userId },
  });
  if (data) result = data.getUserWithTxCountById;
  return { result, loading };
};

export default useGetUserWithTxCountById;
