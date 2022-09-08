import Header from "../Header/Header"
import banner from "../../assets/img/main-banner.jpg"
import Introduction from "../Introduction/Introduction"
import BestProduct from "../BestProduct/BestProduct"
import ListProduct from "../ListProduct/ListProduct"
import BrandStory from "../BrandStory/BrandStory"
import Issue from "../Issue/Issue"
import Comment from "../Comment/Comment"
import Footer from "../Footer/Footer"
function Homepage (){
    return(
        <div className='container_'>
        <Header/>
        <div className='banner'>
          <img
            src={banner}
            className="main_banner"
            alt=""
          />
        </div>
        <Introduction/>
        <BestProduct/>
        <ListProduct/>
        <BrandStory/>
        <Issue/>
        <Comment/>
        <Footer/>
      </div>
    )
}
export default Homepage