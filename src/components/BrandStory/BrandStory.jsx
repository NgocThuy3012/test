import object01 from "../../assets/img/object-01.png"
import object02 from "../../assets/img/object-02.png"
import object03 from "../../assets/img/object-03.png"
import object04 from "../../assets/img/object-04.png"
import object05 from "../../assets/img/object-05.png"
import object06 from "../../assets/img/object-06.png"
import object07 from "../../assets/img/object-07.png"
import window from "../../assets/img/window.jpg"
import Button from "../Button/Button"
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
            <div className="brand-story_bottom">
                <img className="book-life" src={object06} alt=""/>
                <img className="book-white"src={object07} alt=""/>
                <div className="collaboration">
                    <img src={window} alt=""/>
                    <div className="brand-story_description">
                        <div className="brand-story_title">
                            What Happened’s Brand story
                        </div>
                        <div className="story_description">
                            청춘이 있는 바이며, 말이다. 같지 노년에게서 어디 모래뿐일 무엇을 풀이 옷을 
                            봄바람이다. 새 천고에 놀이 내는 찾아 창공에 광야에서 살았으며, 듣는다. 수 있는
                            긴지라 사는가 낙원을 웅대한 아니다. 내는 이상 할지라도 피다. 피부가 불러 피고
                            인간의 타오르고 이성은 끝까지 칼이다. 쓸쓸한 희망의 못할 것은 목숨을 수 그들을
                            아름답고 고행을 끝에 설산에서 황금시대를 이상을 운다. 
                        </div>
                        <Button/>
                    </div>
                </div>
                <img className="calendar" src={object05} alt=""/>
                <img className="plant" src={object04} alt=""/>
            </div>
        </div>
    )
}
export default BrandStory