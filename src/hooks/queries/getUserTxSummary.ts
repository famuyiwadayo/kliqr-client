import { gql, useQuery } from "@apollo/client";
import { TransactionSummaryRo } from "../../interfaces";

export const GET_USER_TRANSACTION_SUMMARY = gql`
  query getUserTransactionSummary($id: Int!) {
    getSpentIncomeAndTotalTx(userId: $id) {
      spent
      income
      total
    }
  }
`;

const useGetUserTxSummary = (userId: number) => {
  let result: TransactionSummaryRo = {} as any;
  const { data, loading } = useQuery(GET_USER_TRANSACTION_SUMMARY, {
    variables: { id: userId },
  });
  if (data) result = data.getSpentIncomeAndTotalTx;
  return { result, loading };
};

export default useGetUserTxSummary;
