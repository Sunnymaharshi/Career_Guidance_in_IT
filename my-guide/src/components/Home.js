import React from "react";
import MyCard from "./Card";
import "./Home.css";
import home from "./data";
function Home() {
  return (
    <React.Fragment>
      <h1>Career Paths</h1>
      <div className="home-content">
        {home.map((data) => (
          <MyCard data={data} />
        ))}
      </div>
    </React.Fragment>
  );
}
export default Home;
