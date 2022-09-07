import BestProductItem from "./BestProductItem"
import bets_img1 from "../../assets/img/best-image-01.jpg"
import bets_img2 from "../../assets/img/best-image-02.jpg"
import bets_img3 from "../../assets/img/best-image-03.jpg"
const productItems=[
    {
        num: '01',
        img: bets_img1
    },
    {
        num: '02',
        img: bets_img2
    },
    {
        num: '03',
        img: bets_img3
    }
]
function BestProduct (){
    return(
        <div className="best-product">
            <div className="best-product-title">Best Product</div>
            <div className="best-product-content">
                How to create mobile-optimized videos in minutes. Not a designer, 
                every team makes a lot of videos Can be trimmed. Take the first 
            </div>
            <div className="best-product-items">
                {productItems.map(({num, img})=>(
                    <BestProductItem img={img} num={num} key={num}/>
                ))}
            </div>
        </div>
    )
}
export default BestProduct