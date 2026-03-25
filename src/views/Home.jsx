import React,{useEffect, useState} from "react"
import HomeHeader from '../components/HomeHeader'   
import { Swiper,Image,Divider,DotLoading } from "antd-mobile";
import SkeletonAgain from "../components/SkeletonAgain";
import _ from '../assets/utils'
import {Link} from "react-router-dom";
import './Home.less'
import api from '../api/index'
import NewsItem from "../components/NewsItem";
const Home = function Home() {
    const [tody,setTody] = useState(_.formatTime(null,'{0}{1}{2}'))
    const [bannerData,setBannerData] = useState([])
    const [newsList,setNewsList] = useState([])
    console.log(_.formatTime(null,'{0}{1}{2}'))
    useEffect(() => {
        (
            async () => {
                try {
                    let {date,stories,top_stories} = await api.queryNewsLatest()
                    setTody(date)
                    setBannerData(top_stories)
                    newsList.push({
                        date,
                        stories
                    })
                    setNewsList([...newsList])
                    console.log('ccc',stories,newsList)
                } catch (error) {
                    
                }
            }
        )()
    },[])
    return <div className="home-box">
        <HomeHeader tody={tody}></HomeHeader>
        {/*banner*/}
        <div className="swiper-box">
            {
                bannerData?.length>0?<Swiper autoplay={true} loop={true}>
                    {bannerData.map(item => {
                        return <Swiper.Item key={item.id}>
                            <Link to={{pathname: `/detail/${item.id}`}}>
                                <Image src={item.image} lazy />
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
        {/*news-list*/}
        {
            newsList.length === 0? <SkeletonAgain></SkeletonAgain>:<>
                {
                    newsList.map((item,i) => {
                        let {date,stories} = item
                        return <div className="news-box" key={i}>
                            <Divider contentPosition="left">{date}</Divider>
                            <div className="list">
                                {
                                    stories.map(cur => {
                                        return <NewsItem key={cur.id} info={cur}></NewsItem>
                                    })
                                }
                            </div>
                        </div>
                    })
                }
            </>
        }
        {/*loading more*/}
        <div className="loadmore-box">
            <DotLoading></DotLoading>
            数据加载中
        </div>
    </div >;
};
export default Home;