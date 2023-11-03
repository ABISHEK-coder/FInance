import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Analytics from "./components/Analytics";
import Newsletter from "./components/Newsletter";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
     <Navbar />
     <Hero />
     <Analytics />
    <Newsletter />
    <Cart />
    <Footer />
    </div>
  );
}

export default App;
