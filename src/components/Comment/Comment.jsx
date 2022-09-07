import Button from "../Button/Button"
import h from "../../assets/img/video-object-05.png"
import video4 from "../../assets/img/video-object-04.jpg"
import video6 from "../../assets/img/video-object-06.png"
import video7 from "../../assets/img/video-object-07.png"
import video from "../../assets/img/video.jpg"
import video9 from "../../assets/img/video-object-09.png"
import video8 from "../../assets/img/video-object-08.jpg"
import video1 from "../../assets/img/video-object-01.jpg"
import video3 from "../../assets/img/video-object-03.png"
function Comment (){
    return(
        <div className="comment">
            <div className="issue-top-content ">
                <div className="comment-top-title">what happened</div>
                <div className="comment-top-description story_content">
                    <span>How to create mobile-optimized videos in minutes. Not a designer, 
                        every team makes a lot of videos Can be trimmed. Take the first 
                    </span>
                </div>
                <Button/>
            </div>
            <img className="h-video" src={h} alt=""/>
            <img className="video4" src={video4} alt=""/>
            <div className="comment-pic-right">
                <img className="video7" src={video7} alt=""/>
                <img className="video6" src={video6} alt=""/>
            </div>
            <img className="video" src={video} alt=""/>
            <img className="video9" src={video9} alt=""/>
            <img className="video8" src={video8} alt=""/>
            <img className="video1" src={video1} alt=""/>
            <img className="video3" src={video3} alt=""/>
        </div>
    )
}
export default Comment