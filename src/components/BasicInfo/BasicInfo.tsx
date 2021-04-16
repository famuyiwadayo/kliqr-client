import { FC } from "react";
import Skeleton from "react-loading-skeleton";
import { Avatar } from "..";
import "./BasicInfo.scss";
import { formatDistanceToNow } from "date-fns";
import { parseISO } from "date-fns/esm";

interface BasicInfoProps {
  first_name?: string;
  last_name?: string;
  avatar?: string;
  total_transactions?: number;
  created_at?: string;

  loading?: boolean;
}

const BasicInfo: FC<BasicInfoProps> = (props) => {
  const {
    first_name,
    avatar,
    last_name,
    total_transactions,
    created_at,
    loading,
  } = props;

  const checkLoading = () =>
    !(first_name && last_name && avatar && total_transactions && created_at) ||
    loading;

  return !checkLoading() ? (
    <div className="kliqr-basicInfo">
      <Avatar
        size="large"
        src={avatar ?? "https://randomuser.me/api/portraits/men/17.jpg"}
      />

      <h2 className="kliqr-basicInfo__title">
        {first_name ?? "Jude"} {last_name ?? "Agboola"}
      </h2>
      <span className="kliqr-basicInfo__description">
        <span>{total_transactions ?? 0} Transactions</span>
        <span className="dot"></span>
        <span>
          {created_at
            ? `Joined ${formatDistanceToNow(parseISO(created_at!))} ago`
            : "Joined 2 months ago"}
        </span>
      </span>
    </div>
  ) : (
    <BasicInfoSkeleton />
  );
};

export const BasicInfoSkeleton = () => {
  return (
    <div className="kliqr-basicInfo">
      <Skeleton width={100} height={100} style={{ borderRadius: "100%" }} />

      <h2 className="kliqr-basicInfo__title">
        <Skeleton width={170} />
      </h2>
      <span className="kliqr-basicInfo__description">
        <span>
          <Skeleton width={100} />
        </span>
        <span className="dot"></span>
        <span>
          <Skeleton width={100} />
        </span>
      </span>
    </div>
  );
};

export default BasicInfo;
