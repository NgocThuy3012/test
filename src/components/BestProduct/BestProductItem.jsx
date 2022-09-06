import pic from "../../assets/img/best-image-01.jpg"
import go from "../../assets/img/go-icon.png"
function BestProductItem (props){
    return(
        <div className="best-product_item">
            <div className="product-icon"><span>{props.num}</span></div>
            <img className="best-product-img" src={props.img} alt=""/>
            <div className="create-mobile">
                <span>
                    How to create mobile-optimized
                </span>
                <img className="create-mobile-img" src={go}alt=""/>
            </div>
        </div>
    )
}
export default BestProductItem