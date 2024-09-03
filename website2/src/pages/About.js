import React, { useEffect } from 'react';
import './About.css'; // Assuming you have CSS for styling

function About() {
  let aboutSlideIndex = 1;

  const plusAboutSlides = (n) => {
    showAboutSlides(aboutSlideIndex += n);
  };

  const showAboutSlides = (n) => {
    let i;
    const slides = document.getElementsByClassName("mySlides1");
    if (n > slides.length) { aboutSlideIndex = 1 }
    if (n < 1) { aboutSlideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[aboutSlideIndex - 1].style.display = "block";
  };

  useEffect(() => {
    // Navbar scroll effect
    const header = document.querySelector(".navbar");
    console.log(header); // Check if this logs the correct element

    if (header) {
      const handleScroll = () => {
        const top = window.scrollY;
        if (top >= 0) {
          header.classList.add("navbarDark");
        } else {
          header.classList.remove("navbarDark");
        }
      };

      window.addEventListener('scroll', handleScroll);

      // Initial display of slides
      showAboutSlides(aboutSlideIndex);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return (
    <section id="about" className="mx-auto mx-5">
      <div className="row">
        <h1 className="text-left">About Me</h1>
        <div className="container mt-2 pt-3">
          <div className="row mt-3">
            <div className="col-lg-3">
              <img
                src="images/heroImage.png"
                className="imageAboutPage"
                alt="Hero"
                style={{ width: '90%', height: 'auto' }}
              />
            </div>
            <div className="col-lg-3 text-center">
              <div id="aboutImageSlideshow" className="slideshow-container">
                <div className="mySlides1">
                  <img src="images/sunrise/1.jpg" alt="Sunrise 1" style={{ width: '90%' }} />
                </div>
                <div className="mySlides1">
                  <img src="images/sunrise/2.jpg" alt="Sunrise 2" style={{ width: '90%' }} />
                </div>
                <div className="mySlides1">
                  <img src="images/sunrise/3.jpg" alt="Sunrise 3" style={{ width: '90%' }} />
                </div>
                <div className="mySlides1">
                  <img src="images/sunrise/4.jpg" alt="Sunrise 4" style={{ width: '90%' }} />
                </div>
                <div className="mySlides1">
                  <img src="images/sunrise/5.jpg" alt="Sunrise 5" style={{ width: '90%' }} />
                </div>
                <div className="mySlides1">
                  <img src="images/sunrise/6.jpg" alt="Sunrise 6" style={{ width: '90%' }} />
                </div>

                {/* Next button */}
                <a className="nextA" onClick={() => plusAboutSlides(1)}>&#10095;</a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="left-aligned">
                <p>
                  Hi, my name is Lauren! My academic interests include visual and
                  interactive computing, Artificial Intelligence, and UI/UX
                  design. I'm working on a portfolio of projects to improve my
                  development and design skills.
                </p>
                <p>
                  In my free time, I like to draw, paint, and read. I also love
                  playing music and beach volleyball. I watch as many sunrises
                  and sunsets as possible. I want to explore new cities and the
                  ocean. (Currently working on my Open Water Diving
                  certification!)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
