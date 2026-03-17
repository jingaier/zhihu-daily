import React, { useEffect } from "react";
import { SwipeAction, Toast } from 'antd-mobile';
import styled from "styled-components";


/* 样式 */
const StoreBox = styled.div`
    .box {
        padding:30px;
    }
`;

const Store = function Store(props) {
    

    return <StoreBox>
        我的收藏-知乎日报
    </StoreBox>;
};
export default Store;