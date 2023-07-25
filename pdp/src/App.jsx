import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";

// Make sure the local path is not referred
import SafeComponent from "./SafeComponent";
import Header from "home/Header";
import Footer from "home/Footer";

const App = () => {
    return (
    <div className="text-3xl mx-auto max-w-6xl">
        <SafeComponent>
        <Header />
        </SafeComponent>
        <div className="my-10"> PDP page content </div>
        <Footer />
    </div>)
};
ReactDOM.render(<App />, document.getElementById("app"));
