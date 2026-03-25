import React from "react";
import { Skeleton } from "antd-mobile";
import './SkeletonAgain.less'
const SkeletonAgain = function SkeletonAgain(props) {
    
    return <div className="skeleton-again-box">
        <Skeleton.Title active />
        <Skeleton.Paragraph></Skeleton.Paragraph>
    </div>;
};
export default SkeletonAgain