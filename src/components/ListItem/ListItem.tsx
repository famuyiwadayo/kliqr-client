import { FC, useCallback, useContext } from "react";
import { Avatar } from "..";
import "./ListItem.scss";
import { ReactComponent as Arrow } from "../../assets/svgs/arrow_forward.svg";
import classNames from "classnames";
import { KliqrContext } from "../../context/KliqrContext";
import Skeleton from "react-loading-skeleton";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { parseISO } from "date-fns";

interface ListItemProps {
  selected?: boolean;
  id?: number;
  first_name?: string;
  last_name?: string;
  total_transactions?: string | number;
  avatar?: string;
  disableArrow?: boolean;
  created_at?: string;
}

const ListItem: FC<ListItemProps> = (props) => {
  const {
    id,
    first_name,
    last_name,
    total_transactions,
    avatar,
    created_at,
    disableArrow,
  } = props;

  const { setSelectedId, selectedId } = useContext(KliqrContext);

  const _classnames = classNames("kliqr-listItem", {
    "kliqr-listItem--selected": selectedId === id,
  });

  const handleClick = useCallback((id: number) => setSelectedId(id), [
    setSelectedId,
  ]);

  return (
    <a onClick={() => handleClick(id ?? 0)} className={_classnames}>
      <Avatar
        src={avatar ?? "https://randomuser.me/api/portraits/men/17.jpg"}
      />
      <div className="kliqr-listItem__info">
        <h4 className="kliqr-listItem__info__title">
          {first_name ?? "Jude"} {last_name ?? "Agboola"}
        </h4>
        <span className="kliqr-listItem__info__description">
          <span>{total_transactions ?? 0} Transactions</span>
          <span className="dot"></span>
          <span>
            {created_at
              ? `Joined ${formatDistanceToNow(parseISO(created_at!))} ago`
              : "Joined 2 months ago"}
          </span>
        </span>
      </div>
      {!disableArrow && (
        <span className="kliqr-listItem__arrow">
          <Arrow />
        </span>
      )}
    </a>
  );
};

export const ListItemSkeleton = () => {
  return (
    <a className="kliqr-listItem">
      <Skeleton width={42} height={42} style={{ borderRadius: "100%" }} />
      <div className="kliqr-listItem__info">
        <h4 className="kliqr-listItem__info__title">
          <Skeleton />
        </h4>
        <span className="kliqr-listItem__info__description">
          <span>
            <Skeleton width={100} />
          </span>
          <span className="dot"></span>
          <span>
            <Skeleton width={100} />
          </span>
        </span>
      </div>
    </a>
  );
};

export default ListItem;
