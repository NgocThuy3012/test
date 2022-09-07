import object01 from "../../assets/img/object-01.png"
import object02 from "../../assets/img/object-02.png"
import object03 from "../../assets/img/object-03.png"
function BrandStory (){
    return(
        <div className="brand-story">
            <div className="brand-story_top">
                <div className="top-image-right">
                    <img className="object2" alt="" src={object02} />
                    <img className="object3" alt="" src={object03} />
                </div>
                <div className="brand-story_content">
                    <div className="story-title">Brand Story</div>
                    <div className="story_content">
                        <span>모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가 아니더라도,  모든 팀에서
다듬을 수 있습니다. 브랜드의 성공을 위한 첫 걸음을  내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.</span>
                    </div>
                </div>
                <img alt="" src={object01} className="brand-story_top_img"/>
            </div>
            <div></div>
        </div>
    )
}
export default BrandStory