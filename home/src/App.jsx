import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import "remixicon/fonts/remixicon.css";

import Header from "./Header";
import Footer from "./Footer";
import HomeContent from "./HomeContent";

const App = () => {
    return (
        <div className="text-3xl mx-auto max-w-6xl">
        <Header />
        <HomeContent />
        <Footer />
        </div>
    );
};
ReactDOM.render(<App />, document.getElementById("app"));
