import './App.css';
import Header from './components/Header/Header';
import banner from "./assets/img/main-banner.jpg"
import Introduction from './components/Introduction/Introduction';

function App() {
  return (
    <div className='container'>
      <Header/>
      <div className='banner'>
        <img
          src={banner}
          className="main_banner"
        />
      </div>
      <Introduction/>
    </div>
  );
}

export default App;
