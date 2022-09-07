import './App.css';
import Header from './components/Header/Header';
import banner from "./assets/img/main-banner.jpg"
import Introduction from './components/Introduction/Introduction';
import BestProduct from './components/BestProduct/BestProduct';
import ListProduct from './components/ListProduct/ListProduct';
import BrandStory from './components/BrandStory/BrandStory';
import Issue from './components/Issue/Issue';
import Comment from './components/Comment/Comment';
import Footer from './components/Footer/Footer';

function App() {
  return (
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
  );
}

export default App;
