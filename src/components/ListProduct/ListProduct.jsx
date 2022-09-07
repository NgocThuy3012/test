import ProductItem from "./ProductItem"
import img01 from "../../assets/img/img-01.jpg"
import img02 from "../../assets/img/img-02.png"
import img03 from "../../assets/img/img-03.jpg"
import img04 from "../../assets/img/img-04.jpg"
import img05 from "../../assets/img/img-05.jpg"
import img06 from "../../assets/img/img-06.jpg"
import img07 from "../../assets/img/img-07.jpg"
import img08 from "../../assets/img/img-08.jpg"
import img09 from "../../assets/img/img-09.jpg"
import img10 from "../../assets/img/img-10.jpg"
import img11 from "../../assets/img/img-11.jpg"
import img12 from "../../assets/img/img-12.jpg"
import img13 from "../../assets/img/img-13.jpg"
import img14 from "../../assets/img/img-14.jpg"
import img15 from "../../assets/img/img-15.jpg"
import img16 from "../../assets/img/img-16.jpg"
import img17 from "../../assets/img/img-17.jpg"
import img18 from "../../assets/img/img-18.jpg"
import img19 from "../../assets/img/img-19.jpg"
import img20 from "../../assets/img/img-20.jpg"
import img21 from "../../assets/img/img-21.jpg"
import img22 from "../../assets/img/img-22.jpg"
import img23 from "../../assets/img/img-23.jpg"
import img24 from "../../assets/img/img-24.jpg"
import img25 from "../../assets/img/img-25.jpg"
const productItems=[
    {
        img: img01
    },
    {
        img: img02
    },
    {
        img: img03
    },
    {
        img: img04
    },
    {
        img: img05
    },
    {
        img: img06
    },
    {
        img: img07
    },
    {
        img: img08
    },
    {
        img: img09
    },
    {
        img: img10
    },
    {
        img: img11
    },
    {
        img: img12
    },
    {
        img: img13
    },
    {
        img: img14
    },
    {
        img: img15
    },
    {
        img: img16
    },
    {
        img: img17
    },
    {
        img: img18
    },
    {
        img: img19
    },
    {
        img: img20
    },
    {
        img: img21
    },
    {
        img: img22
    },
    {
        img: img23
    },
    {
        img: img24
    },
    {
        img: img25
    }
]
function ListProduct (){
    return(
        <div className="list-product">
            <div className="row list-product_container">
                {productItems.map(({ img})=>(
                    <ProductItem img={img} key={img}/>
                ))}
            </div>
            <div className="see-more">
                <button className="see-more-btn">see more</button>
            </div>
        </div>
    )
}
export default ListProduct