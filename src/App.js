import React from "react";
import Header from "./Components/Navbar/Header";
import Contact from "./Components/Contact/contact";
import Body from "./Components/Body/body";
import Footer from "./Components/Footer/footer";
import TermCondition from "./Components/Footer/termCondition";

const App = () => {
  return (
    <div>
      <Header />
      <Contact />
      <Body />
      <Footer />
      <TermCondition />
    </div>
  );
};

export default App;
