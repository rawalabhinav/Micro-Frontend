import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import "./index.scss";

// Make sure the local path is not referred
import Header from "home/Header";
import Footer from "home/Footer";
import PDPContent from './PDPContent';

const App = () => {
    return (
    <Router>
        <div className="text-3xl mx-auto max-w-6xl">
            <Header />
            <Routes>
                <Route path='/products/:id' element={ <PDPContent />} />
            </Routes>
            <Footer />
        </div>
    </Router>
    );
};
ReactDOM.render(<App />, document.getElementById("app"));