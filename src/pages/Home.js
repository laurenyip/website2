import "/root/website2/website2/website2/src/App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <ul className="navbar">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Home |
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">
            About |
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/projects">
            Projects |
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/portfolio">
            Portfolio
          </Link>
        </li>
      </ul>

      <div class="containermain">
        <p3>YIP/LAUREN宝怡</p3>
        <br></br>
        <br></br>
        <p3>the website &nbsp; 09FEB 2003</p3>
        <br></br>
        <p2>FM</p2>
        <p3>&nbsp;&nbsp;VANCOUVER/YVR</p3>
        <br></br> <p2>TO</p2>
        <p3>&nbsp;&nbsp;THEWORLD/!!!</p3>
        <br></br>
        <br></br>
        <br></br>
        <p2>
          &nbsp;&nbsp;Age&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Status @ SFU
        </p2>
        <br></br> <p3b>21A&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;YEAR4</p3b>
        <br></br>
        <p3>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="/Resume___Lauren_Yip.pdf" target="blank" >
            RESUME
          </a>
        </p3>
        <br></br>
        <p2>laurenyip20@gmail.com --- linkedin.com/in/lauren-yip</p2>
      </div>
    </div>
  );
}

export default App;
