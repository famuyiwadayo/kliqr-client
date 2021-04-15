import { ListItem } from "..";
import "./List.scss";

import { useGetUsersWithTxCount } from "../../hooks";
import { ListItemSkeleton } from "../ListItem/ListItem";

const List = () => {
  const { result, loading } = useGetUsersWithTxCount();

  return (
    <div className="kliqr-userList">
      <h4 className="kliqr-userList__title">USERS</h4>
      {!loading && result.map((r) => <ListItem {...r} />)}
      {loading &&
        Array(10)
          .fill(0)
          .map((r) => <ListItemSkeleton />)}
    </div>
  );
};

export default List;
