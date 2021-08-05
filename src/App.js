// import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Banner from "./Banner";
import Grid from "./Grid";
import BlogLeft from "./BlogLeft";
import BlogRight from "./BlogRight";
import Footer from "./Footer";

function App() {
  return <div className="App">
    <div className="banner-body">
      <Header/>
      <div className="header-bottom">
        {/* <div className="header-bottom-top">
          <ul>
            <li><a  className="g"> </a></li>
            <li><a  className="p"> </a></li>
            <li><a  className="facebook"> </a></li>
            <li><a  className="twitter"> </a></li>
          </ul>
        </div>
        <div className="clearfix"> </div> */}
        <Banner/>
        <Grid/>
        
        <div className="blog">
          <BlogLeft/>
          <BlogRight/>
          <div className="clearfix"> </div>
        </div>
      </div>
        <Footer/>
    </div>
    
  </div>

  // </div >
}

export default App;
