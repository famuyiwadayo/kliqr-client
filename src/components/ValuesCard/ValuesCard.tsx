import { FC } from "react";
import Skeleton from "react-loading-skeleton";
import { currencyFormatter } from "../../utils";
import "./ValuesCard.scss";

interface ValuesCardProps {
  total?: number;
  spent?: number;
  income?: number;
  loading?: boolean;
}

interface ValuesCard_CardProps {
  title?: string;
  value?: string | number;
  type?: "money" | "number";
}

const Card: FC<ValuesCard_CardProps> = (props) => {
  let { title, value, type } = props;
  if (!type) type = "money";

  return (
    <div className="kliqr-valuesCard__card">
      <span className="kliqr-valuesCard__card__title">
        {title ?? "TOTAL SPENT"}
      </span>
      <span className="kliqr-valuesCard__card__value">
        {type === "money" && (
          // <span className="kliqr-valuesCard__card__value__naira">₦</span>
          <span className="kliqr-valuesCard__card__value__naira">
            {currencyFormatter.format(+value!)}
          </span>
        )}
        {type === "number" && value}
      </span>
    </div>
  );
};

const CardSkeleton = () => {
  return (
    <div className="kliqr-valuesCard__card">
      <span className="kliqr-valuesCard__card__title">
        <Skeleton />
      </span>
      <span className="kliqr-valuesCard__card__value">
        <Skeleton />
      </span>
    </div>
  );
};

const ValuesCard: FC<ValuesCardProps> = (props) => {
  const { spent, income, total, loading } = props;

  const checkLoading = () => !(spent && income && total) || loading;

  return (
    <div className="kliqr-valuesCard">
      {!checkLoading() && <Card key={0} value={spent} />}
      {!checkLoading() && <Card key={1} title="Total Income" value={income} />}
      {!checkLoading() && (
        <Card type="number" key={2} title="Transactions" value={total} />
      )}

      {checkLoading() &&
        Array(3)
          .fill(0)
          .map(() => <CardSkeleton />)}
    </div>
  );
};

export default ValuesCard;
