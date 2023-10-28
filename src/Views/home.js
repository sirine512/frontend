
import React  from "react"
import { Link} from 'react-router-dom';
import Footer from "../Components/footer";
import SearchForm from "../Components/searchForm";

const Home = () => {
  return (
    <>
      <div className="header">
        <div id="header-content">
          <h1>Welcome to Your Dream Home Finder</h1>
          <SearchForm />
        
          
        </div>
      </div>

      <div className="aboutUs">
        <div className="aboutContent">
          <h1>About Us</h1>
          <h3> Your Trusted Real Estate Partner</h3>
          <br />
          <br />
          <p>
            At Home Rental, we are more than just a real estate platform; we are
            your trusted partner in the world of real estate. <br />
            <br />
            With a passion for connecting people with their ideal homes, our
            team is dedicated to providing the best in real estate services.
            <br />
            Our commitment ton excellence, transparency, and a customer-centric
            approach drives us to deliver exceptional results.
            <br />
            <br />
            Backed by a wealth of industry knowledge and a desire to make your
            real estate journey smooth and satisfying, we're here to assist you
            in finding, buying, or renting properties that suit your unique
            needs.
            <br />
            <br />
            When you choose us, you're choosing a partner who understands the
            significance of 'home' and is committed to turning your real estate
            aspirations into reality.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          id="aboutimg" alt="about"
        />
      </div>
      <div className="servicePart">
        <div className="services">
          <div className="sevice">
            <h1>Buy home</h1>
            <p>
              We offer a diverse range of properties and expert assistance to
              make your dream of owning a home a reality. Find, evaluate, and
              buy your ideal property.
            </p>
            <Link to={'/buy'} ><button id="serviceBtn">Buy Now</button> </Link>
            
          </div>
          <div className="sevice">
            <h1>Rent home</h1>
            <p>
              Find your ideal rental home effortlessly with our Rent Home
              service. From apartments to houses, we've got your perfect space.
              Discover the home that fits your lifestyle.
            </p>
            <Link to={'/rent'} ><button id="serviceBtn">Rent Now</button></Link>
            
          </div>
          <div className="sevice">
            <h1>Sell home</h1>
            <p>
              Selling your home? Let our Sell Home service be your solution.
              List with confidence and embark on your next adventure.
            </p>
            <Link to={'/sell'} ><button id="serviceBtn">Sell Now</button></Link>
            
          </div>
          
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
