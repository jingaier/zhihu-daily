import React from "react";
import './NewsItem.less'
import {Link} from "react-router-dom";
import {Image } from "antd-mobile";
const NewsItem = function NewsItem(props) {
    const {info} = props
    console.log('ddd',info)
    return <div className="news-item-box">
            <Link to={{pathname: `/detail/${info.id}`}}>
                <div className="content">
                    <h4 className="title">
                        {info.title}
                    </h4>
                    <p className="author">
                        {info.hint}
                    </p>
                </div>
                <Image src={info.image}/>
            </Link>       
        </div>;
};
export default NewsItem