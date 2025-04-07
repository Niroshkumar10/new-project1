import Footer from "../components/footer";
import Navbar from "../components/Navbar";
import About from "./About";
import Contact from "./Contact";
import Service from "./Service";

const Home = () => {
  return (
    <>
      <div className="home-page scroll-animate">
        <div className="home-info">
          {" "}
          <h1>Build stunning websites & apps</h1>
          <p>
            Create live segments and target the right people for messages based
            on their behaviors.
          </p>
          <button class="animated-button">
            <svg
              viewBox="0 0 24 24"
              class="arr-2"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
            <span class="text">Know More</span>
            <span class="circle"></span>
            <svg
              viewBox="0 0 24 24"
              class="arr-1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
          </button>
        </div>

        <div className="home-image">
          {/* <img src={mypage} w-48 h-32 className='img'alt="Image" /> */}
        </div>
      </div>
      <About />
      <Service />
      <Contact />
      {/* <Footer/> */}
    </>
  );
};

export default Home;
