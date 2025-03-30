import React, { useState } from "react";
import axios from "axios";
import Style from "../App.module.css";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MarketPlace() {

    const [activeCategory, setActiveCategory] = useState("Handmade Crafts");
  return (
    <>
      <div className={Style.mainPage}>
        <div className={Style.websiteMainPage}>
          {/* Navbar */}
          <div className={Style.navBarDiv}>
            <p>UdyogSakhi</p>
            <div className={Style.navBarElement}>
              <Link to="/MainPage">Home</Link>
              <a href="#features">Features</a>
              <a href="#AboutUs">About Us</a>
              <Link to="/marketPlace">MarketPlace</Link>
            </div>
            <div className={Style.navBarBtn}>
              <Link to="/ProfilePage">My Profile</Link>
            </div>
          </div>


          {/* Options Section */}
<div className={Style.optionsSectionDivMarketPlace}>
  <div className={Style.optionsSectionDivInnerDivMarketPlace}>
    <button onClick={() => setActiveCategory("Handmade Crafts")}>Handmade Crafts</button>
    <button onClick={() => setActiveCategory("Home Essentials")}>Home Essentials</button>
    <button onClick={() => setActiveCategory("Fashion Accessories")}>Fashion Accessories</button>
  </div>
</div>

{/* Products Section */}
<div className={Style.marketPlaceMainDiv}>
  <div className={Style.marketPlaceMainDivInnerDiv}>
    <h1 className={Style.marketPlaceHeader}>Marketplace</h1>
    {activeCategory === "Handmade Crafts" && (
      <div className={Style.categoryDiv}>
        <h2>Handmade Crafts</h2>

        <div className={Style.productCardDivs}>

        <div className={Style.productCard}>
          <img src="https://cdn.shopify.com/s/files/1/1065/2228/files/how-to-care-for-your-handwoven-baskets-3_1000x.jpg?v=1710948541" alt="Handmade Crafts" />
          <h3>Handwoven Basket</h3>
          <p>Price: ₹300</p>
          <p>Description: A beautifully handwoven basket made from eco-friendly materials.</p>
          <button>Buy Now</button>
        </div>
        <div className={Style.productCard}>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm7HY0VBVjX0qOnh-Zs97nlCgMN4N-b3Ye1A&s" alt="Terracotta Pots" />
  <h3>Terracotta Pot</h3>
  <p>Price: ₹250</p>
  <p>Description: A handcrafted terracotta pot perfect for your indoor and outdoor plants.</p>
  <button>Buy Now</button>
</div>

<div className={Style.productCard}>
  <img src="https://5.imimg.com/data5/BD/SV/VY/SELLER-90739756/reusable-jute-bag-500x500.jpg" alt="Handmade Jute Bag" />
  <h3>Handmade Jute Bag</h3>
  <p>Price: ₹250</p>
  <p>Description: Stylish and eco-friendly jute bag, ideal for shopping and daily use.</p>
  <button>Buy Now</button>
</div>

        </div>
      </div>
    )}
    {activeCategory === "Home Essentials" && (
      <div className={Style.categoryDiv}>
        <h2>Home Essentials</h2>
        <div className={Style.productCard}>
          <img src="https://m.media-amazon.com/images/I/71zAkx+WtFL._AC_UF894,1000_QL80_.jpg" alt="Home Essentials" />
          <h3>Ceramic Dinner Set</h3>
          <p>Price: ₹1,200</p>
          <p>Description: A handcrafted ceramic dinner set, perfect for family meals.</p>
          <button>Buy Now</button>
        </div>
      </div>
    )}
    {activeCategory === "Fashion Accessories" && (
      <div className={Style.categoryDiv}>
        <h2>Fashion Accessories</h2>
        <div className={Style.productCard}>
          <img src="https://eco-embrace.com/cdn/shop/products/il_fullxfull.5644360144_tjdk.jpg?v=1709319112" alt="Fashion Accessories" />
          <h3>Beaded Necklace</h3>
          <p>Price: ₹200</p>
          <p>Description: A colorful beaded necklace, adding a touch of elegance to your outfit.</p>
          <button>Buy Now</button>
        </div>
      </div>
    )}
  </div>
</div>

         
        </div>
      </div>
    </>
  );
}

export default MarketPlace;
