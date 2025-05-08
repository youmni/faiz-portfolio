import Hero from "../components/Hero";
import React from 'react';
import About from "../components/About";
import Experience from "../components/Experience";
const Home = () => {
    return (
      <>
        <Hero />
        <About/>
        <Experience/>
      </>
    );
}

export default Home;