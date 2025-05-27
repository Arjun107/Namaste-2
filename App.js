import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 * - Logo
 * - Nav
 * body
 * - Search
 * - ResturantContainer
 * - ResturantCard
 *   - img
 *   - Name of res, star rating , cusine ,
 * Footer
 * - Copy
 * - Links
 * - Address
 * - Contact
 *
 */
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://media.istockphoto.com/id/1435983029/vector/food-delivery-logo-images.jpg?s=612x612&w=0&k=20&c=HXPxcjOxUiW4pMW1u9E0k2dJYQOU37a_0qZAy3so8fY="
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};



const ResturantCard = () => {
  return (
    <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
      <img
        className="res-logo"
        alt="res-logo"
        src="https://www.shutterstock.com/image-photo/ayutthayathailand-03-2023-double-mcdonalds-260nw-2326307867.jpg"
      ></img>
      <h3>Mcdonlods</h3>
      <h4>Biryani , North Indian , Asian</h4>
      <h4>4.4 starts</h4>
      <h4>20 minutes</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
