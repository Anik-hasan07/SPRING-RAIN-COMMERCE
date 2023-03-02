import logo from './logo.svg';
import './App.css';
import Header from './component/layout/Header/Header';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Home from './component/Home/Home';



function App() {
  return (
    <div className="App">
    <Router>
        <Header/>
        <Routes>
        <Route  path="/" element = {<Home/>}/>

      </Routes>

    </Router>
      
    </div>
  );
}

export default App;
