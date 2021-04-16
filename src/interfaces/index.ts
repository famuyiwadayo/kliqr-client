export interface UserRo {
  id: number;
  total_transactions: number;
  first_name: string;
  last_name: string;
  avatar: string;
  created_at: string;
}

export interface TransactionSummaryRo {
  spent: number;
  income: number;
  total: number;
}

export interface UserTopFiveCategories {
  category: string;

  icon_url: string;

  count: number;
}
