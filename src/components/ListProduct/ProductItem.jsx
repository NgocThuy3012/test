import {BsFillHeartFill} from "react-icons/bs"
function ProductItem(props){
    return(
        <div className="product-item col-sm-12 col-xs-12">
            <img src={props.img} alt="" className="product-item-img"/>
            <div className="product-item_title">[what happen] How to create </div>
            <div className="product-detail">
                <span>2,500 won</span>
                <div className="product-price"> 
                    <span className="product-item-icon"><BsFillHeartFill/></span>
                    <span>236</span>
                </div>
            </div>
        </div>
    )
}
export default ProductItem