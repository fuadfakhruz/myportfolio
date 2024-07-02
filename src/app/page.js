"use client";
import Navbar from "../components/navbar";
import Background from "../components/background";
import Hero from "../components/hero";
import MyComponent from "../components/button";

export default function Home() {
  return (
    <div className="bg-white" id="list">
      <Navbar />
      <Background />
      <div>
        <Hero />
      </div>
      <div className="-mt-72 mx-48">
        <MyComponent />
      </div>
    </div>
  );
}
