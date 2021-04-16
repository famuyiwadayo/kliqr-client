import "./Detail.scss";
import {
  useGetTopFiveCategories,
  useGetUserTxSummary,
  useGetUserWithTxCountById,
  useSimilarUsers,
} from "../../hooks";
import { useContext } from "react";
import { KliqrContext } from "../../context/KliqrContext";
import { BasicInfo, SimilarUsers, ValuesCard } from "..";
import TopFiveCategories from "../TopFiveCategories/TopFiveCategories";

const Detail = () => {
  const { selectedId } = useContext(KliqrContext);
  const { result: basic, loading: basicLoading } = useGetUserWithTxCountById(
    +selectedId
  );

  const { result: summary, loading: summaryLoading } = useGetUserTxSummary(
    +selectedId
  );

  const { result: similar, loading: similarLoading } = useSimilarUsers(
    +selectedId
  );

  const { result: topFive, loading: topFiveLoading } = useGetTopFiveCategories(
    +selectedId
  );

  return (
    <div className="kliqr-userDetail">
      <BasicInfo {...basic} loading={basicLoading} />
      <ValuesCard {...summary} loading={summaryLoading} />

      <div className="kliqr-userDetail__section">
        <TopFiveCategories categories={topFive} loading={topFiveLoading} />
        <span style={{ flex: "0.2" }} />
        <SimilarUsers
          first_name={basic.first_name}
          last_name={basic.last_name}
          users={similar}
          loading={similarLoading}
        />
      </div>
    </div>
  );
};

export default Detail;
