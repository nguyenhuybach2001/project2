import React from "react";
import Header from "../Header";
import Footer from "../Footer";

export default function BaseLayout(props) {
  return (
    <div className="flex flex-col min-h-[100vh]">
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}
