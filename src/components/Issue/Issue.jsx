import newob from "../../assets/img/news-object-03.png"
import newob2 from "../../assets/img/news-object-02.png"
import Button from "../Button/Button"
import news from "../../assets/img/news-img-01.png"
import Brand from "./Brand"
import news3 from "../../assets/img/news-img-03.jpg"
import news4 from "../../assets/img/news-img-04.jpg"
import news5 from "../../assets/img/news-img-05.jpg"
import newob3 from "../../assets/img/newsobject-03.png"
import newob4 from "../../assets/img/news-object-04.png"
import newob5 from "../../assets/img/news-object-05.png"
const productItems=[
    {
        title:"b brand",
        img: news4
    },
    {
        title:"c brand",
        img: news3
    },
    {
        title:"d brand",
        img: news4
    },
    {
        title:"e brand",
        img: news5
    }
]
function Issue (){
    return(
        <div className="issue">
            <div className="issue-top">
                <div className="issue-top-img">
                    <img className="issue-top_img newob" src={newob} alt=""/>
                    <img className="issue-top_img newob2" src={newob2} alt=""/>
                </div>
                <div className="issue-top-content">
                    <div className="issue-top-title">Happened’s issue</div>
                    <div className="issue-top-description story_content">
                        <span>모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가 아니더라도,  모든 팀에서
                        다듬을 수 있습니다. 브랜드의 성공을 위한 첫 걸음을  내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.</span>
                        
                    </div>
                    <Button/>
                </div>
            </div>
            <div className="issue-images">
                <div className="whpn-issue">
                    <div className="whpn-issue-text">whpnissue</div>
                    <img src={news} alt=""/>
                </div>
                {productItems.map(({title, img})=>(
                    <Brand img={img} key={title} title={title}/>
                ))}
                <img className="coin" src={newob3} alt=""/>
                <img className="hot" src={newob4} alt=""/>
                <img className="lol" src={newob5} alt=""/>
            </div>
        </div>
    )
}
export default Issue