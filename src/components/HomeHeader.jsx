import React,{useState} from "react";
import timg from '../assets/images/timg.jpg'
import "./HomeHead.less";
const HomeHeader = function HomeHeader(props) {
    let {tody} = props
    return <div className="home-head-box">
        <div className="info">
            <div className="info">
                <div className="time">
                    <span>02</span>
                    <span>十一月</span>
                </div>
                <h2 className="title">知乎日报</h2>
            </div>
        </div>
        <div className="picture">
            <img src={timg} alt="" />
        </div>
    </div>;
};
export default HomeHeader
/**
 * js上面引入图片，打包后会找不到图片
 * 但是如果是在css样式中这样引入图片是可以使用相对路径，因为webpack打包的时候，会处理css中的图片导入：
 * 1、把需要的图片进行打包
 * 2、把打包后的图片地址重新覆盖css中写的地址
 * 那在视图JS中如何使用图片呢
 * 1、使用绝对路径
 * 2、基于ESM导入
 */