import {RiNetflixFill} from "react-icons/ri"
import {BsFacebook} from "react-icons/bs"
import {FaBlogger} from "react-icons/fa"
const Items=[
    {
        title: 'about us',
        content: '회사 소개 인재 채용 상시 할인 혜택'
    },
    {
        title: 'my order',
        content: '내 주문 주문 배송  취소 / 교환 / 반품 내역 상품 리뷰 내역 증빙 서류 발급'
    },
    {
        title: 'my account',
        content: '회원 정보 수정 회원 등급 마일리지 현황쿠폰'
    },
    {
        title: 'help',
        content: '1 : 1 상담 내역 상품 Q & A 내역 공지 사항 자주하는 질문 고객의 소리'
    }
]
function Footer (){
    return(
        <div className="footer">
            <div className="row">
                <div className="col-md-6 col-sm-12 col-xs-12">
                    <div className="footer-title">what happened</div>
                    <div className="col-md-4 col-sm-6 col-xs-12 footer-content">
                        [공지] 개인 정보 처리 방침 변경 사전 안내
                        [공지] 29CM 강남 스토어 영업 종료
                        [공지] 개인 정보 처리 방침 변경 사전 안내
                        [공지] iOS 10 이하 버전 지원 중단 안내
                        [공지] 개인 정보 처리 방침 변경 사전 안내
                    </div>
                    <div className="copyright">
                    © 2020-2021 what happened corp  l  (주) 왓헤픈 ｜ 대표자 : 홍길동 ｜ 사업자 등록번호 : 356-00-00000 ㅣ test0101@what happened.co.kr
서울특별시 강남구 도산대로 8길 17 ｜ FAX : 070-0000-0000  l  서비스 이용약관  l  개인정보처리방침
                    </div>
                </div>
                <div className="col-md-6 col-sm-12 col-xs-12">
                    <div className="row">
                    {Items.map(({title,content})=>(
                            <Item title={title} content={content} ket={title}/>
                    ))}
                    </div>
                    <div className="footer-icon ">
                        <span className="icon-netfix"><RiNetflixFill /></span>
                        <span className="icon-fb"><BsFacebook/></span>
                        <span className="icon-blog"><FaBlogger/></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
const Item = ({
    title,content
}) => {
    return (
        <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="menu-item-title">{title}</div>
            <div className="menu-item-content">{content}</div>
        </div>
    )
}
export default Footer