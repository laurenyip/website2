import "./App.css";

function App() {
  return (
    <div className="App">
      <ul class="navbar">
        <li class="nav-item">
          <a class="nav-link" href="index.html">
            Home |{" "}
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#about">
            {" "}
            About |
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="projects.html">
            {" "}
            Projects |{" "}
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="portfolio.html">
            {" "}
            Portfolio{" "}
          </a>
        </li>
      </ul>

      <div class="container">
        <img src="/images/header.png" alt="header" />

        <p>Lauren Yip</p>

        <p>Vancouver, BC, CANADA</p>

        <p>the website </p>

        <p>
          Currently: studying Computer Science at SFU, about to join
          AI4GoodLab's Summer 2024 cohort!
        </p>

        <p>Email      Resume       LinkedIn</p>
        <a href="laurenyip10@gmail.com" target="_blank">
          <i class="fa-solid fa-envelope"></i>
        </a>

        <p>Resume</p>
        <a href="Yip_Lauren_Resume.pdf" target="_blank">
          <i class="fa-solid fa-file"></i>
        </a>

        <p>LinkedIn</p>
        <a href="https://www.linkedin.com/in/lauren-yip/" target="_blank">
          <i class="fab fa-linkedin"></i>
        </a>

        <p>Enjoy your stay and feel free to reach out!</p>
      </div>
    </div>
  );
}

export default App;
