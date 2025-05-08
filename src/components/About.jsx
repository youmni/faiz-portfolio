import React from "react";

const About = () => {
  return (
    <div className="p-6 text-gray-800 my-30">
      <h1 id="about" className="text-4xl text-start text-sky-800 mb-6">About Me</h1>
      <p className="text-2xl leading-relaxed">
        <span className="text-sky-800 font-semibold">I am Faiz Malha</span>, a passionate secondary school student 
        at the <span className="text-sky-800">Koninklijk Technisch Atheneum Halle</span>, where I focus on 
        <span className="text-sky-600 font-semibold"> electromechanical techniques</span>. 
        I’m highly motivated to develop both my technical and practical skills, especially in 
        areas related to STEM and electrical engineering.
      </p>

      <br />

      <p className="text-2xl leading-relaxed">
        I strongly value <span className="text-sky-800 font-semibold">hands-on learning</span> and teamwork. 
        I enjoy working on technical projects, solving problems, and continuously learning new skills 
        in and out of school. My educational background also includes studies in Economics and Modern 
        Languages, giving me a broad perspective and strong communication skills.
      </p>

      <br />

      <p className="text-2xl leading-relaxed">
        I am fluent in <span className="text-sky-600 font-semibold">Dutch</span>,{" "}
        <span className="text-sky-600 font-semibold">French</span>, and{" "}
        <span className="text-sky-600 font-semibold">English</span>, which allows me to communicate effectively 
        in diverse environments.
      </p>

      <br />

      <p className="text-2xl leading-relaxed">
        Outside of school, I’m very active. I enjoy <span className="text-sky-600 font-semibold">swimming</span> 
        to stay fit, and I’m a proud member of <span className="text-sky-600 font-semibold">Chiro Negenmanneke</span>, 
        where I participate in group activities that build leadership and team spirit.
      </p>
    </div>
  );
};

export default About;
