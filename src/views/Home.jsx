import React,{useEffect, useState} from "react"
import HomeHeader from '../components/HomeHeader'   
import { Swiper } from "antd-mobile";
import SkeletonAgain from "../components/SkeletonAgain";
import _ from '../assets/utils'
import {Link} from "react-router-dom";
import './Home.less'
import api from '../api/index'
const Home = function Home() {
    let [tody,setTody] = useState(_.formatTime(null,'{0}{1}{2}'))
    let [bannerData,setBannerData] = useState([])
    console.log(_.formatTime(null,'{0}{1}{2}'))
    useEffect(() => {
        (
            async () => {
                try {
                    let {date,storise,top_stories} = await api.queryNewsLatest()
                    setTody(date)
                    setBannerData(top_stories)
                } catch (error) {
                    
                }
            }
        )()
    },[])
    return <div className="home-box">
        <HomeHeader tody={tody}></HomeHeader>
        <div className="swiper-box">
            {
                bannerData.length>0?<Swiper autoplay={true} loop={true}>
                {bannerData.map(item => {
                    return <Swiper.Item key={item.id}>
                        <Link to={{pathname: `/detail/${item.id}`}}>
                            <img src={item.image} alt="" />
                            <div className="desc">
                                <h3 className="title">
                                    {item.title}
                                </h3>
                                <p className="author">
                                    {item.hint}
                                </p>
                            </div>
                        </Link>
                    </Swiper.Item>
                    })
                }
            </Swiper>:null
            }
        </div>
        <SkeletonAgain></SkeletonAgain>
    </div >;
};
export default Home;