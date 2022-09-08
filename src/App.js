import './App.css';
import {BrowserRouter} from "react-router-dom"
import { Route, Routes } from "react-router-dom"
import Homepage from './components/page/Homepage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route exact path='/' element={<Homepage/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
