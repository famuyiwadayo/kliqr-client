import { FC } from "react";
import Skeleton from "react-loading-skeleton";
import { UserRo } from "../../interfaces";
import ListItem, { ListItemSkeleton } from "../ListItem/ListItem";
import "./SimilarUsers.scss";

interface SimilarUsersProps {
  first_name?: string;
  last_name?: string;
  users?: UserRo[];
  loading?: boolean;
}

const SimilarUsers: FC<SimilarUsersProps> = (props) => {
  const { first_name, last_name, users, loading } = props;

  const checkLoading = () => !(first_name && last_name && users) || loading;

  return !checkLoading() ? (
    <div className="kliqr-similarUsers">
      <div className="kliqr-similarUsers__title">
        USERS LIKE “{`${first_name} ${last_name}` ?? "Jude Agboola"}”
      </div>

      <div className="kliqr-similarUsers__list">
        {users?.map((user, i) => (
          <ListItem key={i} {...user} disableArrow />
        ))}

        {users?.length! < 1 && (
          <span style={{ color: "#ccc" }}>no similar users</span>
        )}
      </div>
    </div>
  ) : (
    <SimilarUsersSkelenton />
  );
};

const SimilarUsersSkelenton = () => {
  return (
    <div className="kliqr-similarUsers">
      <div className="kliqr-similarUsers__title">
        <Skeleton />
      </div>

      <div className="kliqr-similarUsers__list">
        {Array(3)
          .fill(0)
          .map((_, i) => (
            <ListItemSkeleton key={i} />
          ))}
      </div>
    </div>
  );
};

export default SimilarUsers;
