import React, {Suspense, useState} from "react";
import ReactDOM from "react-dom";

import "./index.scss";

// Make sure the local path is not referred
import Header from "home/Header";
import Footer from "home/Footer";

const App = () => {
    const [showHeader, setShowHeader] = useState(false);
    return (
    <div className="text-3xl mx-auto max-w-6xl">
        {showHeader && <Suspense fallback={<div>Loading header</div>}>
            <Header />
        </Suspense>}
        <button className="text-3xl p-3" onClick={() => setShowHeader(true)}>Click to show header</button>
        <div className="my-10"> PDP page content </div>
        <Footer />
    </div>)
};
ReactDOM.render(<App />, document.getElementById("app"));
