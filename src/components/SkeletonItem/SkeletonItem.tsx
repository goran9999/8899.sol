import React, { FC } from "react";
import Skeleton from "react-loading-skeleton";

const SkeletonItem: FC<{
  width: number | string;
  height: number | string;
  borderRadius: number;
}> = ({ width, height, borderRadius }) => {
  return (
    <Skeleton
      width={width}
      height={height}
      borderRadius={borderRadius}
      baseColor="rgba(0, 30, 136, 0.21)"
      highlightColor="rgba(5, 17, 62, 0.21)"
      duration={2.5}
    />
  );
};

export default SkeletonItem;
