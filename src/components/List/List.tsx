import { ListItem } from "..";
import "./List.scss";

import { useGetUsersWithTxCount } from "../../hooks";
import { ListItemSkeleton } from "../ListItem/ListItem";

const List = () => {
  const { result, loading } = useGetUsersWithTxCount();

  return (
    <div className="kliqr-userList">
      <h4 className="kliqr-userList__title">USERS</h4>
      {!loading && result.length < 1 && (
        <span style={{ padding: "20px" }}>no users or bad network</span>
      )}
      {!loading && result.map((r, i) => <ListItem key={i} {...r} />)}
      {loading &&
        Array(10)
          .fill(0)
          .map((_, i) => <ListItemSkeleton key={i} />)}
    </div>
  );
};

export default List;
