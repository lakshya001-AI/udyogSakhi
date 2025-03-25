import React, { useState } from "react";
import Style from "../App.module.css";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function DonationPage() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [donationAmount, setDonationAmount] = useState(null);


  const handleDonate = () => {
    const options = {
      key: "rzp_test_XujaIUo4PBMSYv", // Replace with your Razorpay API key
      amount: donationAmount * 100, // Amount in paise (5000 INR)
      currency: "INR",
      name: "UdyogSakhi",
      description: "Donation for Women Empowerment",
      image: "https://your-logo-url.com/logo.png", // Optional: Add your logo URL
      handler: (response) => {
        alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
      },
      prefill: {
        name: `${name}`, // Prefill with user data
        email: `${email}`,
        contact: `${phoneNo}`,
      },
      theme: {
        color: "#F37254",
      },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

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
              <Link>MarketPlace</Link>
            </div>
            <div className={Style.navBarBtn}>
               <Link to="/ProfilePage">My Profile</Link>
            </div>
          </div>

          <div className={Style.donationMainDiv}>
            <div className={Style.donationMainDivInnerDiv}>
              {/* Image Section */}
              <div className={Style.donationMainDivInnerDiv1}>
                <div className={Style.donationInfo}>
                  <h2>Join Us in Making a Difference</h2>
                  <p>Donations Made: 10,000+</p>
                  <p>Women Empowered: 2,500+</p>
                  <p>Products Sold: 5,000+</p>
                </div>
              </div>

              {/* Form Section */}
              <div className={Style.donationMainDivInnerDiv2}>
                <form
                  className={Style.donationForm}
                  onSubmit={(e) => e.preventDefault()}
                >
                  <h3>Make a Donation</h3>
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" placeholder="Your Name" value={name} onChange={(e)=>setName(e.target.value)} />

                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" placeholder="Your Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>

                  <label htmlFor="phone">Phone</label>
                  <input
                    type="text"
                    id="phone"
                    placeholder="Your Phone Number"
                    value={phoneNo}
                    onChange={(e)=>setPhoneNo(e.target.value)}
                  />

                  <label htmlFor="address">Address</label>
                  <textarea id="address" placeholder="Your Address"></textarea>

                  <label htmlFor="donation">Donation Amount</label>
                  <input
                    type="number"
                    id="donation"
                    placeholder="Enter Amount"
                    value={donationAmount}
                    onChange={(e)=>setDonationAmount(e.target.value)}
                  />

                  <p>
                    If you donate above ₹5000, you’ll receive exclusive gifts
                    from women entrepreneurs!
                  </p>
                  <button type="button" onClick={handleDonate} >
                    Donate Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default DonationPage;




