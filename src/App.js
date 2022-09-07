import './App.css';
import Header from './components/Header/Header';
import banner from "./assets/img/main-banner.jpg"
import Introduction from './components/Introduction/Introduction';
import BestProduct from './components/BestProduct/BestProduct';
import ListProduct from './components/ListProduct/ListProduct';
import BrandStory from './components/BrandStory/BrandStory';

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
    </div>
  );
}

export default App;
