import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import "remixicon/font/remixicon.css";

import Header from "home/Header";
import Footer from "home/Footer";
import CartContent from "./CartContent";

const App = () => {
    return (
    <div>
        <Header />
        <CartContent />
        <Footer />
    </div>
    )
};
ReactDOM.render(<App />, document.getElementById("app"));
