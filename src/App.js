import React from "react";
import reviews from "./data";
import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center bg-gray-200">
      <div className="text-center px-4 py-6">
        {/* Heading */}
        <h1 className="text-4xl font-bold sm:text-5xl md:text-4xl">
          Our Testimonials
        </h1>

        {/* Divider */}
        <div className="bg-violet-400 h-[4px] w-1/3 sm:w-1/5 mt-2 mx-auto"></div>

        {/* Testimonials Component */}
        <Testimonials reviews={reviews} />
      </div>
    </div>
  );
};

export default App;
