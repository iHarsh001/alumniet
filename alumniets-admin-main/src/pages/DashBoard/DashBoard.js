import React from "react";
import nietimg from "../../images/Hostel.jpg";
import Header from "../../components/Header/Header";
import "./DashBoard.css";
import Footer from "../../components/Footer/Footer";
const DashBoard = () => {
  return (
    <div className="dash">
      <Header />
      <img className="college-image" src={nietimg} alt="NIET"></img>
      <Footer />
    </div>
  );
};
export default DashBoard;
