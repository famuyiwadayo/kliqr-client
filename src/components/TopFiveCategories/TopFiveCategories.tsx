import { FC } from "react";
import Skeleton from "react-loading-skeleton";
import { UserTopFiveCategories } from "../../interfaces";
import "./TopFiveCategories.scss";

interface CategoryIconProps {
  src?: string;
  alt?: string;
}

interface TopFiveCategoriesProps {
  categories?: UserTopFiveCategories[];
  loading?: boolean;
}

const CategoryIcon: FC<CategoryIconProps> = (props) => {
  const { src, alt } = props;
  return (
    <div className="kliqr-topFiveCategories__icon" title={alt}>
      <img
        src={src ?? "https://api.kliqr.com/images/icons/tags/bank-charges.png"}
        alt={alt ?? "bank charges"}
      />
    </div>
  );
};

const CategoryIconSkeleton = () => {
  return <Skeleton className="kliqr-topFiveCategories__icon-skeleton" />;
};

const TopFiveCategories: FC<TopFiveCategoriesProps> = (props) => {
  const { categories, loading } = props;

  const checkLoading = () => !categories || loading;

  return !checkLoading() ? (
    <div className="kliqr-topFiveCategories">
      <div className="kliqr-topFiveCategories__title">RECURRING EXPENSES</div>

      <div className="kliqr-topFiveCategories__list">
        {categories?.map((category, i) => (
          <CategoryIcon
            key={i}
            src={category.icon_url}
            alt={category.category}
          />
        ))}

        {categories?.length! < 1 && (
          <span style={{ color: "#ccc" }}>no recurring expenses</span>
        )}
      </div>
    </div>
  ) : (
    <TopFiveCategoriesSkeleton />
  );
};

const TopFiveCategoriesSkeleton = () => {
  return (
    <div className="kliqr-topFiveCategories">
      <div className="kliqr-topFiveCategories__title">
        <Skeleton />
      </div>

      <div className="kliqr-topFiveCategories__list">
        {Array(5)
          .fill(0)
          .map((_, i) => (
            <CategoryIconSkeleton key={i} />
          ))}
      </div>
    </div>
  );
};

export default TopFiveCategories;
