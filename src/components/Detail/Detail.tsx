import Avatar from "../Avatar/Avatar";
import "./Detail.scss";
import { useGetUserTxSummary, useGetUserWithTxCountById } from "../../hooks";
import { useContext } from "react";
import { KliqrContext } from "../../context/KliqrContext";
import { BasicInfo, BasicInfoSkeleton, ValuesCard } from "..";

const Detail = () => {
  const { selectedId, detailLoading } = useContext(KliqrContext);
  const { result: basic, loading: basicLoading } = useGetUserWithTxCountById(
    +selectedId
  );

  const { result: summary, loading: summaryLoading } = useGetUserTxSummary(
    +selectedId
  );

  console.log("Loading state", summary);

  return (
    <div className="kliqr-userDetail">
      <BasicInfo {...basic} loading={basicLoading} />
      {/* {!basicLoading && <BasicInfo {...basic} />} */}
      {/* {basicLoading && <BasicInfoSkeleton />} */}

      <ValuesCard {...summary} loading={summaryLoading} />
    </div>
  );
};

export default Detail;
